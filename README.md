<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rrr Chat - Real-Time Website</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #2c3e50; color: #ecf0f1; padding: 20px; }
        h1 { color: #e74c3c; border-bottom: 2px solid #34495e; padding-bottom: 10px; }
        #chat-container { display: flex; flex-direction: column; max-width: 800px; margin: 0 auto; }
        #chat-log { height: 400px; overflow-y: auto; border: 1px solid #34495e; padding: 15px; margin-bottom: 15px; background-color: #34495e; border-radius: 8px; }
        .message { margin-bottom: 8px; line-height: 1.4; }
        .sender { font-weight: bold; color: #f1c40f; margin-right: 5px; }
        #message-input-area { display: flex; }
        #username-input { flex-grow: 0.1; padding: 10px; border: none; background-color: #444; color: white; border-radius: 4px 0 0 4px; }
        #message-input { flex-grow: 0.7; padding: 10px; border: none; background-color: #444; color: white; }
        #message-submit { flex-grow: 0.2; padding: 10px; background-color: #e74c3c; color: white; border: none; cursor: pointer; border-radius: 0 4px 4px 0; transition: background-color 0.2s; }
        #message-submit:hover { background-color: #c0392b; }
    </style>
</head>
<body>
    <div id="chat-container">
        <h1>Rrr Chat: Global Room</h1>
        
        <input type="text" id="username-input" placeholder="Your Rrr Username" value="RrrUser">
        
        <div id="chat-log"></div>

        <div id="message-input-area">
            <input id="message-input" type="text" placeholder="Type your message here...">
            <input id="message-submit" type="button" value="Send">
        </div>
    </div>
    
    <script>
        // Use wss (WebSocket Secure) in a live environment, but ws for local testing
        const roomName = 'rrr_global_chat';
        const chatSocket = new WebSocket(
            'ws://' + window.location.host +
            '/ws/chat/' + roomName + '/'
        );

        // --- 1. Handle Incoming Messages ---
        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            const message = data.message;
            const username = data.username;
            
            const log = document.querySelector('#chat-log');
            
            // Create a new message element and append it
            const msgElement = document.createElement('div');
            msgElement.classList.add('message');
            msgElement.innerHTML = `<span class="sender">${username}:</span> ${message}`;
            
            log.appendChild(msgElement);
            log.scrollTop = log.scrollHeight; // Auto-scroll
        };

        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
            alert('Connection lost. Please refresh the page.');
        };
        
        // --- 2. Handle Outgoing Messages ---
        document.querySelector('#message-submit').onclick = function(e) {
            const messageInputDom = document.querySelector('#message-input');
            const message = messageInputDom.value.trim();
            const username = document.querySelector('#username-input').value.trim() || 'Anonymous';
            
            if (message === '') return; // Don't send empty messages

            chatSocket.send(JSON.stringify({
                'message': message,
                'username': username
            }));

            messageInputDom.value = ''; // Clear the input field
            messageInputDom.focus(); // Keep focus on the input
        };
        
        // --- 3. Allow sending with ENTER key ---
        document.querySelector('#message-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // 13 is the Enter key
                document.querySelector('#message-submit').click();
            }
        };
    </script>
</body>
</html>
