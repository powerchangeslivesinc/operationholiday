import { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  _id: string;
  text: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  // Fetch messages from backend
  useEffect(() => {
    axios.get<Message[]>('http://localhost:5000/api/messages')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  // Send new message
  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      const res = await axios.post<Message>('http://localhost:5000/api/messages', { text: input });
      setMessages([...messages, res.data]);
      setInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-2xl font-bold">🏠 Home Page</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
        className="border p-2 mr-2"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
      <ul className="mt-4">
        {messages.map(m => (
          <li key={m._id} className="border-b py-1">{m.text}</li>
        ))}
      </ul>
    </div>
  );
}
