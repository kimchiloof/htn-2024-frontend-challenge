import React, {useEffect, useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {EventPermission, EventTypeColor, EventTypeIcon, ToDisplayCase, ToDisplayDate} from "../../utils/format-utils";
import {GLOBAL_CONTEXT} from "../../App";

export default function EventList({ events }) {
    const {
        loggedIn, setLoggedIn,
        sortDate, setSortDate
    } = GLOBAL_CONTEXT();
    const [renderedEvents, setRenderedEvents] = useState([]);


    useEffect(() => {
        const rendered = events.map((event) => (
            <div key={event.id} className="row-md-4 mb-4">
                {
                    (event.permission === "public" || (event.permission === "private" && loggedIn)) && (
                        <EventCard event={event} allEvents={events} />
                    )
                }
            </div>
        ))
        setRenderedEvents(rendered);
    }, [loggedIn]);
    
    return (
        <div>{renderedEvents}</div>
    );
}

function EventCard ({ event, allEvents }) {
    const startDate = new Date(event.start_time);
    const endDate = new Date(event.end_time);
    let speakers = event.speakers.map(speaker => speaker.name).join(", ");
    let related = event.related_events.map(id => allEvents.find(ev => ev.id === id).name).join(", ");


    // Dialog
    const [showDialog, setShowDialog] = useState(false);

    const OpenDialog = () => setShowDialog(true);
    const CloseDialog = () => setShowDialog(false);

    return (
        <>
            {/* Event card content */}
            
            <Card className={"event-card"} style={{ width: '75vw' }} data-bs-theme="dark" onClick={OpenDialog}>
                <Card.Body>
                    <Card.Title style={{fontWeight: "bold"}}>
                        <div className={"horizontal-container-stretch"}>
                            <p>{event.name}</p>
                            <p>{EventPermission(event.permission)}</p>
                        </div>
                    </Card.Title>
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
            
            <Modal show={showDialog} onHide={CloseDialog} centered={true} data-bs-theme="dark" className="dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{event.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"horizontal-container"}>
                        <div className={"horizontal-item"}
                             style={{fontWeight: "bold", color: EventTypeColor(event.event_type)}}>
                            <p>{EventTypeIcon(event.event_type)} {ToDisplayCase(event.event_type)}</p>
                        </div>
                        {
                            speakers.length > 0 && <div className={"horizontal-container"}>
                                <div className={"horizontal-item"}>-</div>
                                <div className={"horizontal-item"}>{speakers}</div>
                            </div>
                        }
                    </div>
                    <p><b>Date:</b> {ToDisplayDate(startDate, endDate)}</p>
                    <p>{event.description}</p>
                    <p><b>Related:</b> {related}</p>
                </Modal.Body>
                <Modal.Footer>
                    <a href={event.private_url}>
                        <Button variant={"success"}>
                            Event Page
                        </Button>
                    </a>
                    
                    <div className="ml-auto">
                        {
                            event.permission === "public" &&
                            <a href={event.public_url}><Button variant={"primary"}>See What Happened</Button> </a>
                        }
    
                        <Button variant="secondary" onClick={CloseDialog}>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
