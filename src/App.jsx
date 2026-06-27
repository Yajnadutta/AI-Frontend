import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);
const recognitionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://ai-backend-ddch.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      const aiResponse =
        data?.choices?.[0]?.message?.content ||
        data?.message?.content ||
        "No response received";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
const startListening = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in your browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    setListening(true);
  };

  recognition.onresult = (event) => {
    let transcript = "";

    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }

    setMessage(transcript);
  };

  recognition.onerror = (event) => {
    console.error(event.error);
    setListening(false);
  };

  recognition.onend = () => {
    setListening(false);
  };

  recognition.start();

  recognitionRef.current = recognition;
};
const speak = (text) => {
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
};

const sendVoiceMessage = async (voiceText) => {
  if (!voiceText.trim()) return;

  const userMessage = {
    role: "user",
    content: voiceText,
  };

  setMessages((prev) => [...prev, userMessage]);
  setLoading(true);

  try {
    const response = await fetch(
      "https://ai-backend-ddch.onrender.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      }
    );

    const data = await response.json();

    const aiResponse =
      data?.choices?.[0]?.message?.content ||
      "No response";

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
      },
    ]);

    speak(aiResponse);
  } catch (err) {
    console.log(err);
  }

  setLoading(false);
};
  return (
    <div className="chat-container">
      <div className="header">
       <h2>🧠 YMind AI</h2>
      </div>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user-message" : "assistant-message"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
            <span>{currentTime}</span>
          </div>
        ))}

        {loading && (
          <div className="message assistant-message" style={{ padding: "14px 22px" }}>
            Thinking...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <textarea
          placeholder="Message AI Assistant..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
<button
  className={`mic-btn ${listening ? "active" : ""}`}
  onClick={startListening}
>
  {listening ? "🎙️" : "🎙️"}
</button>
        <button onClick={sendMessage} disabled={loading}>
          ➤
        </button>
      </div>
      <footer className="footer">
  <p>
    Developed with <span className="heart">❤️</span> by{" "}
    <span className="developer-name">Yajnadutta Mishra</span>
  </p>
  <span className="developer-role">React AI Developer</span>
</footer>
    </div>
  );
}

export default App;