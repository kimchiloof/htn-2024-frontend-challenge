import './App.css';
import Home from "./pages/home/home";
import {Navbar, Nav, Button} from 'react-bootstrap';
import React, { createContext, useContext, useState } from 'react';

// Global state
const APP_GLOBAL_CONTEXT = createContext();

const GLOBAL_CONTEXT_PROVIDER = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [sortDate, setSortDate] = useState(false);

    return (
        <APP_GLOBAL_CONTEXT.Provider value={{ 
            loggedIn, setLoggedIn,
            sortDate, setSortDate
        }}>
            {children}
        </APP_GLOBAL_CONTEXT.Provider>
    );
};

export const GLOBAL_CONTEXT = () => useContext(APP_GLOBAL_CONTEXT);


export default function App() {
    return (
        <GLOBAL_CONTEXT_PROVIDER>
            <div className="App">
                <header className={"App-header"}>
                    <br/>
                    <h1>Hackathon Global Inc.™</h1>
                </header>
                <NavBar/>
                <h2 className={"padded"}>Events</h2>

                <Home/>
            </div>
        </GLOBAL_CONTEXT_PROVIDER>
    );
}

function NavBar() {
    const { 
        loggedIn, setLoggedIn,
        sortDate, setSortDate 
    } = GLOBAL_CONTEXT();
    
    const SetLoggedIn = () => {
        setLoggedIn(!loggedIn);
    }

    const SetSortDate = () => {
        setSortDate(!sortDate);
    }
    
    return (
        <Navbar data-bs-theme="dark">
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#home"><Button variant={"primary"}>Events</Button></Nav.Link>
                    <Nav.Link href="#sort"><Button variant={"outline-primary"} onClick={SetSortDate}>Sort Date</Button></Nav.Link>
                    <Nav.Link href="#log-in"><Button variant={"outline-primary"} onClick={SetLoggedIn}>Log In</Button> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
