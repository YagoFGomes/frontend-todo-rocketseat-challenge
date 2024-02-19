import React from "react";
import { FiAlertCircle, FiCheck } from "react-icons/fi";

interface MessageProps {
  type: "success" | "error";
  message: string;
}

function Message({ type, message }: MessageProps) {
  const colorMessage =
    type === "success"
      ? "bg-green-100 border border-green-400 text-green-700"
      : "bg-pink-100 border border-pink-400 text-pink-700";

  const titleMessage = type === "success" ? "Success" : "Something Wrong";
  const iconMessage =
    type === "success" ? <FiCheck size={18} /> : <FiAlertCircle size={18} />;

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div
        className={`flex justify-start flex-col ${colorMessage} px-4 py-3 rounded relative`}
        role="alert"
      >
        <strong className="font-bold">{titleMessage}</strong>
        <span className="block sm:inline">{message}</span>

        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          {iconMessage}
        </span>
      </div>
    </div>
  );
}

export default Message;
