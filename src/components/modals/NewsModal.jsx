import React from 'react';
import { X, Calendar, MapPin, Users, Clock, Tag, Award, Sparkles } from 'lucide-react';

export default function NewsModal({ news, onClose }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <div className="flex justify-between items-center sticky p-4 z-10 top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                {news.type}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                {news.category || 'Événement'}
              </span>
            </div>
            <h2 className="text-2xl font-bold">{news.title}</h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="relative">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <p className="text-white text-lg font-medium">{news.description}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center border border-blue-200 dark:border-blue-800">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Date</p>
            <p className="font-bold text-gray-900 dark:text-white">{news.date}</p>
          </div>

          {news.participants && (
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl text-center border border-purple-200 dark:border-purple-800">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Participants</p>
              <p className="font-bold text-gray-900 dark:text-white">{news.participants}</p>
            </div>
          )}

          {news.location && (
            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl text-center border border-pink-200 dark:border-pink-800">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-pink-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lieu</p>
              <p className="font-bold text-gray-900 dark:text-white">{news.location}</p>
            </div>
          )}

          {news.duration && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center border border-green-200 dark:border-green-800">
              <Clock className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Durée</p>
              <p className="font-bold text-gray-900 dark:text-white">{news.duration}</p>
            </div>
          )}
        </div>

        {news.fullDescription && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Description Complète
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {news.fullDescription}
              </p>
            </div>
          </div>
        )}

        {news.highlights && news.highlights.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Points Forts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {news.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Détails de l'Événement
          </h3>
          <div className="space-y-3">
            {news.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {news.tags && news.tags.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-blue-600" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
