import React from 'react';
import { X, Microscope, Users, Clock, BookOpen, Award, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function LabModal({ data, onClose }) {
  const capacity = data.capacity || '40 personnes';
  const schedule = data.schedule || 'Lundi - Samedi: 8h - 18h';
  const supervisor = data.supervisor || 'Dr. Rakoto Jean';
  const projects = data.projects || [
    'Projets de recherche en cours',
    'Collaborations avec des entreprises',
    'Publications scientifiques',
    'Innovations technologiques'
  ];
  const equipment = data.equipment || [
    'Ordinateurs haute performance',
    'Logiciels spécialisés',
    'Matériel de laboratoire moderne',
    'Connexion Internet haut débit'
  ];
  const services = data.services || [
    'Formation pratique des étudiants',
    'Support technique et accompagnement',
    'Accès aux ressources numériques',
    'Espaces de travail collaboratif'
  ];
  const achievements = data.achievements || [
    'Plus de 50 projets réalisés par an',
    'Partenariats avec 10+ entreprises',
    'Formation de 200+ étudiants annuellement',
    'Participation à des conférences internationales'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <div className="flex justify-between items-center sticky p-4 z-10 top-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Microscope className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-sm text-white/90">Laboratoire de recherche et d'innovation</p>
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
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
          <p className="text-white text-xl font-medium leading-relaxed">{data.description}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20 p-6 rounded-xl text-center border border-blue-200 dark:border-blue-800">
            <Users className="w-12 h-12 mx-auto mb-3 text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Capacité</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{capacity}</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-800/20 p-6 rounded-xl text-center border border-cyan-200 dark:border-cyan-800">
            <Clock className="w-12 h-12 mx-auto mb-3 text-cyan-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Horaires</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{schedule}</p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-green-100 dark:from-teal-900/20 dark:to-green-800/20 p-6 rounded-xl text-center border border-teal-200 dark:border-teal-800">
            <BookOpen className="w-12 h-12 mx-auto mb-3 text-teal-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Responsable</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{supervisor}</p>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Microscope className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Équipements Principaux</h4>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {data.features.map((f, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">{f.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Projets et Recherches</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{project}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Services Offerts</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
              <Award className="w-6 h-6 text-cyan-600" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Équipements Disponibles</h4>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipment.map((item, i) => (
              <div key={i} className="p-5 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl text-center border border-cyan-200 dark:border-cyan-800">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">Nos Réussites</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white text-center">
          <h5 className="text-2xl font-bold mb-2">Intéressé(e) par nos laboratoires ?</h5>
          <p className="text-white/90 mb-4">Contactez-nous pour une visite ou pour plus d'informations sur nos programmes</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  );
}