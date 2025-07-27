let socket;
let username = '';

function registerUser() {
    username = document.getElementById('username').value.trim();
    if (username !== '') {
        document.getElementById('usernameSection').style.display = 'none';
        document.getElementById('chatSection').style.display = 'block';

        socket = io();

        socket.on('message', function(data) {
            const li = document.createElement('li');
            li.textContent = data;
            document.getElementById('messages').appendChild(li);
        });

        socket.emit('message', username + ' joined the chat');
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message !== '') {
    socket.emit(username + ': ' + message);
        input.value = '';
    }
}