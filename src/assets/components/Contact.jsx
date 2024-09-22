import Contactbg from '../img/Contactbg.jpg'
import 'leaflet/dist/leaflet.css';



const Contact = () => {
    return (
        <div>
            <div
                className="flex flex-col items-center justify-center h-screen"
                style={{
                    backgroundImage: `url(${Contactbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <h1 className="text-6xl text-white font-home-font pb-10"> Contact <span className="text-red-500">Me</span> </h1>
                <div class=" w-2/4 mx-auto bg-zinc-800 rounded-lg shadow-md p-4 font-para-font">
                    <form>
                        <div class="mb-4">
                            <label class="block mb-2 text-gray-50" for="name"> Name </label>
                            <input
                                placeholder="Your Name"
                                class="w-full p-2 border-b-2 border-white text-white bg-transparent outline-none focus:border-b-2 focus:border-green-500"
                                type="text"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-gray-50" for="email"> Email </label>
                            <input
                                placeholder="Your Email"
                                class="w-full p-2 border-b-2 border-white text-white bg-transparent outline-none focus:border-b-2 focus:border-green-500"
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-gray-50" for="message"> Message </label>
                            <textarea
                                placeholder="Your Message"
                                class="w-full p-2 border-b-2 border-white text-white bg-transparent outline-none focus:border-b-2 focus:border-green-500"
                                rows="4"
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <div class="mb-4">
                            <button
                                class="w-full bg-blue-400 text-white font-semibold p-2 rounded transition-all hover:bg-green-600"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>


            </div>
            <div className="bg-zinc-800 text-white text-lg h-2/3 w-full">
                <div className="flex flex-col px-7 pb-10">
                    <p className=" pt-10 font-para-font text-xl"> CONTACT ME:</p>
                    <div className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p> <a href="#">9585486778 </a></p>
                    </div>
                    <div className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p> <a href="mailto:sudharsan152005@gmail.com">sudharsan152205@gmail.com</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact