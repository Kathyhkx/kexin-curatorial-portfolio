import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  // Special badge for "A City in Tune"
  const isCityInTune = project.title === "A City in Tune";
  const cityInTuneBadge = (
    <a
      href="https://www.mississauga.ca/arts-and-culture/events/a-city-in-tune/?eventdate=2025-04-24T12:00:00&schedule=21082"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 left-4 bg-black text-white text-xs font-medium rounded-full px-3 py-1 shadow-md transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 z-10 cursor-pointer"
      style={{ textDecoration: 'none' }}
    >
      Now Showing · View Schedule
    </a>
  );

  // Special badge for "Legacies in Exile"
  const isLegaciesInExile = project.title === "Legacies in Exile";
  const legaciesInExileBadge = (
    <a
      href="https://www.figma.com/proto/WeiBj42vuzIgZNY6eIWtUT/NaziLootingExhibitionPresentation?node-id=1-3&p=f&t=ZhDIpnyXoY2z7TpZ-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs rounded-full font-medium shadow-md transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 z-10 cursor-pointer"
      style={{ textDecoration: 'none' }}
    >
      {project.badge}
    </a>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full min-h-[24rem] group-hover:min-h-[28rem]">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />
        {isCityInTune ? (
          cityInTuneBadge
        ) : isLegaciesInExile ? (
          legaciesInExileBadge
        ) : (
          project.badge && (
            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs rounded-full font-medium shadow-md">
              {project.badge}
            </span>
          )
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <span className="text-gray-500 text-lg">{project.year}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Location:</span> {project.location}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Date:</span> {project.date}
          </p>
        </div>
        <div className="mt-auto">
          <Link
            to={project.link}
            className="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow group-hover:bg-gray-900"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard; 