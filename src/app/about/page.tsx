import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto border border-gray-400 shadow-md rounded-2xl max-w-screen-xl lg:grid lg:grid-cols-2 md:mx-20 lg:py-16 lg:px-6">
          <div className="font-light text-gray-600 sm:text-lg">
            <p className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About us
            </p>
            <p className="mb-4">
              Next-Blog is a project made with Next.js intended to help you
              learn Next.js, Especially for Front-End Peeps From TOS. An
              Organization where You can Contribute and Learn Together. Check
              our Repository on{" "}
              <a
                href="https://github.com/Rahilsiddique/next-blog"
                target="_blank"
                className="text-black border border-blue-400 px-2 rounded-xl font-light hover:bg-blue-600 hover:text-white"
              >
                {" "}
                Github
              </a>{" "}
              and make sure to read the DOC before Posting your Blog :D
            </p>
            <div>
              <p className="text-black text-md mb-1 font-medium">
                Organisation :
              </p>
              <div className="flex">
                <a href="https://opensource.tcetmumbai.in/" className="flex">
                  <img
                    src="https://opensource.tcetmumbai.in/img/logo.png"
                    height={40}
                    width={40}
                    alt="tcetopensource"
                  />

                  <p className="text-sm mt-[8px] px-2 underline ">
                    TCET Opensource
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              height={700}
              width={300}
              className="stroke stroke-gray-950 transition ease-in-out duration-200 w-full shadow-gray-500 shadow-md rounded-lg hover:scale-105 hover:shadow-xl"
              src={"/Browsing internet.png"}
              alt="office content 1"
            />
            <Image
              height={700}
              width={300}
              className=" stroke stroke-gray-950 transition ease-in-out duration-200 mt-4 shadow-gray-500 w-full shadow-md lg:mt-10 rounded-lg hover:scale-105 hover:shadow-xl"
              src={"/Gothic.png"}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
