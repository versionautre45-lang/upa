import React from 'react';
import { X, Users, Calendar, MapPin, Trophy, Target, Heart } from 'lucide-react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

export default function ClubModal({ data, onClose }) {
  const members = data.members || '30+ membres actifs';
  const meetingDay = data.meetingDay || 'Tous les vendredis';
  const since = data.since || '2020';
  const achievements = data.achievements || [
    'Organisation de 15+ événements annuels',
    'Partenariats avec 5+ entreprises locales',
    'Impact positif sur 200+ étudiants'
  ];
  const objectives = data.objectives || [
    'Développer les compétences pratiques des étudiants',
    'Créer un réseau professionnel solide',
    "Promouvoir l'innovation et la créativité"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
      <div className="flex justify-between items-center sticky p-4 z-10 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-sm text-white/90">Actif depuis {since}</p>
          </div>
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
          src={data.image}
          alt={data.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white text-lg font-medium">{data.description}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center">
            <Users className="w-10 h-10 mx-auto mb-3 text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Membres</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{members}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl text-center">
            <Calendar className="w-10 h-10 mx-auto mb-3 text-purple-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Réunions</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{meetingDay}</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl text-center">
            <MapPin className="w-10 h-10 mx-auto mb-3 text-pink-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lieu</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">Campus UPA</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-purple-600" />
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Nos Objectifs</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-600">
                <p className="text-gray-700 dark:text-gray-300">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-pink-600" />
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Nos Activités</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {data.image1 && data.image2 && (
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Galerie Photos</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <img src={data.image1} alt={`${data.title} visuel 1`} className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
              <img src={data.image2} alt={`${data.title} visuel 2`} className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Réalisations</h4>
          </div>
          <div className="space-y-3">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {(data.liensFB || data.liensIG) && (
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Rejoignez notre communauté
            </h4>
            <div className="flex items-center justify-center gap-6">
              {data.liensFB && (
                <a
                  href={data.liensFB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <img src={facebook} className="w-6 h-6" alt="Facebook" />
                  <span>Facebook</span>
                </a>
              )}
              {data.liensIG && (
                <a
                  href={data.liensIG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <img src={instagram} className="w-6 h-6" alt="Instagram" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}