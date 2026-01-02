const sendBtn = document.getElementById("sendBtn");
const status = document.getElementById("status");

sendBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // basic validation
  if (!message) {
    status.textContent = "❌ Message cannot be empty";
    status.className = "text-center text-sm mt-3 text-red-600";
    return;
  }

  status.textContent = "Sending...";
  status.className = "text-center text-sm mt-3 text-gray-600";

  try {
    const res = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name || "Anonymous",
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      status.textContent = "✅ Message sent successfully!";
      status.className = "text-center text-sm mt-3 text-green-600";

      // clear message only
      document.getElementById("message").value = "";
      document.getElementById("name").value = "";
    } else {
      status.textContent = "❌ Something went wrong";
      status.className = "text-center text-sm mt-3 text-red-600";
    }
  } catch (error) {
    status.textContent = "❌ Backend not reachable";
    status.className = "text-center text-sm mt-3 text-red-600";
    console.error(error);
  }
});
