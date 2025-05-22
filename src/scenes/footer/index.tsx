import React from "react";
import Logo from "@/assets/Logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { SelectedPage } from "@/shared/types";
import Link from "../Navbar/Link";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};
const Footer = ({ setSelectedPage, selectedPage }: Props) => {
  const IconInsta = FaInstagram as unknown as React.FC;
  const IconFb = FaFacebookF as unknown as React.FC;
  const IconTw = FaTwitter as unknown as React.FC;

  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        {/* Logo and About */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            We're dedicated to helping you live healthier, move better, and feel
            stronger—one workout at a time. Your journey to strength, balance,
            and well-being starts here—let’s move forward together.
          </p>
          <p>© Evogym. All rights reserved.</p>
        </div>

        {/* Useful Links */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Useful Links</h4>
          <p className="my-2 cursor-pointer hover:text-primary-500">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </p>
          <p className="my-2 cursor-pointer hover:text-primary-500">
            <Link
              page="ContactUs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </p>
          <p className="my-2 cursor-pointer hover:text-primary-500">
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </p>
          <p className="my-2 cursor-pointer hover:text-primary-500">
            <Link
              page="Faq"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </p>
        </div>

        {/* Contact + Social */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Reach out with any questions or feedback—we're here to help you stay
            on track.
          </p>
          <p className="font-medium">(333) 425-6825</p>
          <p className="mt-2">contact@evogym.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-700">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-500 transition"
            >
              <IconFb />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-500 transition"
            >
              <IconInsta />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-primary-500 transition"
            >
              <IconTw />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
