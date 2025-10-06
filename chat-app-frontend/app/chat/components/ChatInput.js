"use client"
// import type React from "react"
import { useState } from "react"

export function ChatInput() {
//   const [text, setText] = useState("")

//   const submit = () => {
//     const trimmed = text.trim()
//     if (!trimmed) return
//     onSend(trimmed)
//     setText("")
//   }

//   const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       submit()
//     }
//   }

  return (
    <div className="flex items-end gap-2">
      <label htmlFor="chat-message" className="sr-only">
        Type your message
      </label>
      <textarea
        id="chat-message"
        rows={1}
       
        
        placeholder="Type a message..."
        className="flex-1 h-[48px] max-h-[140px] rounded-[14px] border-[4px] border-[#30303D] bg-transparent text-white text-[14px] sm:text-[16px] md:text-[16px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <button
       
        className="min-w-[110px] h-[48px] rounded-[13px] border-b-[4px] border-b-[rgba(223,106,186,0.86)] text-white font-bold text-[14px] sm:text-[16px] md:text-[16px] text-center bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)] hover:opacity-90"
        aria-label="Send message"
      >
        Send
      </button>
    </div>
  )
}
