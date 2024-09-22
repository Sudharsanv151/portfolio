import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between px-7 py-3 bg-zinc-800 shadow-2xl rounded-sm">
      <a href="#"><h1 className="text-2xl font-bold text-white">Sudharsan V</h1></a>
      <nav className="hidden md:block text-white ">
        <ul className="flex gap-x-5">
          <li><a href="#" className="hover:text-red-500">Home</a></li>
          <li><a href="#" className="hover:text-red-500">About</a></li>
          <li><a href="#" className="hover:text-red-500">Projects</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>
      {isOpen && <nav className="block md:hidden text-white">
        <ul className="flex flex-col mobile-nav">
          <li><a href="#" className="hover:text-red-500">Home</a></li>
          <li><a href="#" className="hover:text-red-500">Projects</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>}
      <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </button>
    </div>
  )
}

export default Navbar