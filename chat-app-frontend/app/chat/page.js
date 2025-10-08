"use client"
import { useMemo, useRef, useEffect, useState } from "react"
// import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ChatMessage } from "./components/ChatMessage"
import { ChatInput } from "./components/ChatInput"
import { ChatSidebar } from "./components/ChatSidebar"
import { useRouter } from "next/navigation";

// type Message = {
//     id: string
//     author: "me" | "them"
//     content: string
//     time: string
// }

export default function ChatPage() {

    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        router.push("/login");
      }
    }, [router]);
    // const [activeChat, setActiveChat] = useState < string > ("general")
    // const messagesEndRef = useRef < HTMLDivElement > (null)

    // const messages: Message[] = useMemo(
    //     () => [
    //         { id: "m1", author: "them", content: "Welcome to the chat! How can I help you today?", time: "10:12" },
    //         { id: "m2", author: "me", content: "I’m testing this new chat UI you built.", time: "10:13" },
    //         { id: "m3", author: "them", content: "Great! It should match your login theme.", time: "10:14" },
    //         { id: "m4", author: "me", content: "Looks clean. I’ll hook it up to my backend next.", time: "10:15" },
    //     ],
    //     [],
    // )

    // useEffect(() => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // }, [messages, activeChat])

    // const handleSend = (text: string) => {
    //     console.log("[v0] Sending message:", text, "to room:", activeChat)
    // }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Gradient Circles (same theme as login) */}
            <div className="absolute -top-28 -left-18 sm:10 xl:left-28 2xl:left-36 w-[200px] sm:w-[254px] h-[200px] sm:h-[254px] rounded-full pointer-events-none bg-[radial-gradient(79.98%_79.98%_at_74.58%_16.62%,#E46BBB_0%,#EB78BD_29.89%,#B72EB2_73.63%,#81249A_100%)]"></div>
            <div className="absolute top-10 -right-20 xl:right-28 2xl:right-36 w-[120px] sm:w-[137px] h-[120px] sm:h-[137px] rounded-full pointer-events-none bg-[radial-gradient(84.4%_84.4%_at_27.78%_24.07%,_#646464_0%,_#292929_60.46%,_#0F0F0F_79.62%,_#1B1B1B_100%)]"></div>

            <main className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
                {/* Shell */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    {/* Sidebar */}
                    <aside className="md:w-[320px] w-full">
                        {/* <ChatSidebar activeChat={activeChat} onSelectChat={setActiveChat} /> */}
                        <ChatSidebar/>
                    </aside>

                    {/* Chat Panel */}
                    <section className="flex-1 min-h-[70vh] md:min-h-[80vh] bg-transparent rounded-2xl border-[4px] border-[#30303D] p-2 sm:p-3 md:p-4 flex flex-col">
                        {/* Header */}
                        <header className="px-2 sm:px-3 md:px-4 py-3 md:py-4 border-b-[4px] border-[#30303D] rounded-t-xl">
                            <h1 className="text-white font-poppins text-[20px] sm:text-[22px] md:text-[26px] font-bold">
                                {/* {activeChat === "general" ? "General" : activeChat === "support" ? "Support" : "Random"} */}
                            </h1>
                            <p className="text-white/70 text-[12px] sm:text-[13px] md:text-[14px]">
                                {/* {activeChat === "general"
                                    ? "Company-wide announcements and casual chat."
                                    : activeChat === "support"
                                        ? "Ask questions and get help."
                                        : "Off-topic conversation and fun stuff."} */}
                            </p>
                        </header>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-2 sm:px-3 md:px-4 py-4 space-y-3">
                            {/* {messages.map((m) => (
                                <ChatMessage key={m.id} author={m.author} content={m.content} time={m.time} />
                            ))}
                            <div ref={messagesEndRef} /> */}
                        </div>

                        {/* Input */}
                        <div className="px-2 sm:px-3 md:px-4 py-3 md:py-4 border-t-[4px] border-[#30303D] rounded-b-xl">
                            {/* <ChatInput onSend={handleSend} /> */}
                            <ChatInput/>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
