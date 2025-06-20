import { Link } from 'react-router-dom'

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "A City in Tune",
      image: "/project1.jpg",
      link: "/projects/a-city-in-tune",
      description:
        "An interactive exhibition that explores how music lives in people's daily lives and memories in the City of Mississauga. From street corners to personal playlists, this project amplifies the voices of local artists and invites visitors to rediscover their emotional map of the city.",
    },
    {
      id: 2,
      title: "Legacies in Exile",
      image: "/project2.png",
      link: "/projects/legacies-in-exile",
      description:
        "This virtual exhibition explores the fragmented journeys of artworks displaced by war, focusing on the lasting impact of Nazi-era looting. Built using Photoshop and Figma, the project presents a layered digital storytelling experience that blends archival research, historical timelines, and speculative visual reconstructions. It invites viewers to reflect on loss, restitution, and the politics of memory in digital spaces.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-72 px-64">
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold mb-8 animate-gradient-text">
            Creating Experiences That Spark Connection and Sensation
          </h1>
          <p className="text-xl text-gray-600 mb-16">
            Through layered experiences of visuals, sound, and storytelling, my work explores how curated physical and digital spaces can nudge people connect more deeply with themselves and the world around them.
          </p>
          <a
            href="/projects"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-full h-80 overflow-hidden rounded-md mb-4 flex items-center justify-center bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 