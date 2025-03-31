import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import BackToTopButton from "../../components/BackToTopButton";
import Footer from "../../components/Footer";
import CoinnectDemo from "@/app/components/CoinnectDemo";


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
        <img src="../images/coinnect/Coinnect Header Image.jpg" alt="Coinnect Header" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
        <h1 className="text-4xl text-center">Coinnect</h1>
        <p  className="mt-4 text-center">Helping young adults take control of their finances through smart, social, and intuitive money management.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      {/* Live Prototype Button */}
      <a
        href="https://www.figma.com/proto/aLoMX5z4AQrpOKsjMo4Meg/Social-Finance-App?node-id=18-66&t=Ctu6HnK0cUpst3TG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-1/2 text-center bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Live
      </a>
      </div>
        </div>
        {/* Sections */}
        <div id="overview" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
  {/* Overview Title */}
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
    Overview
  </h2>

  {/* Overview Description */}
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
  Coinnect was an academic project ideated during my time at NJIT, focusing on helping young adults better manage their personal finances. Over the course of two to three months, my team and I conceptualized Coinnect as a mobile application that would offer accessible financial education and easy-to-use tools for budgeting, savings, and expense tracking. The project was never fully developed but served as a deep dive into UX/UI ideation, business modeling, and user persona creation.  </p>
  
  {/* Background Section */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">BACKGROUND</h3>
    <p className="text-gray-700 dark:text-gray-300">
    Many young adults face significant challenges in managing their finances effectively. Whether it&apos;s a lack of financial literacy or difficulty navigating personal budgeting tools, young people often struggle to establish healthy financial habits. The goal of Coinnect was to empower this demographic by providing an intuitive and accessible platform to learn and manage personal finances.    </p>
  </div>

  {/* Role, Timeline, Tools, Team Size Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Role */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Role</h3>
      <p className="text-gray-700 dark:text-gray-300">UX/UI, Research</p>
    </div>

    {/* Timeline */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Timeline</h3>
      <p className="text-gray-700 dark:text-gray-300">2-3 months</p>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
      <p className="text-gray-700 dark:text-gray-300">Figma, Figjam, Google Meets, Trello</p>
    </div>

    {/* Team Size */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Size</h3>
      <p className="text-gray-700 dark:text-gray-300">5</p>
    </div>
  </div> 
</div>

<div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The primary objective was to ideate a solution that simplified financial literacy for young adults and gave them tools to track and improve their spending, savings, and budgeting habits. We aimed to:
        </p>

        {/* Goals List */}
        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>Educate users on personal finance topics</li>
          <li>Provide an intuitive interface for budgeting and expense tracking</li>
          <li>Foster better financial decision-making through personalized advice</li>
        </ul>

</div>

<div id="research" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
<h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Research</h2>

{/* Findings */}
<section className="mb-8">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Findings</h3>
  <ul className="space-y-4">
    <li className="text-lg text-gray-700 dark:text-gray-300">
      <strong>Overspending Among Young Adults:</strong> Young adults are more likely to overspend, particularly when using mobile payment systems. A University of Illinois study found that mobile payments increase spending by 23.5%, particularly on non-essential items.
    </li>
    <li className="text-lg text-gray-700 dark:text-gray-300">
      <strong>Social Finance Pressures:</strong> 30% of app users report being repeatedly asked for small payments by friends or family, contributing to poor financial decision-making. This &quot;Venmo Vultures&quot; phenomenon mirrors the dangers of easy credit use, where users dissociate from the financial impact of these transactions.
    </li>
    <li className="text-lg text-gray-700 dark:text-gray-300">
      <strong>Desire for Social Engagement:</strong> Financial apps that integrate social components—like sharing, tracking progress, or competing with peers—are increasingly popular, especially among younger generations.
    </li>
  </ul>
</section>

{/* Competitive Analysis */}
<section className="mb-8">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Competitive Analysis</h3>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    To create a product that addresses both user needs and market gaps, we conducted a thorough comparative analysis of existing apps like Venmo, Cash App, and other social finance platforms. We focused on areas such as usability, social features, and financial literacy tools. This analysis informed our design decisions, particularly in adding educational components and personalized advice.
  </p>
  
  {/* Competitive Apps */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Mint by Intuit */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mint by Intuit</h4>
      <div className="text-lg text-gray-700 dark:text-gray-300">
        <strong>Strengths:</strong>
        <ul className="list-disc list-inside mb-4">
          <li>Established User Base: Mint has a large user base and a strong reputation for financial management.</li>
          <li>Financial Tracking: Offers budgeting, expense tracking, and credit score monitoring.</li>
        </ul>
        <strong>Weaknesses:</strong>
        <ul className="list-disc list-inside">
          <li>Complexity: Might be overwhelming for young adults new to financial management.</li>
          <li>Lack of Educational Resources: Limited educational content to empower users with financial knowledge.</li>
        </ul>
      </div>
    </div>

    {/* Acorns */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Acorns</h4>
      <div className="text-lg text-gray-700 dark:text-gray-300">
        <strong>Strengths:</strong>
        <ul className="list-disc list-inside mb-4">
          <li>Micro-Investing: Encourages users to invest small amounts of money.</li>
          <li>Automated Savings: Rounds up purchases to invest spare change.</li>
        </ul>
        <strong>Weaknesses:</strong>
        <ul className="list-disc list-inside">
          <li>Subscription Fee: Users must pay a monthly fee, which may deter budget-conscious young adults.</li>
          <li>Limited Financial Education: Focuses more on investment than providing comprehensive financial literacy resources.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Persona Section */}
<section className="mb-8">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Persona</h3>
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
    {/* Image of Peter Parker */}
    <div className="flex-shrink-0">
      <img
        src="https://64.media.tumblr.com/55ad489fc6a5e0f52d70abbbe2104336/031ddbaf6ca0b23e-52/s1280x1920/2f6f8caa99ddb18a42b468ab91541475a501c87a.jpg" // Update with the path to the image you want to use
        alt="Peter Parker"
        className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
      />
    </div>
    
    {/* Persona Text */}
    <div className="text-lg text-gray-700 dark:text-gray-300">
      <strong className="text-xl font-semibold">Peter Parker</strong> is an 18-year-old recent high school graduate who is embarking on his first year of college. Eager to manage his finances better, Peter aims to save money for a down payment on a new car while building up his credit score. He enjoys dining out but struggles to stick to a budget and lacks knowledge about personal finance, making him seek education and guidance. With a part-time job to cover his expenses, Peter is determined to learn how to save on daily costs and connect with friends and family to discuss financial goals and progress. An app that offers personalized financial guidance, expense tracking, and money-saving tips would be invaluable for Peter as he navigates this new chapter in his life.
    </div>
  </div>
</section>

</div>

<div id="concept" className="container mx-auto p-6">
  {/* Section Title */}
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Concept</h2>

{/* Mobile-First Approach */}
<div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Design Approach</h3>
  <p className="text-lg text-gray-700 dark:text-gray-300">
    Our design focused on a mobile-first approach, given the target demographic&apos;s preference for mobile devices. We sketched early wireframes to ensure a smooth, intuitive user experience, emphasizing simplicity and social engagement.
  </p>
</div>

{/* Unique Value Proposition */}
<div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unique Value Proposition</h3>
  <p className="text-lg text-gray-700 dark:text-gray-300">
    Coinnect is redefining financial management by merging social interaction with financial literacy. The app provides a comprehensive platform that goes beyond simple money transfers, offering education, advice, and social engagement, creating a community of financially responsible users.
  </p>
</div>

{/* How Coinnect Can Benefit Users */}
<div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How Coinnect Can Benefit Users</h3>
  <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300">
    <li>Standard Money Transfers: Secure and fast transactions between peers.</li>
    <li>Socializing Through Finance: Users can connect with friends and family while discussing financial goals and habits.</li>
    <li>Behavioral Insights: Gain valuable insights into personal spending patterns and be guided on how to improve financial habits.</li>
    <li>Education on Investments: Learn about investment strategies and retirement planning early on, fostering long-term financial security.</li>
  </ul>
</div>

{/* What Sets Coinnect Apart */}
<div className="mb-8">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What Sets Coinnect Apart</h3>
  <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300">
    <li>Optimized User Experience: Coinnect&apos;s interface is designed for simplicity and ease, making financial management less intimidating.</li>
    <li>Social + Financial: Coinnect isn&apos;t just a finance app—it&apos;s a social platform that fosters community, knowledge-sharing, and responsible behavior.</li>
    <li>Social Credit System: Users are rewarded with higher social credit scores for responsible behavior, which opens access to financial perks.</li>
    <li>Personalized Advice: Receive customized advice based on past spending behavior, helping users improve their financial health.</li>
  </ul>
</div>

{/* Challenges & Considerations */}
<div>
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Challenges & Considerations</h3>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    With a focus on desktop-first design, there were several key challenges to consider:
  </p>
  <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300">
    <li>Understanding User Needs: Complexities in identifying specific financial management needs of young adults.</li>
    <li>Team Collaboration: Navigating communication issues and aligning the team’s vision for Coinnect.</li>
    <li>Time Constraints: Pressure to complete research, design, and ideation within a limited 2-3 month timeframe.</li>
  </ul>
</div>
</div>
<div id="testing" className="container mx-auto p-6">
<h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Testing</h2>
      
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          While we did not conduct formal user testing during the project, had we progressed to this phase, the plan would have involved the following:
        </p>

        {/* Testing Plan List */}
        <ul className="list-inside list-disc space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>Usability Testing:</strong> Testing the wireframes with college students and recent graduates to identify any pain points or confusing elements in the user interface.
          </li>
          <li>
            <strong>A/B Testing:</strong> Experimenting with different onboarding flows and interface layouts to determine what resonates best with users. We would test whether users preferred starting with the financial literacy modules or going straight to the budgeting tools.
          </li>
          <li>
            <strong>User Feedback:</strong> Ongoing collection of user feedback through surveys and interviews to continuously refine the product.
          </li>
        </ul>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Though we didn&apos;t reach the testing phase, these steps would have been crucial to ensuring Coinnect was both functional and engaging for users.
        </p>
      </div>
    </div>

<div id="outcome" className="container mx-auto p-6">
  <h2 className="text-3xl font-semibold mb-6">Outcome</h2>
  
  <p className="text-lg mb-6">
  While Coinnect was never developed into a fully functional app, the project successfully demonstrated the potential of a financial management tool tailored to young adults. Through user personas, sketches, and a structured business model, we showcased how Coinnect could bridge the gap between financial literacy and everyday money management.
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
        <img src="../images/coinnect/Coinnect Hi-fi Wireframes Image.jpg" alt="Wireframe Sketches" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
    </div>
  </section>

  {/* <!-- Project Takeaways Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Project Takeaways</h3>
    <ol className="list-disc pl-6 text-lg mb-4">
      <li>I learned to effectively <strong className="text-blue-500">balance user needs, market demands, and product feasibility,</strong> which became an essential skill for future projects.</li>
      <li>This project helped <strong className="text-blue-500">refine my UX/UI design skills,</strong> which became an essential skill for future projects.</li>
      <li>Coinnect provided a strong <strong className="text-blue-500">foundation for future projects, </strong> where I worked closely with end-users during development, enhancing my approach to user research and testing.</li>
    </ol>
  </section>

  {/* <!-- Next Steps Section --> */}
  <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Next Steps</h3>
    <p>Had the project continued, future iteration would have involved:</p>
    <ul className="list-disc pl-6 text-lg mb-4">
      <li><strong>High-fidelity prototypes</strong>  to better visualize the user experience.</li>
      <li><strong>Usability testing</strong> with potential users like college students and recent graduates.</li>
      <li>Collaboration with financial advisors to ensure the educational content was accurate and helpful.</li>
    </ul>
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
