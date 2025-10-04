import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { newsList } from '../data/newsList';
import { motion, AnimatePresence } from 'framer-motion';
import NewsModal from '../components/modals/NewsModal';
import Navbar from '../components/Navbar';

const News = () => {
    const [openIdx, setOpenIdx] = useState(null);
    
  return (
       <>      
    <Navbar type="listeNews"/>

    <motion.div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <motion.h1 className="text-4xl text-center mb-10 md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent">Toutes les actualités & événements</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{news.type}</span>
              <time className="block text-xs text-gray-500 mt-1">{news.date}</time>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 dark:text-white">{news.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{news.description}</p>
              <button
                onClick={() => setOpenIdx(idx)}
                className="mt-3 text-blue-500 flex gap-1 items-center text-sm font-medium hover:underline"
              >
                Lire plus <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            onClick={() => setOpenIdx(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full"
            >
              <NewsModal
                news={newsList[openIdx]}
                onClose={() => setOpenIdx(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

     </> 
  )
}

export default News
