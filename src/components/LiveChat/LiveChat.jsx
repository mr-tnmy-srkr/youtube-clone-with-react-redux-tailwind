import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../../utils/helper";
import ChatMessage from "../ChatMessage/ChatMessage";
import { setMessage } from "../../redux/features/chatSlice/chatSlice";


const LiveChat = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(16),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="px-4 py-1">
      <div>
        {message.map((item, idx) => {
          return <ChatMessage key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LiveChat;
