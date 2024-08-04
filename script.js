function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();
    if (message) {
        const chat = document.getElementById('chat');
        const userClass = chat.children.length % 2 === 0 ? 'user1' : 'user2';
        chat.innerHTML += `<div class="message ${userClass}">${message}</div>`;
        messageInput.value = '';
        chat.scrollTop = chat.scrollHeight;

        // Save messages to local storage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ text: message, userClass: userClass });
        localStorage.setItem('messages', JSON.stringify(messages));
    }
}

window.onload = function() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const chat = document.getElementById('chat');
    messages.forEach(msg => {
        chat.innerHTML += `<div class="message ${msg.userClass}">${msg.text}</div>`;
    });
    chat.scrollTop = chat.scrollHeight;
}
