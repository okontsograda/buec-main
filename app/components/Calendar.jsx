// EventCalendar.js
"use client"
// EventCalendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: 'Meeting',
      start: new Date('2024-02-01T10:00:00'),
      end: new Date('2024-02-01T12:00:00'),
      type: 'meeting',
    },
    {
      id: 1,
      title: 'Conference',
      start: new Date('2024-02-03T08:00:00'),
      end: new Date('2024-02-03T17:00:00'),
      type: 'conference',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalTitle, setModalTitle] = useState('');

  const handleSelect = ({ start, end }) => {
    setModalData({ start, end });
    setModalTitle('Add New Event');
    setShowModal(true);
  };

  const handleEventSelect = (event) => {
    setModalData(event);
    setModalTitle('Edit Event');
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalData({});
    setModalTitle('');
  };

  const handleModalSubmit = (data) => {
    if (data.id) {
      // Edit existing event
      setEvents(events.map((event) => (event.id === data.id ? data : event)));
    } else {
      // Add new event
      setEvents([...events, { ...data, id: Date.now() }]);
    }
    handleModalClose();
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ flex: 1, padding: 20 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventSelect}
      />

      {showModal && (
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
                  onChange={(e) => setModalData({...modalData, title: e.target.value})}
                />
              </div>
              <div>
                <label>Start:</label>
                <input
                  type="datetime-local"
                  value={moment(modalData.start).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setModalData({...modalData, start: e.target.value})}
                />
              </div>
              <div>
                <label>End:</label>
                <input
                  type="datetime-local"
                  value={moment(modalData.end).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setModalData({...modalData, end: e.target.value})}
                />
              </div>
              <div>
                <label>Type:</label>
                <select value={modalData.type || ''} onChange={(e) => setModalData({...modalData, type: e.target.value})}>
                  <option value="meeting">Meeting</option>
                  <option value="conference">Conference</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
