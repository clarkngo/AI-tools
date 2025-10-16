import React from 'react';
import ToolCard from './ToolCard';

const ToolGrid = ({ tools, onCardClick }) => {
    return (
        <div className="tool-grid">
            {tools.map(tool => (
                <ToolCard key={tool.name} tool={tool} onCardClick={onCardClick} />
            ))}
        </div>
    );
};

export default ToolGrid;
