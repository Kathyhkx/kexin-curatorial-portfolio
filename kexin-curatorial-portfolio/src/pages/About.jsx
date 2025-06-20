import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const About = () => {
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (window.innerWidth >= 1024) { // Tailwind's lg breakpoint
        if (textContainerRef.current && imageContainerRef.current) {
          const textHeight = textContainerRef.current.offsetHeight;
          imageContainerRef.current.style.height = `${textHeight}px`;
        }
      } else {
        // On smaller screens, revert to CSS-defined height
        if (imageContainerRef.current) {
          imageContainerRef.current.style.height = '';
        }
      }
    };

    setHeight(); // Set on initial render

    // A slight delay to ensure all content is loaded before the final height calculation
    const timeoutId = setTimeout(setHeight, 100);

    // Adjust height on window resize
    window.addEventListener('resize', setHeight);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="relative grid grid-cols-1 lg:grid-cols-5">
        {/* Image Column */}
        <div ref={imageContainerRef} className="relative w-full h-96 lg:h-auto lg:col-span-2">
          <img
            src="/about.jpg"
            alt="Kexin"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text Column */}
        <div ref={textContainerRef} className="flex flex-col justify-center text-left space-y-6 p-12 sm:p-16 lg:py-16 lg:px-24 lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm Kexin — an independent curator and artist drawn to building experiences that connect people, communities, and places.
          </h1>
          <p className="text-lg text-gray-600">
            I create exhibitions and digital experiences that speak to both heart and history, often working at the intersection of archival research, multimedia design, and community voices. Whether I'm curating a music-based exhibition in a local museum or building a virtual gallery using tools like Figma, I'm always searching for new ways to make culture more accessible, emotional, and alive.
          </p>
          <p className="text-lg text-gray-600">
            Some of my favorite projects include A City in Tune, a community-rooted exhibition exploring Mississauga's soundscape, and a virtual exhibition on Nazi-looted art that reimagines historical memory through digital design.
          </p>
          <p className="text-lg text-gray-600">
            Previously, I've worked with museums, community centres, non-profit education organizations, recording studios, musicians, and archives to bring collections and stories to life across physical and digital platforms. My work is shaped by my academic background in Information and Museum Studies and my hands-on approach to telling stories through visuals, sound, technology, and multimedia experiences.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors shadow-md"
            >
              Connect With Me
            </Link>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
          <a href="#collaborations" className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Collaborations Section */}
      <div id="collaborations" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Collaborated With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Logos */}
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Museums of Mississauga</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Mississauga Music</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Metalworks Studios</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Yonge North York BIA</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Mississauga Arts Council</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Meridian Arts Centre</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Living Arts Centre</span>
            </div>
            <div className="flex justify-center">
              <span className="text-gray-500 font-semibold text-lg">Malton Youth Hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 