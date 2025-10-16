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
        <div>
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
                    className="toggle-tags-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '▲ Show Less Tags' : '▼ Show More Tags'}
                </button>
            )}
        </div>
    );
};

export default TagBar;