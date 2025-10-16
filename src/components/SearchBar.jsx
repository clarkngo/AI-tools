import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
    return (
        <div id="search-container">
            <input
                type="text"
                id="search-bar"
                placeholder="Search for tools by name or description..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
