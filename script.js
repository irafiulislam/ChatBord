const chatInput = document.querySelector(".chat-input textarea");
const sendChtBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chat");

let userMessage;
const createChatli = (message, className) => {
  const chatli = document.createElement("li");
  chatli.classList.add("chat-incoming,chat-outgoing", className);
  let chatContent =
    className === "chat-outgoing"
      ? `<p>${message}</p>`
      : `<span class="chat-image">
    <img src="img/10.jpg" alt="saifuddin" />
  </span><p>${message}</p>`;
  chatli.innerHTML = chatContent;
  return chatli;
};
const generateResponse = (incomingChatli) => {
  const msg = ["Hi", "I am here to help", "Astha IT", "Bangladesh"];
  const messageElement = incomingChatli.querySelector("p");
  const randomResponse = msg[Math.floor(Math.random() * msg.length)];

  messageElement.textContent = randomResponse;
};
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatBox.appendChild(createChatli(userMessage, "chat-outgoing"));

  setTimeout(() => {
    const incomingChatli = createChatli("Thinking...", "chat-incoming");

    chatBox.appendChild(incomingChatli);
    generateResponse(incomingChatli);
  }, 600);
};

sendChtBtn.addEventListener("click", handleChat);
