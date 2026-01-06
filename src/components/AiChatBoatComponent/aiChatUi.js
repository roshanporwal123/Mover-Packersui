import { useState, useRef, useEffect } from "react";
import api from "../../api/axios";
import "./aiChatUi.css";

export default function AiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/api/ai/chat", {
        message: input
      });

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: res.data.reply }
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong 😢" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="ai-chat">
      <div className="ai-chat-header">🤖 AI Assistant</div>

      <div className="chat-body">
        {messages.map((m, i) => (
          < div key={i} className={`message ${m.role}`}>
            {m.content}
          </div>
        ))}

        {loading && <div className="typing">AI is typing...</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input">
       <div> <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
          placeholder="Ask anything..."
        />
        </div>
        <div>
        
        <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
