import React from 'react'
import {createRoot} from 'react-dom/client'
import './scss/main.scss'

const App = () => {
    return (
        <div>
            TEST
        </div>
    )
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)