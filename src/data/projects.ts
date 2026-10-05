import { Project } from '../types';

// Canonical public-only dataset. Content is reconciled from the repaired V4 catalogue;
// public image selections come from the V3 showcase media set.
export const projects: Project[] = [
  {
    id: "project-kenalkayu",
    slug: "kenalkayu",
    title: "KenalKayu",
    tagline: "This innovation addresses the limitations of conventional wood species identification, which depends heavily on human expertise and requires 2 to 3 years of intensive professional training.",
    summary: "This innovation addresses the limitations of conventional wood species identification, which depends heavily on human expertise and requires 2 to 3 years of intensive professional training.",
    description: "This innovation addresses the limitations of conventional wood species identification, which depends heavily on human expertise and requires 2 to 3 years of intensive professional training. Manual identification is also time-consuming and prone to human error.\n\nThe project is a collaboration between Universiti Teknologi Malaysia (UTM), Universiti Malaya (UM), and Universiti Teknologi MARA (UiTM). Wood species data is sourced from the Forest Research Institute Malaysia (FRIM) as an authoritative reference to improve system accuracy.",
    category: "Industrial Systems",
    status: "Ongoing",
    year: 2003,
    duration: "2003 - 2026",
    pic: "Dr. Ts. Uswah Binti Khairuddin",
    team: [
      "Dr. Ts. Uswah Binti Khairuddin",
      "Nenny Ruthfalydia binti Rosli"
    ],
    collaborator: "The project is a collaboration between Universiti Teknologi Malaysia (UTM), Universiti Malaya (UM), and Universiti Teknologi MARA (UiTM). Wood species data is sourced from the Forest Research Institute Malaysia (FRIM) as an authoritative reference to improve system accuracy.",
    cost: "RM 3,000,000.00",
    technology: [],
    impactOutcomes: [
      "Identifies wood species in less than 1 second",
      "Reduces dependence on specialist manual expertise",
      "Improves efficiency in the timber industry and enforcement activities",
      "Supports efforts to detect illegal logging",
      "Accelerates field-based wood species verification"
    ],
    posterImage: "/media/kenalkayu/poster.png",
    heroImage: "/media/kenalkayu/hero.png",
    galleryImages: [
      "/media/kenalkayu/gallery-1.png",
      "/media/kenalkayu/gallery-2.png",
      "/media/kenalkayu/gallery-3.png"
    ],
    demoVideos: [],
    featured: true,
    visibilityStatus: 'published',
    featuredOrder: 0,
  },
  {
    id: "project-kepersisan-biodiversiti",
    slug: "kepersisan-biodiversiti",
    title: "Kepersisan Biodiversiti",
    tagline: "Kepersisan Biodiversiti: Digitalization and IoT Program for Biodiversity at Pasoh Forest Reserve, Negeri Sembilan",
    summary: "A biodiversity program that digitalizes biodiversity data, monitors ecosystems in real time, and supports socioeconomic value from biodiversity resources.",
    description: "This program digitalizes biodiversity data, enables real-time ecosystem monitoring, and supports the use of biodiversity resources for socioeconomic benefit.\n\nAcademy of Sciences Malaysia (ASM) and Universiti Putra Malaysia (UPM)",
    category: "Sustainability",
    status: "Completed",
    year: 2022,
    duration: "2022 - 2025",
    pic: "Prof Ir Ts Dr Ahmad Áthif Mohd Faudzi",
    team: [
      "Prof Ir Ts Dr Ahmad Áthif Mohd Faudzi"
    ],
    collaborator: "Academy of Sciences Malaysia (ASM) and Universiti Putra Malaysia (UPM)",
    cost: "RM 4,000,000.00",
    technology: [],
    impactOutcomes: [
      "Developed API systems for the data lake to improve security, access control, and interoperability between stakeholders, supporting more structured, consistent, and scalable biodiversity data management.",
      "Developed AI models for species identification, enabling high-accuracy biodiversity analysis and creating a reference framework for future AI models across other species.",
      "Developed a mobile application for census workflows, enabling more efficient, accurate, and systematic real-time data collection while reducing human error and improving field productivity.",
      "Integrated AI, IoT, drones, and smart sensors to enable real-time biodiversity monitoring, predictive ecosystem analysis, and data-driven decision-making for more sustainable, technology-enabled biodiversity management."
    ],
    posterImage: "/media/kepersisan-biodiversiti/poster.jpeg",
    heroImage: "/media/kepersisan-biodiversiti/poster.jpeg",
    galleryImages: [
      "/media/kepersisan-biodiversiti/gallery-1.jpeg",
      "/media/kepersisan-biodiversiti/gallery-2.jpeg",
      "/media/kepersisan-biodiversiti/gallery-3.jpeg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 1,
  },
  {
    id: "project-clearview",
    slug: "clearview",
    title: "ClearView",
    tagline: "ClearView: Real-Time Smoke Dehazing and Object Detection Wearables for Search and Rescue Operations",
    summary: "ClearView is an AI-powered wearable technology that helps rescue teams see more clearly in smoky conditions, identify critical objects, and transmit information in real time.",
    description: "ClearView is an AI-powered wearable technology that helps rescue teams see more clearly in smoky conditions, identify critical objects, and transmit information in real time. It improves the effectiveness of rescue operations while helping prevent disasters from becoming more severe.\n\nJAPAN INTERNATIONAL COOPERATION AGENCY (JICA)",
    category: "AI & Data",
    status: "Ongoing",
    year: 2024,
    duration: "01/06/2024 - 31/05/2027",
    pic: "Dr. Uswah Binti Khairuddin",
    team: [
      "Dr. Uswah Binti Khairuddin"
    ],
    collaborator: "JAPAN INTERNATIONAL COOPERATION AGENCY (JICA)",
    cost: "RM180,000.00",
    technology: [],
    impactOutcomes: [
      "ClearView strengthens disaster safety and response effectiveness by helping rescue teams see more clearly in smoky conditions, detect hazards earlier, and make faster, more accurate decisions using real-time data. The technology can accelerate rescue operations, reduce risk to firefighters and victims, help prevent disasters from escalating, and protect lives and property."
    ],
    posterImage: "/media/clearview/poster.png",
    heroImage: "/media/clearview/poster.png",
    galleryImages: [],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 2,
  },
  {
    id: "project-mri-simulator",
    slug: "mri-simulator",
    title: "MRI Simulator",
    tagline: "A Web-Based MRI Simulator with Knowledge-Based AI Assistance for Medical and Radiography Education",
    summary: "This innovation was created because students often rely on theory-based learning without being able to interact with a real MRI system.",
    description: "This innovation was created because students often rely on theory-based learning without being able to interact with a real MRI system. High MRI equipment costs, limited access to practical training, and the lack of a centralized platform for lecturer monitoring and student feedback motivated the development of this simulator.\n\nMalaysia-Japan International Institute of Technology (MJIIT), UTM / HoSZA, Hospital Sultan Zainal Abidin / CAIRO UTM / School of Medical Imaging, Faculty of Health Sciences, UniSZA",
    category: "Healthcare",
    status: "TBA",
    year: 2026,
    duration: "1 year",
    pic: "TS. DR. LIYANA 'ADILLA BINTI BURHANUDDIN",
    team: [
      "TS. DR. LIYANA 'ADILLA BINTI BURHANUDDIN"
    ],
    collaborator: "Malaysia-Japan International Institute of Technology (MJIIT), UTM / HoSZA, Hospital Sultan Zainal Abidin / CAIRO UTM / School of Medical Imaging, Faculty of Health Sciences, UniSZA",
    cost: "",
    technology: [],
    impactOutcomes: [
      "The project provides an MRI simulation experience that closely reflects real hospital scenarios, improves practical, interactive, and flexible learning, and enables unlimited web-based training. It also helps lecturers track student progress and provide more effective feedback."
    ],
    posterImage: "/media/mri-simulator/poster.png",
    heroImage: "/media/mri-simulator/poster.png",
    galleryImages: [
      "/media/mri-simulator/gallery-1.jpg",
      "/media/mri-simulator/gallery-2.jpg",
      "/media/mri-simulator/gallery-3.jpg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 3,
  },
  {
    id: "project-paddychat",
    slug: "paddychat",
    title: "AI WhatsApp Assistant / PaddyChat",
    tagline: "AI WhatsApp Assistant for Smart Paddy Farming",
    summary: "PaddyChat helps paddy farmers quickly access agricultural information, advice, and support through WhatsApp with AI assistance.",
    description: "PaddyChat helps paddy farmers quickly access agricultural information, advice, and support through WhatsApp with AI assistance. The innovation is designed to overcome limited access to experts, improve paddy field management efficiency, and support data-driven decision-making among farmers.\n\nJabatan Pertanian Malaysia",
    category: "AI & Data",
    status: "TBA",
    year: 2026,
    duration: "1 year",
    pic: "Prof. Madya Ir. Dr. Zool Hilmi bin Ismail",
    team: [
      "Prof. Madya Ir. Dr. Zool Hilmi bin Ismail"
    ],
    collaborator: "Jabatan Pertanian Malaysia",
    cost: "",
    technology: [],
    impactOutcomes: [
      "Improves farmers' access to real-time agricultural information",
      "Supports more efficient, data-driven paddy crop management",
      "Reduces dependence on physical meetings with specialists",
      "Improves crop yield and paddy quality",
      "Supports digital transformation in Malaysia's agriculture sector"
    ],
    posterImage: "/media/paddychat/poster.png",
    heroImage: "/media/paddychat/poster.png",
    galleryImages: [
      "/media/paddychat/gallery-1.jpg",
      "/media/paddychat/gallery-2.jpeg",
      "/media/paddychat/gallery-3.jpeg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 4,
  },
  {
    id: "project-minit",
    slug: "minit",
    title: "Minit",
    tagline: "This innovation addresses the challenges of manually preparing meeting minutes, a process that is time-consuming, dependent on individual skill, and vulnerable to missing information and inconsistent formatting.",
    summary: "This innovation addresses the challenges of manually preparing meeting minutes, a process that is time-consuming, dependent on individual skill, and vulnerable to missing information and inconsistent formatting.",
    description: "This innovation addresses the challenges of manually preparing meeting minutes, a process that is time-consuming, dependent on individual skill, and vulnerable to missing information and inconsistent formatting. Most existing systems only provide raw transcription without content structuring. This application automates the generation of structured meeting minutes using speech recognition and artificial intelligence.\n\nThe project was developed internally with expertise in information technology and artificial intelligence. It also has potential to be expanded through collaboration with government agencies, educational institutions, and industry partners for use, improvement, and commercialization.",
    category: "AI & Data",
    status: "Completed",
    year: 2025,
    duration: "September 2025 - December 2025",
    pic: "Nenny Ruthfalydia binti Rosli",
    team: [
      "Nenny Ruthfalydia binti Rosli"
    ],
    collaborator: "The project was developed internally with expertise in information technology and artificial intelligence. It also has potential to be expanded through collaboration with government agencies, educational institutions, and industry partners for use, improvement, and commercialization.",
    cost: "",
    technology: [],
    impactOutcomes: [
      "The application can generate meeting minutes automatically in a faster, more consistent, and more structured way. It reduces dependence on manual processes, improves administrative work efficiency, and supports more systematic documentation practices within organizations."
    ],
    posterImage: "/media/minit/poster.png",
    heroImage: "/media/minit/poster.png",
    galleryImages: [],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 5,
  },
  {
    id: "project-tnb-asset-monitoring",
    slug: "tnb-asset-monitoring",
    title: "TNB Asset Monitoring",
    tagline: "Intelligent Monitoring System for TNB Substation Assets Using AI and Thermal Imaging",
    summary: "This innovation helps improve the monitoring efficiency of Tenaga Nasional Berhad (TNB) substation assets in a faster, safer, and more accurate way.",
    description: "This innovation helps improve the monitoring efficiency of Tenaga Nasional Berhad (TNB) substation assets in a faster, safer, and more accurate way. Existing manual inspection methods take a long time and are vulnerable to human error. The project develops an AI and thermal-imaging system to detect abnormal conditions, identify early signs of failure, and support a more proactive maintenance approach for TNB assets.\n\nTenaga Nasional Berhad (TNB) - for pilot study implementation and validation on real assets.",
    category: "Industrial Systems",
    status: "Ongoing",
    year: 2018,
    duration: "* Phase 1: 2018 - 2021\n* Phase 2: 2022 - 2025\n* Phase 3: 2026 - 2027 (pilot study on TNB assets)",
    pic: "Prof. Madya Ts. Dr. Mohd Ibrahim bin Shapiai @ Abd.razak",
    team: [
      "Prof. Madya Ts. Dr. Mohd Ibrahim bin Shapiai @ Abd.razak"
    ],
    collaborator: "Tenaga Nasional Berhad (TNB) - for pilot study implementation and validation on real assets.",
    cost: "Project cost depends on the development phase and includes system development, AI integration, thermal-imaging equipment, field testing, and validation.",
    technology: [],
    impactOutcomes: [
      "The project supports predictive maintenance for TNB substation assets. Through early detection of abnormal conditions and potential failures, the system can help TNB reduce asset failure risk, minimize electricity supply interruptions, optimize maintenance schedules, and reduce operational and repair costs. Overall, the project contributes to more reliable, safer, and more efficient TNB substation operations."
    ],
    posterImage: "/media/tnb-asset-monitoring/poster.png",
    heroImage: "/media/tnb-asset-monitoring/poster.png",
    galleryImages: [
      "/media/tnb-asset-monitoring/gallery-1.jpeg",
      "/media/tnb-asset-monitoring/gallery-2.jpeg",
      "/media/tnb-asset-monitoring/gallery-3.jpeg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 6,
  },
  {
    id: "project-sistem-pemprosesan-ayam-automatik-patuh-syariah",
    slug: "sistem-pemprosesan-ayam-automatik-patuh-syariah",
    title: "Sistem Pemprosesan Ayam Automatik Patuh Syariah",
    tagline: "This innovation addresses non-compliance issues in halal slaughtering processes, the shortage of certified slaughterhouses, and weaknesses in hygiene monitoring and halal certificate usage.",
    summary: "This innovation addresses non-compliance issues in halal slaughtering processes, the shortage of certified slaughterhouses, and weaknesses in hygiene monitoring and halal certificate usage.",
    description: "This innovation addresses non-compliance issues in halal slaughtering processes, the shortage of certified slaughterhouses, and weaknesses in hygiene monitoring and halal certificate usage. High demand for halal chicken in Malaysia also creates a need for a more efficient and trusted system.\n\nThe project involves collaboration between Universiti Teknologi Malaysia (UTM), the Centre for Artificial Intelligence and Robotics (CAIRO), Kementerian Pertanian Malaysia (MOA) through a Technofund grant, and industry partners such as Mumtaz Meat & Marine Foods Sdn. Bhd. for system development and industrial implementation.",
    category: "Industrial Systems",
    status: "Completed",
    year: 2009,
    duration: "2009 - 2011",
    pic: "Ts. Dr.Uswah Binti Khairuddin",
    team: [
      "Ts. Dr.Uswah Binti Khairuddin"
    ],
    collaborator: "The project involves collaboration between Universiti Teknologi Malaysia (UTM), the Centre for Artificial Intelligence and Robotics (CAIRO), Kementerian Pertanian Malaysia (MOA) through a Technofund grant, and industry partners such as Mumtaz Meat & Marine Foods Sdn. Bhd. for system development and industrial implementation.",
    cost: "RM1,000,000.00",
    technology: [],
    impactOutcomes: [
      "Ensures Shariah compliance in the slaughtering process",
      "Increases consumer confidence in halal products",
      "Reduces human error through automation",
      "Improves food product quality and hygiene",
      "Creates commercialization opportunities in the global halal industry"
    ],
    posterImage: "/media/sistem-pemprosesan-ayam-automatik-patuh-syariah/poster.png",
    heroImage: "/media/sistem-pemprosesan-ayam-automatik-patuh-syariah/poster.png",
    galleryImages: [],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 7,
  },
  {
    id: "project-ai-karya-agung-melayu",
    slug: "ai-karya-agung-melayu",
    title: "AI & Karya Agung Melayu",
    tagline: "AI & Karya Agung Melayu: Classical Manuscripts, Future Technology",
    summary: "Accelerates transliteration of classical Malay manuscripts from Jawi script into modern Romanized text to expand access to the intellectual heritage of classical Malay knowledge.",
    description: "This project accelerates transliteration of classical Malay manuscripts from Jawi script into modern Romanized text to expand access to the intellectual heritage of classical Malay knowledge.\n\nYayasan Karyawan, Open Data Institute UK, and Ovation Data US.",
    category: "Education",
    status: "TBA",
    year: 2026,
    duration: "1 year",
    pic: "Prof. Ir. Dr. Hazlina Selamat",
    team: [
      "Prof. Ir. Dr. Hazlina Selamat"
    ],
    collaborator: "Yayasan Karyawan, Open Data Institute UK, and Ovation Data US.",
    cost: "",
    technology: [],
    impactOutcomes: [
      "Opens a new path to revive the heritage of classical Malay knowledge preserved in historical works through AI technology."
    ],
    posterImage: "/media/ai-karya-agung-melayu/poster.png",
    heroImage: "/media/ai-karya-agung-melayu/poster.png",
    galleryImages: [
      "/media/ai-karya-agung-melayu/gallery-1.jpeg",
      "/media/ai-karya-agung-melayu/gallery-2.jpeg",
      "/media/ai-karya-agung-melayu/gallery-3.jpeg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 8,
  },
  {
    id: "project-healthcare-mobile-robot",
    slug: "healthcare-mobile-robot",
    title: "Healthcare Mobile Robot",
    tagline: "Light-Weight Deep Learning Model for Indoor Healthcare Monitoring by Mobile Robot",
    summary: "This innovation enables smarter, more efficient, real-time indoor environmental monitoring for healthcare through a mobile robot.",
    description: "This innovation enables smarter, more efficient, real-time indoor environmental monitoring for healthcare through a mobile robot. The model was developed because many existing AI models require high processing power, memory, and hardware resources, making them difficult to deploy in mobile robot systems or edge devices in hospitals and care centers. Current AI models also tend to focus on object detection, identifying objects separately without fully understanding a situation in the way humans interpret context. In indoor healthcare environments, contextual understanding is important, for example distinguishing whether a person is sitting on a chair, standing beside a bed, or in a situation requiring attention. This project introduces a lightweight deep learning model that can understand relationships between images and text descriptions to support patient monitoring, environmental observation, and automated healthcare operations.",
    category: "Robotics",
    status: "TBA",
    year: 2026,
    duration: "2 years",
    pic: "Dr. Muhammad Hisyam bin Rosle",
    team: [
      "Dr. Muhammad Hisyam bin Rosle"
    ],
    collaborator: "",
    cost: "",
    technology: [],
    impactOutcomes: [
      "The main impact is improved capability for mobile robots to perform indoor healthcare monitoring more efficiently, quickly, and cost-effectively. The lightweight model is suitable for limited hardware, reducing dependence on high-powered computing systems or cloud infrastructure. Through a Visual Language Model approach, the system can go beyond object detection and understand situations more holistically by connecting visual and language information. This enables a robot to interpret environmental context more meaningfully, such as identifying relationships between people, chairs, and beds in healthcare spaces. The innovation can support patient safety monitoring, routine ward observation, and more practical, reliable robot-based healthcare monitoring systems. It also contributes to healthcare automation, staff productivity, and AI technology that is better suited for real hospital environments."
    ],
    posterImage: "/media/healthcare-mobile-robot/poster.png",
    heroImage: "/media/healthcare-mobile-robot/poster.png",
    galleryImages: [
      "/media/healthcare-mobile-robot/gallery-1.png",
      "/media/healthcare-mobile-robot/gallery-2.png",
      "/media/healthcare-mobile-robot/gallery-3.jpg"
    ],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 9,
  },
  {
    id: "project-palm-oil-ffb-ripeness-detection",
    slug: "palm-oil-ffb-ripeness-detection",
    title: "Palm Oil FFB Ripeness Detection",
    tagline: "Explainable AI Palm Oil Fresh Fruit Bunch (FFB) Ripeness Detection",
    summary: "This innovation addresses inconsistency in Fresh Fruit Bunch (FFB) ripeness grading, which still relies heavily on manual inspection.",
    description: "This innovation addresses inconsistency in Fresh Fruit Bunch (FFB) ripeness grading, which still relies heavily on manual inspection. The proposed system uses Explainable AI to provide accurate classification results with visual and narrative explanations that are easy to understand, improving transparency, user trust, and operational efficiency in the palm oil industry.\n\nCentera Technologies Sdn Bhd",
    category: "Sustainability",
    status: "TBA",
    year: 2026,
    duration: "2 years",
    pic: "Dr. Nurulaqilla Binti Khamis",
    team: [
      "Dr. Nurulaqilla Binti Khamis"
    ],
    collaborator: "Centera Technologies Sdn Bhd",
    cost: "RM 67,434.00",
    technology: [],
    impactOutcomes: [
      "The project is expected to improve transparency and reliability in AI-based FFB ripeness assessment through Explainable AI integration. With accuracy above 90%, the system has the potential to improve grading consistency, reduce disputes between plantations and mills, and optimize logistics costs by ensuring that only ripe fruit is sent to mills."
    ],
    posterImage: "/media/palm-oil-ffb-ripeness-detection/poster.png",
    heroImage: "/media/palm-oil-ffb-ripeness-detection/poster.png",
    galleryImages: [],
    demoVideos: [],
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 10,
  },
  {
    id: "project-sems",
    slug: "sems",
    title: "SEMS",
    tagline: "Smart Event Management System",
    summary: "This innovation addresses manual, fragmented, and time-consuming event management processes such as participant registration, attendance verification, certificate generation, event information distribution, and participant communication.",
    description: "This innovation addresses manual, fragmented, and time-consuming event management processes such as participant registration, attendance verification, certificate generation, event information distribution, and participant communication. The system combines AI, automation, and WhatsApp integration to make event operations faster, more organized, and more interactive.\n\nDeveloped by AINA Technology Solution, a company established under the ICC CUBE X program in collaboration with CAIRO UTM, SEMS is an AI-powered smart event management platform for universities, training programs, conferences, and corporate events.",
    category: "AI & Data",
    status: "Ongoing",
    year: 2025,
    duration: "2025 - 2026",
    pic: "Syahmi, Ikmal, Thaqif, Zaenal",
    team: [
      "Syahmi",
      "Ikmal",
      "Thaqif",
      "Zaenal",
      "Prof. Madya Ir. Dr. Zool Hilmi bin Ismail"
    ],
    collaborator: "Developed by AINA Technology Solution, a company established under the ICC CUBE X program in collaboration with CAIRO UTM, SEMS is an AI-powered smart event management platform for universities, training programs, conferences, and corporate events.",
    cost: "RM 20,000.00",
    technology: [],
    impactOutcomes: [
      "The project can reduce manual workload for organizers through automated attendance, certificates, and event information delivery. It also improves the participant experience through real-time schedules, interactive location maps, an AI FAQ chatbot, and AI-based photo search through WhatsApp. The system is suitable for scaling across universities, exhibitions, conferences, and corporate events, and has potential to become a local SaaS platform for smart event management."
    ],
    posterImage: "/media/sems/poster.png",
    heroImage: "/media/sems/poster.png",
    galleryImages: [
      "/media/sems/gallery-1.jpeg",
      "/media/sems/gallery-2.png",
      "/media/sems/gallery-3.jpeg"
    ],
    demoVideos: [
      { label: "Demo 1", url: "https://www.youtube.com/embed/T17bpGItqXw" },
      { label: "Demo 2", url: "https://www.youtube.com/embed/oYxTTirKY8M" }
    ],
    projectPageUrl: "https://sems.ainagroup.my/",
    featured: false,
    visibilityStatus: 'published',
    featuredOrder: 11,
  },
];

export const getFeaturedProject = projects.find((project) => project.featured) ?? projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProject(currentSlug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  return projects[(currentIndex + 1 + projects.length) % projects.length];
}
