
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const Landing = () => {
  return (
    <>
      <section className="relative bg-white">
      <div className='fixed top-0 right-0 bg-gray-200 pl-7 pr-4 pb-16  pt-3 clip-custom-polygon z-50 '>
        <div className='transform rotate-45 pb-2 font-bold'>
            <Link to="https://github.com/BroLetsCodeIt/CodeCollab.io" target='_blank' className='transform rotate-45 pb-2 font-bold'>
             <img src="./githublogo.png" alt="logo" className='w-10'/>
            </Link>
        </div>
     </div>
     <Header/>
        <div className="relative pt-[10rem] sm:pt-24 lg:pt-[10rem]">
          <div className="mx-auto px-6 max-w-7xl md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
              
              <h1 className="mt-8 text-wrap text-4xl md:text-5xl font-bold text-gray-950  xl:text-7xl xl:[line-height:1.125] tracking-tighter">
                CodeCollab.io <br className="hidden sm:block " /> 
                
              </h1>
              <div className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700  flex items-center justify-center gap-3 flex-wrap">
                <span className="border border-gray-200   rounded-full px-2 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-blue-500 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <p className="font-semibold">Collab</p>
                </span>
                <span className="border border-gray-200   rounded-full px-2 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-blue-500 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <p className="font-semibold">Debugging</p>
                </span>
                <span className="border border-gray-200   rounded-full px-2 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-blue-500 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                  <p className="font-semibold">Pair Programming</p>
                </span>
              </div>
              <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 ">
              CodeCollab.io is a seamless online platform designed to bring developers together. Whether you&apos;re working on a collaborative project, pair programming, or teaching, CodeCollab.io makes it easy for you to create a coding room & join one in real-time. With built-in support for multiple themes, CodeCollab.io enhances your collaborative coding experience.
              </p>
              <div className="mt-8 flex flex-row items-center justify-center gap-4">
                <div className=" shadow-sm rounded-md bg-gray-950/5 border-solid ">
                  <Link to={'/home'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Create Room</Link>
                </div>
                <div className="shadow-sm rounded-md bg-gray-950/5 border-solid">
                  <Link to={'/home'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Join Room</Link>
                </div>
              </div>
            </div>
            
            <div className="-mx-6 relative mt-8 sm:mt-12 sm:mx-auto ">
              <h1 className="flex items-center justify-center sm:text-4xl text-2xl font-bold py-10 tracking-tighter">How CodeCollab.io Work 🤔</h1>
              <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)] "></div>
              <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/10 mx-auto blur-3xl"></div>

              <div className="swiper proofSlides pb-6  w-full">
                <div className="swiper-wrapper ">
                  <div className="px-6 pt-2 pb-12 swiper-slide w-full ">
                    <div className="bg-white shadow-xl shadow-gray-950/5 p-[--card-padding] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative border-[length:var(--border-width)] [--anchor:100] [--border-radius:calc(var(--radius)*1px)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2] w-full">
            
                        {/* video  */}
                        <video width="320" height="240" controls preload="none" autoPlay loop muted className="w-full">
                          <source src="/vide.mp4" type="video/mp4" />
                          <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                          />
                          Your browser does not support the video tag.
                        </video>
                    
                      <span className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                        <span className="absolute inline-block aspect-square h-20 bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_5s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"></span>
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-2 pb-12 swiper-slide"></div>
                  <div className="px-6 pt-2 pb-12 swiper-slide"></div>
                </div>
                <div className="swiper-pagination -mb-3 *:!rounded-lg *:!w-14 *:!h-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;