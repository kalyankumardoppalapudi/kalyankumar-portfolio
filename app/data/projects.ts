import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    image: "/projects/churn.png",
    shortDescription:
      "Machine learning model to predict customer churn using classification techniques.",
    fullDescription:
      "Built an end-to-end machine learning pipeline to predict customer churn using Python. The project includes data preprocessing, feature engineering, model training, evaluation, and deployment as a REST API using Flask. Docker was used for containerization to ensure scalability and portability.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Flask",
      "Docker",
    ],
    github: "https://github.com/yourgithub/churn-prediction",
  },

  {
    title: "E-Learning Web Application",
    image: "/projects/elearning.png",
    shortDescription:
      "Full-stack learning platform with authentication and course management.",
    fullDescription:
      "Developed a full-stack e-learning platform with user authentication, role-based access control, course creation, enrollment system, and responsive UI. Built using React for frontend and Node.js with Express for backend APIs.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/yourgithub/elearning-app",
  },

  {
    title: "Real-Time Object Detection",
    image: "/projects/object-detection.png",
    shortDescription:
      "Live object detection and tracking using OpenCV and deep learning.",
    fullDescription:
      "Implemented a real-time object detection system using OpenCV and deep learning models. The system processes live video streams and detects multiple objects with optimized inference speed and accuracy.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Deep Learning",
    ],
    github: "https://github.com/yourgithub/object-detection",
  },
];