// backend/server.js
const express = require('express');
const WebSocket = require('ws');

// Create an Express app
const app = express();

// Set up WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connection and messages
wss.on('connection', (ws) => {
    console.log('Client connected');

    let animationInterval;

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Start animation
        if (message === 'Start') {
            animationInterval = setInterval(() => {
                ws.send('Animate');
            }, 100); // Send animation data every 100ms
        }

        // Stop animation
        if (message === 'Stop') {
            clearInterval(animationInterval);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(animationInterval);
    });
});

// Upgrade HTTP to WebSocket connection
app.server = app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

app.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});
