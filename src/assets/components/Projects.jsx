import Erc from '../img/projects/Erc.png'
import Anpr from '../img/projects/Anpr.png'
import Stpaws from '../img/projects/Streetpaws.png'
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

const Projects = () => {
  return (
    <>
      <h1 className="text-slate-300 pt-4 text-5xl font-home-font text-center">My Projects </h1>
      <div className="flex flex-row  gap-16  h-screen bg-slate-950 font-para-font content-center justify-center">

        <div class="flex justify-center items-center min-h-screen ">
          <div class="max-w-[720px] mx-auto shadow-2xl shadow-slate-500/20 border-1 animate-gradient">
            <div class="block mb-4 mx-auto  border-slate-300 pb-2 max-w-[360px]">
              <a
                target="_blank"
                href="https://www.material-tailwind.com/docs/html/card"
                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
              >
              </a>
            </div>

            <div class="relative flex flex-col mt-6 text-white bg-slate-800 shadow-md bg-clip-border rounded-xl w-96">
              <div
                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={Erc}
                  alt="card-image" />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  AI-Powered Emotional Resilience Coach
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  A platform that analyzes emotions and offers personalized stress-relief recommendations through engaging content like memes and songs.
                </p>
                <div className="flex flex-row gap-2 pt-3">
                  <img src={Rec} className="size-7" alt="" />
                  <img src={Python} className="size-7" alt="" />
                  <img src={Nodjs} className="size-7" alt="" />
                  <img src={Mongodb} className="size-7" alt="" />
                  <img src={Git} className="size-7" alt="" />

                </div>

              </div>
              <div class="p-6 pt-0">
              <a href="https://github.com/Sudharsanv151/Emotional_resilience_coach" target="_blank">
                  <button class="w-[130px] bg-slate-800 h-[40px] my-3 flex items-center  border-white border-2 justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                    Source
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center min-h-screen">
          <div class="max-w-[720px] mx-auto shadow-2xl shadow-slate-500/20 border-1 animate-gradient">
            <div class="block mb-4 mx-auto border-slate-300 pb-2 max-w-[360px]">
              <a
                target="_blank"
                href="https://www.material-tailwind.com/docs/html/card"
                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
              >
              </a>
            </div>

            <div class="relative flex flex-col mt-6 text-white bg-slate-800 shadow-md bg-clip-border rounded-xl w-96">
              <div
                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={Anpr}></img>
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  ANPR & Alert System
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  A reliable and efficient system that detects and recognizes vehicle license plates using advanced image processing and OCR, sending SMS alerts for improved security and convenience.
                </p>
                <div className="flex flex-row gap-2 pt-3">
                  <img src={Vsc} className="size-7" alt="" />
                  <img src={Python} className="size-7" alt="" />
                  <img src={Opencv} className="size-7" alt="" />
                  <img src={Sql} className="size-7" alt="" />
                  <img src={Git} className="size-7" alt="" />
                </div>

              </div>
              <div class="p-6 pt-0">
              <a href="https://github.com/Sudharsanv151/ANPR-alert-system" target="_blank">
                  <button class="w-[130px] bg-slate-800 h-[40px] my-3 flex items-center  border-white border-2 justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                    Source
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center min-h-screen">
          <div class="max-w-[720px] mx-auto shadow-2xl shadow-slate-500/20 border-1 animate-gradient">
            <div class="block mb-4 mx-auto  border-slate-300 pb-2 max-w-[360px]">
              <a
                target="_blank"
                href="https://www.material-tailwind.com/docs/html/card"
                class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
              >
              </a>
            </div>

            <div class="relative flex flex-col mt-6 text-white bg-slate-800 shadow-md bg-clip-border rounded-xl w-96">
              <div
                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={Stpaws}
                  alt="card-image" />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Street Paws
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  A platform supporting street animals by connecting users with adoption resources, providing animal welfare information, and guiding the adoption process through helpful contents.
                </p>
                <div className="flex flex-row gap-2 pt-3">
                  <img src={Html} className="size-7" alt="" />
                  <img src={Css} className="size-7" alt="" />
                  <img src={Sql} className="size-7" alt="" />
                  <img src={Git} className="size-7" alt="" />

                </div>

              </div>
              <div class="p-6 pt-0">
              <a href="https://github.com/Sudharsanv151/streetpaws" target="_blank">
                  <button class="w-[130px] bg-slate-800 h-[40px] my-3 flex items-center  border-white border-2 justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                    Source
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects