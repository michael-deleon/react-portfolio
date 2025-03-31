import Head from "next/head";
import Header from "../components/Header";
import Work from "../components/Work";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div>
        
        <Header />
        <div className="header-text md:text-left mt-12 md:mt-10 px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-normal md:leading-snug text-center">
            Hey! I&apos;m <span className="text-green-600 dark:text-green-400">Mike</span>,  
            a <span className="text-blue-600 dark:text-blue-400">product designer </span>
            based in Sayreville, New Jersey. ✌️
          </h1>
        </div>
          <Work />
        <Footer />
      </div>
    </>
  );
}
