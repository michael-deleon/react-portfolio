import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import BackToTopButton from '../../components/BackToTopButton';
import DemoButtons from "@/app/components/DemoButtons";
import Footer from "../../components/Footer";


const ProjectPage = () => {
  return (
    <>
    <Head>
      <title>Cambio Ventures</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Header />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6">
      {/* Left Navigation (Hidden on Mobile) */}
      <nav className="hidden md:block w-1/4 sticky top-20 self-start">
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          {["Overview", "Research", "Concept", "Testing", "Outcome"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-green-600 hover:text-white transition"
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full md:w-3/4 space-y-16">
      <div className="flex flex-col justify-center items-center">
        <img src="../images/cambio-ventures/investor Dashboard.jpg" alt="Dashboard Header" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
        <h1 className="text-4xl text-center">Cambio Ventures</h1>
        <p  className="mt-4 text-center">Empowering young entrepreneurs to connect with investors through trust and simplicity.
        </p>
        <DemoButtons />
        </div>
        {/* Sections */}
        <div id="overview" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
  {/* Overview Title */}
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
    Overview
  </h2>

  {/* Overview Description */}
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    Cambio Ventures will be a dynamic platform designed to connect potential investors with emerging entrepreneurs from Cambio Labs. It offers investors the opportunity to seamlessly invest in or mentor young startup founders by exploring their innovative ventures online. Investors would be able to easily discover projects, assess their potential, and choose whether to provide financial support, mentorship, or both.
  </p>

  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    Cambio Ventures aims to foster entrepreneurship by simplifying the process for investors and creating a direct, impactful relationship between funders and entrepreneurs.
  </p>
  
  {/* Background Section */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">BACKGROUND</h3>
    <p className="text-gray-700 dark:text-gray-300">
      Cambio Labs, a non-profit organization based in Astoria, NY, runs an annual social entrepreneurship program for high school students. These students often lack a platform to showcase their businesses, making it challenging for them to gain traction with investors.
    </p>
    <p className="text-gray-700 dark:text-gray-300 mt-4">
      At the same time, investors are generally wary of digital platforms, preferring traditional methods due to change aversion. The challenge was to create a platform that connects young entrepreneurs with investors while ensuring the experience is comfortable and trustworthy for the investors.
    </p>
  </div>

  {/* Role, Timeline, Tools, Team Size Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Role */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Role</h3>
      <p className="text-gray-700 dark:text-gray-300">UX/UI, Research, Information Architecture</p>
    </div>

    {/* Timeline */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
      <p className="text-gray-700 dark:text-gray-300">4 months</p>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
      <p className="text-gray-700 dark:text-gray-300">Figma, Figjam, Google Meets, Trello</p>
    </div>

    {/* Team Size */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Size</h3>
      <p className="text-gray-700 dark:text-gray-300">4</p>
    </div>
  </div>
</div>
<p className="text-center text-blue-500">
    How can investors and funders be engaged and create deal flow with entrepreneurs inside our platform?
    </p>

<div id="research" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
  {/* Research Title */}
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Research</h2>

  {/* Introduction */}
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    To address the needs of both the students and investors, I:
  </p>
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
    <li>Explored literature and existing solutions to understand the challenges of trust and digital investment platforms</li>
    <li>Conducted user interviews to gather insights with the support of my client</li>
    <li>Synthesized findings using affinity and empathy mapping</li>
  </ul>

  {/* Comparative Analysis */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">COMPARATIVE ANALYSIS</h3>
    <p className="text-gray-700 dark:text-gray-300">
      To gain inspiration for what features to include in this platform, we created a comparative analysis. This helped us execute some ideas the client team wanted to include such as:
    </p>
   
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
      <li>Filtering System</li>
      <li>Projects Page</li>
      <li>Project Information Page</li>
      <li>Comparison Board</li>
    </ul>
    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/Cambio Labs Comparison Board.jpg" alt="Comparison Boards" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </div>

  {/* About the User Interviewees */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">ABOUT THE USER INTERVIEWEES</h3>
    <ul className="list-none text-gray-700 dark:text-gray-300">
      <li><strong>Participant #1:</strong> Entrepreneur, Former Serial C-Suite Executive in Ads/Telecom/Energy spaces, Leadership Coach & Advisor</li>
      <li><strong>Participant #2:</strong> Blockchain and Crypto Investor</li>
      <li><strong>Participant #3:</strong> Founder / Investor, Philanthropist / Data Applications & Reporting Specialist / Government Contracting Specialist</li>
      <li><strong>Participant #4:</strong> Serial entrepreneur, investor, educator</li>
      <li><strong>Participant #5:</strong> Community Relations Director / Coordinator of the West Side Community Fund</li>
    </ul>
    <p className="text-gray-700 dark:text-gray-300 mt-4">Each interview lasted 45 minutes each in the course of 2 weeks.</p>
  </div>

  {/* Affinity Mapping */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AFFINITY MAPPING</h3>
    <p className="text-gray-700 dark:text-gray-300">
      We outlined key assumptions and grouped them by category: frustrations, information needs, communication, etc. We then developed our hypotheses based on these assumptions, and structured our interviews around validating and testing them.
    </p>
    <p className="text-gray-700 dark:text-gray-300 mt-4">
      We aimed to identify common themes among our user interviewees, so we utilized an affinity map. This facilitated the discovery of pain points, goals, product requirements, and more.
    </p>
    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/affinitymap-cambiolabs.jpg" alt="Affinity Mapping" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </div>

  {/* Key Research Insights */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Affinity Map - Key Research Insights</h3>
    <ul className="list-none text-gray-700 dark:text-gray-300">
      <li><strong>Research Finding 1:</strong> Investors need frequent updates and communication on their investments with the entrepreneurs they work with.</li>
      <li><strong>Research Finding 2:</strong> Investors typically use their own network to find investing opportunities, not platforms.</li>
      <li><strong>Research Finding 3:</strong> Investment decisions require a high level of human connection and trust.</li>
    </ul>
  </div>

  {/* Research Findings Section */}
  <div className="space-y-8">
    <div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research Finding 1</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Investors need frequent updates and communication on their investments with the entrepreneurs they work with.
      </p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;Information has to be transparent, in real time and communicated often.&quot; - Participant #1</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I want to be kept in the loop.&quot; - Participant #4</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;We like to keep in constant communication to not only help them with financial resources, but anything they really need.&quot; - Participant #5</p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>How might we help investors maintain a high level of communication with the entrepreneurs so they can feel kept in the loop?</strong>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research Finding 2</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Investors typically use their own network to find investing opportunities, not platforms.
      </p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I don&apos;t really use any platforms outside of my network.&quot; - Participant #1</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I encourage my clients not to use websites like Kickstarter because they take high percentage fees.&quot; - Participant #3</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;Most of the deal flow comes from our network because there is trust and an inside connection.&quot; - Participant #4</p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>How might we encourage investors to engage and create deal flow with entrepreneurs digitally?</strong>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research Finding 3</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Investment decisions require a high level of human connection and trust.
      </p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I not only look for a good deal, I look for a good team. If we do decide to invest, we will be working with that team for the next several years.&quot; - Participant #2</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I think that relationship building is the key to any job functioning, especially in a nonprofit. I aim to build relationships that are true, genuine, and honest.&quot; - Participant #5</p>
      <p className="italic text-gray-700 dark:text-gray-300 mb-4">&quot;I look at the people involved. Do I trust them? Do I think they are capable of executing? Are they mission-driven?&quot; - Participant #4</p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>How might we nurture the human connection between the investors and the entrepreneurs using a platform?</strong>
      </p>
    </div>
  </div>
</div>


       

<div id="concept" className="container mx-auto p-6">
  <h2 className="text-3xl font-semibold mb-6">Concept</h2>
  
  <p className="text-lg mb-4">
    During conceptualization, each research finding provided a deep understanding of user needs and pain points, helping shape the design direction.
  </p>
  
  {/* <!-- Mapping User Flows Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Mapping Out User Flows</h3>
    <p className="text-lg mb-4">
      Given the desktop-first preference, the user flow was designed with a focus on efficient navigation of large amounts of information. The following diagram illustrates how users might move through the product, ensuring easy access to key sections while providing in-depth content for detailed analysis.
    </p>
    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/Cambio Labs User Flow.jpg" alt="User FLow Mapping" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </section>
  
  {/* <!-- Wireframe Concept Sketches Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Wireframe Concept Sketches</h3>
    <p className="text-lg mb-4">
      The lo-fi wireframes provided an early visualization of how the desktop-first approach would look. They were crucial in determining layout options that could handle complex content while keeping the user experience simple and engaging.
    </p>

    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/Cambio Labs Lo-fi Wireframes.jpg" alt="Wireframe Sketches" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </section>
  
  {/* <!-- Challenges & Considerations Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Challenges & Considerations</h3>
    <p className="text-lg mb-4">
      With a focus on desktop-first design, there were several key challenges to consider:
    </p>
    <ul className="list-disc pl-6 text-lg">
      <li><strong>Optimizing for Desktop First:</strong> Designing primarily for desktop meant organizing information-rich content into digestible sections, but ensuring it didn&apos;t feel too cluttered.</li>
      <li><strong>Information Overload:</strong> Users required access to a large amount of data for their research, but it was critical not to overwhelm them. We used progressive disclosure techniques and clear visual hierarchy to manage this.</li>
    </ul>
  </section>

  {/* <!-- Mid-Fidelity Prototype Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Mid-Fidelity Prototype</h3>
    <p className="text-lg mb-4">
      Once feedback from the lo-fi wireframes was gathered, we transitioned to mid-fidelity prototypes. This stage introduced real content, interactivity, and refined layouts tailored for desktop, ensuring smooth navigation and access to information.
    </p>
    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/Cambio Labs Mid-fi Wireframes.jpg" alt="Mid-fidelty Wirerame Sketches" className="self-centered w-3/4 rounded-lg h-auto"/>
    </div>
  </section>
</div>

<div id="testing" className="container mx-auto p-6">
  <h2 className="text-3xl font-semibold mb-6">Testing</h2>
  
  <p className="text-lg mb-4">
    In my project timeline, I had initially planned for two rounds of usability testing. However, due to the timing around the holiday season, many participants were unavailable for follow-up interviews. Instead of formal rounds, I shifted to an ongoing iterative testing process, where I incorporated feedback from each session into immediate revisions.
  </p>
  
  {/* <!-- Usability Testing Goals Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Usability Testing Goals</h3>
    <p className="text-lg mb-4">The primary goals of my usability testing were:</p>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>Validate the Onboarding Experience:</strong> Ensuring users quickly understood how to navigate the platform and leverage key features.</li>
      <li><strong>Simplify Information Architecture:</strong> Testing how well users could navigate and absorb company profiles and investor filters without feeling overwhelmed.</li>
      <li><strong>Gauge Feature Relevance:</strong> Assessing how well the prioritized features (such as investor filters and pitch deck previews) aligned with user expectations and needs.</li>
    </ul>
  </section>

  {/* <!-- Change in Testing Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Change in Testing</h3>
    <p className="text-lg mb-4">
      The holidays posed an unexpected challenge: many participants were unavailable for follow-up testing. While we were able to gather valuable insights from the initial round of usability testing, we needed to adapt our approach and focus on testing individual revisions after each session, instead of a second formal round.
    </p>
  </section>

  {/* <!-- Usability Test 1 Findings Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Usability Test 1 Findings</h3>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>Navigation needed more clarity:</strong> While users could generally find what they were looking for, some key features, like investor filters, weren&apos;t as intuitive as we&apos;d hoped.</li>
      <li><strong>Pitch deck previews were a hit:</strong> Participants found the ability to preview pitch decks from within the platform to be highly useful, validating our design choice to prioritize this feature.</li>
      <li><strong>Too much information upfront:</strong> Users found some company profiles overwhelming and suggested streamlining the information presented on initial screens.</li>
    </ul>
  </section>

  {/* <!-- Refine Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Refine, Refine, Refine</h3>
    <p className="text-lg mb-4">
      The findings from the first round of testing gave us clear areas for refinement. Based on this feedback, we made the following changes:
    </p>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>Streamlined Filters and Navigation:</strong> Adjusting the placement and visibility of filters to make navigation smoother.</li>
      <li><strong>Condensed Company Profiles:</strong> Reducing the amount of information presented at first glance to improve user flow and prevent cognitive overload.</li>
    </ul>
  </section>
</div>




<div id="outcome" className="container mx-auto p-6">
  <h2 className="text-3xl font-semibold mb-6">Outcome</h2>
  
  <p className="text-lg mb-6">
    Despite the challenges in scheduling formal testing rounds, the iterative feedback-driven process helped me resolve the core issues identified during the usability testing. The final design successfully addressed user pain points, particularly around navigation and information overload. Through constant iteration and learning, the final product became a user-centric platform that simplifies the due diligence process for researching companies.
  </p>
  
  {/* <!-- Final Product Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Final Product</h3>
    <p className="text-lg mb-4">The final design successfully addressed the core pain points of users, particularly around:</p>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li>Improved navigation for better usability</li>
      <li>Reduced information overload to create a smoother user experience</li>
    </ul>
    <div className="flex flex-col justify-center items-center mt-4">
        <img src="../images/cambio-ventures/Cambio Labs Hi-fi Wireframes.jpg" alt="Wireframe Sketches" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </section>

  {/* <!-- Project Takeaways Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Project Takeaways</h3>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>Iterative Testing Leads to Better Outcomes:</strong> The flexibility I embraced due to scheduling challenges ultimately made the project stronger. By conducting usability tests as feedback came in, I was able to make changes rapidly, test again, and further improve the user experience.</li>
      <li><strong>Small Changes, Big Impact:</strong> Sometimes, the smallest adjustments can have the biggest effects. Whether it was reorganizing navigation elements or fine-tuning how much information was displayed, these micro-interactions ended up being game-changers for the usability of the platform.</li>
      <li><strong>User-Centric Design Always Wins:</strong> The most valuable lesson from this project was the importance of user-centered design. Each design decision was driven by real feedback from users, helping me prioritize what truly mattered to them and creating a smoother, more intuitive experience.</li>
    </ul>
  </section>

  {/* <!-- Next Steps Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Next Steps</h3>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>Mobile Usability Testing:</strong> Expand testing to mobile platforms to ensure the same level of ease and accessibility.</li>
      <li><strong>Additional Feature Exploration:</strong> Investigate how to better integrate investor filter features, introduce personalized company recommendations, and continue refining the pitch deck preview functionality.</li>
      <li><strong>Enhanced Personalization Options:</strong> Implement more robust profile personalization, allowing users to tailor the platform to their specific needs for deeper customization and a more targeted experience.</li>
    </ul>
  </section>

  {/* <!-- Client Testimonials Section --> */}
  <section>
    <h3 className="text-2xl font-semibold mb-4">Client Testimonials</h3>
    <blockquote className="italic text-lg mb-4">
    &quot;We want to implement this immediately... which should be a testament to how good your design is.&quot; - Sebastián Martín, Founder & CEO of Cambio Labs
    </blockquote>
    <blockquote className="italic text-lg mb-4">
    &quot;You went above and beyond in the foundational research... approached it with such curiosity.&quot; - Michelle Maluwetig, Director of Organizational Development
    </blockquote>
    <blockquote className="italic text-lg">
    &quot;What you&apos;ve presented us is a very well-thought-out deliverable, way beyond our wildest imaginations.&quot; - Sarah Zou, Director of Product Development
    </blockquote>
  </section>
</div>


      </div>
    </div>
    <BackToTopButton />
    <Footer />
    </>
  );
};

   
export default ProjectPage;
