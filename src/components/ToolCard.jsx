import React from 'react';
import ExternalLinkIcon from '../assets/external-link.svg?react';

const ToolCard = ({ tool, onCardClick }) => {
    const handleExternalLink = (e) => {
        e.stopPropagation();
    }

    // determine emoji to show on the card
    const getEmoji = () => {
        if (tool.emoji) return tool.emoji;
        const tags = (tool.tags || '').toLowerCase();
        if (tags.includes('images') || tags.includes('art') || tags.includes('design')) return '🖼️';
        if (tags.includes('coding') || tags.includes('development') || tags.includes('code-editor')) return '💻';
        if (tags.includes('writing') || tags.includes('productivity')) return '✍️';
        if (tags.includes('video') || tags.includes('audio')) return '🎬';
        if (tags.includes('research') || tags.includes('search') || tags.includes('science')) return '🔎';
        if (tags.includes('education')) return '🎓';
        if (tags.includes('music') || tags.includes('audio')) return '🎵';
        if (tags.includes('transcription') || tags.includes('meetings')) return '📝';
        if (tags.includes('automation') || tags.includes('workflow')) return '🔁';
        // fallback: use first letter as emoji-like bubble
        return '✨';
    }

    return (
        <div className="tool-card" data-tags={tool.tags} onClick={() => onCardClick(tool)}>
            <div className='card-content'>
                <div className="tool-header">
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <span className="tool-emoji" aria-hidden="true">{getEmoji()}</span>
                        <h2>{tool.name}</h2>
                    </div>
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
