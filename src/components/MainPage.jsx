import React, { useState, useEffect } from 'react';
import { tools } from '../data.js';
import ToolGrid from './ToolGrid';
import CategoryBar, { CATEGORIES } from './CategoryBar';
import AudienceBar from './AudienceBar';
import SearchBar from './SearchBar';
import Modal from './Modal';
import logoImage from '/ai-tools.png';

const FAVORITES_KEY = 'ai-tools-favorites';
const THEME_KEY = 'ai-tools-theme';

const loadFavorites = () => {
    try {
        const raw = window.localStorage.getItem(FAVORITES_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

const loadTheme = () => {
    try {
        const stored = window.localStorage.getItem(THEME_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
    } catch {
        // ignore
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const MainPage = () => {
    const parseFiltersFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const urlSearch = params.get('search') || '';
        const urlCategory = params.get('category') || 'All';
        const urlAudiences = (params.get('audience') || '')
            .split(',')
            .map(a => a.trim())
            .filter(Boolean);
        const urlFavoritesOnly = params.get('favorites') === '1';

        const validCategory = CATEGORIES.some(c => c.label === urlCategory) ? urlCategory : 'All';
        const validAudiences = Array.from(new Set(tools.flatMap(t => t.audience || [])));

        return {
            search: urlSearch,
            category: validCategory,
            audiences: urlAudiences.filter(a => validAudiences.includes(a)),
            favoritesOnly: urlFavoritesOnly
        };
    };

    const initialFilters = parseFiltersFromUrl();
    const [searchQuery, setSearchQuery] = useState(initialFilters.search);
    const [selectedCategory, setSelectedCategory] = useState(initialFilters.category);
    const [selectedAudiences, setSelectedAudiences] = useState(initialFilters.audiences);
    const [favoritesOnly, setFavoritesOnly] = useState(initialFilters.favoritesOnly);
    const [favorites, setFavorites] = useState(loadFavorites);
    const [theme, setTheme] = useState(loadTheme);
    const [filteredTools, setFilteredTools] = useState(tools);
    const [selectedTool, setSelectedTool] = useState(null);
    const [copyLabel, setCopyLabel] = useState('Copy link');

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
        document.documentElement.setAttribute('data-theme', theme);
        try {
            window.localStorage.setItem(THEME_KEY, theme);
        } catch {
            // ignore
        }
    }, [theme]);

    useEffect(() => {
        try {
            window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        } catch {
            // ignore
        }
    }, [favorites]);

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

        // Favorites filter
        if (favoritesOnly) {
            result = result.filter(tool => favorites.includes(tool.name));
        }

        // Search filter — matches name, description, and tags
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            result = result.filter(tool =>
                tool.name.toLowerCase().includes(q) ||
                tool.description.toLowerCase().includes(q) ||
                (tool.tags || '').toLowerCase().includes(q)
            );
        }

        setFilteredTools(result);
    }, [searchQuery, selectedCategory, selectedAudiences, favoritesOnly, favorites]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQuery.trim() !== '') params.set('search', searchQuery.trim());
        if (selectedCategory !== 'All') params.set('category', selectedCategory);
        if (selectedAudiences.length > 0) params.set('audience', selectedAudiences.join(','));
        if (favoritesOnly) params.set('favorites', '1');

        const queryString = params.toString();
        const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`;
        window.history.replaceState({}, '', nextUrl);
    }, [searchQuery, selectedCategory, selectedAudiences, favoritesOnly]);

    const hasActiveFilters = selectedCategory !== 'All' || selectedAudiences.length > 0 || searchQuery.trim() !== '' || favoritesOnly;

    const clearAll = () => {
        setSelectedCategory('All');
        setSelectedAudiences([]);
        setSearchQuery('');
        setFavoritesOnly(false);
    };

    const toggleFavorite = (toolName) => {
        setFavorites(prev =>
            prev.includes(toolName) ? prev.filter(n => n !== toolName) : [...prev, toolName]
        );
    };

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const copyShareLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyLabel('Copied!');
        } catch {
            setCopyLabel('Copy failed');
        }
        setTimeout(() => setCopyLabel('Copy link'), 1500);
    };

    return (
        <div className="App">
            <header>
                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
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
                <div className="results-row-left">
                    <span className="results-count">
                        <strong>{filteredTools.length}</strong> of {tools.length} tools
                    </span>
                    <button
                        className={`favorites-toggle-btn ${favoritesOnly ? 'active' : ''}`}
                        onClick={() => setFavoritesOnly(prev => !prev)}
                        aria-pressed={favoritesOnly}
                    >
                        {favoritesOnly ? '★' : '☆'} Favorites{favorites.length > 0 ? ` (${favorites.length})` : ''}
                    </button>
                </div>
                <div className="results-row-right">
                    {hasActiveFilters && (
                        <button className="clear-filters-btn" onClick={clearAll}>
                            Clear filters
                        </button>
                    )}
                    <button className="copy-link-btn" onClick={copyShareLink}>
                        🔗 {copyLabel}
                    </button>
                </div>
            </div>

            <ToolGrid
                tools={filteredTools}
                onCardClick={setSelectedTool}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onClearFilters={clearAll}
            />
            <Modal tool={selectedTool} onClose={() => setSelectedTool(null)} />
        </div>
    );
};

export default MainPage;
