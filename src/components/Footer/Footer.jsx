// import React from 'react'
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa';

import { FaMapLocation } from 'react-icons/fa6';
import CreditCards from '../../assets/website/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details sevtion */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              veritatis dignissimos repudiandae reiciendis eaque minima ea,
              voluptas illum odio iste molestiae nostrum vitae perferendis
              distinctio obcaecati autem! Fugit, vero neque.
            </p>
            <div>
              <p className="flex gap-2 items-center">
                <FaPhone /> +123456789
              </p>
              <p className="flex gap-2 items-center mt-2">
                <FaMapLocation /> Staffors, 10 Rassel Street, SM18 5RE
              </p>
            </div>
          </motion.div>
          {/* Footer Links sevtion */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-2  gap-3">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links  sevtion */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Follow Us</h2>
            <div className="flex gap-3 items-center">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Payment Methods</h2>

              <img src={CreditCards} alt="credit-cards" className="w-[80%]" />
            </div>
          </motion.div>
          {/* copyright section */}
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
