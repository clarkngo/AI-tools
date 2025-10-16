import React, { useState, useEffect } from 'react';

const TagBar = ({ tags, selectedTag, onSelectTag, tagCounts }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setShowToggle(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div id="tag-container" className={isExpanded ? 'expanded' : ''}>
                {tags.map(tag => (
                    <button
                        key={tag}
                        className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                        data-tag={tag}
                        onClick={() => onSelectTag(tag)}
                    >
                        {tag} {tagCounts && tagCounts[tag] ? `(${tagCounts[tag]})` : ''}
                    </button>
                ))}
            </div>
            {showToggle && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        display: 'block',
                        margin: '10px auto 0',
                        backgroundColor: '#3a3a3a',
                        color: '#ffffff',
                        border: '1px solid #5a5a5a',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#4a4a4a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3a3a3a'}
                >
                    {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
                </button>
            )}
        </div>
    );
};

export default TagBar;