import React from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import styles from "./styles.module.css";
import ScrollableFeed from 'react-scrollable-feed'
const ChatList = () => {
  const { messages } = useChat();

  return (
    <div className={styles.chatList}>
        <ScrollableFeed forceScroll={true}>
      {messages.map((item, key) => (
        <ChatItem key={key} item={item} />
      ))}
      </ScrollableFeed>
    </div>
  );
};

export default ChatList;
