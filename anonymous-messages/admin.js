const messagesContainer = document.getElementById("messages");
const status = document.getElementById("status");

async function fetchMessages() {
  status.textContent = "Loading messages...";

  try {
    const res = await fetch("https://anonymous-messages-hxo8.onrender.com/secret/messages");
    const data = await res.json();

    if (!data.success) {
      status.textContent = "Failed to load messages";
      return;
    }

    status.textContent = `${data.count} messages found`;

    messagesContainer.innerHTML = "";

    data.messages.forEach((msg) => {
      const div = document.createElement("div");
      div.className =
        "bg-white p-4 rounded-lg shadow border-l-4 border-blue-500";

      div.innerHTML = `
        <p class="font-semibold text-gray-800">${msg.name}</p>
        <p class="text-gray-700 mt-1">${msg.message}</p>
        <p class="text-xs text-gray-400 mt-2">
          ${new Date(msg.createdAt).toLocaleString()}
        </p>
      `;

      messagesContainer.appendChild(div);
    });
  } catch (error) {
    status.textContent = "Backend not reachable";
    console.error(error);
  }
}

fetchMessages();
