"use client"
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from '../components/Modal';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalTitle, setModalTitle] = useState('');

    useEffect(() => {
        fetch('/api/calendarEvents')
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.events);
                console.log(data.events);
            });
    }, []);

    const handleSelect = ({ start, end }) => {
        const formattedStart = moment(start).format('YYYY-MM-DDTHH:mm');
        const formattedEnd = moment(end).format('YYYY-MM-DDTHH:mm');

        setModalData({ start: formattedStart, end: formattedEnd });
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
        const formattedData = {
            ...data,
            start: moment(data.start).format('YYYY-MM-DDTHH:mm'),
            end: moment(data.end).format('YYYY-MM-DDTHH:mm')
        };
        console.table(data)
        if (data._id) {
            // Edit existing event
            // setEvents(events.map((event) => (event.id === data.id ? data : event)));
            console.log("Editing event info...")
            // Execute PUT API endpoint
            fetch(`/api/calendarEvents`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to update event data');
                    }
                    return response.json();
                })
                .then((responseData) => {
                    console.log('Event data updated successfully:', responseData);
                })
                .catch((error) => {
                    console.error('Error updating event data:', error);
                });
        } else {
            console.log("Adding as a new event")
            // Add new event
            setEvents([...events, { ...formattedData, id: Date.now() }]);
            // Send a fetch request to update the event data in the database
            fetch('/api/calendarEvents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to update event data');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Event data updated successfully:', data);
                })
                .catch((error) => {
                    console.error('Error updating event data:', error);
                });

        }
        handleModalClose();
    };

    const handleModalDataChange = (field, value) => {
        setModalData({ ...modalData, [field]: value });
    };

    return (
        <div style={{ height: 800 }}>
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
            <Modal
                showModal={showModal}
                modalData={modalData}
                modalTitle={modalTitle}
                handleModalClose={handleModalClose}
                handleModalSubmit={handleModalSubmit}
                handleModalDataChange={handleModalDataChange}
            />
        </div>
    );
};

export default EventCalendar;
