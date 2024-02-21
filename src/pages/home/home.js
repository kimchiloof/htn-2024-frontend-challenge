import React, {useEffect, useState} from "react";
import FetchData, {ALL_EVENTS_DETAIL} from "../../data/hackthenorth/queries";
import EventList from "./event-card";
import {GLOBAL_CONTEXT} from "../../App";

export default function Home() {
    return (
        DisplayAllEvents()
    )
}

function DisplayAllEvents () {
    const {
        loggedIn, setLoggedIn,
        sortDate, setSortDate
    } = GLOBAL_CONTEXT();
    
    const [events, setEvents] = useState(null);
    const [sortedEvents, setSortedEvents] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const eventsData = await FetchData(ALL_EVENTS_DETAIL);
            setEvents(eventsData.sampleEvents);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (sortDate) {
            setSortedEvents([...events].sort((a, b) => a.start_time - b.start_time));
        } else {
            setSortedEvents(events);
        }
    }, [sortDate]);

    return (
        <div>
            {(
                <div>
                    {
                        events == null
                            ? (
                                <Loading/> 
                            ) : (
                                <ShowSortedEvents events={events}/>
                            )
                    }
                </div>
            )}
        </div>
    );
}

function Loading() {
    return (
        <div>
            <p>Loading!</p>
        </div>
    )
}

function ShowSortedEvents({events}) {
    return <EventList events={events}/>
}