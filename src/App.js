import React, { useState } from "react";
import { Smile, Paperclip } from "lucide-react";

const mockMessages = [
  { sender: "Alice", content: "Cześć! 😊" },
  { sender: "Ty", content: "Hej! Widziałem dokument." },
  { sender: "Alice", content: "Świetnie!" },
];

function App() {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "Ty", content: newMessage }]);
    setNewMessage("");
  };

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif", maxWidth: 400, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Conspiratio 💬</h1>
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12, height: 300, overflowY: "scroll", background: "#fff" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button><Smile size={20} /></button>
        <button><Paperclip size={20} /></button>
        <input
          style={{ flex: 1, padding: 8 }}
          placeholder="Wpisz wiadomość..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Wyślij</button>
      </div>
    </div>
  );
}

export default App;