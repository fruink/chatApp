(() =>{
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatFrom = document.querySelector('form'),
      nameInput = document.querySelector('.username'),
      chatMessage = chatFrom.querySelector('.userMessage'),
      userName = null;


      function setUsername(){
        //debugger;
        userName = this.value;
      }

      function appendMessage(msg) {
        //debugger
        let newMsg = `<li>${msg.message}</li>`;
        messageList.innerHTML += newMsg;
      }

      function appendDiscMessage(msg) {
        //debugger
        let newMsg = `<li>${msg}</li>`;
        messageList.innerHTML += newMsg;
      }


      function handleSendMessage(e) {
        e.preventDefault();//block default behaviour (page reftesh)
        userName = (userName && userName.length > 0) ? userName : 'user';

        msg = `${userName} says ${chatMessage.value}`;

        socket.emit('chat message', msg)
        chatMessage.valus = '';
        return false;
      }

  nameInput.addEventListener('change', setUsername, false);
  chatFrom.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);

})();
