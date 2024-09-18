import Pricon from '../img/user.png'


const Navbar = () => {
    return (
     <>
      <nav className="h-20 w-full sticky flex top-0 justify-center rounded-lg bg-gradient-to-r to-[#1F1C18] from-[#8E0E00]">
        <div className="container flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <h1> Portfolio</h1>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="text-white hover:text-red-400">Home</a></li>
            <li><a href="#projects" className="text-white hover:text-red-400">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-red-400">Contact</a></li>
            <li><img src={Pricon} alt="pr" ></img></li>
          </ul>
        </div>
      </nav>
      </>
    );
  };
  

export default Navbar