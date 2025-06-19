import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ACityInTune = () => {
  const location = useLocation();
  const [showBlobs, setShowBlobs] = useState(true);

  const highlights = [
    {
      title: "Mood-Based Music Discovery Kiosk",
      description: `One of the parts of this exhibition that I'm most proud of was building an interactive music kiosk from scratch using a Raspberry Pi. I wanted to create a moment of surprise and involvement where visitors could choose a mood and a scene, then be matched with a song created by a local musician and get the chance to access the curated Spotify playlist via a QR code. Behind the scenes, I programmed it in Python with the Kivy GUI framework and designed it to reflect the experience of a vintage jukebox. For me, it was a way to explore how media technology can offer effortless but meaningful experiences that feel personal, playful, and relatable.`,
      image: "/project1-jukebox.jpg"
    },
    {
      title: "Collaborative Story Curation Framework",
      description: `This project gave me the opportunity to practice the philosophy that the most meaningful ideas often surface when we leave space for them to grow. I worked with archival records, interviews, and local perspectives, but what truly guided the process was a willingness to stay open. As my team sorted through information, we built a flexible structure that allowed ideas to shift and take shape naturally. Stories emerged not just from planned research but from conversations, memories, and quiet patterns that revealed themselves along the way.`,
      image: "/project1-albumcovers.jpg"
    },
    {
      title: "Let the Stories Flow Through Gallery Spaces",
      description: `Designing the exhibition wasn't just about selecting content but about shaping how each piece lived in the space. As the exhibition designer for this project, I considered how sound, text, and visual elements could support one another and guide people through the experience. From the placement of installations to the rhythm of walking paths, every decision was a chance to let the story unfold naturally. I wanted the gallery to feel less like a room full of answers and more like an open field for thoughts and connections.`,
      image: "/project1-layers.jpg"
    },
    {
      title: "Bridge Time Through How We Listen",
      description: `Rather than simply presenting a history of music technology, I focused on how to use the panel design and display of artifacts to encourage the visitors to explore the environment around them rather than just getting the information passively. Each object, from the TV cabinet to the CD player, was positioned not just to inform, but to spark curiosity, movement, and reflection. I designed the experience to invite people to step into different eras and notice how changes in format shaped how we relate to music.`,
      image: "/project1-musicformats.jpg"
    },
    {
      title: "Tying Threads Across the City",
      description: `One of the most fulfilling parts of this project was watching how the exhibition could become a connector. What started as a museum-based experience extended beyond the gallery walls, offering ways for musicians, venues, and organizers to find each other. The venue map, for example, became more than just a visual. It served as an entry point for local artists to discover new performing stages. A story we included about the Malton Youth Hub opened up conversations about how event organizers can better support young musicians with talent but limited access.`,
      image: "/project1-venuemap.jpg"
    }
  ]

  useEffect(() => {
    setShowBlobs(false);
    const timeout = setTimeout(() => setShowBlobs(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen scrollbar-none" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      {/* Header Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden py-32">
        {/* Animated background blobs */}
        {showBlobs && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-[#00f0ff] opacity-40 rounded-full blur-3xl blob-animate1" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-[#ff00e0] opacity-30 rounded-full blur-3xl blob-animate2" />
            <div className="absolute top-[30%] left-[50%] w-[25vw] h-[25vw] bg-[#a259ff] opacity-30 rounded-full blur-2xl blob-animate3" />
          </div>
        )}
        <div className="w-full flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">A City in Tune</h1>
          <p className="text-xl text-gray-600 mb-8 italic">Bradley Museum, Mississauga, ON | April 2025 - August 2025</p>
        </div>
      </section>

      {/* Highlights Sections */}
      {highlights.map((highlight, index) => {
        const isImageLeft = index % 2 === 0
        const bgColor = index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
        return (
          <section
            key={index}
            className={`py-24 w-full ${bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {isImageLeft ? (
                <>
                  {/* Image 1/3 */}
                  <div className="md:col-span-1 flex justify-center items-center mb-8 md:mb-0">
                    <div className="relative w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Text 2/3 */}
                  <div className="md:col-span-2 space-y-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold">{highlight.title}</h2>
                    <p className="text-xl text-gray-700">{highlight.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text 2/3 */}
                  <div className="md:col-span-2 space-y-8 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-4xl font-bold">{highlight.title}</h2>
                    <p className="text-xl text-gray-700">{highlight.description}</p>
                  </div>
                  {/* Image 1/3 */}
                  <div className="md:col-span-1 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
                    <div className="relative w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default ACityInTune 