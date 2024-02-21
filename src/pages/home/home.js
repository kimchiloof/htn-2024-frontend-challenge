import React, {useEffect, useState} from "react";
import FetchData, {ALL_EVENTS_DETAIL} from "../../data/hackthenorth/queries";
import EventList from "./event-card";

export default function Home() {
    return (
        DisplayAllEvents()
    )
}

function DisplayAllEvents () {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const eventsData = await FetchData(ALL_EVENTS_DETAIL);
            setEvents(eventsData.sampleEvents);
        }

        fetchData();
    }, []);

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