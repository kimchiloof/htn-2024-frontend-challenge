import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {EventTypeColor, EventTypeIcon, ToDisplayCase, ToDisplayDate} from "../../utils/format-utils";

export default function EventList({ events }) {
    return (
        <div>
            {events.map((event) => (
                <div key={event.id} className="row-md-4 mb-4">
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
}

function EventCard ({ event }) {
    const startDate = new Date(event.start_time);
    const endDate = new Date(event.end_time);
    let speakers = event.speakers.map(speaker => speaker.name).join(", ");

    // Dialog
    const [showDialog, setShowDialog] = useState(false);

    const OpenDialog = () => setShowDialog(true);
    const CloseDialog = () => setShowDialog(false);

    return (
        <>
            {/* Event card content */}
            
            <Card className={"event-card"} style={{ width: '75vw' }} data-bs-theme="dark" onClick={OpenDialog}>
                <Card.Body>
                    <Card.Title style={{fontWeight: "bold"}}>{event.name}</Card.Title>
                    <hr/>
                    <Card.Text>
                        {ToDisplayDate(startDate, endDate)}
                    </Card.Text>
                    <Card.Footer>
                        <div className={"horizontal-container"}>
                            <div className={"horizontal-item"} style={{color: EventTypeColor(event.event_type)}}>
                                <p>{EventTypeIcon(event.event_type)} {ToDisplayCase(event.event_type)}</p>
                            </div>
                            {
                                speakers.length > 0 && <div className={"horizontal-container"}>
                                    <div className={"horizontal-item"}>-</div>
                                    <div className={"horizontal-item"}>{speakers}</div>
                                </div>
                            }
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
    
            {/* Event card details modal */}
            
            <Modal show={showDialog} onHide={CloseDialog} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Dialog Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is the dialog content.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseDialog}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={CloseDialog}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function EventCardContent() {
    
}
