import React from 'react';

const TagBar = ({ tags, selectedTag, onSelectTag, tagCounts }) => {
    return (
        <div id="tag-container">
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
    );
};

export default TagBar;