export const site = {
  name: 'Rajesh Botla',
  hero: {
    tagline: 'I build backend systems that scale, and AI pipelines that ship.',
    subtext:
      'Computer Science graduate focused on Java/Spring Boot microservices, event-driven architecture, and applied machine learning. Based in Guntur, India.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Apache Kafka',
      'Redis',
      'Docker',
      'Python',
      'LangChain',
      'FAISS',
    ],
  },
  about: [
    "I'm a Computer Science graduate from KITS Akshar Institute of Technology, Guntur, with a habit of taking side projects past the tutorial stage. My Netflix-inspired streaming platform started as a way to learn Kafka and ended up as four independently deployable microservices, with real caching, real transcoding, and a Docker Compose file that spins the whole stack up in one command.",
    'Alongside backend work, I spent five months as an AI & ML intern at Blackbucks Education, building computer vision pipelines and getting comfortable with the less glamorous parts of ML: data cleaning, evaluation, and shipping something that holds up on live video. I like the seam between the two — systems reliable enough to trust, and intelligent enough to be worth building.',
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
        'A Netflix-inspired streaming platform built as four independent Spring Boot microservices.',
      bullets: [
        'Split the platform into Content, Video, Encoding, and Streaming services connected by Kafka events, so each piece deploys and scales independently.',
        'Automated adaptive-bitrate transcoding with FFmpeg, producing 1080p, 720p, 480p, and 360p HLS renditions for smooth playback on any connection.',
        'Cached frequently accessed movie metadata in Redis, cutting repeat database reads by more than 50%.',
        'Packaged all four services plus MySQL, Redis, Kafka, and Zookeeper into a single Docker Compose stack for one-command local setup.',
      ],
      stack: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'MySQL', 'AWS S3', 'Docker', 'FFmpeg', 'HLS.js'],
      repo: 'https://github.com/your-username/video-streaming-platform',
      repoLabel: 'View repository',
    },
    {
      name: 'SparkAI — Multimodal AI Assistant',
      status: 'running',
      tagline: 'An LLM-powered assistant with retrieval-augmented generation over your own documents.',
      bullets: [
        'Built a document ingestion pipeline covering chunking, embedding, vector indexing, and OCR for scanned PDFs.',
        'Combined Gemini and Groq APIs for fast generation alongside semantic search over FAISS and Hugging Face sentence embeddings.',
        'Used document hashing for incremental indexing, so unchanged files are never re-embedded.',
        'Containerized the app with Docker and environment-based API key management.',
      ],
      stack: ['Python', 'LangChain', 'Streamlit', 'FAISS', 'Hugging Face', 'Tesseract OCR', 'Docker'],
      repo: 'https://github.com/your-username/sparkai',
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
      category: 'Backend & architecture',
      items: [
        'Spring Boot',
        'Microservices',
        'Event-driven architecture',
        'REST APIs',
        'System design',
        'OOP',
        'SOLID',
        'DSA',
      ],
    },
    {
      category: 'Data & infrastructure',
      items: ['MySQL', 'Redis', 'Apache Kafka', 'AWS S3', 'NoSQL', 'Docker / Docker Compose'],
    },
    {
      category: 'AI / ML',
      items: ['LangChain', 'RAG', 'FAISS', 'Hugging Face Transformers', 'OpenCV', 'Streamlit'],
    },
    {
      category: 'Tools',
      items: ['Git / GitHub', 'Postman', 'FFmpeg', 'Tesseract OCR', 'JUnit', 'PyTest'],
    },
  ],
  contact: {
    blurb:
      "I'm looking for backend and software engineering roles where I can work on distributed systems, and I'm always up for talking through an interesting architecture problem. The fastest way to reach me is email.",
    email: 'rajeshbotla4@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rajeshbotla-948540377',
    github: 'https://github.com/your-username',
    resume: '/resume.pdf',
  },
};
