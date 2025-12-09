function CurrentTech() {
  const technologies = [
    {
      name: "ChatGPT",
      category: "General AI Assistant",
      description: "OpenAI's conversational AI that students and educators use for explanations, problem-solving assistance, and content generation. It can help with homework, explain complex concepts, and generate practice problems.",
      features: ["Natural language interaction", "Multi-domain knowledge", "Code generation", "Explanation of concepts"]
    },
    {
      name: "Khanmigo",
      category: "AI Tutoring System",
      description: "Khan Academy's AI-powered tutor that provides personalized learning experiences. It guides students through problems with Socratic questioning rather than giving direct answers, promoting deeper understanding.",
      features: ["Socratic method tutoring", "Personalized learning paths", "Real-time feedback", "Progress tracking"]
    },
    {
      name: "GitHub Copilot",
      category: "Code Assistant",
      description: "An AI pair programmer that suggests code completions and entire functions as developers type. Widely used in computer science education for helping students learn programming patterns and best practices.",
      features: ["Code autocompletion", "Function generation", "Multi-language support", "Learning from context"]
    },
    {
      name: "AI Tutoring Systems",
      category: "Personalized Learning",
      description: "Various platforms like Carnegie Learning, DreamBox, and others that use AI to adapt instruction to individual student needs, providing customized problem sets and explanations based on student performance.",
      features: ["Adaptive difficulty", "Individualized pacing", "Misconception detection", "Performance analytics"]
    },
    {
      name: "LMS Automation Tools",
      category: "Course Management",
      description: "AI-enhanced Learning Management Systems that automate grading, generate quizzes, provide student support, and analyze learning data. Examples include Canvas with AI features, Blackboard Analytics, and Moodle plugins.",
      features: ["Automated grading", "Content generation", "Student analytics", "Predictive insights"]
    },
    {
      name: "Wolfram Alpha",
      category: "Computational Intelligence",
      description: "A computational knowledge engine that answers queries by computing answers from structured data. Used extensively in mathematics, physics, and engineering courses for solving complex problems and visualizing concepts.",
      features: ["Step-by-step solutions", "Visualization tools", "Scientific computation", "Educational explanations"]
    }
  ]

  return (
    <div className="page-container">
      <div className="content-container pt-12 md:pt-20 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Current AI Technologies in STEM Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An overview of existing AI tools and platforms that are currently being used in science, technology, engineering, and mathematics education.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="card"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                  {tech.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {tech.name}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {tech.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context Section */}
        <section className="mt-16">
          <div className="card max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              The Landscape of AI in Education
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The integration of AI in STEM education is rapidly evolving, with new tools and platforms emerging regularly. These 
                technologies range from general-purpose assistants to specialized educational systems designed specifically for learning 
                contexts.
              </p>
              <p>
                While some tools are widely adopted in formal educational settings, others are being used informally by students seeking 
                additional support. This dual adoption raises important questions about how these tools should be integrated into 
                curricula and assessment practices.
              </p>
              <p>
                The effectiveness of these technologies varies, and ongoing research is needed to understand their impact on learning 
                outcomes, student engagement, and educational equity. As the field continues to develop, educators and institutions 
                must carefully evaluate which tools align with their pedagogical goals and values.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CurrentTech

