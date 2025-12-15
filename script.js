const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const settingsBtn = document.getElementById("settingsBtn");
const aboutBtn = document.getElementById("aboutBtn");
const settingsPanel = document.getElementById("settings-panel");
const closeSettings = document.getElementById("closeSettings");
const themeToggle = document.getElementById("themeToggle");
const clearChat = document.getElementById("clearChat");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  appendMessage("user", message);
  userInput.value = "";

  // Simulated bot response
  setTimeout(() => {
    appendMessage("bot", "I'm NovaGPT — fetching information for: " + message);
  }, 800);
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Settings logic */
settingsBtn.onclick = () => settingsPanel.classList.add("show");
closeSettings.onclick = () => settingsPanel.classList.remove("show");

themeToggle.onchange = () => {
  document.body.style.background = themeToggle.checked ? "#0f172a" : "#f1f5f9";
  document.body.style.color = themeToggle.checked ? "white" : "#0f172a";
};

clearChat.onclick = () => {
  chatBox.innerHTML = "";
  appendMessage("bot", "Chat cleared ✅");
};

aboutBtn.onclick = () => {
  alert("NovaGPT v4 — Built with online resources & voice features coming soon!");
};
