const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">City, Country</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 