const sendBtn = document.getElementById("sendBtn");
const status = document.getElementById("status");

sendBtn.addEventListener("click", () => {
  status.textContent = "Button clicked! (Backend coming soon 🚀)";
});
