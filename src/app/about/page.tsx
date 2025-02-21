"use client";
import Head from "next/head";
import Header from "../components/Header";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Image from "next/image"; // Use next/image for optimization

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
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

      {/* About Section (Image + About Me Text) */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image Section */}
        <div className="w-64 md:w-1/3 flex justify-center">
          <Image
            src="/images/user.png"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* About Me Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Born in <span className="font-semibold text-blue-600 dark:text-blue-400">Boston, Massachusetts</span>, and raised in 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Sayreville, New Jersey</span>, I graduated with a 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> B.S. in Information Technology</span> from the 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> New Jersey Institute of Technology</span>, specializing 
            in Web Applications and minoring in Design of the User Experience.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            As a designer, I&apos;m passionate about <span className="font-semibold text-green-600 dark:text-green-400">creating work that makes a meaningful impact</span>, 
            aiming to simplify and enhance the lives of others. While my background is rooted in programming, my primary focus is on 
            <span className="font-semibold text-green-600 dark:text-green-400"> user experience design</span>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            In my free time, you can find me <span className="italic">traveling</span>, curating 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> Spotify playlists</span>, or 
            <span className="font-semibold text-red-600 dark:text-red-400"> binge-watching Netflix</span>. Above all, I enjoy 
            <span className="font-semibold text-orange-600 dark:text-orange-400"> meeting new people</span> and learning their stories, 
            so feel free to reach out to me about anything!
          </p>
        </div>
      </div>
      {/* End of About Section */}

      {/* Experience, Education, Skills - Grid on Desktop, Stacked on Mobile */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>2024: UX Accelerated Program at Beginex</li>
            <li>2023: B.S in Information Technology from NJIT</li>
            <li>2020: A.A.S in Computer & Information Systems from Middlesex College</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>October 2023 - January 2024: UX Designer at Cambio Labs</li>
            <li>January 2023 - August 2023: Team Lead at NJIT&apos;s Social Interaction Lab</li>
            <li>January 2023 - May 2023: UX/UI Designer at Coinnect</li>
            <li>January 2023 - May 2023: UX/UI Designer at Prox</li>
            <li>June 2022 - August 2022: Internship at New Jersey Orators Inc.</li>
            <li>September 2019 - April 2020: Internship at Code Ninjas</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>UI/UX: Designing Web/App Interfaces</li>
            <li>Web Development: Web App Development</li>
            <li>App Development: Building Android Applications</li>
          </ul>
        </div>
      </div>

      {/* Work Section */}
      <div className="header-text md:text-left mt-12 md:mt-10 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-normal md:leading-snug">
          My Work:
        </h1>
      </div>
      <Work />
      <Footer />
    </>
  );
};

export default About;
