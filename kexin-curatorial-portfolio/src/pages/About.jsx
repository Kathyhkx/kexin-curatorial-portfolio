const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Biography</h2>
            <p className="text-gray-700 mb-4">
              [Your professional biography goes here. This should include your background, 
              education, and what drives your curatorial practice.]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Curatorial Practice</h2>
            <p className="text-gray-700 mb-4">
              [Describe your curatorial approach, interests, and the themes you explore 
              in your work. This could include your methodology, research interests, 
              and the types of exhibitions you curate.]
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <div>
                  <h3 className="font-semibold">Degree Name</h3>
                  <p className="text-gray-600">University Name</p>
                </div>
                <span className="text-gray-500">Year</span>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">Position Title</h3>
                  <span className="text-gray-500">Year - Year</span>
                </div>
                <p className="text-gray-600">Institution/Organization Name</p>
                <p className="text-gray-700 mt-2">
                  [Brief description of responsibilities and achievements]
                </p>
              </li>
              {/* Add more experience items as needed */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About 