const socket = io('http://localhost:8001');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageinp');
const messageContainer = document.querySelector('.container');

const append = (message , position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.ariaValueMax;
    append.emit('send', message);
    messageInput.value = '';
})

const name = prompt("enter your name to join");
socket.emit('new user joined ', name);

socket.on('user-joined', name =>{
    append('${name} joined the chat' , right)

})

socket.on('receive', data =>{
    append('${data.name} joined the chat' , 'left')

})