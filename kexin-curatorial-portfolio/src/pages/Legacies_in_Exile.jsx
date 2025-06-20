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
      description: `The curatorial process for this exhibition started with diving into historical research and reading through literature that helped frame the broader context of how artworks were taken or displaced during times of war. A big part of the work involved looking into the provenance of each piece, trying to trace where it came from and how it changed hands over time, even when the records were incomplete or unclear. Once the project moved into a digital format, we focused on finding ways to bring these physical objects and stories into a new space. That meant reimagining them through visuals, interactive elements, and multimedia like timelines, audio clips, and speculative recreations. Every part of the exhibition was carefully arranged to guide the viewer through these complex histories, helping them connect with the themes of loss, recovery, and memory in a more personal and immersive way.`,
      image: '/project2-research.png',
    },
    {
      title: 'Storytelling Highlights',
      description: `This exhibition brings together stories of art that lived through war, loss, and survival. Some pieces were lucky enough to make it home, like Michelangelo's Bruges Madonna, hidden in a salt mine and later returned to its church, or Chagall's Le Père, found decades later and finally reunited with the artist's community. Others remain caught in legal and emotional limbo. Van Gogh's Sunflowers, for example, is still at the center of a restitution debate in Tokyo, and Huts on a Canal is contested between Poland and the Netherlands. Then there are the artworks that have reappeared in auction houses, sold for millions, like Meules de blé and Femme assise, robe bleue, with their histories coming to light only through lawsuits and negotiations. Together, these stories show how artworks can carry not just beauty, but also the weight of memory, loss, and the long journey toward justice.`,
      image: '/project2-storytelling.png',
    },
    {
      title: 'Reflection',
      description: `This project made me think differently about creating and sharing exhibitions. Instead of relying on traditional gallery spaces, I used digital tools like Photoshop and Figma, software applications often used for design rather than curation. These tools allowed me to experiment with layout, layering, and interaction in ways that helped bring the stories to life.

One of the most powerful things about working digitally is how many more people it can reach. Anyone with internet access can explore the exhibition, no matter where they are or what time it is. They can go at their own pace, revisit sections, and engage with the content in a way that feels personal. It also allowed me to include timelines, images, and imagined reconstructions that wouldn't fit easily into a physical space.

This experience showed me that curating isn't just something that happens inside museums. It can happen on a screen, through creative use of everyday digital tools. By thinking outside the box, we can tell meaningful stories and connect with wider audiences in new and exciting ways.`,
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
        
        // Special handling for Reflection section (last section)
        if (highlight.title === 'Reflection') {
          return (
            <section
              key={index}
              className={`py-24 w-full ${bgColor}`}
            >
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">{highlight.title}</h2>
                <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">{highlight.description}</p>
              </div>
            </section>
          );
        }
        
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