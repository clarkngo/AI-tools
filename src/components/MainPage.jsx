import React, { useState, useEffect } from 'react';
import { tools } from '../data.js';
import ToolGrid from './ToolGrid';
import TagBar from './TagBar';
import SearchBar from './SearchBar';
import Modal from './Modal';
import logoImage from '/ai-tools.png';

const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');
    const [filteredTools, setFilteredTools] = useState(tools);
    const [selectedTool, setSelectedTool] = useState(null);

    const allTags = tools.flatMap(tool => tool.tags.split(' '));
    const tagCounts = allTags.reduce((acc, tag) => {
        if (tag) { // handle empty strings
            acc[tag] = (acc[tag] || 0) + 1;
        }
        return acc;
    }, {});
    tagCounts['all'] = tools.length;
    const tags = ['all', ...Object.keys(tagCounts).filter(t => t !== 'all').sort()];
    const totalTools = tools.length;

    useEffect(() => {
        let newFilteredTools = tools;

        if (selectedTag !== 'all') {
            newFilteredTools = newFilteredTools.filter(tool => tool.tags.includes(selectedTag));
        }

        if (searchQuery !== '') {
            newFilteredTools = newFilteredTools.filter(tool =>
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredTools(newFilteredTools);
    }, [searchQuery, selectedTag]);

    const openModal = (tool) => {
        setSelectedTool(tool);
    };

    const closeModal = () => {
        setSelectedTool(null);
    };

    return (
        <div className="App">
            <header>
                <img src={logoImage} alt="AI Tools Logo" className="logo" />
                <h1>AI Tools Directory</h1>
                <p className="tagline">Unleash Your Potential with Curated AI Tools</p>
                <div className="stats">
                    <p>Total Tools: {totalTools}</p>
                </div>
            </header>

            <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
            <TagBar tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} tagCounts={tagCounts} />
            <ToolGrid tools={filteredTools} onCardClick={openModal} />
            <Modal tool={selectedTool} onClose={closeModal} />
        </div>
    );
};

export default MainPage;