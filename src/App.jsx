import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
const [voiceText, setVoiceText] = useState("");
const [copiedIndex, setCopiedIndex] = useState(null);

const copyToClipboard = async (text, index) => {
  await navigator.clipboard.writeText(text);

  setCopiedIndex(index);

  setTimeout(() => {
    setCopiedIndex(null);
  }, 2000);
};
const recognitionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
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

  // Create updated chat history
  const updatedMessages = [...messages, userMessage];

  // Update UI immediately
  setMessages(updatedMessages);
  setMessage("");
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
          messages: updatedMessages,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const aiResponse =
      data?.choices?.[0]?.message?.content ||
      data?.message?.content ||
      "No response received";

    // Speak the AI response
   // speak(aiResponse);

    // Add AI response to chat
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
      },
    ]);
  } catch (error) {
    console.error("Send Message Error:", error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "❌ Something went wrong. Please try again.",
      },
    ]);
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
const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};

const startListening = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = true;

  let transcript = "";

  setVoiceText("");
  setShowVoiceModal(true);

  recognition.onstart = () => {
    setListening(true);
  };

  recognition.onresult = (event) => {
    transcript = "";

    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }

    setVoiceText(transcript);
  };

  recognition.onerror = (event) => {
    console.log(event.error);

    setListening(false);
    setShowVoiceModal(false);
  };

  recognition.onend = () => {
    setListening(false);
    setShowVoiceModal(false);

    if (transcript.trim()) {
      sendVoiceMessage(transcript);
    }
  };

  recognition.start();
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
  if (!voiceText.trim() || loading) return;

  const userMessage = {
    role: "user",
    content: voiceText,
  };

  // Create updated conversation
  const updatedMessages = [...messages, userMessage];

  // Show user's voice message immediately
  setMessages(updatedMessages);
  setLoading(true);
console.log("Sending voice message:", updatedMessages);
  try {
    const response = await fetch(
      "https://ai-backend-ddch.onrender.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const aiResponse =
      data?.choices?.[0]?.message?.content ||
      data?.message?.content ||
      "No response received";

    // Add AI response
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
      },
    ]);

    // Speak AI response
    //speak(aiResponse);
  } catch (err) {
    console.error("Voice API Error:", err);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "❌ Unable to connect to the server.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className={`chat-container ${theme}`}>
      <div className="header">
       <h2>🧠 YMind AI</h2>
        <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? <svg aria-label="Moon icon" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg aria-label="Sun icon" style={{color:"white"}} width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
      </button>
      </div>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user-message" : "assistant-message"
            }`}
          >
            {msg.role != "user"?    
            <span
          className="copy-btn"
          onClick={() => copyToClipboard(msg.content, index)}
        >
          {copiedIndex === index ? "✅" : "📋"}
        </span>:null}
             
            <ReactMarkdown>{msg.content}</ReactMarkdown>
               
             {msg.role === "assistant" && (
              <button
                className="speak-btn"
                onClick={() => speak(msg.content)}
              >
                🔊
              </button>
            )}
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
      {showVoiceModal && (
  <div className="voice-overlay">
    <div className="voice-modal">

      <div className="voice-animation">
        🎙️
      </div>

      <h2>Listening...</h2>

      <p>
        {voiceText || "Start speaking..."}
      </p>

    </div>
  </div>
)}
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