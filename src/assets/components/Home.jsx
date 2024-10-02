import Profileimg from '../img/Profilepic.jpg'

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                {/* <h1 className="font-para-font  text-white text-4xl pb-10">Hey Everyone!</h1> */}
                <div className="flex flex-row items-center mx-56 gap-16  pr-11 pl-11  content-center  h-1/2 w-auto  shadow-2xl shadow-slate-500/20 border-1 animate-gradient">
                    <div>
                        <img src={Profileimg} className="w-52" />
                    </div>
                    <div>
                        <h1 className="text-slate-300 pt-4 text-6xl font-home-font">
                            I'm <span className="text-slate-300"><br />Sudharsan V</span>
                            <p className="text-2xl  text-gray-400 font-para-font">Aspiring Full Stack Developer <br /> </p>
                        </h1>
                        <div className="flex flex-row gap-3">
                            <a href="https://drive.google.com/file/d/1h7TOUYgkUi1rHNDjbccdjxAICoDRsnW4/view?usp=drive_link">
                                <button class="w-[130px] bg-slate-800 h-[40px] my-3 flex items-center  border-white border-2 justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                                    Download CV
                                </button>
                            </a>
                            <a href="https://drive.google.com/file/d/1h7TOUYgkUi1rHNDjbccdjxAICoDRsnW4/view?usp=drive_link">
                                <button class="w-[130px] bg-slate-800 h-[40px] my-3 flex items-center border-white border-2 justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-gradient-to-l before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:right-0 text-[#fff]">
                                    
                                Contact Info
                                </button>     
                        </a>
                    </div>
                    <div>
                        <a href="#"> 
                            
                        </a>
                    </div>
                    
                </div>

            </div>

        </div >
        </>
    );
};

export default Home;
