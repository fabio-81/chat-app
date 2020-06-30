'use strict'

//create a socket
const socket = io()

//prompt for username
// const $userName = prompt('Please enter your username!')
// socket.emit('username',$userName)
// socket.on('username', (data)=> console.log(`Welcome ${$userName}`,socket.id))

//send a message
// socket.emit('newuser', {user: $userName}) //set a variable 'newuser' and the data

// Event listener, waiting for an incoming "newuser"
socket.on('newuser', (data) => console.log(`${data.user} has connected!`))

const $msgForm = document.getElementById('form')
const $messages = document.getElementById('messages')
// const $submit_button =document.getElementById('submit_button')
// const $text = document.getElementById('text')

//listen for the submit of a form
$msgForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    socket.emit('chatmsg', {message: event.currentTarget.text.value},{user: event.currentTarget.username.value})
    event.currentTarget.text.value = ''
    
    })
   
    socket.on('chatmsg', (data,data2)=>{
        const newMsg = document.createElement('li')
        $messages.appendChild(newMsg)

        newMsg.textContent = (`${data2.user}:${data.message}`)
        
        
    })