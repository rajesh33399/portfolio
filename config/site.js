export const site = {
  name: 'Rajesh Botla',
  hero: {
    tagline: 'I build scalable full-stack applications, distributed systems, and applied AI applications.',
    subtext:
      'Computer Science graduate specializing in Spring Boot microservices, event-driven architectures, full-stack video streaming, and multimodal GenAI/RAG platforms. Based in Guntur, India.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Apache Kafka',
      'Redis',
      'Docker',
      'JavaScript',
      'Python',
      'LangChain',
      'FAISS',
    ],
  },
  about: [
    "I'm a Computer Science graduate from KITS Akshar Institute of Technology, Guntur, passionate about building complete, production-ready systems from back-end microservices to responsive user interfaces. My Netflix-inspired streaming platform features four independently deployable Spring Boot microservices connected via Kafka events, automated FFmpeg video transcoding, and a Vanilla JavaScript & HLS.js web client.",
    'Alongside distributed systems, I spent five months as an AI & ML intern at Blackbucks Education building computer vision pipelines, and I developed SparkAI—a multimodal AI assistant capable of multi-turn conversational AI as well as document-based question answering using RAG and vector search.',
  ],
  experience: [
    {
      title: 'AI & ML Engineer Intern',
      company: 'Blackbucks Education Pvt. Ltd.',
      period: 'Dec 2025 – Apr 2026',
      location: 'Guntur, India',
      bullets: [
        'Built Python data pipelines with NumPy and Pandas across 5+ datasets, cutting manual preprocessing time by roughly 35%.',
        'Trained a multi-class object detection model with OpenCV, reaching 88% localization accuracy across 10 object classes on real-time video.',
        'Prototyped computer vision workflows in Google Colab, speeding up testing cycles by about 40%.',
        'Completed a structured 16-week program covering ML fundamentals, model evaluation, and SDLC practices.',
      ],
    },
  ],
  projects: [
    {
      name: 'Distributed Video Streaming Platform',
      status: 'running',
      tagline:
        'A Netflix-inspired full-stack streaming platform with Java microservices and an HLS.js web client.',
      bullets: [
        'Built an interactive web frontend using HTML, CSS, Vanilla JavaScript, and HLS.js for dynamic catalog browsing, search, content management, and adaptive video streaming.',
        'Architected four Spring Boot microservices (Content, Video, Encoding, Streaming) communicating asynchronously via Kafka event streams for video uploads, transcoding, and delivery.',
        'Automated adaptive-bitrate transcoding with FFmpeg, generating multi-resolution HLS playlists (1080p, 720p, 480p, 360p) for seamless playback.',
        'Optimized query latency by caching frequently accessed movie metadata in Redis, cutting repeat database reads by over 50%.',
        'Containerized the complete application stack including microservices, MySQL, Redis, Apache Kafka, and Zookeeper using Docker Compose.',
      ],
      stack: [
        'Java 17',
        'Spring Boot',
        'Microservices',
        'Kafka',
        'Redis',
        'MySQL',
        'AWS S3',
        'Docker',
        'FFmpeg',
        'HLS.js',
        'JavaScript',
        'HTML/CSS',
      ],
      repo: 'https://github.com/rajesh33399/netflix-distributed-streaming-platform',
      repoLabel: 'View repository',
    },
    {
      name: 'SparkAI — Multimodal AI Assistant',
      status: 'running',
      tagline:
        'An end-to-end multimodal AI application for general AI conversations and document-based question answering.',
      bullets: [
        'Developed an interactive multimodal AI interface using Python, Streamlit, and LangChain supporting general multi-turn AI conversations.',
        'Engineered a document QA engine featuring document processing, OCR text extraction, text chunking, and FAISS vector embeddings for semantic search.',
        'Implemented Retrieval-Augmented Generation (RAG) pipelines, custom prompt engineering, session management, and API integrations with Gemini and Groq LLMs.',
        'Optimized document loading using incremental hashing to bypass re-embedding unchanged files.',
        'Containerized the application with Docker and configured secure, environment-based API key management.',
      ],
      stack: [
        'Python',
        'LangChain',
        'Streamlit',
        'RAG',
        'FAISS',
        'Embeddings',
        'Tesseract OCR',
        'Docker',
      ],
      repo: 'https://github.com/rajesh33399/SparkAI',
      repoLabel: 'View repository',
    },
  ],
  achievements: [
    'Best Performer, 36-hour IoT Hackathon — built an automated environmental-monitoring prototype with microcontrollers and sensors delivering real-time telemetry and threshold alerts.',
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Java 17', 'Python', 'JavaScript', 'SQL', 'HTML5 / CSS3'],
    },
    {
      category: 'Backend & Architecture',
      items: [
        'Spring Boot',
        'Microservices',
        'Event-Driven Architecture',
        'REST APIs',
        'System Design',
        'OOP',
        'SOLID',
        'DSA',
      ],
    },
    {
      category: 'Frontend & Media',
      items: ['HTML/CSS', 'Vanilla JavaScript', 'HLS.js', 'Adaptive Streaming', 'FFmpeg'],
    },
    {
      category: 'Data & Infrastructure',
      items: ['MySQL', 'Redis', 'Apache Kafka', 'AWS S3', 'NoSQL', 'Docker / Docker Compose'],
    },
    {
      category: 'AI / ML',
      items: [
        'LangChain',
        'RAG',
        'FAISS Vector Search',
        'Semantic Search',
        'Embeddings',
        'OpenCV',
        'Streamlit',
      ],
    },
    {
      category: 'Tools',
      items: ['Git / GitHub', 'Postman', 'Tesseract OCR', 'JUnit', 'PyTest'],
    },
  ],
  contact: {
    blurb:
      "I'm looking for full-stack and software engineering roles where I can work on distributed systems, modern web apps, or GenAI integrations. Feel free to reach out via email or LinkedIn!",
    email: 'rajeshbotla4@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rajesh-botla-948540377/',
    github: 'https://github.com/rajesh33399',
    resume: '/resume.pdf',
  },
};
