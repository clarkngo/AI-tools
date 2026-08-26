import React from 'react';
import ToolCard from './ToolCard';

const ToolGrid = ({ tools, onCardClick, favorites, onToggleFavorite, onClearFilters }) => {
    if (tools.length === 0) {
        return (
            <div className="empty-state">
                <span className="empty-state-emoji" aria-hidden="true">🔍</span>
                <p>No tools match your filters.</p>
                <button className="clear-filters-btn" onClick={onClearFilters}>Clear filters</button>
            </div>
        );
    }

    return (
        <div className="tool-grid">
            {tools.map(tool => (
                <ToolCard
                    key={tool.name}
                    tool={tool}
                    onCardClick={onCardClick}
                    isFavorite={favorites.includes(tool.name)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    );
};

export default ToolGrid;
