import Navbar from './Navbar'
import Prpic from '../img/Profilepic.jpeg'
import Java from '../img/java.png'


const Home=()=>{
    return(
        <div className="bg-gradient-to-r h- to-[#1F1C18] from-[#8E0E00] ">
        <Navbar />
        <div className="p-10 h-screen text-white ">
        <h1 className="h-1/4 text-4xl text-center font-semibold ">ABOUT ME</h1>
        <div className="w-[100%] text-white flex items-center gap-10">
        <p className="text-2xl flex-row text-justify font-mono h-4/5 w-4/5 ">  Hi I am Sudharsan V, a Computer Science Engineering Student at Sri Shakthi Institute of Engineering and Technology, Coimbatore. I am a proficient Coding Enthusiast and a learning Full Stack Web Developer. I am good at Java, MySQL, OpenCV, and Web development (HTML, CSS, JavaScript). I have completed various Courses and done 5 projects</p>
        <div className="flex justify-center items-center  h-3/5 w-3/5">
            <img src={Prpic} alt="Sudharsan V" className="rounded-full h-1/3  w-1/3"></img>
        </div>
        </div>      
        <h1 className="h-1/4 text-4xl text-center font-semibold p-48">MY SKILLS </h1>
        <div className="w-[100%] text-white flex items-center ">
            <div className="flex justify-center flexx-row items-center h-3/5 w-3/5 gap-14">
            <img src={Java} alt="Java" className="rounded-full h-1/3 w-1/3"></img>
            </div>
        </div>
        </div>
        </div>
    );
};
    

export default Home;