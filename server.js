const express  = require('express')
const app      = express()
const port     = 3000
const server   = app.listen(port, () => {console.log(`Server running at http://localhost:${port}`)})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static('.'))

//connect socket.io to servers, listen for socket.io on the port/server
const io = require('socket.io').listen(server)

io.on('connection', function (socket) {
   
   
   // socket.on('username',(data)=>{
   //    io.emit('username',data)
   // })
   // Listen for a "newuser" message
   socket.on('newuser', (data) => {
     // Transmit a message to everyone except the sender
     socket.broadcast.emit('newuser', data)
 
     // The same message, sent to all users - try it!
     //io.emit('newuser', data)
    })
    
     
    
    // Listen for "chatmsg"
    //   io.emit to all user
    socket.on('chatmsg', (data,data2) => {
       io.emit('chatmsg', data,data2)
    })
 
 
 })