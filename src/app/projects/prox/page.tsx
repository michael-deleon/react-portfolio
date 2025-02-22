import Head from "next/head";
import Header from "../../components/Header";
import BackToTopButton from '../../components/BackToTopButton';
import ProxPhotoGrid from "@/app/components/ProxPhotoGrid";
import Footer from "../../components/Footer";
import React from 'react';

const ProxProject = () => {
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
      <main className="md:w-3/4 w-full p-6">
      <div className="flex flex-col justify-center items-center">
        <img src="../images/prox/prox.jpg" alt="Prox" className="self-centered w-3/4 rounded-lg h-auto"/>
        <br></br>
        <h1 className="text-4xl text-center mb-4">Prox: Break the Ice and Meet new people</h1>
        </div>
        <section id="overview" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Prox is an innovative mobile app aimed at combating isolation and fostering genuine, non-romantic connections within local communities. In a world where social interaction is often shallow and fragmented, Prox’s goal is to build a sense of belonging and support through proximity-based matching. The app uses Bluetooth technology to create real-time connections between individuals in the same area, promoting organic, face-to-face interactions among people with shared interests.
          </p>
          
        </section>
        {/* Role, Timeline, Tools, Team Size Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

  <p className="text-center text-blue-500 mb-12">
How might we build a target audience and encourage them to use our platform compared to the existing platforms?
</p>
        

        <section id="research" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Research
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The issue of isolation in modern society, especially among those with smaller social networks, is a growing concern. Through competitive analysis, I identified how existing solutions such as Meetup, BumbleBFF, and Facebook Groups approach community-building. While Meetup focuses on events, BumbleBFF centers around platonic friendships, and Facebook Groups serve various purposes, none offer the proximity-based, local engagement that Prox aims to deliver. This gap presented an opportunity for Prox to create a platform specifically designed for fostering local, authentic relationships, setting it apart with its emphasis on user control, safety, and real-time connections.
          </p>
        </section>

        <section id="concept" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Concept
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            To address the issue of meaningful connections, Prox’s unique selling proposition lies in its Bluetooth-powered, proximity-based matching system. This allows users to connect with individuals near them in real-time, promoting spontaneous in-person interactions. The design prioritizes user control, offering customizable proximity settings to enhance safety and ensure a comfortable, secure environment. I designed multiple screens for the app, focusing on ease of use and clarity, with screens like the Welcome Page, Sign Up Page, Home Page, Profile Pages, and Messaging features, all aimed at fostering an inviting and intuitive user experience.
          </p>
        </section>
        <ProxPhotoGrid />

        <section id="testing" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Testing
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            User testing was conducted to refine the app’s features and ensure it met its goals of ease, engagement, and security. Feedback was gathered through usability tests with a focus on navigation, the Bluetooth matching system, and messaging features. Users appreciated the simplicity of the interface and the real-time matching functionality, but some expressed concerns over privacy and safety. Based on this, I made adjustments to enhance privacy controls and ensure a better user experience for those hesitant about sharing personal details.
          </p>
        </section>

        <section id="outcome" className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Outcome
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Prox stands out in the competitive landscape by offering a dedicated solution for local community engagement. The design effectively balances user safety and ease of use, with the Bluetooth matching system adding a unique touch that encourages authentic connections. The app’s potential impact on combating loneliness and building meaningful relationships is significant. Moving forward, strategic efforts in user acquisition and addressing privacy concerns will be key to scaling Prox and establishing it as a leader in local community-building.
          </p>
        </section>
      </main>
    </div>
    <BackToTopButton />
    <Footer />
    </>
  );
}

export default ProxProject;
