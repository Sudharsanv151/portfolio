import Projectbg from '../img/Probg.jpg'
import Erc from '../img/projects/Erc.png'
import Anpr from '../img/projects/Anpr.png'
import Stpaws from '../img/projects/Streetpaws.png'

const Projects = () => {
  return (
    <div className="flex flex-col py-20 px-28 h-screen "
      style={{
        backgroundImage: `url(${Projectbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div>
        <h1 className="text-6xl text-white font-home-font pb-3 ">My <span className="text-red-500">Projects</span></h1><br />
      </div>
      <div className="flex flex-row gap-11 font-para-font ">
        <div class="w-72 p-4 bg-zinc-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={Erc} />
          <div class="p-4">
            <h2 class="text-xl  text-white font-semibold pb-2">AI-POWERED EMOTIONAL RESILIENCE COACH</h2>
            <p class="text-white ">A platform that analyzes emotions and offers personalized stress-relief recommendations through engaging content like memes and songs.</p>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/Sudharsanv151/Emotional_resilience_coach">
                <button class="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Source</button>
              </a>
            </div>
          </div>
        </div>
        <div class="w-72 p-4 bg-zinc-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={Anpr} />
          <div class="p-4">
            <h2 class="text-xl  text-white font-semibold pb-2">ANPR ALERT SYSTEM</h2>
            <p class="text-white">A reliable and efficient system that detects and recognizes vehicle license plates using advanced image processing and OCR, sending real-time SMS alerts for improved security and convenience.</p>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/Sudharsanv151/ANPR-alert-system">
                <button class="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Source</button>
              </a>
            </div>
          </div>
        </div>
        <div class="w-72 p-4 bg-zinc-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img class="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={Stpaws} />
          <div class="p-4">
            <h2 class="text-xl  text-white font-semibold pb-2">STREET PAWS</h2>
            <p class="text-white">A platform supporting street animals by connecting users with adoption resources, providing animal welfare information, and guiding the adoption process through helpful links and videos.</p>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/Sudharsanv151/streetpaws">
                <button class="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Source</button>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Projects