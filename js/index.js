'use strict'

//create a socket
const socket = io()

//send a message
socket.emit('newuser', {user: 'Grace Hopper'}) //set a variable 'newuser' and the data

// Event listener, waiting for an incoming "newuser"
socket.on('newuser', (data) => console.log(`${data.user} has connected!`))

const $form = document.getElementById('form')
const $messages = document.getElementById('messages')
const $submit_button =document.getElementById('submit_button')

