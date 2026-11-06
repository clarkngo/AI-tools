import React, { useState, useRef, useLayoutEffect } from 'react';

const COLLAPSED_MAX_HEIGHT = 80;
const MOBILE_BREAKPOINT = 768;

const AudienceBar = ({ audiences, selectedAudiences, onToggleAudience, audienceCounts }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const checkOverflow = () => {
            const el = containerRef.current;
            if (!el) return;
            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
            if (!isMobile) {
                setShowToggle(false);
                return;
            }
            const wasExpanded = el.classList.contains('expanded');
            if (wasExpanded) el.classList.remove('expanded');
            setShowToggle(el.scrollHeight > COLLAPSED_MAX_HEIGHT + 1);
            if (wasExpanded) el.classList.add('expanded');
        };
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [audiences]);

    const isSelected = (a) => selectedAudiences && selectedAudiences.includes(a);

    return (
        <div>
            <div id="audience-container" ref={containerRef} className={isExpanded ? 'expanded' : ''}>
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
                    className="toggle-audience-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '▲ Show Less' : '▼ Show More'}
                </button>
            )}
        </div>
    );
};

export default AudienceBar;
