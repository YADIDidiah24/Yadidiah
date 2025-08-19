import {creator,web,javascript,typescript,html,css,reactjs,redux,tailwind,nodejs,mongodb,git,figma,docker,carrent,jobit,tripguide,threejs,} from "../assets";

// Custom Icons
import aiIcon from "../assets/ai.png";
import daIcon from "../assets/da.png";
import dbIcon from "../assets/db.png";
import reactIcon from "../assets/react.png";
import powerBi from "../assets/powerbi.png";
import lllmIcon from "../assets/intelligence.png";
import promptIcon from "../assets/prompt.png";
import dataanalystIcon from "../assets/analyst.png";
import apiIcon from "../assets/api.png";


// Company Icons
import pwcIcon from "../assets/pwc.png";
import deloitteIcon from "../assets/deloitte.png";
import BAIcon from "../assets/BA.png";
import quantiumIcon from "../assets/quantium.png";
import BCGIcon from "../assets/BCG.png";
import barclaysIcon from "../assets/barclays.png";

// tech
import apacheSparkIcon from "../assets/tech/Apache_Spark.png";
import fastApiIcon from "../assets/tech/FastAPI.png";
import hfIcon from "../assets/tech/hf.svg";
import jupyterIcon from "../assets/tech/Jupyter.png";
import kerasIcon from "../assets/tech/keras.png";
import langchainIcon from "../assets/tech/langchain.png";
import matplotlibIcon from "../assets/tech/Matplotlib.png";
import numpyIcon from "../assets/tech/NumPy.png";
import ollamaIcon from "../assets/tech/ollama.png";
import pandasIcon from "../assets/tech/Pandas.png";
import pythonIcon from "../assets/python.png";
import pytorchIcon from "../assets/tech/pytorch.svg";
import scikitLearnIcon from "../assets/tech/scikit-learn.png";
import seabornIcon from "../assets/tech/seaborn.svg";
import sqlIcon from "../assets/tech/sql.png";
import tableauIcon from "../assets/tech/tableau.svg";
import tensorflowIcon from "../assets/tech/tensorflow.svg";
import postgresqlIcon from "../assets/tech/postgresql.svg";
import snowflakeIcon from "../assets/tech/Snowflake.png";
import bigqueryIcon from "../assets/tech/BigQuery.svg";
// import mlflowIcon from "../assets/tech/MLflow.png";
import sagemakerIcon from "../assets/tech/SageMaker.png";
import vertexIcon from "../assets/tech/vertexAI.svg"; 
import transformerIcon from "../assets/tech/transformer.png"; 
import awsIcon from "../assets/tech/aws.png";
import gcpIcon from "../assets/tech/gcp.svg";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
    children: [
      { id: "projects", title: "Projects" },
      { id: "experience", title: "Experience" },
    ],
  },
  // {
  //   id: "ideas",
  //   title: "Ideas",
  // }
  ,
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Certifications",
    title: "Certifications",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: aiIcon, 
  },
  {
    title: "Data Scientist",
    icon: daIcon, 
  },
  {
    title: "Data Analyst",
    icon: dataanalystIcon,
  },
  {
    title: "LLM Engineer (Fine-Tuning & RAG)",
    icon: lllmIcon,
  },
  {
    title: "Prompt Engineer",
    icon: promptIcon, 
  },
  {
    title: "Database Admin",
    icon: dbIcon, 
      },
      {
            title: "API Developer",
            icon: apiIcon
          },
  {
    title: "Researcher & Technical Writer",
    icon: creator,
  }
];

const technologies = [
  { name: "Python", icon: pythonIcon },
  { name: "TensorFlow", icon: tensorflowIcon },
  { name: "PyTorch", icon: pytorchIcon },
  { name: "Scikit-Learn", icon: scikitLearnIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "NumPy", icon: numpyIcon },
  { name: "Pandas", icon: pandasIcon },
  { name: "Apache Spark", icon: apacheSparkIcon },
  { name: "FastAPI", icon: fastApiIcon },
  { name: "Keras", icon: kerasIcon },
  { name: "Hugging Face", icon: hfIcon },
  { name: "AWS", icon: awsIcon },
  { name: "GCP", icon: gcpIcon },
];


const otherTechnologies = [
  { name: "Matplotlib", icon: matplotlibIcon },
  { name: "Seaborn", icon: seabornIcon },
  { name: "LangChain", icon: langchainIcon },
  { name: "Ollama", icon: ollamaIcon },
  { name: "Jupyter", icon: jupyterIcon },
  { name: "Tableau", icon: tableauIcon },
  { name: "Power BI", icon: powerBi},
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Snowflake", icon: snowflakeIcon },
  { name: "BigQuery", icon: bigqueryIcon },
  // { name: "MLflow", icon: mlflowIcon },
  { name: "SageMaker", icon: sagemakerIcon },
  { name: "Vertex AI", icon: vertexIcon },

  { name: "Transformer", icon: transformerIcon },
];


const experiences = [
  {
    title: "Digital Intelligence Program",
    company_name: "PwC (Forage) ",
    icon: pwcIcon,
    iconBg: "#383E56",
    date: "",
    points: [
      "Conducted data analysis and modeling for the Digital Intelligence team.",
      "Developed Python classification models and analyzed feature importance.",
      "Created data visualizations and valuation documents, including cash flow forecasting.",
      "Contributed to a client’s data strategy proposal by analyzing medical data.",
    ],
  },
  {
    title: "Data Analytics Program ",
    company_name: "Deloitte (Forage)",
    icon: deloitteIcon,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Applied data analysis and forensic technology skills in a Deloitte job simulation.",
      "Designed and implemented interactive data dashboards using Tableau.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilized Excel to classify data and extract actionable business insights.",
    ],
  },
  {
    title: "Data Science Program ",
    company_name: "British Airways (Forage) ",
    icon: BAIcon ,
    iconBg: "#383E56",
    date: "",
    points: [
      "Analyzed customer review data to uncover key insights.",
      "Developed a predictive model to identify factors influencing customer purchasing behavior.",
      "Explored the role of data science in British Airways' success through a hands-on simulation."
    ],
  },
  {
    title: "Data Analytics Program",
    company_name: "Quantium (Forage) ",
    icon: quantiumIcon ,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Conducted data analytics and commercial insights projects.",
      "Processed and analyzed transaction datasets to generate data-driven recommendations.",
      "Identified benchmark stores for uplift testing, supporting evidence-based decision-making.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analytics Virtual Experience ",
    company_name: "Barclays (LifeSkills)",
    icon: barclaysIcon  ,
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
    title: "GenAI Program ",
    company_name: "BCG (Forage)",
    icon: BCGIcon ,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed an AI-powered financial chatbot for BCG’s GenAI Consulting team",
      "Applied Python programming and data manipulation using Pandas",
      "Identified benchmark stores for uplift testing, supporting evidence-based decision-making.",
      "Integrated and analyzed financial data from 10-K and 10-Q reports, leveraging rule-based logic for insightful chatbot responses.",
    ],
  },
  {
    title: "Data Science & Security Analytics Challenge",
    company_name: "Undisclosed",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Apr 2024",
    points: [
      "Data Decryption & Analysis: Applied custom decryption techniques to process encrypted datasets and extract meaningful insights for analysis.",
      "API Data Retrieval & Processing: Interacted with secure APIs to fetch, manipulate, and analyze sensitive data, implementing key data transformation processes.",
      "SQL Injection for Data Access Testing: Conducted security assessments by simulating SQL injection techniques to understand and identify potential data access vulnerabilities.",
      "Real-Time Data Communication: Established and maintained WebSocket connections for real-time data transfer and analysis, ensuring seamless data flow between systems.",
    ],
  },
];

const testimonials = [
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
import businessplanner from "../assets/projects/businessApp.png";
import yousentimentai from "../assets/projects/yousentimentai.png";
import lexiqeai from "../assets/projects/lexiqeai.png"; 
import pneumoscanai from "../assets/projects/pneomo.jpeg";
import textsummarizer from "../assets/projects/textsummarizer.jpeg";
import hotelbooking from "../assets/projects/HotelBooking.png";
const projects = [
  {
    name: "Premium Business Planner with AI-Driven Analytics",
    description:
      "Built a full-stack AI-powered business planning platform using Google Gemini API, Plotly, and Streamlit. Features AI-generated business strategies, interactive financial dashboards, risk assessment matrix, and real-time analytics for entrepreneurs to create investor-ready business plans in hours.",
    tags: [
      { name: "Generative AI", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Plotly", color: "pink-text-gradient" },
    ],
    image: businessplanner, // replace with actual image variable
    source_code_link: "https://github.com/YADIDidiah24/LLM-Projects/tree/main/Premium-Business-Start",
  },
  {
    name: "YouSentimentAI - MLOps YouTube Sentiment Analysis",
    description:
      "Developed an end-to-end MLOps pipeline for YouTube comment sentiment analysis with LightGBM, TF-IDF, MLflow, DVC, and AWS. Built a responsive web app with real-time comment fetching, interactive sentiment visualizations, and automated CI/CD deployment.",
    tags: [
      { name: "MLOps", color: "blue-text-gradient" },
      { name: "MLflow", color: "green-text-gradient" },
      { name: "LightGBM", color: "pink-text-gradient" },
    ],
    image: yousentimentai,
    source_code_link: "https://github.com/YADIDidiah24/Youtube-Sentiment-Analysis.git",
  },
  {
    name: "LexiQE AI - Legal Document Q&A Assistant",
    description:
      "Created an AI-powered assistant for legal document analysis using RAG, FAISS, and FLAN-T5. Allows users to upload PDFs and query them via a chat interface, delivering context-aware answers locally with full data privacy.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: lexiqeai,
    source_code_link: "https://github.com/YADIDidiah24/LLM-Projects/tree/main/LegalDocumentChatBot",
  },
  {
    name: "PneumoScan AI - Pneumonia Detection System",
    description:
      "Built a deep learning medical imaging tool using TensorFlow/Keras to detect pneumonia from chest X-rays with 98.42% accuracy. Integrated Grad-CAM visualizations for explainability and deployed with a medical-grade Streamlit interface.",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
    ],
    image: pneumoscanai,
    source_code_link: "https://github.com/YADIDidiah24/grad-proj",
  },
  {
    name: "AI Web Application for Text Summarization",
    description:
      "Developed a Flask-based AI summarization tool with customizable summary length, real-time text analysis, and sentence importance scoring using TF-IDF, Cosine Similarity, and NER. Interactive UI built with HTML/CSS/JavaScript.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: textsummarizer,
    source_code_link: "https://github.com/YADIDidiah24/AI-Web-applications/tree/main/text-summariser-spaCy",
  },
  {
    name: "Hotel Booking Analytics Dashboard with Power BI",
    description:
      "Designed interactive Power BI dashboards to analyze hotel bookings, customer loyalty, and booking channels using DAX, KPIs, and drill-through features with multi-source data integration.",
    tags: [
      { name: "Data Analysis", color: "blue-text-gradient" },
      { name: "Power BI", color: "green-text-gradient" },
      { name: "DAX", color: "pink-text-gradient" },
    ],
    image: hotelbooking,
    source_code_link: "https://www.linkedin.com/posts/yadidiah-kanaparthi_powerbi-dataanalytics-datavisualization-activity-7291168365581115393-QUS7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQgvm4BE9wxq_daObrX94kcaAXvE06h7E4",
  },
  // {
  //   name: "British Airways Analysis Dashboard with Tableau",
  //   description:
  //     "Developed Tableau dashboards analyzing operations, performance, and seasonality trends using filters, parameters, and calculated fields to support data-driven decision making.",
  //   tags: [
  //     { name: "Tableau", color: "blue-text-gradient" },
  //     { name: "Data Visualization", color: "green-text-gradient" },
  //     { name: "Business Analysis", color: "pink-text-gradient" },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://www.linkedin.com/posts/yadidiah-kanaparthi_tableau-dataanalytics-datavisualization-activity-7291802554642886656-6-VR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQgvm4BE9wxq_daObrX94kcaAXvE06h7E4",
  // },
  
];




import forageIcon from "../assets/cert/forage.jpeg";
import microsoftIcon from "../assets/cert/microsoft.jpeg";
import anacondaIcon from "../assets/cert/anaconda.jpeg";
import knimeIcon from "../assets/cert/knime.jpeg";
import hackerrankIcon from "../assets/cert/hackerrank.jpeg";
import kaggleIcon from "../assets/cert/kaggle.jpeg";
import linkedinIcon from "../assets/cert/linkedin.jpeg";
import mathworksIcon from "../assets/cert/mathworks.jpeg";
import openUniIcon from "../assets/cert/openuni.jpeg";
import greatLearningIcon from "../assets/cert/greatlearning.jpeg";
import googleIcon from "../assets/cert/google.jpeg";
import freeCodeCampIcon from "../assets/cert/freecodecamp.jpeg";
import futureLearnIcon from "../assets/cert/futurelearn.jpeg";
import alisonIcon from "../assets/cert/alison.jpeg";
import geeksforGeeksIcon from "../assets/cert/geeksforgeeks.jpeg";
import { h } from "maath/dist/misc-7d870b3c.esm";

const certifications = [
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "June 2025",
    credentialId: "",
    icon: googleIcon,
    skills: ["Artificial Intelligence (AI)", "Generative AI"],
    url: "https://www.credly.com/badges/6cea7eeb-1a29-42a7-8443-966d718b8ea0/public_url",
  },
  {
    title: "Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Mar 2025",
    credentialId: "",
    icon: microsoftIcon,
    skills: ["Artificial Intelligence (AI)", "Generative AI"],
    url: "https://www.linkedin.com/learning/certificates/ae4c30836bfbeeebbe26004b1398b330db0a862608b509f31fbf863e244ab839",
  },
  {
    title: "Data Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Mar 2025",
    credentialId: "",
    icon: microsoftIcon,
    skills: ["Data Analysis", "Data Visualization"],
    url: "https://www.linkedin.com/learning/certificates/ecc8f1cf6ae0ffd5ca7ff66c031ab4773f6dae5a67bf306e79e78a8dc2f531f7",
  },

  {
    title: "Data Science Professional Certificate",
    issuer: "Anaconda, Inc.",
    date: "Mar 2025",
    credentialId: "",
    icon: anacondaIcon,
    skills: ["Data Science", "Python (Programming Language)", "Data Analysis", "Real-time Data"],
    url: "https://www.linkedin.com/learning/certificates/9a9bc3e104d4cebed4f9d3e413d15948dafbfc1df642359f00af108c6f022169?trk=share_certificate",

  },
  {
    title: "Data Science Professional Certificate by KNIME",
    issuer: "KNIME",
    date: "Mar 2025",
    credentialId: "",
    icon: knimeIcon,
    skills: ["Artificial Intelligence for Business"],
    url: "https://www.linkedin.com/learning/certificates/3e34afd6d26ecd2b216bfe1a36e7993f0132909c6ef63bcf07d3b3c9cf091adb",

  },
   
  
  {
    title: "Deep Learning",
    issuer: "Kaggle",
    date: "Nov 2024",
    credentialId: "",
    icon: kaggleIcon,
    skills: ["Machine Learning"],
    url: "https://www.kaggle.com/learn/certification/yadidiahk/intro-to-deep-learning",

  },
  {
    title: "Server Administration Essential Training",
    issuer: "LinkedIn",
    date: "Jul 2023",
    credentialId: "",
    icon: linkedinIcon,
    skills: [],
    url: "https://www.linkedin.com/learning/certificates/5bf4923c33abe29d6ee855e42dc92a5414d63dff89ce34bfd82fafc0233004ca",

  },
  {
    title: "Certified Software Engineer",
    issuer: "HackerRank",
    date: "Apr 2025",
    credentialId: "",
    icon: hackerrankIcon,
    skills: ["Java", "Problem Solving", "Python (Programming Language)", "Object-Oriented Programming (OOP), SQL"],
    url: "https://www.hackerrank.com/certificates/8b50fc89c3f0",

  },
  {
    title: "Restful API (Intermediate)",
    issuer: "HackerRank",
    date: "Dec 2024",
    credentialId: "",
    icon: hackerrankIcon,
    skills: ["Data Analysis"],
    url: "https://www.hackerrank.com/certificates/7199139728b0",

  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "Apr 2023",
    credentialId: "",
    icon: hackerrankIcon,
    skills: ["MySQL"],
    url: "https://www.hackerrank.com/certificates/5b24827f203d",

  },

   {
    title: "Accenture Nordics - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "wDZ9h8eu7kJWbaGF9",
    icon: forageIcon,
    skills: [],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_NrbDkQHjF7rrYt5YF_1741192955322_completion_certificate.pdf",

  },
  {
    title: "British Airways - Data Science Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "cpC8RLfEseze2YEav",
    icon: forageIcon,
    skills: [],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_NrbDkQHjF7rrYt5YF_1741194624177_completion_certificate.pdf",

  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "AJMh2FggBygifKvfE",
    icon: forageIcon,
    skills: ["Microsoft Power BI"],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_NrbDkQHjF7rrYt5YF_1741194356079_completion_certificate.pdf",

  },
  {
    title: "PwC Switzerland - Digital Intelligence Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "Rziuwq6N7bzSFiwyo",
    icon: forageIcon,
    skills: ["Machine Learning"],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/Kaib4AmLSAG5mDsD4_4sLyCPgmsy8DA6Dh3_NrbDkQHjF7rrYt5YF_1741110381970_completion_certificate.pdf",

  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Mar 2023",
    credentialId: "",
    icon: mathworksIcon,
    skills: ["MATLAB", "Decision-Making"],
    url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f78a8ff8-6aff-45d7-aafe-0701348596f8&",

  },
 

  {
    title: "Artificial Intelligence",
    issuer: "Amazon Web Services (AWS)",
    date: "Nov 2022",
    credentialId: "",
    icon: awsIcon,
    skills: ["Machine Learning"],
    url: "https://publuu.com/flip-book/101819/276800",

  },  {
    title: "Machine Learning",
    issuer: "Kaggle",
    date: "Mar 2022",
    credentialId: "",
    icon: kaggleIcon,
    skills: ["Machine Learning"],
    url: "https://www.kaggle.com/learn/certification/yadidiahk/intro-to-machine-learning",

  },  {
    title: "Build Actions for Google Assistant",
    issuer: "Google Developers Group",
    date: "Jun 2022",
    credentialId: "",
    icon: googleIcon,
    skills: [],
    url: "https://developers.google.com/profile/badges/playlists/actions-on-google/",

  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "Jun 2022",
    credentialId: "",
    icon: freeCodeCampIcon,
    skills: ["Python (Programming Language)", "Pandas (Software)", "Data Analysis"],
    url: "https://freecodecamp.org/certification/fcc906defd5-0e1b-4ff7-b817-842b4fd75839/data-analysis-with-python-v7",

  },
  {
    title: "Digital Skills: Web Analytics",
    issuer: "FutureLearn",
    date: "Jun 2022",
    credentialId: "",
    icon: futureLearnIcon,
    skills: [],
    url: "https://www.futurelearn.com/certificates/8pv7q7k",

  },
  {
    title: "SQL",
    issuer: "HackerRank",
    date: "Jun 2025",
    credentialId: "",
    icon: hackerrankIcon,
    skills: [],
    url: "https://www.hackerrank.com/certificates/2e79360c73ad",

  },{
    title: "Rest API",
    issuer: "HackerRank",
    date: "Jun 2025",
    credentialId: "",
    icon: hackerrankIcon,
    skills: [],
    url: "https://www.hackerrank.com/certificates/89151e977077",

  },

  {
    title: "Diploma in Computer Networking ",
    issuer: "Alison",
    date: "May 2022",
    credentialId: "1480-24113466",
    icon: alisonIcon,
    skills: [],
    url: "https://alison.com/certification/check/$2y$10$2.xjihfl2GvzXMN.qyvPQuaajEWUtI02qQVCtJYeZAGcWH7mXVqSu",

  },

  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "May 2022",
    credentialId: "",
    icon: freeCodeCampIcon,
    skills: [],
    url: "https://freecodecamp.org/certification/fcc906defd5-0e1b-4ff7-b817-842b4fd75839/scientific-computing-with-python-v7",

  },

];


export { services, technologies, experiences, testimonials, projects, otherTechnologies, certifications };

// PUBLICATIONS & RESEARCH PAPERS
const publications = [
  {
    id: 1,
    title: "Optimizing Agricultural Practices Through Integrated IoT and ML Solutions",
    journal: "Springer",
    publisher: "Springer Nature",
    date: "Feb 2025",
    type: "Book Chapter",
    doi: "10.1007/978-3-031-81369-6_8",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-81369-6_8",
    pdfUrl: "https://link.springer.com/content/pdf/10.1007/978-3-031-81369-6_8.pdf", // May require access
    abstract: "This research presents an innovative approach to modernizing agricultural practices by integrating Internet of Things (IoT) technologies with advanced Machine Learning (ML) algorithms. The study demonstrates how data-driven solutions can optimize crop yield, resource management, and sustainable farming practices.",
    keywords: ["IoT", "Machine Learning", "Agriculture", "Smart Farming", "Optimization"],
    authors: "Your Name, Co-Authors",
    status: "Published",
    color: "from-green-400 to-blue-500",
    icon: "🌱"
  },
  {
    id: 2,
    title: "Identifying Security Threats in the System Using Automated Security Logs",
    journal: "IEEE Xplore",
    publisher: "IEEE",
    date: "Dec 2024",
    type: "Conference Paper",
    doi: "10.1109/EXAMPLE.2024.10815284",
    url: "https://ieeexplore.ieee.org/document/10815284",
    pdfUrl: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10815284", // IEEE PDF access
    abstract: "This paper introduces an automated framework for identifying and analyzing security threats through intelligent log analysis. Using machine learning algorithms, the system can detect anomalous patterns and potential security breaches in real-time system logs.",
    keywords: ["Cybersecurity", "Log Analysis", "Threat Detection", "Automation", "Machine Learning"],
    authors: "Your Name, Co-Authors",

    status: "Published",
    color: "from-red-400 to-purple-500",
    icon: "🔒"
  },
  {
    id: 3,
    title: "Sustainable Security Solutions for IoT: Enhancing Intrusion Detection Using AI and Machine Learning",
    journal: "IEEE Xplore",
    publisher: "IEEE",
    date: "Dec 2024",
    type: "Conference Paper",
    doi: "10.1109/EXAMPLE.2024.10815208",
    url: "https://ieeexplore.ieee.org/document/10815208",
    pdfUrl: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10815208", // IEEE PDF access
    abstract: "This research focuses on developing sustainable security solutions for IoT ecosystems by leveraging AI and ML techniques for enhanced intrusion detection. The proposed framework addresses the growing security challenges in IoT networks while maintaining energy efficiency and scalability.",
    keywords: ["IoT Security", "Intrusion Detection", "AI", "Machine Learning", "Sustainability"],
    authors: "Your Name, Co-Authors",

    status: "Published",
    color: "from-blue-400 to-cyan-500",
    icon: "🛡️"
  }
];

// RESEARCH METRICS
const researchMetrics = [
  {
    label: "Total Publications",
    value: "3",
    icon: "📄"
  },
  {
    label: "Total Citations",
    value: "5",
    icon: "📊"
  },
  {
    label: "H-Index",
    value: "2",
    icon: "📈"
  },
  {
    label: "Research Areas",
    value: "4",
    icon: "🔬"
  }
];

// RESEARCH AREAS
const researchAreas = [
  {
    area: "IoT & Smart Systems",
    publications: 2,
    description: "Internet of Things, Smart Agriculture, Sustainable IoT Solutions",
    color: "bg-green-500"
  },
  {
    area: "Cybersecurity & AI",
    publications: 2,
    description: "Security Threat Detection, Intrusion Detection Systems, AI-driven Security",
    color: "bg-red-500"
  },
  {
    area: "Machine Learning Applications",
    publications: 3,
    description: "Applied ML in Agriculture, Security, and IoT Systems",
    color: "bg-blue-500"
  },
  {
    area: "Automation & Optimization",
    publications: 2,
    description: "Automated Systems, Process Optimization, Intelligent Analytics",
    color: "bg-purple-500"
  }
];

// PDF VIEWER COMPONENT DATA
const pdfViewerConfig = {
  enableDownload: true,
  enablePrint: true,
  enableSearch: true,
  defaultZoom: 1.0,
  toolbar: true,
  navigation: true
};

// ACADEMIC PROFILES
const academicProfiles = [
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com/citations?user=YOUR_ID",
    icon: "🎓",
    color: "text-blue-600"
  },
  {
    platform: "ResearchGate",
    url: "https://www.researchgate.net/profile/YOUR_PROFILE",
    icon: "🔬",
    color: "text-green-600"
  },
  {
    platform: "ORCID",
    url: "https://orcid.org/YOUR_ORCID_ID",
    icon: "🆔",
    color: "text-gray-600"
  },
  {
    platform: "IEEE Xplore",
    url: "https://ieeexplore.ieee.org/author/YOUR_ID",
    icon: "⚡",
    color: "text-blue-800"
  }
];

// PUBLICATION STATS BY YEAR
const publicationsByYear = [
  { year: "2025", count: 1, papers: ["Optimizing Agricultural Practices..."] },
  { year: "2024", count: 2, papers: ["Identifying Security Threats...", "Sustainable Security Solutions..."] }
];





export { 
  publications, 
  researchMetrics, 
  researchAreas, 
  pdfViewerConfig, 
  academicProfiles,
  publicationsByYear 
};





