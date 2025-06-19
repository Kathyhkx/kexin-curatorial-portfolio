import { Link } from 'react-router-dom'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className="pt-28 pb-12 px-6 md:px-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Curatorial Projects</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects 