import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="content-container pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            AI in STEM Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            A Philosophical Exploration
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            Examining the promises, perils, and profound questions surrounding artificial intelligence in science, technology, engineering, and mathematics education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pro-ai" className="btn-primary">
              Explore Pro-AI Arguments
            </Link>
            <Link to="/anti-ai" className="btn-secondary">
              Review Concerns
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="content-container section-spacing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Debate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">The Promise</h3>
              <p className="text-gray-700 leading-relaxed">
                Proponents argue that AI can democratize access to quality STEM education, provide personalized learning experiences, 
                and enhance human capabilities by handling routine tasks, allowing students and educators to focus on deeper understanding 
                and creative problem-solving.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-red-600">The Peril</h3>
              <p className="text-gray-700 leading-relaxed">
                Critics raise concerns about the erosion of critical thinking skills, over-reliance on technology, ethical implications 
                of AI decision-making, academic integrity challenges, and the potential displacement of human educators and support staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="content-container section-spacing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore the Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/pro-ai" className="card cursor-pointer group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
                Pro-AI View
              </h3>
              <p className="text-gray-600">
                Arguments supporting the integration of AI in STEM education
              </p>
            </Link>
            <Link to="/anti-ai" className="card cursor-pointer group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600">
                Anti-AI View
              </h3>
              <p className="text-gray-600">
                Concerns and critiques of AI in educational settings
              </p>
            </Link>
            <Link to="/current-tech" className="card cursor-pointer group">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">
                Current Technology
              </h3>
              <p className="text-gray-600">
                Existing AI tools and platforms in STEM education
              </p>
            </Link>
            <Link to="/reflection" className="card cursor-pointer group sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600">
                Personal Reflection
              </h3>
              <p className="text-gray-600">
                Personal experiences and evolving perspectives
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

