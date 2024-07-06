// import React from 'react'

import { motion } from 'framer-motion';

import WorldMap from '../../assets/world-map.png';

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-darkGray font-serif"
          >
            Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border-[1px] border-gray-400 rounded-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
            />
            <input
              type="text"
              placeholder="Postcode"
              className=" lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-primaryDark duration-200"
          >
            Order Now
          </motion.button>
        </div>
        {/* map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt="world_map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
