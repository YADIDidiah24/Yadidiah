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
    title: "Work",
    children: [
      { id: "projects", title: "Projects" },
      { id: "experience", title: "Experience" },
    ],
  },
  {
    id: "ideas",
    title: "Ideas",
  }
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

const projects = [
  {
    name: "Hotel Booking Analytics Dashboard with Power BI",
    description:
      "Developed Power BI dashboards to analyze hotel bookings, customer loyalty, and booking channels. Used DAX for calculated columns, measures, and KPIs. Integrated data from multiple sources and optimized performance with drill-through functionality and advanced visuals.",
    tags: [
      {
        name: "Data Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Data Modeling",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "British Airways Analysis Dashboard with Tableau",
    description:
      "Developed Tableau dashboards to analyze business operations, aircraft performance, and key metrics. Used filters, parameters, and calculated fields for dynamic reporting. Integrated multiple datasets to uncover insights like seasonality trends and customer segmentation",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, otherTechnologies };
