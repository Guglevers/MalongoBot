import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import ConnectScreen from './ConnectScreen'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode >
        <ConnectScreen />
    </React.StrictMode>
)
