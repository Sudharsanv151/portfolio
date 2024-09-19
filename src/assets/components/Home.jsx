import Navbar from './Navbar'
import Prpic from '../img/Profilepic.jpeg'
import Java from '../img/java.png'


const Home=()=>{
    return(
        <div className="">
        <Navbar />
        <div className="p-10 h-screen text-black ">    
        {/* <div className="container h-2/5 w-2/4 my-20 ml-auto shadow-2xl rounded-3xl bg-gray-50 p-15 content-center ">
        <h1 className="text-4xl text-center font-semibold my-auto font-sans">ABOUT ME</h1>
            <p className=" text-xl  p-3  text-justify  m-4 font-sans">
            Hi I am Sudharsan V, a highly motivated Computer Science student with hands-on experience in MERN stack development, web development, machine
            learning, and computer vision. Proficient in Java, Python, and MySQL. Eager to leverage technical expertise and leadership
            experience to contribute to cutting-edge IT solutions
            </p>
            {/* <img src={Prpic} alt="profile-pic"className="h-1/4 w-1/4  justify-center flex"></img> */}  
        {/* </div> */} 
        <div class="w-2/4 h-2/5 py-8 my-20 ml-auto p-15 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div class="col-span-2 text-3xl font-bold capitalize rounded-md">
    ABOUT ME 
  </div>
  <div class="col-span-2 rounded-md">
  Hi I am Sudharsan V, a highly motivated Computer Science student with hands-on experience in MERN stack development, web development, machine
            learning, and computer vision. Proficient in Java, Python, and MySQL. Eager to leverage technical expertise and leadership
            experience to contribute to cutting-edge IT solutions.
  </div>
  <div class="col-span-1 flex-row">
    <a href="https://sudharsanv151.github.io/" target="_blank">
        <button class="rounded-md bg-slate-300 mr-20 flex-row flex hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            <p className="mr-2">Resume</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        </button>
    </a>
</div>

  

  </div>
        </div>
        </div>
    );
};
    

export default Home;