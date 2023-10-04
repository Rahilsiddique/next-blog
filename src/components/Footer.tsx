import React from 'react';
import FacebookIcon from '../components/Svg/facebook';
import InstagramIcon from '../components/Svg/instagram'
import TwitterIcon from '../components/Svg/twitter';
import GitHubIcon from '../components/Svg/github';

const Footer = () => {
  return (
    /* Footer */
    <footer className="bg-gray-200 w-full">
      <div className="mx-auto py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Team
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Pricing
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Terms
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <FacebookIcon fileName="facebook.jsx" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <InstagramIcon fileName="instagram.jsx" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <TwitterIcon fileName="twitter.jsx" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <GitHubIcon fileName="github.jsx" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 next-blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

