import React from 'react';
import ExternalLinkIcon from '../assets/external-link.svg?react';

const ToolCard = ({ tool, onCardClick }) => {
    const handleExternalLink = (e) => {
        e.stopPropagation();
    };

    const getEmoji = () => {
        if (tool.emoji) return tool.emoji;
        const tags = (tool.tags || '').toLowerCase();
        if (tags.includes('images') || tags.includes('art') || tags.includes('design')) return '🖼️';
        if (tags.includes('coding') || tags.includes('development') || tags.includes('code-editor')) return '💻';
        if (tags.includes('writing') || tags.includes('productivity')) return '✍️';
        if (tags.includes('video')) return '🎬';
        if (tags.includes('music') || tags.includes('audio')) return '🎵';
        if (tags.includes('research') || tags.includes('search') || tags.includes('science')) return '🔎';
        if (tags.includes('education')) return '🎓';
        if (tags.includes('transcription') || tags.includes('meetings')) return '📝';
        if (tags.includes('police') || tags.includes('fire') || tags.includes('ems') || tags.includes('dispatch')) return '🚨';
        return '✨';
    };

    return (
        <div className="tool-card" onClick={() => onCardClick(tool)}>
            <div className="card-content">
                <div className="tool-header">
                    <div className="tool-header-left">
                        <span className="tool-emoji" aria-hidden="true">{getEmoji()}</span>
                        <h2>{tool.name}</h2>
                    </div>
                    <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                        title="Open tool"
                        onClick={handleExternalLink}
                    >
                        <ExternalLinkIcon />
                    </a>
                </div>
                <p>{tool.description}</p>
                {tool.audience && tool.audience.length > 0 && (
                    <div className="card-audience">
                        {tool.audience.slice(0, 3).map(aud => (
                            <span key={aud} className="card-audience-tag">{aud}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToolCard;
