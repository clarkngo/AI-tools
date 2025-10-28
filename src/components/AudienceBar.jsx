import React, { useState, useEffect } from 'react';

const AudienceBar = ({ audiences, selectedAudiences, onToggleAudience, audienceCounts }) => {
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

    const isSelected = (a) => selectedAudiences && selectedAudiences.includes(a);

    return (
        <div>
            <div id="audience-container" className={isExpanded ? 'expanded' : ''}>
                {audiences.map(aud => (
                    <button
                        key={aud}
                        className={`audience-btn ${isSelected(aud) ? 'active' : ''}`}
                        onClick={() => onToggleAudience(aud)}
                    >
                        {aud} {audienceCounts && audienceCounts[aud] ? `(${audienceCounts[aud]})` : ''}
                    </button>
                ))}
            </div>
            {showToggle && (
                <button
                    className="toggle-tags-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '▲ Show Less' : '▼ Show More'}
                </button>
            )}
        </div>
    );
};

export default AudienceBar;
