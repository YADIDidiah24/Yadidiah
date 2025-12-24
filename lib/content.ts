export type NavLink = {
  id: string;
  title: string;
  children?: Array<{ id: string; title: string }>;
};

export type Service = {
  title: string;
  icon: string;
};

export type Technology = {
  name: string;
  icon: string;
};

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type Project = {
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  skills: string[];
  url: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  date: string;
  icon: string;
  points: string[];
};

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  url: string;
};

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  {
    id: "work",
    title: "Work",
    children: [
      { id: "projects", title: "Projects" },
      { id: "experience", title: "Experience" },
      { id: "education", title: "Education" },
      { id: "blog", title: "Blog" },
    ],
  },
  { id: "contact", title: "Contact" },
  { id: "certifications", title: "Certifications" },
];

export const services: Service[] = [
  { title: "AI/ML Engineer", icon: "/assets/ai.png" },
  { title: "Data Scientist", icon: "/assets/da.png" },
  { title: "Data Analyst", icon: "/assets/analyst.png" },
  { title: "LLM Engineer (Fine-Tuning & RAG)", icon: "/assets/intelligence.png" },
  { title: "Prompt Engineer", icon: "/assets/prompt.png" },
  { title: "Database Admin", icon: "/assets/db.png" },
  { title: "API Developer", icon: "/assets/api.png" },
  { title: "Researcher & Technical Writer", icon: "/assets/creator.png" },
];

export const technologies: Technology[] = [
  { name: "Python", icon: "/assets/python.png" },
  { name: "TensorFlow", icon: "/assets/tech/tensorflow.svg" },
  { name: "PyTorch", icon: "/assets/tech/pytorch.svg" },
  { name: "Scikit-Learn", icon: "/assets/tech/scikit-learn.png" },
  { name: "SQL", icon: "/assets/tech/sql.png" },
  { name: "NumPy", icon: "/assets/tech/NumPy.png" },
  { name: "Pandas", icon: "/assets/tech/Pandas.png" },
  { name: "Apache Spark", icon: "/assets/tech/Apache_Spark.png" },
  { name: "FastAPI", icon: "/assets/tech/FastAPI.png" },
  { name: "Keras", icon: "/assets/tech/keras.png" },
  { name: "Hugging Face", icon: "/assets/tech/hf.svg" },
  { name: "AWS", icon: "/assets/tech/aws.png" },
  { name: "GCP", icon: "/assets/tech/gcp.svg" },
];

export const otherTechnologies: Technology[] = [
  { name: "Matplotlib", icon: "/assets/tech/Matplotlib.png" },
  { name: "Seaborn", icon: "/assets/tech/seaborn.svg" },
  { name: "LangChain", icon: "/assets/tech/langchain.png" },
  { name: "Ollama", icon: "/assets/tech/ollama.png" },
  { name: "Jupyter", icon: "/assets/tech/Jupyter.png" },
  { name: "Tableau", icon: "/assets/tech/tableau.svg" },
  { name: "Power BI", icon: "/assets/powerbi.png" },
  { name: "PostgreSQL", icon: "/assets/tech/postgresql.svg" },
  { name: "Snowflake", icon: "/assets/tech/Snowflake.png" },
  { name: "BigQuery", icon: "/assets/tech/BigQuery.svg" },
  { name: "SageMaker", icon: "/assets/tech/SageMaker.png" },
  { name: "Vertex AI", icon: "/assets/tech/vertexAI.svg" },
  { name: "Transformer", icon: "/assets/tech/transformer.png" },
];

export const professionalExperience: Experience[] = [
  {
    title: "AI Automation Lead Engineer",
    company_name: "Humai",
    icon: "/assets/company/humai_ai_logo.jpg",
    iconBg: "#1F2937",
    date: "Sep 2025 - Present",
    points: [
      "Lead AI automation projects focusing on intelligent workflow optimization and process automation.",
      "Architected enterprise-grade ML agents for business process automation achieving 65% efficiency gains.",
      "Implemented advanced LLM orchestration systems for multi-agent AI workflows and intelligent task completion.",
      "Developed production-ready AI automation pipelines serving thousands of users with <200ms response times.",
      "Integrated cutting-edge AI technologies including LangChain, LangGraph, and custom fine-tuned models for enterprise applications.",
    ],
  },
];

export const virtualInternships: Experience[] = [
  {
    title: "Digital Intelligence Program",
    company_name: "PwC (Forage)",
    icon: "/assets/pwc.png",
    iconBg: "#383E56",
    date: "",
    points: [
      "Conducted data analysis and modeling for the Digital Intelligence team.",
      "Developed Python classification models and analyzed feature importance.",
      "Created data visualizations and valuation documents, including cash flow forecasting.",
      "Contributed to a client's data strategy proposal by analyzing medical data.",
    ],
  },
  {
    title: "Data Analytics Program",
    company_name: "Deloitte (Forage)",
    icon: "/assets/deloitte.png",
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Applied data analysis and forensic technology skills in a Deloitte job simulation.",
      "Designed and implemented interactive data dashboards using Tableau.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Utilized Excel to classify data and extract actionable business insights.",
    ],
  },
  {
    title: "Data Science Program",
    company_name: "British Airways (Forage)",
    icon: "/assets/BA.png",
    iconBg: "#383E56",
    date: "",
    points: [
      "Analyzed customer review data to uncover key insights.",
      "Developed a predictive model to identify factors influencing customer purchasing behavior.",
      "Explored the role of data science in British Airways' success through a hands-on simulation.",
    ],
  },
  {
    title: "Data Analytics Program",
    company_name: "Quantium (Forage)",
    icon: "/assets/quantium.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Conducted data analytics and commercial insights projects.",
      "Processed and analyzed transaction datasets to generate data-driven recommendations.",
      "Identified benchmark stores for uplift testing, supporting evidence-based decision-making.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analytics Virtual Experience",
    company_name: "Barclays (LifeSkills)",
    icon: "/assets/barclays.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Cleaned and preprocessed raw datasets for analysis.",
      "Processed and analyzed transaction datasets to generate data-driven recommendations.",
      "Identified benchmark stores for uplift testing, supporting evidence-based decision-making.",
      "Conducted exploratory data analysis (EDA) to identify trends and patterns.",
    ],
  },
  {
    title: "GenAI Program",
    company_name: "BCG (Forage)",
    icon: "/assets/BCG.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed an AI-powered financial chatbot for BCG's GenAI Consulting team.",
      "Applied Python programming and data manipulation using Pandas.",
      "Identified benchmark stores for uplift testing, supporting evidence-based decision-making.",
      "Integrated and analyzed financial data from 10-K and 10-Q reports, leveraging rule-based logic for insightful chatbot responses.",
    ],
  },
  {
    title: "Data Science & Security Analytics Challenge",
    company_name: "Undisclosed",
    icon: "/assets/web.png",
    iconBg: "#E6DEDD",
    date: "Apr 2024",
    points: [
      "Applied custom decryption techniques to process encrypted datasets and extract meaningful insights.",
      "Interacted with secure APIs to fetch, manipulate, and analyze sensitive data.",
      "Conducted security assessments by simulating SQL injection techniques to identify potential vulnerabilities.",
      "Established WebSocket connections for real-time data transfer and analysis.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects: Project[] = [
  {
    name: "Premium Business Planner with AI-Driven Analytics",
    description:
      "Full-stack AI-powered business planning platform using Google Gemini API, Plotly, and Streamlit. Features AI-generated strategies, interactive dashboards, risk assessments, and real-time analytics for entrepreneurs to create investor-ready business plans.",
    tags: [
      { name: "Generative AI", color: "text-blue-400" },
      { name: "Streamlit", color: "text-green-400" },
      { name: "Plotly", color: "text-pink-400" },
    ],
    image: "/assets/projects/businessApp.png",
    source_code_link:
      "https://github.com/YADIDidiah24/LLM-Projects/tree/main/Premium-Business-Start",
  },
  {
    name: "YouSentimentAI - MLOps YouTube Sentiment Analysis",
    description:
      "End-to-end MLOps pipeline for YouTube comment sentiment analysis with LightGBM, TF-IDF, MLflow, DVC, and AWS. Includes responsive web app with real-time comment fetching and interactive sentiment visualizations.",
    tags: [
      { name: "MLOps", color: "text-blue-400" },
      { name: "MLflow", color: "text-green-400" },
      { name: "LightGBM", color: "text-pink-400" },
    ],
    image: "/assets/projects/yousentimentai.png",
    source_code_link: "https://github.com/YADIDidiah24/Youtube-Sentiment-Analysis.git",
  },
  {
    name: "LexiQE AI - Legal Document Q&A Assistant",
    description:
      "AI-powered assistant for legal document analysis using RAG, FAISS, and FLAN-T5. Allows users to upload PDFs and query them via a chat interface, delivering context-aware answers locally with full data privacy.",
    tags: [
      { name: "NLP", color: "text-blue-400" },
      { name: "RAG", color: "text-green-400" },
      { name: "Streamlit", color: "text-pink-400" },
    ],
    image: "/assets/projects/lexiqeai.png",
    source_code_link:
      "https://github.com/YADIDidiah24/LLM-Projects/tree/main/LegalDocumentChatBot",
  },
  {
    name: "PneumoScan AI - Pneumonia Detection System",
    description:
      "Deep learning medical imaging tool using TensorFlow/Keras to detect pneumonia from chest X-rays with 98.42% accuracy. Integrates Grad-CAM visualizations for explainability and deployed via a medical-grade Streamlit interface.",
    tags: [
      { name: "Deep Learning", color: "text-blue-400" },
      { name: "TensorFlow", color: "text-green-400" },
      { name: "Computer Vision", color: "text-pink-400" },
    ],
    image: "/assets/projects/pneomo.jpeg",
    source_code_link: "https://github.com/YADIDidiah24/grad-proj",
  },
  {
    name: "AI Web Application for Text Summarization",
    description:
      "Flask-based AI summarization tool with customizable summary length, real-time text analysis, and sentence importance scoring using TF-IDF, Cosine Similarity, and NER.",
    tags: [
      { name: "NLP", color: "text-blue-400" },
      { name: "Flask", color: "text-green-400" },
      { name: "JavaScript", color: "text-pink-400" },
    ],
    image: "/assets/projects/textsummarizer.jpeg",
    source_code_link:
      "https://github.com/YADIDidiah24/AI-Web-applications/tree/main/text-summariser-spaCy",
  },
  {
    name: "Hotel Booking Analytics Dashboard with Power BI",
    description:
      "Interactive Power BI dashboards analyzing hotel bookings, customer loyalty, and booking channels using DAX, KPIs, and drill-through features with multi-source data integration.",
    tags: [
      { name: "Data Analysis", color: "text-blue-400" },
      { name: "Power BI", color: "text-green-400" },
      { name: "DAX", color: "text-pink-400" },
    ],
    image: "/assets/projects/HotelBooking.png",
    source_code_link:
      "https://www.linkedin.com/posts/yadidiah-kanaparthi_powerbi-dataanalytics-datavisualization-activity-7291168365581115393-QUS7",
  },
];

export const certifications: Certification[] = [
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "June 2025",
    credentialId: "",
    icon: "/assets/cert/google.jpeg",
    skills: ["Artificial Intelligence (AI)", "Generative AI"],
    url: "https://www.credly.com/badges/6cea7eeb-1a29-42a7-8443-966d718b8ea0/public_url",
  },
  {
    title: "Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Mar 2025",
    credentialId: "",
    icon: "/assets/cert/microsoft.jpeg",
    skills: ["Artificial Intelligence (AI)", "Generative AI"],
    url: "https://www.linkedin.com/learning/certificates/ae4c30836bfbeeebbe26004b1398b330db0a862608b509f31fbf863e244ab839",
  },
  {
    title: "Data Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Mar 2025",
    credentialId: "",
    icon: "/assets/cert/microsoft.jpeg",
    skills: ["Data Analysis", "Data Visualization"],
    url: "https://www.linkedin.com/learning/certificates/ecc8f1cf6ae0ffd5ca7ff66c031ab4773f6dae5a67bf306e79e78a8dc2f531f7",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "Anaconda, Inc.",
    date: "Mar 2025",
    credentialId: "",
    icon: "/assets/cert/anaconda.jpeg",
    skills: ["Data Science", "Python", "Data Analysis", "Real-time Data"],
    url: "https://www.linkedin.com/learning/certificates/9a9bc3e104d4cebed4f9d3e413d15948dafbfc1df642359f00af108c6f022169?trk=share_certificate",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "KNIME",
    date: "Mar 2025",
    credentialId: "",
    icon: "/assets/cert/knime.jpeg",
    skills: ["Artificial Intelligence for Business"],
    url: "https://www.linkedin.com/learning/certificates/3e34afd6d26ecd2b216bfe1a36e7993f0132909c6ef63bcf07d3b3c9cf091adb",
  },
  {
    title: "Deep Learning",
    issuer: "Kaggle",
    date: "Nov 2024",
    credentialId: "",
    icon: "/assets/cert/kaggle.jpeg",
    skills: ["Machine Learning"],
    url: "https://www.kaggle.com/learn/certification/yadidiahk/intro-to-deep-learning",
  },
  {
    title: "Server Administration Essential Training",
    issuer: "LinkedIn",
    date: "Jul 2023",
    credentialId: "",
    icon: "/assets/cert/linkedin.jpeg",
    skills: [],
    url: "https://www.linkedin.com/learning/certificates/5bf4923c33abe29d6ee855e42dc92a5414d63dff89ce34bfd82fafc0233004ca",
  },
  {
    title: "Certified Software Engineer",
    issuer: "HackerRank",
    date: "Apr 2025",
    credentialId: "",
    icon: "/assets/cert/hackerrank.jpeg",
    skills: ["Java", "Problem Solving", "Python", "OOP", "SQL"],
    url: "https://www.hackerrank.com/certificates/8b50fc89c3f0",
  },
  {
    title: "Restful API (Intermediate)",
    issuer: "HackerRank",
    date: "Dec 2024",
    credentialId: "",
    icon: "/assets/cert/hackerrank.jpeg",
    skills: ["Data Analysis"],
    url: "https://www.hackerrank.com/certificates/7199139728b0",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "Apr 2023",
    credentialId: "",
    icon: "/assets/cert/hackerrank.jpeg",
    skills: ["MySQL"],
    url: "https://www.hackerrank.com/certificates/5b24827f203d",
  },
  {
    title: "Accenture Nordics - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "wDZ9h8eu7kJWbaGF9",
    icon: "/assets/cert/forage.jpeg",
    skills: [],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_NrbDkQHjF7rrYt5YF_1741192955322_completion_certificate.pdf",
  },
  {
    title: "British Airways - Data Science Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "cpC8RLfEseze2YEav",
    icon: "/assets/cert/forage.jpeg",
    skills: [],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_NrbDkQHjF7rrYt5YF_1741194624177_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "AJMh2FggBygifKvfE",
    icon: "/assets/cert/forage.jpeg",
    skills: ["Microsoft Power BI"],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_NrbDkQHjF7rrYt5YF_1741194356079_completion_certificate.pdf",
  },
  {
    title: "PwC Switzerland - Digital Intelligence Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "Rziuwq6N7bzSFiwyo",
    icon: "/assets/cert/forage.jpeg",
    skills: ["Machine Learning"],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/Kaib4AmLSAG5mDsD4_4sLyCPgmsy8DA6Dh3_NrbDkQHjF7rrYt5YF_1741110381970_completion_certificate.pdf",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Mar 2023",
    credentialId: "",
    icon: "/assets/cert/mathworks.jpeg",
    skills: ["MATLAB", "Decision-Making"],
    url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f78a8ff8-6aff-45d7-aafe-0701348596f8&",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Amazon Web Services (AWS)",
    date: "Nov 2022",
    credentialId: "",
    icon: "/assets/cert/aws.jpeg",
    skills: ["Machine Learning"],
    url: "https://publuu.com/flip-book/101819/276800",
  },
  {
    title: "Machine Learning",
    issuer: "Kaggle",
    date: "Mar 2022",
    credentialId: "",
    icon: "/assets/cert/kaggle.jpeg",
    skills: ["Machine Learning"],
    url: "https://www.kaggle.com/learn/certification/yadidiahk/intro-to-machine-learning",
  },
  {
    title: "Build Actions for Google Assistant",
    issuer: "Google Developers Group",
    date: "Jun 2022",
    credentialId: "",
    icon: "/assets/cert/google.jpeg",
    skills: [],
    url: "https://developers.google.com/profile/badges/playlists/actions-on-google/",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "Jun 2022",
    credentialId: "",
    icon: "/assets/cert/freecodecamp.jpeg",
    skills: ["Python", "Pandas", "Data Analysis"],
    url: "https://freecodecamp.org/certification/fcc906defd5-0e1b-4ff7-b817-842b4fd75839/data-analysis-with-python-v7",
  },
  {
    title: "Digital Skills: Web Analytics",
    issuer: "FutureLearn",
    date: "Jun 2022",
    credentialId: "",
    icon: "/assets/cert/futurelearn.jpeg",
    skills: [],
    url: "https://www.futurelearn.com/certificates/8pv7q7k",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "Jun 2025",
    credentialId: "",
    icon: "/assets/cert/hackerrank.jpeg",
    skills: [],
    url: "https://www.hackerrank.com/certificates/2e79360c73ad",
  },
  {
    title: "Rest API",
    issuer: "HackerRank",
    date: "Jun 2025",
    credentialId: "",
    icon: "/assets/cert/hackerrank.jpeg",
    skills: [],
    url: "https://www.hackerrank.com/certificates/89151e977077",
  },
  {
    title: "Diploma in Computer Networking",
    issuer: "Alison",
    date: "May 2022",
    credentialId: "1480-24113466",
    icon: "/assets/cert/alison.jpeg",
    skills: [],
    url: "https://alison.com/certification/check/$2y$10$2.xjihfl2GvzXMN.qyvPQuaajEWUtI02qQVCtJYeZAGcWH7mXVqSu",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "May 2022",
    credentialId: "",
    icon: "/assets/cert/freecodecamp.jpeg",
    skills: [],
    url: "https://freecodecamp.org/certification/fcc906defd5-0e1b-4ff7-b817-842b4fd75839/scientific-computing-with-python-v7",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Canadian University Dubai",
    date: "Aug 2021 - May 2025",
    icon: "🎓",
    points: [
      "Specialized in Artificial Intelligence and Machine Learning.",
      "Advanced coursework in Deep Learning, Computer Vision, NLP, and MLOps.",
      "Published 3 peer-reviewed research papers in IEEE & Springer.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building Production-Ready LLM Applications with RAG",
    excerpt:
      "A comprehensive guide to implementing Retrieval-Augmented Generation systems for real-world applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    url: "https://medium.com/@yadidiah.k/building-production-ready-llm-applications-with-rag-0ff4fa016f0e",
  },
  {
    title: "MLOps Best Practices: From Jupyter to Production",
    excerpt:
      "Learn how to transform experimental ML models into production-grade systems using MLflow, DVC, and modern CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    url: "https://medium.com/@yadidiah.k/mlops-best-practices-how-to-take-models-from-jupyter-notebooks-to-production-49525b9f3885",
  },
  {
    title: "Deep Learning for Medical Imaging",
    excerpt:
      "Building an explainable AI system for pneumonia detection from chest X-rays using CNNs and Grad-CAM visualizations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    url: "https://medium.com/@yadidiah.k/deep-learning-for-medical-imaging-pneumonia-detection-from-chest-x-rays-c1518175f5fc",
  },
];

