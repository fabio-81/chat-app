'use strict'

//create a socket
const socket = io()

//prompt for username
const $userName = prompt('Please enter your username!')
socket.emit('username',$userName)
//send a message
socket.emit('newuser', {user: 'Fabio'}) //set a variable 'newuser' and the data

// Event listener, waiting for an incoming "newuser"
socket.on('newuser', (data) => console.log(`${data.user} has connected!`))

const $msgForm = document.getElementById('form')
const $messages = document.getElementById('messages')
// const $submit_button =document.getElementById('submit_button')
// const $text = document.getElementById('text')

//listen for the submit of a form
$msgForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    socket.emit('chatmsg', {msg: event.currentTarget.text.value})
    event.currentTarget.text.value = ''
    })

    socket.on('chatmsg', (data)=>{
        const newMsg = document.createElement('li')
        $messages.appendChild(newMsg)

        newMsg.textContent = data.msg
        
    })