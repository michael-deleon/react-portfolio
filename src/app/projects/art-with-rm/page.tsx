import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import BackToTopButton from '../../components/BackToTopButton';
import Footer from "../../components/Footer";
import PhotoGrid from '../../components/PhotoGrid';



const ProjectPage = () => {
  return (
    <>
    <Head>
      <title>Instagram's Art with RM Filter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
          rel="stylesheet"
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
        <img src="../images/art-with-rm/Instagram Filter Header Image.jpg" alt="Instagram Header" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
        <h1 className="text-4xl text-center">Instagram Filter: Art with RM</h1>
        <p  className="mt-4 text-center">Bridging the Worlds of Art and BTS Fandom
        </p>
        </div>
        {/* Sections */}
       <div id="overview" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-12">
  {/* Overview Title */}
  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
    Overview
  </h2>

  {/* Flex container for text and image */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Overview Text */}
    <div className="md:w-2/3">
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        The objective of this project was to create a unique, engaging filter that connected BTS fans, specifically RM's fanbase, with the world of art. Leveraging RM's love for art museums and the fine arts, this filter aimed to introduce art to individuals who may not have experienced or appreciated it before. The result was an interactive tool that blended the passion of BTS fandom with fine arts in a fun and accessible way.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Many BTS fans, particularly those who admire RM, may not have much exposure to art or feel confident exploring the art world on their own. This lack of exposure can prevent them from fully appreciating the beauty and cultural significance of art. The challenge was to design an engaging filter that would draw attention and inspire BTS followers to explore the art world while staying true to RM’s passions.
      </p>
    </div>

    {/* Image on Right (or below on mobile) */}
    <div className="md:w-1/3 flex justify-center">
      <img src="../images/art-with-rm/QR_CODE.jpg" alt="Instagram Header" className="w-full max-w-xs rounded-lg h-auto"/>
    </div>
  </div>
  
  {/* Background Section */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 mt-4">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">BACKGROUND</h3>
    <p className="text-gray-700 dark:text-gray-300">
        RM, a member of the globally acclaimed K-pop group BTS, is known for his deep appreciation for art and frequent visits to museums. Recognizing the potential to engage his fanbase, we created a filter that aligned with his artistic interests. This project was designed to inspire curiosity and connect BTS fans to the world of art through an educational yet entertaining medium.    </p>
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
      <p className="text-gray-700 dark:text-gray-300">8 months</p>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
      <p className="text-gray-700 dark:text-gray-300">Meta Spark AR Studio, Figma, Google Meets, Trello</p>
    </div>

    {/* Team Size */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Size</h3>
      <p className="text-gray-700 dark:text-gray-300">4</p>
    </div>
  </div>
</div>

<p className="text-center text-blue-500">
How can we engage BTS fans and encourage them to use and share the RM art filter on Instagram?
</p>


<div id="research" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-12">
  {/* Research Title */}
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Research</h2>

  {/* Competitive Analysis Section */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Competitive Analysis</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      We explored two options: building an app or creating a social media filter. After weighing both scenarios, we chose the filter option for the following reasons:
    </p>

    {/* Comparison Table */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-5 border rounded-lg bg-gray-200 dark:bg-gray-700">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">App Option (Alternative)</h4>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Higher development costs, hardware limitations, and lower ease of access made this option less viable.
        </p>
      </div>
      <div className="p-5 border rounded-lg bg-green-200 dark:bg-green-700">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Filter Option (Chosen Solution)</h4>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Easier access, no hardware barriers, lower development complexity, and stronger potential for social sharing and virality aligned well with the project's goals.
        </p>
      </div>
    </div>
  </section>

  {/* Platform Decision Section */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Platform Decision</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      We also debated between launching the filter on Instagram or TikTok. Here's a breakdown:
    </p>

    {/* Instagram vs TikTok Comparison */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-5 border rounded-lg bg-green-200 dark:bg-green-700">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Instagram (Chosen Platform)</h4>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Instagram’s vast user base, particularly among BTS fans, provided the ideal platform for virality. Its visual focus aligned with RM’s interests in art, and Instagram Stories allowed easy sharing of the filter.
        </p>
      </div>
      <div className="p-5 border rounded-lg bg-gray-200 dark:bg-gray-700">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">TikTok (Alternative)</h4>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          While TikTok offers more interactive options, its user base and platform dynamics didn’t align as closely with the project’s goals as Instagram did.
        </p>
      </div>
    </div>
  </section>
</div>


<section id="concept" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
      {/* Concept Title */}
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Concept</h2>

      {/* Instagram Features Integration */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Leveraging Instagram’s Features</h3>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <strong className="text-lg font-semibold">Visual Integration:</strong>{" "}
            The filter aligned with RM's passion for art, enhancing Instagram’s visual experience.
          </li>
          <li className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <strong className="text-lg font-semibold">Social Sharing:</strong>{" "}
            Designed for easy sharing via Instagram Stories, encouraging engagement within the BTS fan community.
          </li>
          <li className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <strong className="text-lg font-semibold">User Engagement:</strong>{" "}
            By utilizing Instagram’s tools, the filter maximized interaction and extended its reach.
          </li>
        </ul>
      </div>

      {/* Wireframe Concept Sketches */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Wireframe Concept Sketches</h3>
        <p className="text-lg mb-4">
          Collaborating with designer Hongyang Zhou, we created initial sketches and Figma wireframes to refine functionality and ensure an intuitive user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="text-lg font-semibold">Sketches by Michael De Leon</h4>
            <img src="/images/art-with-rm/RM_sketch1.jpg" alt="Sketch by Michael De Leon" className="mt-2 rounded-lg shadow-md"/>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="text-lg font-semibold">Sketches by Michael De Leon</h4>
            <img src="/images/art-with-rm/RM_sketch2.jpg" alt="Sketch by Michael De Leon" className="mt-2 rounded-lg shadow-md"/>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="text-lg font-semibold">Sketches by Hongyang Zhou</h4>
            <img src="/images/art-with-rm/RM_sketch1_HZ.jpg" alt="Sketch by Hongyang Zhou" className="mt-2 rounded-lg shadow-md"/>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <h4 className="text-lg font-semibold">Sketches by Hongyang Zhou</h4>
            <img src="/images/art-with-rm/RM_sketch2_HZ.jpg" alt="Sketch by Hongyang Zhou" className="mt-2 rounded-lg shadow-md"/>
          </div>
        </div>
      </div>

      {/* Challenges & Considerations */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Challenges & Considerations</h3>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg bg-red-100 dark:bg-red-800">
            <strong className="text-lg font-semibold">Photo Adjustments:</strong>{" "}
            Users needed to adjust their positioning to take the best photos.
          </li>
          <li className="p-4 border rounded-lg bg-red-100 dark:bg-red-800">
            <strong className="text-lg font-semibold">Information Overload:</strong>{" "}
            Instances where RM’s image covered the entire screen, impacting the user experience.
          </li>
        </ul>
      </div>
    </section>

    <div id="testing" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-12">
  {/* Testing Title */}
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Testing</h2>

  {/* Usability Testing Section */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Usability Testing</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      We conducted usability testing using the <strong>think-aloud technique</strong>, allowing users to explore the filter while verbalizing their thoughts. 
      After observing their interactions, we conducted interviews to analyze user satisfaction. This iterative process helped us identify areas for improvement, such as:
    </p>

    {/* Improvement Highlights */}
    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
      <li>Users adjusting their poses to capture their desired images</li>
      <li>RM’s image sometimes obscuring too much of the screen</li>
    </ul>

    {/* Testing Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300 text-lg">
        <img src="/images/art-with-rm/RM1.jpg" alt="RM Filter" className="rounded-lg"/>
        </span>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300 text-lg">
            <img src="/images/art-with-rm/RM2.jpg" alt="RM Filter" className="rounded-lg"/>
        </span>
        

      </div>
    </div>
  </section>

  {/* A/B Testing Section */}
  <section className="mb-10">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">A/B Testing</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      During the testing phase, we were torn between two filter styles: one with a more <strong>cartoonish figure</strong> and the other with a <strong>realistic look</strong>.
      To help us decide, we conducted a <strong>side-by-side comparison</strong> using both versions, taking photos to gauge which style resonated more with users.
      This allowed us to better evaluate the <strong>visual impact and user preference</strong> for each style.
    </p>

    {/* A/B Testing Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300 text-lg">
        <img src="/images/art-with-rm/RM-cartoon.jpg" alt="Cartoon RM" className="rounded-lg"/>
        </span>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300 text-lg">
        <img src="/images/art-with-rm/RM-realism.jpg" alt="Realism RM" className="rounded-lg"/>

        </span>
      </div>
    </div>
  </section>
</div>
<div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-12">
  {/* Title Section */}
  <h1 id="outcome" className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
    Outcome  </h1>

  {/* Description Section */}
  <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
    "Art With RM" is a distinctive Instagram filter designed to engage BTS fans and foster a deeper appreciation for art. The project aligns with RM’s love for art, offering fans an opportunity to explore and share art, particularly while RM is away serving in the military. We hope this filter helps continue the tradition of "Namjooning" by allowing fans to engage with the art world in creative ways.
  </p>

  {/* Divider */}
  <div className="border-t-2 border-gray-300 dark:border-gray-700 my-6"></div>

  {/* Supporting Message Section */}
  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
    Let’s keep the art alive, even when RM is away! Engage with art in ways you never thought possible through the RM filter.
  </p>
</div>
<PhotoGrid />


      </div>
    </div>
    <BackToTopButton />
    <Footer />
    </>
  );
};

   
export default ProjectPage;
