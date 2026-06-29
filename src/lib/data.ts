// src/lib/data.ts
// All portfolio data extracted and professionally rewritten from Mohit Raj's resume

export const personalInfo = {
  name: 'Mohit Raj',
  title: 'Machine Learning Engineer',
  subtitle: 'Data Scientist · ML Research',
  tagline: 'Building end-to-end ML systems that turn raw data into real-world intelligence.',
  email: 'mraj776384@gmail.com',
  phone: '+91-9315244734',
  github: 'https://github.com/mra9165', // Update with actual GitHub URL
  linkedin: 'https://www.linkedin.com/in/mohitraj1108/', // Update with actual LinkedIn URL
  resumeUrl: '/Mohit_Raj_Resume.pdf',
  location: 'India',
  availability: 'Open to full-time ML Engineer & Data Scientist roles',
}

export const aboutMe = {
  paragraphs: [
    "I'm a Data Science graduate with a focus on building production-grade machine learning pipelines — from raw data ingestion and exploratory analysis to model training, ensembling, and evaluation. I care about the full stack of ML: clean preprocessing, principled feature engineering, rigorous validation, and models that actually generalize.",
    "My research internship at NIT Karnataka gave me hands-on exposure to geospatial ML at scale — working with Sentinel satellite imagery, vegetation indices, and Random Forest classifiers on real agricultural datasets via Google Earth Engine. I bring that same research rigor to every project I work on.",
    "Currently coaching AI & Robotics at Stembotix, where I design and deliver technical curriculum that makes machine learning accessible. Teaching has sharpened my ability to communicate complex systems clearly — a skill I consider as important as the engineering itself.",
  ],
  stats: [
    { label: 'ML Projects', value: '5+' },
    { label: 'CGPA', value: '7.6' },
    { label: 'Research Intern', value: 'NITK' },
    { label: 'Certifications', value: '2+' },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'C++'],
    icon: 'Code2',
  },
  {
    category: 'Machine Learning',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Random Forest',
      'Gradient Boosting',
      'Ridge Regression',
      'Ensemble Learning',
      'Cross-Validation',
      'Hyperparameter Tuning',
      'Feature Engineering',
      'Feature Selection',
      'Model Evaluation',
    ],
    icon: 'Brain',
  },
  {
    category: 'Deep Learning',
    items: ['TensorFlow', 'PyTorch'],
    icon: 'Layers',
  },
  {
    category: 'Data Science',
    items: [
      'Pandas',
      'NumPy',
      'EDA',
      'Data Cleaning',
      'Data Preprocessing',
      'Statistics',
      'Matplotlib',
      'Seaborn',
      'Data Visualization',
    ],
    icon: 'BarChart2',
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Google Earth Engine', 'Microsoft Power BI'],
    icon: 'Wrench',
  },
  {
    category: 'Generative AI',
    items: ['RAG Systems', 'AI Agents', 'LLM Deployment', 'Prompt Engineering'],
    icon: 'Sparkles',
  },
]

export const experience = [
  {
    id: 'stembotix',
    role: 'AI & Robotics Coach',
    company: 'Stembotix',
    type: 'Full-time',
    period: 'May 2026 – Present',
    location: 'India',
    description:
      'Designing and delivering hands-on technical curriculum covering AI, Machine Learning, Robotics, and IoT for diverse student cohorts. Guiding students from zero to functional Python and AI-based projects through structured, workshop-based learning.',
    highlights: [
      'Developed and delivered project-based ML and AI curriculum, breaking down complex topics into digestible, practical modules',
      'Mentored students through end-to-end Python and AI project development cycles, improving technical communication skills',
      'Facilitated regular workshops combining theory with live coding sessions, IoT builds, and robotics demonstrations',
    ],
    tags: ['AI Education', 'Python', 'Machine Learning', 'Robotics', 'IoT', 'Curriculum Design'],
  },
  {
    id: 'nitk',
    role: 'Research Intern — Machine Learning & Remote Sensing',
    company: 'NIT Karnataka (NITK Surathkal)',
    type: 'Research Internship',
    period: 'June 2025',
    location: 'Surathkal, Karnataka',
    description:
      'Conducted applied ML research on crop classification using multi-temporal satellite imagery. Built an end-to-end geospatial ML pipeline processing Sentinel-1 and Sentinel-2 data on Google Earth Engine for scalable precision agriculture applications.',
    highlights: [
      'Engineered a complete crop classification pipeline on Sentinel-1 SAR and Sentinel-2 multispectral imagery using Google Earth Engine and Python',
      'Performed advanced feature engineering by extracting vegetation indices — NDVI, EVI, OSAVI, and RVI — from multispectral bands, directly enhancing predictive signal for downstream classifiers',
      'Designed, trained, and validated a Random Forest classifier with systematic hyperparameter tuning and statistical validation on real-world agricultural datasets',
      'Enabled scalable geospatial analysis applicable to precision agriculture at regional scale',
    ],
    tags: ['Random Forest', 'Google Earth Engine', 'Remote Sensing', 'Feature Engineering', 'Sentinel Imagery', 'Precision Agriculture', 'Python'],
  },
]

export const projects = [
  {
    id: 'house-price',
    title: 'House Price Prediction',
    subtitle: 'Advanced Regression · Ensemble Learning',
    featured: true,
    description:
      'End-to-end regression system predicting residential property prices with a stacked ensemble of Ridge Regression, Gradient Boosting, and XGBoost. Achieved consistent performance across 5-fold cross-validation through rigorous preprocessing and systematic hyperparameter search.',
    problem:
      'Residential property prices depend on dozens of interacting features — many missing, skewed, or encoded categorically. The challenge was building a robust regression pipeline that handles real-world messy data while maximizing predictive accuracy.',
    dataset:
      'Ames Housing Dataset — 79 features covering structural, locational, and quality attributes of residential properties. Significant missing values, skewed distributions, and mixed categorical/numerical columns required careful treatment.',
    pipeline: [
      'Data ingestion and schema validation',
      'Exploratory Data Analysis (EDA) with correlation heatmaps and distribution plots',
      'Missing value imputation (median/mode strategies)',
      'Outlier detection and removal using IQR method',
      'Feature engineering (TotalSF, TotalBathrooms, HouseAge)',
      'Skewness correction via Box-Cox transformation',
      'Encoding: label encoding + one-hot encoding',
      'Feature scaling with RobustScaler',
      'Model training with 5-fold CV',
      'Hyperparameter tuning with RandomizedSearchCV',
      'Weighted ensemble construction',
    ],
    featureEngineering: [
      'TotalSF: combined basement, 1st floor, and 2nd floor square footage into a single high-signal composite feature',
      'TotalBathrooms: aggregated full and half bathrooms across all floors to reduce dimensionality',
      'HouseAge: derived age of property at time of sale from YearBuilt and YrSold',
      'Box-Cox transformation applied to right-skewed numerical features to satisfy linear model assumptions',
    ],
    models: ['Ridge Regression', 'Gradient Boosting Regressor', 'XGBoost Regressor', 'Weighted Ensemble'],
    tuning:
      'RandomizedSearchCV over 5-fold CV for each base model. Ensemble weights optimized by minimizing held-out RMSE across the candidate set.',
    metric: 'RMSE (Root Mean Squared Error) on log-transformed sale price via 5-fold cross-validation',
    results: [
      'Weighted ensemble achieved lowest CV RMSE across all model candidates',
      'Feature engineering (TotalSF, HouseAge) improved model signal significantly over raw features',
      'Box-Cox correction reduced skewness impact on Ridge Regression performance',
      'Pipeline generalizes robustly across 5 folds with low variance',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/mra9165/House-Price-Prediction.git', // Update with actual link
    demo: null,
    color: '#6366F1',
  },
  {
    id: 'crop-classification',
    title: 'Crop Classification via Satellite Imagery',
    subtitle: 'Remote Sensing · Geospatial ML · Random Forest',
    featured: true,
    description:
      'Geospatial ML pipeline for multi-class crop classification using Sentinel-1 SAR and Sentinel-2 multispectral satellite data processed on Google Earth Engine. Built as part of ML research at NIT Karnataka with application to precision agriculture and food security monitoring.',
    problem:
      'Traditional crop surveys are slow, expensive, and spatially limited. The goal was to develop a scalable ML-based classification system that identifies crop types from satellite imagery, enabling regional-scale precision agriculture insights.',
    dataset:
      'Sentinel-1 (SAR, C-band backscatter) and Sentinel-2 (multispectral, 13 bands) imagery accessed via Google Earth Engine. Multi-temporal stacks across growing seasons, paired with ground-truth field labels for supervised classification.',
    pipeline: [
      'Satellite imagery ingestion from Google Earth Engine (GEE) API',
      'Cloud masking and atmospheric correction for Sentinel-2',
      'Multi-temporal feature stack construction',
      'Vegetation index extraction (NDVI, EVI, OSAVI, RVI)',
      'Spatial sampling and labeled dataset creation',
      'Data preprocessing and normalization',
      'Random Forest classifier training',
      'Hyperparameter tuning (n_estimators, max_depth, min_samples_split)',
      'Statistical validation and accuracy assessment',
    ],
    featureEngineering: [
      'NDVI (Normalized Difference Vegetation Index): Red/NIR ratio capturing photosynthetic activity',
      'EVI (Enhanced Vegetation Index): corrects for atmospheric and soil background effects in dense canopies',
      'OSAVI (Optimized Soil-Adjusted Vegetation Index): reduces soil noise in sparse vegetation regions',
      'RVI (Radar Vegetation Index): derived from Sentinel-1 SAR backscatter for cloud-penetrating crop monitoring',
      'Multi-temporal stacking to capture phenological growth patterns across the crop cycle',
    ],
    models: ['Random Forest Classifier'],
    tuning:
      'Systematic grid search over n_estimators, max_depth, min_samples_split, and min_samples_leaf with cross-validated OOB error and accuracy metrics.',
    metric: 'Overall Accuracy (OA), Kappa Coefficient, per-class Precision and Recall',
    results: [
      'Successfully classified multiple crop types across real agricultural landscapes',
      'Vegetation index features (NDVI, EVI, OSAVI, RVI) significantly boosted classification performance vs raw bands',
      'Pipeline scales to regional extent via Google Earth Engine cloud processing',
      'Research validated on real-world field-labeled agricultural data at NITK',
    ],
    technologies: ['Python', 'Google Earth Engine', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Geemap'],
    github: 'https://github.com/mra9165/Crop-Identification-Using-Medium-Resolution-Satellite-Image.git', // Update with actual link
    demo: null,
    color: '#4ADE80',
  },
  {
  id: 'potato-disease',
  title: 'Potato Disease Classification',
  subtitle: 'Deep Learning · Computer Vision',
  featured: true,
  description:
    'End-to-end deep learning system for automatic potato leaf disease classification using Convolutional Neural Networks (CNN). Built a robust image classification pipeline capable of accurately detecting Healthy, Early Blight, and Late Blight leaves to support early crop disease diagnosis.',
  problem:
    'Potato crops are vulnerable to fungal diseases that can severely reduce yield and quality if not detected early. Manual inspection is time-consuming and subjective, motivating an automated computer vision solution for rapid disease identification.',
  dataset:
    'Kaggle Potato Leaf Disease Dataset containing labeled RGB images across three classes: Healthy, Early Blight, and Late Blight. Images were preprocessed and augmented to improve model generalization and reduce overfitting.',

  pipeline: [
    'Data collection from Kaggle',
    'Image preprocessing (resizing and normalization)',
    'Data augmentation (rotation, flipping, zooming)',
    'Train-validation-test split',
    'CNN architecture design',
    'Model training using TensorFlow/Keras',
    'Performance evaluation using accuracy and loss metrics',
    'Prediction and inference on unseen leaf images',
  ],

  featureEngineering: [
    'Resized all images to a uniform input size for consistent model training',
    'Normalized pixel values to accelerate convergence and stabilize optimization',
    'Applied image augmentation techniques to improve robustness against varying field conditions',
    'Balanced training pipeline to reduce overfitting and improve generalization',
  ],

  models: [
    'Convolutional Neural Network (CNN)',
    'ReLU Activation',
    'MaxPooling Layers',
    'Fully Connected Dense Layers',
    'Softmax Classifier',
  ],

  tuning:
    'Optimized CNN architecture by experimenting with convolutional layers, learning rate, batch size, and training epochs while monitoring validation accuracy to prevent overfitting.',

  metric:
    'Classification Accuracy on validation dataset along with training/validation loss curves',

  results: [
    'Achieved 99.19% training accuracy',
    'Achieved 99.48% validation accuracy',
    'Successfully classified Healthy, Early Blight, and Late Blight leaf images',
    'Image augmentation significantly improved model generalization on unseen samples',
  ],

  technologies: [
    'Python',
    'TensorFlow',
    'Keras',
    'NumPy',
    'OpenCV',
    'Scikit-learn',
    'Matplotlib',
    'Jupyter Notebook',
  ],

  github: 'https://github.com/mra9165/Deeplearning_E2E_Potato_disease_classificatio.git', // Update with actual repository
  demo: null,
  color: '#22C55E',
},
]

export const certifications = [
  {
    id: 'genai',
    title: 'Generative AI — RAG, AI Agents & Deployment',
    issuer: 'Udemy',
    description:
      'Comprehensive course covering Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agent architectures, LLM fine-tuning concepts, and production deployment strategies for generative AI applications.',
    skills: ['RAG Pipelines', 'AI Agents', 'LLM Deployment', 'Vector Databases', 'Prompt Engineering'],
    icon: 'Sparkles',
    color: '#6366F1',
  },
  {
    id: 'powerbi',
    title: 'AI Dashboards using Microsoft Power BI',
    issuer: 'Microsoft / Udemy',
    description:
      'Practical training in building AI-augmented business intelligence dashboards using Power BI — covering DAX, data modeling, interactive visualizations, and AI-powered analytics features.',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization', 'Business Intelligence'],
    icon: 'BarChart2',
    color: '#F59E0B',
  },
]

export const education = [
  {
    degree: 'B.Tech (Hons.) in Computer Science — Data Science',
    institution: 'Chhattisgarh Swami Vivekanand Technical University',
    period: '2022 – 2026',
    grade: 'CGPA: 7.6 / 10',
    highlights: ['Data Science specialization', 'ML Research at NIT Karnataka', 'End-to-end ML project portfolio'],
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'BSEB',
    period: '2022',
    grade: '70%',
    highlights: [],
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'CBSE',
    period: '2020',
    grade: '89.8%',
    highlights: [],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
