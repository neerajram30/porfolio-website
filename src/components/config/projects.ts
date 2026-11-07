export interface ProjectData {
  title: string;
  category: "Websites" | "Mobile Apps" | "Business Apps";
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export const projects: ProjectData[] = [
  {
    title: "TieOpp",
    category: "Websites",
    description: "An employability platform connecting students, colleges, and enterprises. Its Employability Readiness Index (ERI) brings together skills, communication, projects, and industry exposure to help track career readiness, identify skill gaps, and support internship and hiring decisions.",
    tags: ["Employability", "Skill Tracking", "Career Readiness"],
    link: "https://tieopp.com/",
    linkLabel: "Visit Website",
  },
  {
    title: "Planckton Data",
    category: "Websites",
    description: "A website presenting Planckton Data's enterprise data-management and AI-readiness solutions. The company's services cover data quality, integration, governance, and automation, alongside sustainability data management and carbon-emissions assessment.",
    tags: ["Data Management", "AI Readiness", "Sustainability"],
    link: "https://plancktondata.ai/",
    linkLabel: "Visit Website",
  },
  {
    title: "Sports Navigator",
    category: "Mobile Apps",
    description: "A mobile app for coaches within the Sports Navigator platform. The platform connects players, coaches, and clubs through game footage, secure communication, and ongoing player monitoring to support player and team development.",
    tags: ["Coaching", "Player Development", "Sports"],
    link: "https://in.linkedin.com/company/sports-navigator",
    linkLabel: "View LinkedIn",
  },
  {
    title: "Calculation Engine",
    category: "Business Apps",
    description: "An application for Planckton Data focused on calculating carbon footprints, supporting the company's work in sustainability and emissions assessment.",
    tags: ["Carbon Footprint", "Calculations", "Sustainability"],
  },
  {
    title: "Moto Cult",
    category: "Business Apps",
    description: "A web-based customer relationship management (CRM) application for car workshops, helping workshop teams manage customer relationships in one place.",
    tags: ["CRM", "Automotive", "Web Application"],
  },
  {
    title: "Gokulam Coconut",
    category: "Websites",
    description: "A community website that promotes local businesses and encourages stronger connections among community members, bringing local commerce and community bonding together.",
    tags: ["Community", "Local Businesses", "Connections"],
  },
  {
    title: "Grocery Genie",
    category: "Mobile Apps",
    description: "A mobile application for retailers, designed around the needs of retail businesses in a mobile experience.",
    tags: ["Retail", "Mobile Application"],
  },
];
