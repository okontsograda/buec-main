import React, { useEffect } from 'react';


const Modal = ({ showModal, modalData, modalTitle, handleModalClose, handleModalSubmit, handleModalDataChange }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && showModal) {
                handleModalClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal, handleModalClose]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modalContent = document.querySelector('.modal-content');
            if (modalContent && !modalContent.contains(event.target)) {
                handleModalClose();
            }
        };

        if (showModal) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showModal, handleModalClose]);

    return (
        showModal && (
            <div className="modal-container">
                <div className="modal-content">
                    <span className="close" onClick={handleModalClose}>&times;</span>
                    <h2>{modalTitle}</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleModalSubmit(modalData);
                    }}>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                value={modalData.title || ''}
                                onChange={(e) => handleModalDataChange('title', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Start:</label>
                            <input
                                type="datetime-local"
                                value={modalData.start}
                                onChange={(e) => handleModalDataChange('start', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>End:</label>
                            <input
                                type="datetime-local"
                                value={modalData.end}
                                onChange={(e) => handleModalDataChange('end', e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Type:</label>
                            <select value={modalData.type || ''} onChange={(e) => handleModalDataChange('type', e.target.value)}>
                                <option value="meeting">Meeting</option>
                                <option value="conference">Conference</option>
                            </select>
                        </div>
                        <div>
                            <label>Notes:</label>
                            <textarea
                                value={modalData.notes || ''}
                                onChange={(e) => handleModalDataChange('notes', e.target.value)}
                                style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                            ></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;
