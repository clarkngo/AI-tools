import React, { useState, useEffect } from 'react';
import { tools } from '../data.js';
import ToolGrid from './ToolGrid';
import CategoryBar, { CATEGORIES } from './CategoryBar';
import AudienceBar from './AudienceBar';
import SearchBar from './SearchBar';
import Modal from './Modal';
import logoImage from '/ai-tools.png';

const MainPage = () => {
    const parseFiltersFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const urlSearch = params.get('search') || '';
        const urlCategory = params.get('category') || 'All';
        const urlAudiences = (params.get('audience') || '')
            .split(',')
            .map(a => a.trim())
            .filter(Boolean);

        const validCategory = CATEGORIES.some(c => c.label === urlCategory) ? urlCategory : 'All';
        const validAudiences = Array.from(new Set(tools.flatMap(t => t.audience || [])));

        return {
            search: urlSearch,
            category: validCategory,
            audiences: urlAudiences.filter(a => validAudiences.includes(a))
        };
    };

    const initialFilters = parseFiltersFromUrl();
    const [searchQuery, setSearchQuery] = useState(initialFilters.search);
    const [selectedCategory, setSelectedCategory] = useState(initialFilters.category);
    const [selectedAudiences, setSelectedAudiences] = useState(initialFilters.audiences);
    const [filteredTools, setFilteredTools] = useState(tools);
    const [selectedTool, setSelectedTool] = useState(null);

    // Audience data
    const allAudiences = Array.from(new Set(tools.flatMap(t => t.audience || [])));
    const audienceCounts = tools.flatMap(t => t.audience || []).reduce((acc, a) => {
        acc[a] = (acc[a] || 0) + 1;
        return acc;
    }, {});

    // Category counts — how many tools match each category's tags
    const categoryCounts = { All: tools.length };
    CATEGORIES.forEach(cat => {
        if (cat.tags) {
            categoryCounts[cat.label] = tools.filter(tool =>
                cat.tags.some(tag => tool.tags.includes(tag))
            ).length;
        }
    });

    useEffect(() => {
        let result = tools;

        // Category filter
        const cat = CATEGORIES.find(c => c.label === selectedCategory);
        if (cat && cat.tags) {
            result = result.filter(tool => cat.tags.some(tag => tool.tags.includes(tag)));
        }

        // Audience filter
        if (selectedAudiences.length > 0) {
            result = result.filter(tool =>
                (tool.audience || []).some(a => selectedAudiences.includes(a))
            );
        }

        // Search filter
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            result = result.filter(tool =>
                tool.name.toLowerCase().includes(q) ||
                tool.description.toLowerCase().includes(q)
            );
        }

        setFilteredTools(result);
    }, [searchQuery, selectedCategory, selectedAudiences]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQuery.trim() !== '') params.set('search', searchQuery.trim());
        if (selectedCategory !== 'All') params.set('category', selectedCategory);
        if (selectedAudiences.length > 0) params.set('audience', selectedAudiences.join(','));

        const queryString = params.toString();
        const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`;
        window.history.replaceState({}, '', nextUrl);
    }, [searchQuery, selectedCategory, selectedAudiences]);

    const hasActiveFilters = selectedCategory !== 'All' || selectedAudiences.length > 0 || searchQuery.trim() !== '';

    const clearAll = () => {
        setSelectedCategory('All');
        setSelectedAudiences([]);
        setSearchQuery('');
    };

    return (
        <div className="App">
            <header>
                <img src={logoImage} alt="AI Tools Logo" className="logo" />
                <h1>AI Tools Directory</h1>
                <p className="tagline">Curated AI tools for every role and workflow</p>
            </header>

            <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

            <div className="filter-section">
                <div className="filter-row">
                    <span className="filter-label">Category</span>
                    <CategoryBar
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        categoryCounts={categoryCounts}
                    />
                </div>
                <div className="filter-row">
                    <span className="filter-label">Audience</span>
                    <AudienceBar
                        audiences={allAudiences}
                        selectedAudiences={selectedAudiences}
                        onToggleAudience={(aud) =>
                            setSelectedAudiences(prev =>
                                prev.includes(aud) ? prev.filter(p => p !== aud) : [...prev, aud]
                            )
                        }
                        audienceCounts={audienceCounts}
                    />
                </div>
            </div>

            <div className="results-row">
                <span className="results-count">
                    <strong>{filteredTools.length}</strong> of {tools.length} tools
                </span>
                {hasActiveFilters && (
                    <button className="clear-filters-btn" onClick={clearAll}>
                        Clear filters
                    </button>
                )}
            </div>

            <ToolGrid tools={filteredTools} onCardClick={setSelectedTool} />
            <Modal tool={selectedTool} onClose={() => setSelectedTool(null)} />
        </div>
    );
};

export default MainPage;
