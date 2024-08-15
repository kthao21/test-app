import { Outlet } from 'react-router-dom';
import React from 'react';
import Nav from './components/NavTabs';
import Body from './pages/Body';
import './App.css'


function App() {
    return (
            <>
            <Nav />
            <Body />
            <main className="mx-3">
            <Outlet />
            </main>
            </>
    )
}

export default App;