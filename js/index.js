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
// socket.on('newuser', (data) => console.log(`${data.user} has connected!`))

const $msgForm = document.getElementById('form')
const $messages = document.getElementById('messages')
const $typing = document.getElementById('typing')
const $userName = document.getElementById('username')

// const $submit_button =document.getElementById('submit_button')
// const $text = document.getElementById('text')

//listen for the submit of a form
$msgForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    socket.emit('chatmsg', {message: event.currentTarget.text.value},{user: $userName.value})
    event.currentTarget.text.value = ''
    
    })
   
    socket.on('chatmsg', (data,data2)=>{
        $typing.textContent= '' //clear the typing once typed
        const newMsg = document.createElement('li')
        $messages.appendChild(newMsg)

        newMsg.textContent = (`${data2.user}:${data.message}`)
        
    })
    //added typing eventlistener
    $msgForm.addEventListener('keypress',(event)=>{

        socket.emit('typing',$userName.value)
        
        
    })
    socket.on('typing',(data)=>{
        const newMsg = document.createElement('li')
        $typing.appendChild(newMsg)
        $typing.textContent = (`${data} is typing`)
        
    })

