import React from 'react';

const AudienceBar = ({ audiences, selectedAudiences, onToggleAudience, audienceCounts }) => {
    const isSelected = (a) => selectedAudiences && selectedAudiences.includes(a);

    return (
        <div id="audience-container">
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
    );
};

export default AudienceBar;
