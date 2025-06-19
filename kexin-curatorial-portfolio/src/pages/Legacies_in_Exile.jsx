import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const LegaciesInExile = () => {
  const location = useLocation();
  const [showLines, setShowLines] = useState(true);

  // Highlights for Legacies in Exile
  const highlights = [
    {
      title: 'Project Overview',
      description: `This virtual exhibition draws the viewers to journeys of artworks uprooted by war, with a focus on the enduring legacy of Nazi-era looting. It is crafted with Photoshop and Figma as a layered, immersive story. Through this digital space, you're invited to not just observe, but to feel the weight of cultural loss, to question what restitution really means, and to explore how memory is reshaped and sometimes reclaimed virtually.`,
      image: '/project2-overview.png',
    },
    {
      title: 'Curatorial Process',
      description: `Archival research on displaced artworks and provenance. Designing interactive timelines and speculative reconstructions in Figma. Blending historical fact with digital storytelling techniques. Engaging the public through Figma Community and online discussions.`,
      image: '/project2.png',
    },
    {
      title: 'Storytelling Highlights',
      description: `The exhibition is organized as a digital journey, guiding viewers through timelines, archival documents, and speculative visualizations. Interactive elements allow users to explore the fate of individual artworks and the broader context of cultural loss. Features include clickable timelines, layered image reconstructions, embedded archival documents, and opportunities for viewers to contribute reflections on restitution and memory.`,
      image: '/project2.png',
    },
    {
      title: 'Reflection',
      description: `This project demonstrates my ability to use digital tools for curatorial storytelling, blending research, design, and public engagement to address complex historical issues.`,
      image: '/project2.png',
    },
  ];

  useEffect(() => {
    setShowLines(false);
    const timeout = setTimeout(() => setShowLines(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen scrollbar-none" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      {/* Header Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden py-32">
        {/* Animated background lines */}
        {showLines && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="animated-line-1" />
            <div className="animated-line-2" />
            <div className="animated-line-3" />
            <div className="animated-line-4" />
            <div className="animated-line-5" />
            <div className="animated-line-6" />
          </div>
        )}
        <div className="w-full flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Legacies in Exile</h1>
          <p className="text-xl text-gray-600 mb-8 italic">Figma Community (Virtual) | December 2023 - Present</p>
        </div>
      </section>

      {/* Highlights Sections */}
      {highlights.map((highlight, index) => {
        const isImageLeft = index % 2 === 0;
        const bgColor = index % 2 === 0 ? 'bg-blue-50' : 'bg-white';
        return (
          <section
            key={index}
            className={`py-24 w-full ${bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {isImageLeft ? (
                <>
                  {/* Image 2/3 */}
                  <div className="md:col-span-2 flex justify-center items-center mb-8 md:mb-0">
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover object-center"
                        style={{ aspectRatio: '16/9' }}
                      />
                    </div>
                  </div>
                  {/* Text 1/3 */}
                  <div className="md:col-span-1 space-y-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold">{highlight.title}</h2>
                    <p className="text-xl text-gray-700">{highlight.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text 1/3 */}
                  <div className="md:col-span-1 space-y-8 flex flex-col justify-center order-2 md:order-1">
                    <h2 className="text-4xl font-bold">{highlight.title}</h2>
                    <p className="text-xl text-gray-700">{highlight.description}</p>
                  </div>
                  {/* Image 2/3 */}
                  <div className="md:col-span-2 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover object-center"
                        style={{ aspectRatio: '16/9' }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LegaciesInExile; 