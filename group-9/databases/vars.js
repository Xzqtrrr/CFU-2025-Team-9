import { createContext } from "react";

export const ThemeContext = createContext("light");
export const AuthContext = createContext(null);

export const DATA = [
  {
    key: 1,
    category: "IT",
    image: require("../assets/Startup_Img/Nexora.png"),
    nameOfStartuper:"Alex Dayler",
    nameOfProject: "Nexora",
     moreAbout:
"Nexora is a next-generation IT startup focused on building smart, scalable, and secure solutions for the digital future. We specialize in cloud infrastructure, AI-based automation tools, and custom software development for enterprises and startups alike.Our mission is to empower businesses through intelligent technology by streamlining workflows, optimizing data handling, and creating seamless digital experiences.",
    total: 50000,
    left: 10000,
  },
  {
    key: 2,
    category: "Business",
    image: require("../assets/Startup_Img/Innovate.png"),
    nameOfStartuper:"Vlad Sinkop",
    nameOfProject: "Innovate ",
    moreAbout:
"Innovate is a dynamic business startup incubator focused on empowering aspiring entrepreneurs to transform innovative ideas into thriving ventures. We provide end-to-end support—from ideation and mentorship to funding and go-to-market strategies—tailored specifically for early-stage startups. Whether you're crafting tech solutions, launching consumer products, or building a services empire, NovaLaunch ignites your growth with expert guidance and robust resources.",
    total: 45000,
    left: 25000,
  },
  {
    key: 3,
    category: "Brands",
    image: require("../assets/Startup_Img/Brandforge.png"),
    nameOfStartuper:"Ivan Scrept",
    nameOfProject: "Brandforge",
    moreAbout:
"BrandForge is a startup dedicated to transforming the way businesses build and evolve their identities. We specialize in delivering tailor-made brand packages—from logos and visual kits to storytelling strategy and tone of voice—designed to help startups and small businesses stand out in crowded markets.Using smart design, AI-powered brand analysis, and community feedback loops, BrandCrate empowers clients to launch brands that resonate deeply with target audiences. Whether it's a bold new fashion label, a mindful wellness brand, or a trailblazing tech firm, we help craft brands that speak with impact and evolve with purpose.",
    total: 35000,
    left: 30000,
  },
  {
    key: 4,
     category: "EdTech",
    image: require("../assets/Startup_Img/Brightpath.png"),
    nameOfStartuper:"Diana Vinston",
    nameOfProject: "Brightpath",
    moreAbout:
"Brightpath Learning is an EdTech startup revolutionizing how students and professionals engage with education. Built at the intersection of technology and pedagogy, MindLeap offers personalized, adaptive learning experiences powered by AI and data-driven insights. Whether through interactive courses, gamified learning environments, or peer-to-peer tutoring, the platform empowers learners to build real-world skills at their own pace.With a vision to democratize access to quality education, MindLeap partners with educators, institutions, and businesses to deliver cutting-edge content that fits every learner’s goals and schedule. From coding bootcamps to business strategy workshops, MindLeap makes knowledge leap across boundaries.",
    total: 45000,
    left: 18000,
  },
  {
    key: 5,
     category: "Fun",
    image: require("../assets/Startup_Img/Starlight.png"),
    nameOfStartuper:"Camila Satels",
    nameOfProject: "Starlight",
    moreAbout:
"Starlight Entertainment is a creative powerhouse built to captivate audiences across platforms. Whether producing immersive live shows, streaming engaging content, or building digital experiences, SparkPlay lives at the intersection of storytelling and innovation. With a focus on diversity, bold ideas, and high-energy execution, the startup strives to be the go-to launchpad for emerging performers, creators, and content curators. From underground talent to viral sensations, SparkPlay amplifies voices and fuels unforgettable entertainment.",
    total: 25000,
    left: 5000,
  },
  {
  key: 6,
     category: "Voluntary",
    image: require("../assets/Startup_Img/Volunteer.png"),
    nameOfStartuper:"Lisa Laint",
    nameOfProject: "Volunteer",
    moreAbout:
"GreenPulse Initiative is an eco-driven startup that mobilizes community volunteers to restore natural landscapes by planting trees and revitalizing green spaces. More than just a reforestation effort, GreenPulse cultivates environmental stewardship through hands-on action, awareness campaigns, and scalable partnerships with schools, local governments, and businesses.With a tech-enhanced platform that connects volunteers to nearby planting events, tracks carbon offset progress, and rewards impact through digital badges and social recognition, GreenPulse turns sustainability into a social movement. Every planted tree is a pulse of hope for the planet—and every volunteer is a heartbeat of change.",
    total: 30000,
    left: 25000,
  },
  {
    key: 7,
     category: "IT",
    image: require("../assets/Startup_Img/Codenex.png"),
    nameOfStartuper:"Taylor Dewuli",
    nameOfProject: "Codenex",
    moreAbout:
"CodeNova Tech is a cutting-edge IT startup dedicated to delivering smart digital solutions that accelerate business performance and innovation. Specializing in custom software development, cloud integration, and data analytics, CodeNova empowers organizations to embrace digital transformation with confidence.The startup leverages agile methodologies, scalable architecture, and modern design thinking to build intuitive, future-ready tech products. Whether streamlining internal operations, developing customer-facing platforms, or enhancing cybersecurity, CodeNova is the tech partner startups and enterprises trust to fuel digital excellence.",

    total: 45000,
    left: 28000,
  },
  {
    key: 8,
     category: "Business",
    image: require("../assets/Startup_Img/Elevatee.png"),
    nameOfStartuper:"Alexa Stoun",
    nameOfProject: "Elevatee",
    moreAbout:
"Elevatee is a dynamic business startup built to empower aspiring founders with the tools and insights needed to ignite their ventures. Designed as a launchpad for innovation, BizForge offers a blend of strategic consulting, brand development, and venture-building support tailored for early-stage entrepreneurs.With modular service offerings, digital business toolkits, and expert mentorship, BizForge turns raw ideas into refined businesses ready to compete and scale. Whether crafting a new app, launching a product line, or opening a local service, BizForge strengthens every layer of a startup’s foundation—from vision to execution.",
    total: 50000,
    left: 40000,
  },
  {
    key: 9,
     category: "Brands",
    image: require("../assets/Startup_Img/Bravura.png"),
    nameOfStartuper:"Jesika Broun",
    nameOfProject: "Bravura",
    moreAbout:
"Bravura is a fashion startup that celebrates boldness, brilliance, and the courage to be unapologetically yourself. Every piece we design is infused with daring energy and standout personality—created for people who don't just follow trends, but set their own tone. We believe fashion is more than fabric—it's a form of fearless self-expression. Whether it's a striking silhouette, a pop of unexpected color, or an attitude stitched into every seam, Bravura is made for those who turn heads and break molds. Bravura isn't just about fashion—it's about living vividly, standing tall, and wearing your confidence like a badge of honor. It's for the rebels with a vision, the dreamers with an edge, and the creatives who turn the everyday into a runway. Dare to be different. Dress like you mean it. That's Bravura.",
    total: 45000,
    left: 38000,
  },
  {
  key: 10,
     category: "EdTech",
    image: require("../assets/Startup_Img/InspireLearn.png"),
    nameOfStartuper:"Ann Teler",
    nameOfProject: "InspireLearn",
    moreAbout:
"InspireLearn is an innovative EdTech startup focused on creating engaging, inclusive, and personalized learning experiences for students of all ages. Through a dynamic digital platform, InspireLearn blends adaptive learning technologies, interactive content, and mentorship to nurture curiosity, build confidence, and spark lifelong learning. We believe that every learner is unique—with different strengths, interests, and paces. That’s why our platform adapts in real-time, offering tailored pathways that meet students where they are and help them grow beyond where they imagined possible.",
    total: 45000,
    left: 38000,
  },
  {
    key: 11,
     category: "Fun",
    image: require("../assets/Startup_Img/Echoplay.png"),
    nameOfStartuper:"Angelika Milter",
    nameOfProject: "Echoplay",
    moreAbout:
"Echoplay is a music-tech startup made to revolutionize how individuals find new music by combining emotional intelligence, storytelling, and advanced personalization algorithms. Instead of depending on genre filters or popularity charts, SoundNest maps users' moods, memories, and life experiences to curated music journeys. Emotional Profiling: Users create an emotional profile daily (e.g., nostalgic, energetic, reflective) through quick mood sliders or journaling prompts. Story-Driven Playlists, AI curates themed playlists inspired by life moments—\"First Big Move,\" \"Lost Love,\" \"Finding Confidence,\" etc. Collaborative Journaling: Friends can build shared sound journals tied to trips, events, or personal milestones.",
    total: 55000,
    left: 35000,
  },
  {
    key: 12,
    category: "Voluntary",
    image: require("../assets/Startup_Img/Unitynet.png"),
    nameOfStartuper:"Aranot Malt",
    nameOfProject: "Unitynet",
    moreAbout:
" KindWave Project is a non-profit startup dedicated to creating waves of positive change through grassroots initiatives and tech-enabled community engagement. Our mission is to connect volunteers, donors, and changemakers with causes that matter—from urban renewal and social equity to education, sustainability, and disaster relief.With a smart platform that matches local needs to global goodwill, KindWave transforms compassion into action. Through transparency, impact tracking, and storytelling, we keep every supporter meaningfully involved in the ripple effect they help create. Whether planting gardens, teaching skills, or supporting crisis zones, KindWave believes kindness is the most powerful currency for change.",
    total: 38000,
    left: 25000,
  },
  {
    key: 13,
     category: "IT",
    image: require("../assets/Startup_Img/Techhive.png"),
    nameOfStartuper:"Tayler Durden",
    nameOfProject: "Techhive",
    total: 45000,
    left: 28000,
  },
  {
    key: 14,
     category: "Business",
    image: require("../assets/Startup_Img/Prospera.png"),
    nameOfStartuper:"Ramona Flowers",
    nameOfProject: "Prospera",
    total: 50000,
    left: 10000,
  },
  {
    key: 15,
     category: "Voluntary",
    image: require("../assets/Startup_Img/Unitybridge.png"),
    nameOfStartuper:"Kurt Cobain",
    nameOfProject: "Unitybridge",
    total: 38000,
    left: 25000,
  },
  {
    key: 16,
    category: "Brands",
    image: require("../assets/Startup_Img/Brandistry.png"),
    nameOfStartuper:"Alex Giannascolli",
    nameOfProject: "Brandistry",
    total: 35000,
    left: 28000,
  },
  {
    key: 17,
    category: "EdTech",
    image: require("../assets/Startup_Img/Eduvise.png"),
    nameOfStartuper:"Scott Piligrim",
    nameOfProject: "Eduvise",
    total: 45000,
    left: 38000,
  },
  {
    key: 18,
     category: "Fun",
    image: require("../assets/Startup_Img/Starnova.png"),
    nameOfStartuper:"Valera Ihvilynih",
    nameOfProject: "Starnova",
    total: 55000,
    left: 35000,
  },
];