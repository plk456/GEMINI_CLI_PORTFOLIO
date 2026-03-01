import './App.css'

function App() {
  const projects = [
    {
      title: "Intelligent RAG-Based Chatbot",
      tech: "GenAI, n8n, Pinecone",
      date: "December 2025",
      description: "Designed a campus support chatbot using Retrieval-Augmented Generation (RAG) to automate student inquiries. Orchestrated complex workflows using n8n and stored embeddings in a Pinecone vector database. Integrated the Gemini 2.5 API for high-accuracy, context-aware responses."
    },
    {
      title: "Fine-Tuned GPT-2 Medical Assistant",
      tech: "LLM, NLP, PyTorch",
      date: "November 2025",
      description: "Fine-tuned a GPT-2 model on a dataset of 47,000+ medical Q&A pairs from NIH sources. Leveraged QLoRA and PEFT techniques to efficiently fine-tune model weights on an RTX 3050 GPU."
    },
    {
      title: "AI Powered Health Monitoring System",
      tech: "YOLO, Flask, Computer Vision",
      description: "Built a disease detection system for stenosis and mouth cancer using YOLO object detection. Developed a Flask backend API to serve predictions to a web interface for doctors."
    },
    {
      title: "Heart Stroke Prediction",
      tech: "Scikit-learn, Streamlit, Python",
      description: "Developed a predictive ML model to analyze patient health reports and estimate stroke risk. Built an interactive web dashboard using Streamlit for visualization and user interaction."
    },
    {
      title: "Security Alert Alarm System",
      tech: "IoT, Arduino, Embedded C",
      description: "Designed a hardware-based theft protection system using Arduino microcontrollers. Programmed real-time sensor logic using Embedded C to trigger security alerts."
    }
  ];

  return (
    <div className="portfolio">
      <header>
        <nav>
          <div className="logo">PLK</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Prodduturu Likith Kumar</h1>
          <p className="bio">AI & ML Student passionate about building real-world Generative AI applications, RAG pipelines, and IoT automation.</p>
          <div className="cta">
            <a href="mailto:Kumarlikith178@gmail.com" className="btn primary">Get in Touch</a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
        </section>

        <section id="about">
          <h2>Education</h2>
          <div className="card-grid">
            <div className="card">
              <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>
              <p className="org">Madanapalle Institute of Technology and Science</p>
              <p className="date">2024 - Present</p>
              <p className="extra">GPA: 7.3/10.0</p>
            </div>
            <div className="card">
              <h3>Diploma in Engineering</h3>
              <p className="org">Loyola Polytechnic</p>
              <p className="date">Completed</p>
              <p className="extra">Percentage: 83%</p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-group">
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Embedded C</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>AI Frameworks</h3>
              <ul>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>YOLO</li>
                <li>Langchain</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Docker</li>
                <li>Git</li>
                <li>n8n</li>
                <li>Arduino IDE</li>
                <li>Linux (Kali)</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Databases</h3>
              <ul>
                <li>Pinecone (Vector DB)</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="date">{project.date}</span>
                </div>
                <p className="tech"><strong>Tech:</strong> {project.tech}</p>
                <p className="desc">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <div className="card highlight">
            <p>🏆 <strong>AI/ML Hackathon:</strong> Secured 14th place out of 65 teams as a solo participant, demonstrating rapid prototyping skills.</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:Kumarlikith178@gmail.com" className="contact-item">Email</a>
            <a href="https://linkedin/likitumar456" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a>
            <a href="https://github.com/plk456" target="_blank" rel="noopener noreferrer" className="contact-item">GitHub</a>
            <a href="https://kaggle.com/likith784" target="_blank" rel="noopener noreferrer" className="contact-item">Kaggle</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Prodduturu Likith Kumar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
