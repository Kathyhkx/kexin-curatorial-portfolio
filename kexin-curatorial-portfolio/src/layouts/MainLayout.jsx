import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6">
          <nav className="py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">KeXin Han <span className="text-gray-500 font-normal">Curator & Multidisciplinary Artist</span></Link>
            <div className="space-x-8">
              <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
              <Link to="/projects" className="text-gray-700 hover:text-black">Projects</Link>
              <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      
      <footer className="w-full bg-gray-100 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} KeXin Han. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 