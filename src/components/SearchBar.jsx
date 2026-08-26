import React, { useEffect, useRef } from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const tag = document.activeElement?.tagName;
            const isTyping = tag === 'INPUT' || tag === 'TEXTAREA';
            if (event.key === '/' && !isTyping) {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div id="search-container">
            <span className="search-icon">🔍</span>
            <input
                ref={inputRef}
                type="text"
                id="search-bar"
                placeholder="Search tools by name, description, or tag…"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
            />
            {searchQuery && (
                <button
                    className="search-clear-btn"
                    aria-label="Clear search"
                    onClick={() => onSearch('')}
                >
                    ×
                </button>
            )}
            {!searchQuery && <kbd className="search-kbd">/</kbd>}
        </div>
    );
};

export default SearchBar;
