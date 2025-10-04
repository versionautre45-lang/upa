import React from 'react';
import { X, Calendar, Tag, Share2, User, Clock } from 'lucide-react';

export default function BlogModal({ data, onClose }) {
  const tags = data.tags || ['Événement', 'Campus', 'Étudiants'];
  const author = data.author || 'Bureau des Étudiants';
  const readTime = data.readTime || '3 min';
  const category = data.category || 'Actualité';
  const participants = data.participants || 'Plus de 50 participants';
  const location = data.location || 'Campus UPA';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
      <div className="flex justify-between items-center sticky p-4 z-10 top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Tag className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold">{data.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="relative">
        <img
          src={data.src}
          alt={data.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
          {category}
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{data.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <User className="w-5 h-5 text-purple-600" />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="font-medium">Lecture: {readTime}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {data.content}
          </p>

          {data.contentHack1 && (
            <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                Informations complémentaires
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {data.contentHack1}
              </p>
            </div>
          )}

          {data.highlights && data.highlights.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Points forts de l'événement</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {data.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Participation</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{participants}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lieu</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{location}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}