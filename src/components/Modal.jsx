import React, { useEffect } from 'react';

const Modal = ({ tool, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!tool) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{tool.name} Tutorial</h2>
                    <button onClick={onClose} className="close-btn">×</button>
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
