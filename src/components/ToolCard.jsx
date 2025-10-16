import React from 'react';
import ExternalLinkIcon from '../assets/external-link.svg?react';

const ToolCard = ({ tool, onCardClick }) => {

    const handleExternalLink = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="tool-card" data-tags={tool.tags} onClick={() => onCardClick(tool)}>
            <div className='card-content'>
                <div className="tool-header">
                    <h2>{tool.name}</h2>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="external-link" title="Official Website" onClick={handleExternalLink}>
                        <ExternalLinkIcon />
                    </a>
                </div>
                <p>{tool.description}</p>
                <div className="tags-container">
                    {tool.tags.split(' ').map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
