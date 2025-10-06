"use client"

export function ChatMessage() {
  
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] sm:max-w-[70%] md:max-w-[60%] rounded-2xl border-[4px] px-3 py-2
        ${isMe ? "rounded-br-sm" : "rounded-bl-sm"}
        ${isMe ? "border-[#E46BBB] bg-white/5" : "border-[#30303D] bg-transparent"}
        `}
        aria-label={isMe ? "Your message" : "Their message"}
      >
        <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">{content}</p>
        <span className="block text-right text-white/60 text-[10px] sm:text-[11px] md:text-[12px] mt-1">{time}</span>
      </div>
    </div>
  )
}
