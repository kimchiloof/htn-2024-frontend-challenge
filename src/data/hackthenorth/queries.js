import { gql } from '@apollo/client';
import { HackTheNorthClient } from "./client";

export async function FetchData(query) {
    try {
        const result = await HackTheNorthClient.query({
            query: query
        });

        if (result.errors != null) {
            for (let error of result.errors) {
                console.error(error.toString());
            }
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// All event queries

export const ALL_EVENTS_BASIC = gql`
    query GetAllEventsBasic {
        sampleEvents {
            id
            name
            event_type
            permission
            start_time
            end_time
            public_url
            private_url
        }
    }
`;

export const ALL_EVENTS_DETAIL = gql`
    query GetAllEvents {
        sampleEvents {
            id
            name
            event_type
            permission
            start_time
            end_time
            description
            speakers {
                name
            }
            public_url
            private_url
            related_events
        }
    }
`;

// Specific event queries

export const GET_EVENT = (eventID) => ({
    query: getEvent,
    variables: {eventID}
})

const getEvent = gql`
    query GetSpecificEvent($eventID: ID!) {
        sampleEvent(id: $eventID) {
            id
            name
            event_type
            permission
            start_time
            end_time
            description
        }
    }
`;