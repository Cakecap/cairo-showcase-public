import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nexus-ai',
    title: 'NEXUS AI',
    tagline: 'Autonomous Decision Intelligence at Scale',
    summary:
      'A next-generation autonomous decision engine capable of processing multi-modal inputs — visual, textual, and sensor data — in real time to drive mission-critical systems.',
    description:
      'NEXUS AI is a flagship research initiative developed at the CAIRO Advanced Intelligence Lab. The system integrates a proprietary multi-modal transformer architecture with reinforcement learning agents trained on adversarial environments. At its core, NEXUS processes simultaneous streams of data from camera arrays, LIDAR sensors, and natural language command interfaces to produce unified situational awareness models. The platform has been deployed in controlled simulation environments processing over 2 million inference cycles per hour with sub-10ms latency on edge hardware. Current development targets autonomous coordination of multi-agent systems in logistics and search-and-rescue scenarios.',
    category: 'AI & Data',
    status: 'Active',
    year: 2024,
    duration: '18 months',
    pic: 'Dr. Layla Al-Hassan',
    team: [
      'Dr. Layla Al-Hassan',
      'Eng. Tariq Mansour',
      'Dr. Priya Nair',
      'Eng. Marco Rossi',
      'Dr. Yuki Tanaka',
    ],
    collaborator: 'MIT CSAIL / DARPA Advanced Research Division',
    cost: '$2.4M',
    technology: ['PyTorch', 'CUDA', 'ROS2', 'ONNX', 'TensorRT', 'Kubernetes', 'gRPC'],
    impactOutcomes: [
      'Achieved 94.7% decision accuracy on COCO-derived situational benchmarks',
      'Reduced inference latency by 68% compared to baseline transformer models',
      '3 patent applications filed in autonomous coordination protocols',
      'Selected for DARPA Phase II funding review',
      'Published in NeurIPS 2024 proceedings',
    ],
    posterImage:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: true,
  },
  {
    id: '2',
    slug: 'helix-robotics',
    title: 'HELIX',
    tagline: 'Surgical Precision Beyond Human Limits',
    summary:
      'A seven-degree-of-freedom robotic surgery platform achieving sub-millimeter precision in minimally invasive procedures, trained on 40,000 annotated surgical case recordings.',
    description:
      'HELIX is a collaborative development between the CAIRO Robotics Lab and the National Surgical Innovation Centre. The platform uses a hybrid force-torque control architecture combined with deep learning-based intraoperative guidance. The robotic arm features custom-designed micro-actuators with haptic feedback loops that relay real-time tissue resistance data to the operating surgeon. A vision subsystem built on a dual-camera stereo endoscope provides depth-accurate 3D reconstruction of the operative field at 60fps. HELIX has completed 180+ simulated procedures across gastrointestinal, orthopedic, and cardiovascular training scenarios.',
    category: 'Robotics',
    status: 'Prototype',
    year: 2024,
    duration: '24 months',
    pic: 'Dr. Ahmed Khalil',
    team: [
      'Dr. Ahmed Khalil',
      'Dr. Sofia Lindqvist',
      'Eng. Omar Farouk',
      'Dr. James Whitmore',
      'Eng. Ana Pereira',
    ],
    collaborator: 'National Surgical Innovation Centre / ETH Zurich Robotics Lab',
    cost: '$3.8M',
    technology: ['C++', 'ROS2', 'OpenCV', 'NVIDIA Isaac', 'PyTorch', 'LabVIEW', 'CANbus'],
    impactOutcomes: [
      'Sub-0.3mm positional repeatability across 10,000 test cycles',
      'Reduced simulated procedure time by 41% versus standard laparoscopic approach',
      'Received Class IIb pre-clinical designation from regulatory advisory board',
      'Two provisional patents filed on micro-actuator haptic feedback system',
    ],
    posterImage:
      'https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '3',
    slug: 'bioscan-dx',
    title: 'BioScan DX',
    tagline: 'Early Detection. Every Time.',
    summary:
      'An AI-powered medical imaging platform that detects oncological markers in CT and MRI scans with radiologist-level accuracy, reducing diagnosis time from days to minutes.',
    description:
      'BioScan DX was developed in response to the critical shortage of diagnostic radiology resources in underserved hospital networks. The system employs an ensemble of convolutional and vision-transformer models fine-tuned on de-identified datasets of over 820,000 annotated scans across 14 cancer types. A proprietary attention-map overlay highlights regions of clinical interest directly on DICOM viewer interfaces, providing radiologists with probabilistic risk scores and comparison references from the anonymized case library. The system integrates with existing PACS infrastructure via HL7 FHIR APIs. Pilot deployments across three regional health systems demonstrated a 31% reduction in time-to-diagnosis for high-priority cases.',
    category: 'Healthcare',
    status: 'Active',
    year: 2023,
    duration: '30 months',
    pic: 'Dr. Nadia Okonkwo',
    team: [
      'Dr. Nadia Okonkwo',
      'Dr. Rajan Mehta',
      'Eng. Claire Beaumont',
      'Dr. Luis Herrera',
      'Eng. Samuel Otieno',
    ],
    collaborator: 'Regional Health Authority / Johns Hopkins Medicine Partnership',
    cost: '$1.9M',
    technology: ['Python', 'TensorFlow', 'MONAI', 'DICOM', 'HL7 FHIR', 'FastAPI', 'Docker'],
    impactOutcomes: [
      '97.2% sensitivity on held-out lung nodule detection benchmark',
      '31% reduction in time-to-diagnosis in pilot deployment',
      'Processing 2,400+ scans per day across three hospital networks',
      'Nominated for WHO Digital Health Innovation Award 2024',
    ],
    posterImage:
      'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '4',
    slug: 'eduflow',
    title: 'EduFlow',
    tagline: 'Adaptive Learning That Knows the Learner',
    summary:
      'A personalized STEM education platform using knowledge graph modeling and NLP to dynamically adjust curriculum paths based on real-time learner performance signals.',
    description:
      'EduFlow addresses persistent structural gaps in STEM education quality across heterogeneous learning environments. The platform builds dynamic learner knowledge graphs that continuously update based on performance across micro-assessments, time-on-task metrics, and self-reported confidence data. A recommendation engine powered by graph neural networks suggests next learning modules, adjusts difficulty curves, and identifies knowledge gaps before formal assessments reveal them. The NLP interface enables conversational tutoring for concept reinforcement. EduFlow has been piloted in four public school networks reaching 12,000 learners in Grades 6–10, with particular focus on underrepresented groups in mathematics and computational thinking.',
    category: 'Education',
    status: 'Active',
    year: 2023,
    duration: '20 months',
    pic: 'Dr. Fatima Al-Zahra',
    team: [
      'Dr. Fatima Al-Zahra',
      'Eng. Daniel Park',
      'Dr. Amara Diallo',
      'Eng. Zoe Reynolds',
      'Dr. Ivan Petrov',
    ],
    collaborator: 'Ministry of Education Innovation Fund / Khan Academy Research Partnership',
    cost: '$1.1M',
    technology: ['React', 'Node.js', 'Neo4j', 'Python', 'GPT-4 API', 'PostgreSQL', 'Redis'],
    impactOutcomes: [
      '22% improvement in standardized math assessment scores across pilot cohorts',
      '18% increase in learner retention versus control classrooms',
      '12,000 active learners across four school networks',
      'Featured in UNESCO Learning Innovation Report 2024',
    ],
    posterImage:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'solargrid-os',
    title: 'SolarGrid OS',
    tagline: 'Intelligent Energy. Zero Waste.',
    summary:
      'A distributed energy management system that orchestrates solar generation, battery storage, and grid exchange across multi-site industrial campuses using predictive load balancing.',
    description:
      'SolarGrid OS was developed to address the complexity of managing intermittent renewable generation alongside industrial load demands. The system deploys IoT sensor arrays across solar generation fields, battery storage banks, and consumption nodes, feeding real-time telemetry into a predictive optimization engine. The core algorithm uses model predictive control combined with weather forecast integration to project generation and demand curves up to 72 hours in advance, automatically scheduling battery charge/discharge cycles and grid import/export decisions. A dashboard provides operations teams with minute-resolution visibility into energy flows, carbon intensity metrics, and cost optimization outcomes. Currently deployed across two industrial campuses with a combined 8.4MW installed solar capacity.',
    category: 'Sustainability',
    status: 'Completed',
    year: 2023,
    duration: '14 months',
    pic: 'Eng. Hassan Al-Rashid',
    team: [
      'Eng. Hassan Al-Rashid',
      'Dr. Elena Vasquez',
      'Eng. Thomas Müller',
      'Dr. Amina Bakr',
    ],
    collaborator: 'National Renewable Energy Authority / Siemens Energy R&D',
    cost: '$2.1M',
    technology: ['Python', 'InfluxDB', 'Grafana', 'MQTT', 'Modbus', 'TensorFlow', 'Kafka'],
    impactOutcomes: [
      '34% reduction in peak grid demand charges across both campuses',
      '2,800 metric tons CO₂ equivalent offset in first 12 months of operation',
      'ROI achieved in 16 months post-deployment',
      'Shortlisted for Global Clean Energy Innovation Prize 2024',
    ],
    posterImage:
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'titan-industrial',
    title: 'TITAN IMS',
    tagline: 'Predict the Failure. Prevent the Cost.',
    summary:
      'A real-time industrial predictive maintenance platform using acoustic emission analysis and vibration pattern recognition to forecast equipment failures 72+ hours in advance.',
    description:
      'TITAN IMS was born from the recognition that unplanned downtime in heavy manufacturing carries average direct costs of $250,000 per hour. The system deploys a network of MEMS accelerometers and acoustic emission sensors on rotating machinery, conveyors, and hydraulic systems. Signal processing pipelines apply wavelet decomposition and FFT analysis before feeding extracted features into anomaly detection models. A rolling baseline system continuously recalibrates against each machine\'s unique operating signature, dramatically reducing false positive rates compared to static threshold systems. An alert management console integrates with CMMS platforms and provides maintenance teams with failure mode classification, recommended inspection actions, and remaining useful life estimates.',
    category: 'Industrial Systems',
    status: 'Active',
    year: 2024,
    duration: '16 months',
    pic: 'Eng. Khalid Abdallah',
    team: [
      'Eng. Khalid Abdallah',
      'Dr. Ingrid Svensson',
      'Eng. Roberto Castillo',
      'Dr. Mei-Ling Chen',
    ],
    collaborator: 'Gulf Industrial Consortium / Bosch Connected Industry',
    cost: '$1.7M',
    technology: ['C++', 'Python', 'Apache Spark', 'InfluxDB', 'Scikit-learn', 'MQTT', 'SAP PM'],
    impactOutcomes: [
      '87% failure prediction accuracy at 72-hour horizon across 3 pilot facilities',
      '$4.2M avoided downtime costs in first year of deployment',
      'False positive rate reduced to 3.1% versus 18% industry baseline',
      'ISO 13379-1 compliant condition monitoring methodology',
    ],
    posterImage:
      'https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'clearwater',
    title: 'ClearWater',
    tagline: 'Clean Water Intelligence for the Next Billion',
    summary:
      'A low-cost distributed sensor network and AI platform for real-time water quality monitoring in rural and peri-urban communities, providing early contamination alerts.',
    description:
      'ClearWater addresses the persistent challenge of water quality monitoring in resource-constrained settings where laboratory testing infrastructure is unavailable. The platform deploys rugged IoT sensor nodes capable of measuring turbidity, pH, dissolved oxygen, conductivity, and specific contaminant signatures using low-power electrochemical sensors. Data is transmitted over LPWAN networks to a cloud analytics engine that applies anomaly detection against historical baselines and WHO quality thresholds. Communities receive real-time alerts via SMS and a lightweight mobile application. Solar-powered nodes operate for 18+ months without maintenance intervention. The platform currently monitors 47 water sources across three countries serving an estimated 280,000 people.',
    category: 'Sustainability',
    status: 'Ongoing',
    year: 2022,
    duration: '36 months',
    pic: 'Dr. Aisha Mwangi',
    team: [
      'Dr. Aisha Mwangi',
      'Eng. Patrick Nguyen',
      'Dr. Sandra Bello',
      'Eng. Arjun Sharma',
      'Dr. Kofi Mensah',
    ],
    collaborator: 'UNICEF Innovation Fund / WHO Water Safety Initiative',
    cost: '$890K',
    technology: ['LoRaWAN', 'Arduino', 'Python', 'AWS IoT', 'TensorFlow Lite', 'React Native'],
    impactOutcomes: [
      '280,000 people served across 47 monitored water sources',
      '12 contamination events detected before traditional testing would have identified them',
      'Sensor unit cost reduced to $47 through custom PCB design in Year 2',
      'Deployed across Kenya, Ghana, and Bangladesh pilot networks',
    ],
    posterImage:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '8',
    slug: 'neurallens',
    title: 'NeuralLens',
    tagline: 'Seeing Structure Where Humans Cannot',
    summary:
      'A high-resolution computer vision research framework achieving state-of-the-art object detection and scene understanding in degraded visual conditions including fog, rain, and low-light environments.',
    description:
      'NeuralLens is a fundamental computer vision research program focused on extending machine perception into conditions that defeat conventional deep learning approaches. The research team developed a novel multi-spectral fusion architecture that combines visible-light, near-infrared, and thermal imagery at the feature-map level rather than the pixel level, allowing the model to leverage complementary information sources dynamically based on ambient conditions. The backbone incorporates deformable convolution layers and a learned atmospheric degradation estimator that applies inverse-correction transforms before scene understanding stages. NeuralLens achieves state-of-the-art performance on FoggyDriving, NightOwls, and RESIDE benchmarks. The framework has attracted interest from autonomous vehicle programs and defense-adjacent perception research.',
    category: 'AI & Data',
    status: 'Active',
    year: 2024,
    duration: '22 months',
    pic: 'Dr. Hiroshi Yamamoto',
    team: [
      'Dr. Hiroshi Yamamoto',
      'Eng. Valentina Cruz',
      'Dr. Ben Okafor',
      'Eng. Lena Fischer',
    ],
    collaborator: 'CAIRO Vision Lab / Toyota Research Institute',
    cost: '$1.3M',
    technology: ['PyTorch', 'CUDA', 'OpenCV', 'CARLA Simulator', 'MLflow', 'Weights & Biases'],
    impactOutcomes: [
      'State-of-the-art mAP of 71.4 on FoggyDriving benchmark',
      '38% improvement over previous best on nighttime pedestrian detection',
      'Accepted to CVPR 2024 main conference',
      'Research code open-sourced with 2,400+ GitHub stars in first 60 days',
    ],
    posterImage:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    heroImage:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920',
    galleryImages: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
];

export const getFeaturedProject = (): Project =>
  projects.find((p) => p.featured) ?? projects[0];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);

export const getRelatedProject = (currentSlug: string): Project => {
  const others = projects.filter((p) => p.slug !== currentSlug);
  return others[Math.floor(Math.random() * others.length)];
};

export const railCategories = [
  { label: 'Featured Projects', projects: projects.slice(0, 5) },
  { label: 'AI & Data', projects: projects.filter((p) => p.category === 'AI & Data') },
  { label: 'Robotics & Automation', projects: projects.filter((p) => p.category === 'Robotics') },
  { label: 'Healthcare Innovation', projects: projects.filter((p) => p.category === 'Healthcare') },
  {
    label: 'Sustainability',
    projects: projects.filter((p) => p.category === 'Sustainability'),
  },
  {
    label: 'Industrial Systems',
    projects: projects.filter((p) => p.category === 'Industrial Systems'),
  },
];
