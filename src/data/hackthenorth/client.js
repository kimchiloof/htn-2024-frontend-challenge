import {ApolloClient, InMemoryCache} from "@apollo/client";

export const HackTheNorthClient = new ApolloClient({
    uri: "https://api.hackthenorth.com/v3/graphql",
    cache: new InMemoryCache(),
});