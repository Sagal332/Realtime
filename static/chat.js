const socket = io();

socket.on('message', function(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('messages').appendChild(li);
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message !== '') {
        socket.send(message);
        input.value = '';
    }
}