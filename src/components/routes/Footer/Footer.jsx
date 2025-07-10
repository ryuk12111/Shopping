import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "./logo.png";
import Banner from "./footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Inventory",
    link: "/inventory",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const OtherLinks = [
  {
    title: "Blog",
  },
  {
    title: "FAQ",
  },
  {
    title: "Careers",
  },
  {
    title: "Support",
  },
];

const Footer = () => {
  return (
    <>
      <style>{`
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (max-width: 767px) {
          .grid.md\\:grid-cols-3 {
            display: grid !important;
            grid-template-columns: 1fr !important;
          }
          .col-span-2 {
            grid-column: span 1 / span 1 !important;
          }
          .md\\:pl-10 {
            padding-left: 0.5rem !important;
          }
          .flex.items-center.gap-3.mt-6 a {
            margin-right: 0.5rem;
          }
        }

        @media (min-width: 768px) {
          .grid.md\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .col-span-2 {
            grid-column: span 2 / span 2 !important;
          }
          .md\\:pl-10 {
            padding-left: 2.5rem !important;
          }
        }
      `}</style>

      <div style={BannerImg} className="text-white">
        <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="" className="max-w-[50px]" />
                urStyleClothing
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* Important Links with Navigation */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li key={link.title}>
                        <Link
                          to={link.link}
                          className="inline-block text-gray-200 hover:text-primary hover:translate-x-1 transition duration-300"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other Links */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Other Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {OtherLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social & Contact */}
              {/* Social & Contact */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <FaInstagram className="text-3xl hover:text-pink-500 transition" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <FaFacebook className="text-3xl hover:text-blue-600 transition" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-3xl hover:text-blue-700 transition" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Gwarko, Lalitpur</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+977 9803976935</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
