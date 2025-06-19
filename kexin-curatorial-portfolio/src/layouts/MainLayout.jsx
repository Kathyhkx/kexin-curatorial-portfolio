import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold">KeXin Han</h1>
              <span className="text-gray-600 text-sm">Curator & Multidisciplinary Artist</span>
            </div>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-600">Home</a>
              <a href="/projects" className="hover:text-gray-600">Projects</a>
              <a href="/about" className="hover:text-gray-600">About</a>
              <a href="/contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="w-full">
        <Outlet />
      </main>

      <footer className="bg-gray-100 mt-20 w-full py-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} KeXin Han. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default MainLayout 