import Aboutimg from '../img/Aboutimg.jpg';
import Java from '../img/skills/Java.gif';
import Python from '../img/skills/python.png';
import Clan from '../img/skills/c.gif';
import Jsc from '../img/skills/java-script.png';
import Html from '../img/skills/html.gif';
import Css from '../img/skills/css.gif';
import Rec from '../img/skills/physics.gif';
import Sql from '../img/skills/sql.png';
import Nodjs from '../img/skills/nodejs.png';
import Mongodb from '../img/skills/mongo.png';
import Git from '../img/skills/github.png';
import Opencv from '../img/skills/open.png';
import Vsc from '../img/skills/vsc.png';

const About = () => {
    return (
        <div className="flex flex-col h-screen"
            style={{
                backgroundImage: `url(${Aboutimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Main Content Section */}
            <div className="flex flex-col py-36 h-screen">
                <div className="flex justify-between contents-center ">
                    <div>
                        <h1 className="text-white px-28 pb-1 text-6xl font-home-font text">
                            About <span className="text-red-500 shadow-md">Me</span>
                        </h1>
                        <p className="w-3/5 text-xl px-28 mr-96 text-justify font-para-font text-white font-sans">
                            I'm a Highly motivated Computer Science student with hands-on experience in MERN stack development, web development, machine learning, and computer vision. Proficient in Java, Python, and MySQL. Eager to leverage technical expertise and leadership experience to contribute to cutting-edge IT solutions.
                        </p>
                    </div>

                    {/* Skills Section with Rotated GIFs */}
                    <div style={{ transform: 'rotate(21.5deg)' }} className="h-32 w-48 mr-96 flex-row md:block">
                        <div className="flex animate-pulse justify-between gap-3 h-12 w-12">
                            <img src={Java} alt="java" />
                            <img src={Python} alt="python" />
                            <img src={Clan} alt="c" />
                            <img src={Html} alt="html" />
                            <img src={Css} alt="css" />
                            <img src={Jsc} alt="javascript" />
                        </div>
                        <br />
                        <div className="flex justify-between animate-pulse gap-3 h-12 w-12">
                            <img src={Rec} alt="rec" />
                            <img src={Nodjs} alt="nodejs" />
                            <img src={Sql} alt="sql" />
                            <img src={Mongodb} alt="mongodb" />
                            <img src={Git} alt="git" />
                            <img src={Opencv} alt="opencv" />
                        </div>
                    </div>
                </div>
                {/* Resume Button Section - Centered */}
                <div style={{ transform: 'rotate(-2.7deg)' }} className="flex justify-center py-36 items-center">
                    <a href="https://drive.google.com/file/d/1h7TOUYgkUi1rHNDjbccdjxAICoDRsnW4/view?usp=sharing">
                        <div
                            className="z-20 duration-300 hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_56deg)] group  border-white border-4 overflow-hidden rounded-2xl relative h-40 w-72 bg-zinc-700 p-5 flex flex-col items-start gap-4"
                            style={{ zIndex: 20 }}  // Moves the button forward
                        >
                            <div className="text-gray-50">
                                <span className="font-bold text-4xl">Resume</span>
                                <p className="text-xs">Here's my resume</p>
                            </div>
                            <button className="duration-300 hover:bg-green-500 border hover:text-gray-50 bg-gray-50 font-semibold text-black px-3 py-2 flex flex-row items-center gap-3">
                                Download
                                <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="80" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"></path>
                                </svg>
                            </button>
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-32 h-32 z-10 -my-2 fill-gray-50 stroke-white">
                                <path strokeWidth="5" strokeMiterlimit="10" d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h0.1c3 0 3.8-6.3 3.8-7.3s0.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s0.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 0.5 5-9.5 6.8S2 62 2 62h60a14.6 14.6 0 0 0-11.6-11z"></path>
                            </svg>
                        </div>
                    </a>
                </div>


            </div>


        </div>
    );
}

export default About;
