import React, { useEffect, useRef } from 'react';

const Modal = ({ tool, onClose }) => {
    const contentRef = useRef(null);
    const closeBtnRef = useRef(null);
    const lastFocusedRef = useRef(null);

    useEffect(() => {
        if (!tool) return;

        lastFocusedRef.current = document.activeElement;
        closeBtnRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }
            if (event.key === 'Tab' && contentRef.current) {
                const focusable = contentRef.current.querySelectorAll(
                    'a[href], button:not([disabled])'
                );
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            lastFocusedRef.current?.focus?.();
        };
    }, [tool, onClose]);

    if (!tool) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                ref={contentRef}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2 id="modal-title">{tool.name} Tutorial</h2>
                    <button ref={closeBtnRef} onClick={onClose} className="close-btn" aria-label="Close">×</button>
                </div>
                <div className="tutorial-content-modal">
                    <h3>What is it?</h3>
                    <p>{tool.tutorial.whatIs}</p>

                    <h3>Common Use Cases</h3>
                    <ul>
                        {tool.tutorial.useCases.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>

                    <h3>Getting Started</h3>
                    <ul>
                        {tool.tutorial.gettingStarted.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>

                    <h3>Tips for Effective Use</h3>
                    <ul>
                        {tool.tutorial.tips.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
