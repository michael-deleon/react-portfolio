import PlayerCard from "./PlayerCard";
const projects = [
  {
    image: "/images/cambio-ventures/investor Dashboard.jpg",
    title: "Cambio Ventures",
    role: "Lead UX Designer",
    description: "Developed and maintained shared UI components for design consistency across platforms, improving design system efficiency",
    company: "Cambio Labs",
    stakeholders: "Founders, Investors, Entrepreneurs",
    skills: ["User Research", "Stakeholder Communication", "Wireframing", "Prototyping", "Usability Testing"],
    link: "/projects/cambio-ventures", // links to cambio ventures
  },
  {
    image: "/images/art-with-rm/Art-with-rm.jpg",
    title: "The Art with RM Instagram Filter",
    role: "UX/UI Consultant",
    description: "Launched Art with RM Instagram filter, achieving 5,000+ impressions in the first week, boosting engagement by 30%",
    company: "The Social Interaction Lab",
    stakeholders: "Founder, End users",
    skills: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Behavior Analysis", "Usability Testing"],
    link: "/projects/art-with-rm", // links to insta filter
  },
  {
    image: "/images/coinnect/Coinnect.jpg",
    title: "Coinnect",
    role: "UX Designer",
    description: "Led a team to design a social finance app to empower graduating high school students to understand financial literacy",
    company: "Coinnect - a personal passion project",
    stakeholders: "Team members, End users",
    skills: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Personas", "Team Collaboration"],
    link: "/projects/coinnect", // links to coinnect
  },
  {
    image: "/images/prox/Prox.jpg",
    title: "Prox",
    role: "UX Consultant",
    description: "Designed a user-centered app to foster local, meaningful connections, enhancing community engagement",
    company: "Prox - a student startup company",
    stakeholders: "Founders, Investors, Entrepreneurs",
    skills: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Product Strategy", "Team Collaboration"],
    link: "/projects/prox", // links to prox
  },
];

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl">
        {projects.map((project, index) => (
          <PlayerCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;

// const sampleProject1 = {
//   image: "/images/investor Dashboard.jpg", // Replace with actual project image
//   title: "Cambio Ventures",
//   role: "Lead UX Designer",
//   description: "Designed a platform that connected investors and entrepreneurs.",
//   company: "Cambio Labs",
//   stakeholders: "Investors, Founders",
//   skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
// };
// const sampleProject2 = {
//   image: "/images/investor Dashboard.jpg", // Replace with actual project image
//   title: "The Art with RM Instagram Filter",
//   role: "UX/UI Consultant",
//   description: "Launched Art with RM Instagram filter, achieving 5,000+ impressions in the first week and boosting brand engagement by 30%",
//   company: "The Social Interaction Lab",
//   stakeholders: "Founder, End users",
//   skills: ["User Research", "Wireframing", "Prototyping", "Behavorior Analysis"],
// };
// const sampleProject3 = {
//   image: "/images/investor Dashboard.jpg", // Replace with actual project image
//   title: "Finance App UX Design",
//   role: "Lead UX Designer",
//   description: "Designed an intuitive personal finance dashboard.",
//   company: "Cambio Labs",
//   stakeholders: "Investors, Product Managers",
//   skills: ["UX", "UI", "React", "Tailwind"],
// };
// const App = () => {
//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <div>
//       <PlayerCard project={sampleProject1} />
//     </div>
//     <div>
//     <PlayerCard project={sampleProject2} />
//   </div>
//   <div>
//     <PlayerCard project={sampleProject3} />
//   </div>
//     </div>
    
//   );
// };
// ==========================
// const projects = [
//   {
//     image: "/images/investor Dashboard.jpg", // Replace with actual project image
//     title: "Cambio Ventures",
//     role: "Lead UX Designer",
//     description: "Developed and maintained shared UI components for design consistency across platforms, improving design system efficiency",
//     company: "Cambio Labs",
//     stakeholders: "Founders, Investors, Entrepreneurs",
//     skills: ["User Research", "Stakeholder Communication", "Wireframing", "Prototyping", "Usability Testing"],
//   },
//   {
//     image: "/images/investor Dashboard.jpg", // Replace with actual project image
//     title: "The Art with RM Instagram Filter",
//     role: "UX/UI Consultant",
//     description: "Launched Art with RM Instagram filter, achieving 5,000+ impressions in the first week and boosting brand engagement by 30%",
//     company: "The Social Interaction Lab",
//     stakeholders: "Founder, End users",
//     skills: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Behavorior Analysis", "Usability Testing"],
//   },
//   {
//     image: "/images/investor Dashboard.jpg",
//     title: "Coinnect",
//     role: "UX Designer",
//     description: "Led a team to design a social finance app to empower graduating high school students to understanad financial literacy.",
//     company: "Cambio Labs",
//     stakeholders: "Team members, End users",
//     skills: ["User Research", "Competitive Analysis", "Wireframing", "Prototyping", "Personas", "Team Collaboration"],
//   },
//   {
//     image: "/images/investor Dashboard.jpg",
//     title: "Finance App UX Design",
//     role: "Lead UX Designer",
//     description: "Designed an intuitive personal finance dashboard.",
//     company: "Cambio Labs",
//     stakeholders: "Investors, Product Managers",
//     skills: ["UX", "UI", "React", "Tailwind"],
//   },
// ];

// // export default App;
// const App = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl">
//         {projects.map((project, index) => (
//           <PlayerCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


