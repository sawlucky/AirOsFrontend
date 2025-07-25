import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const LiveChat = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const loggedInUser = useSelector((store) => store?.user?.loggedInUser?.username);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userColors, setUserColors] = useState({});
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const getUserColor = (username) => {
    if (!userColors[username]) {
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setUserColors((prev) => ({ ...prev, [username]: newColor }));
      return newColor;
    }
    return userColors[username];
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = () => {
    if (userMessage.trim() === "" || !loggedInUser) return;

    socketRef.current.emit("new_message", {
      sender: loggedInUser,
      message: userMessage,
    });

    setMessages((prev) => [
      ...prev,
      {
        sender: loggedInUser,
        message: userMessage,
        color: getUserColor(loggedInUser),
        isCurrentUser: true,
      },
    ]);

    setUserMessage("");
  };

  useEffect(() => {
    socketRef.current = io(`${API_BASE_URL}`);

    socketRef.current.on("all_messages", (data) => {
      const formatted = data.map((msg) => ({
        sender: msg.sender,
        message: msg.message,
        color: getUserColor(msg.sender),
        isCurrentUser: msg.sender === loggedInUser,
      }));
      setMessages(formatted);
    });

    socketRef.current.on("server_message", (newMsg) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: newMsg.sender,
          message: newMsg.message,
          color: getUserColor(newMsg.sender),
          isCurrentUser: newMsg.sender === loggedInUser,
        },
      ]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [loggedInUser]);

  return (
    <div className="w-full h-[70vh] sm:h-[540px] md:h-[60vh] lg:h-[97.5vh] relative bg-[#191919] rounded-lg overflow-hidden border border-[#191919]">
      {/* Messages */}
      <div className="h-[calc(100%-60px)] sm:h-[calc(100%-70px)] overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.isCurrentUser ? "items-end" : "items-start"}`}
          >
            <div className="rounded-lg px-2 sm:px-3 py-1 sm:py-2 bg-[#2a2a2a] max-w-[90%]">
              <span className="text-xs sm:text-sm font-semibold" style={{ color: msg.color }}>
                {msg.sender}
              </span>
              <p className="text-xs sm:text-sm text-white font-normal break-words">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="w-full absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-[#1E1E1E] border-t border-[#2B2B2B]">
        {loggedInUser ? (
          <div className="flex gap-2 sm:gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-[#2B2B2B] text-white p-1 sm:p-2 rounded-lg border border-[#3B3B3B] focus:outline-none focus:border-[#FECC30] text-xs sm:text-sm"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#FECC30] text-black px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-yellow-400 transition-colors text-xs sm:text-sm"
            >
              Send
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-1 sm:py-2 text-xs sm:text-sm">
            Sign in to participate in the chat
            
          </div>

          
        )}
      </div>
      
    </div>
  );
};

export default LiveChat;
