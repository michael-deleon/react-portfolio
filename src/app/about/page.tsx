"use client"
import Head from "next/head";
import Header from "../components/Header";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { useState } from 'react';

const About = () => {
    // State to track the selected tab
  
    const [activeTab, setActiveTab] = useState('experience');

    // Content for each tab
    const content = {
      experience: (
        <div>
          <ul>
            <li>October 2023 - January 2024: UX Designer at Cambio Labs</li>
            <li>January 2023 - August 2023: Team Lead at NJIT's Social Interaction Lab</li>
            <li>January 2023 - May 2023: UX/UI Designer at Coinnect</li>
            <li>January 2023 - May 2023: UX/UI Designer at Prox</li>
            <li>June 2022 - August 2022: Internship at New Jersey Orators Inc.</li>
            <li>September 2019 - April 2020: Internship at Code Ninjas</li>
          </ul>
        </div>
      ),
      education: (
        <div>
          <ul>
            <li>2024: UX Accelerated Program at Beginex</li>
            <li>2023: B.S in Information Technology from New Jersey Institute of Technology (NJIT)</li>
            <li>2020: A.A.S in Computer & Information Systems from Middlesex College</li>
          </ul>
        </div>
      ),
      skills: (
        <div>
          <ul>
            <li>UI/UX: Designing Web/App Interfaces</li>
            <li>Web Development: Web App Development</li>
            <li>App Development: Building Android Applications</li>
          </ul>
        </div>
      ),
    };

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

        {/* About Me */}
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900  flex flex-col md:flex-row items-center md:items-start gap-10 mt-10">
        
        {/* Image Section */}
        <div className="w-full md:w-2/4 self-center">
          <img 
            src="/images/user.png" // image path
            alt="Profile Picture"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* Text Section */}
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
            As a designer, I'm passionate about <span className="font-semibold text-green-600 dark:text-green-400">creating work that makes a meaningful impact</span>, 
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

        {/* End of About Me */}
       
        <div className="p-8 max-w-4xl mx-auto">
          {/* Links/Navigation */}
          <div className="flex space-x-6 mb-6">
            <button
              className={`text-lg ${activeTab === 'experience' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`text-lg ${activeTab === 'education' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`text-lg ${activeTab === 'skills' ? 'font-bold' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </div>

          {/* Display the active content */}
          <div>{content[activeTab]}</div>
        </div>

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
