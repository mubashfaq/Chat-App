"use client"
import { useMemo, useState } from "react"
import Link from "next/link"
import { logout } from "@/lib/AuthApi"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";

// type SidebarProps = {
//   activeChat: string
//   onSelectChat: (id: string) => void
// }

// type Room = { id: string; name: string; last: string; unread?: number }

export function ChatSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await logout();

    // Always clear localStorage even if API fails
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");

    if (res.success) {
      toast.success("Logged out successfully!");
    } else {
      toast.error(res.message || "Logout failed!");
    }

    router.push("/login");
  };
  //   const rooms = useMemo<Room[]>(
  //     () => [
  //       { id: "general", name: "General", last: "Theme ready. Ship chat next!", unread: 2 },
  //       { id: "support", name: "Support", last: "Let us know if you need help." },
  //       { id: "random", name: "Random", last: "Friday memes dropping soon." },
  //     ],
  //     [],
  //   )
  //   const [q, setQ] = useState("")

  //   const filtered = rooms.filter(
  //     (r) => r.name.toLowerCase().includes(q.toLowerCase()) || r.last.toLowerCase().includes(q.toLowerCase()),
  //   )

  return (
    <div className="bg-transparent rounded-2xl border-[4px] border-[#30303D] p-3 sm:p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-white font-poppins text-[18px] sm:text-[20px] md:text-[22px] font-bold">Chats</h2>
        <button
          onClick={handleLogout}
          className="text-white/80 hover:text-white text-[12px] sm:text-[13px] md:text-[14px] underline cursor-pointer"
        >
          LOGOUT
        </button>
      </div>

      {/* Search */}
      <label className="sr-only" htmlFor="chat-search">
        Search chats
      </label>
      <input
        id="chat-search"


        placeholder="Search"
        className="w-full h-[44px] rounded-[14px] border-[4px] border-[#30303D] bg-transparent text-white text-[14px] sm:text-[16px] md:text-[16px] px-3 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3"
      />

      {/* Rooms */}
      <ul className="space-y-2">
        {/* {filtered.map((room) => {
          const active = room.id === activeChat
          return (
            <li key={room.id}>
              <button
                onClick={() => onSelectChat(room.id)}
                className={`w-full text-left rounded-[14px] border-[4px] px-3 py-3 transition-colors
                  ${active ? "border-[#E46BBB] bg-white/5" : "border-[#30303D] hover:border-[#4a4a5a]"}
                  `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
                    {room.name}
                  </span>
                  {room.unread ? (
                    <span className="ml-2 inline-flex min-w-6 h-6 items-center justify-center rounded-full text-[12px] font-bold text-white bg-[radial-gradient(2640.68%_277.52%_at_114.84%_369.84%,_#E46BBB_0%,_#E280C1_8.33%,_#D9D9D9_43.75%,_#EB78BD_43.76%,_rgba(183,46,178,0.94)_100%)]">
                      {room.unread}
                    </span>
                  ) : null}
                </div>
                <p className="text-white/70 text-[12px] sm:text-[13px] md:text-[14px] mt-1 line-clamp-1">{room.last}</p>
              </button>
            </li>
          )
        })} */}
      </ul>
    </div>
  )
}
