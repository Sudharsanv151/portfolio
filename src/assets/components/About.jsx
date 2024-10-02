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
        <div className="flex flex-row content-center h-screen justify-start gap-10">
            <div className="flex flex-col mr-10 ml-11 shadow-2xl h-1/2 w-auto pr-11 pl-11 shadow-slate-500/20 border-1 animate-gradient rounded-xl">
                <h1 className="text-5xl text-slate-300 font-home-font mr-9">About Me </h1><br />
                <p className="text-lg text-slate-300 font-para-font text-justify ">I am a Computer Science and Engineering Student at Sri Shakthi Institute of Engineering and Technology, Coimbatore. I have hands-on experience in MERN stack development, web development, machine
                    learning, and computer vision. Proficient in Java, Python, and MySQL. Eager to leverage technical expertise and leadership
                    experience to contribute to cutting-edge IT solutions</p>



            </div>
            <div className="flex flex-col mr-10 ml-11 shadow-2xl h-1/2 w-auto pr-11 pl-11 shadow-slate-500/20 border-1 animate-gradient">
                <h1 className="text-5xl text-slate-300 font-home-font ">Skills</h1><br />
                <div className="flex flex-row gap-28">
                    <div>
                    <p className="text-lg text-slate-300 font-para-font row-start-7">Languages:</p>
                    <ol className="text-white list-disc text-md">
                        <li>Java</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ol>
                    </div>
                    <div>
                    <p className="text-lg text-slate-300 font-para-font row-start-7">Development:</p>
                    <ol className="text-white list-disc text-md">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJs</li>
                    </ol>
                    </div>
                    <div>
                    <p className="text-lg text-slate-300 font-para-font row-start-7">Database/Tools:</p>
                    <ol className="text-white list-disc text-md">
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ol>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
