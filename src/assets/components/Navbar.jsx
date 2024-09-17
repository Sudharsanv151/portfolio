

const Navbar = () => {
    return (
     <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <h1> Sudharsan V</h1>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
      </>
    );
  };
  

export default Navbar