import React from 'react';

const Modal = ({ showModal, modalData, modalTitle, handleModalClose, handleModalSubmit, handleModalDataChange }) => {
    console.log(modalData)
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;
