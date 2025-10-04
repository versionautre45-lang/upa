import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, GraduationCap, Clock, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const CalendrierUniversitaire = () => {
  const [selectedMention, setSelectedMention] = useState('HEST');

  const calendrierData = {
    anneeAcademique: '2025-2026',
    rentree: '15 Septembre 2025',
    finAnnee: '30 Juin 2026',

    periodes: [
      {
        nom: 'Premier Semestre',
        debut: '15 Septembre 2025',
        fin: '31 Janvier 2026',
        couleur: 'blue'
      },
      {
        nom: 'Examens 1er Semestre',
        debut: '20 Janvier 2026',
        fin: '31 Janvier 2026',
        couleur: 'red'
      },
      {
        nom: 'Vacances Intersemestrielles',
        debut: '1 Février 2026',
        fin: '16 Février 2026',
        couleur: 'green'
      },
      {
        nom: 'Deuxième Semestre',
        debut: '17 Février 2026',
        fin: '15 Juin 2026',
        couleur: 'purple'
      },
      {
        nom: 'Examens 2ème Semestre',
        debut: '01 Juin 2026',
        fin: '15 Juin 2026',
        couleur: 'red'
      },
      {
        nom: 'Vacances de Noël',
        debut: '20 Décembre 2025',
        fin: '5 Janvier 2026',
        couleur: 'green'
      },
      {
        nom: 'Vacances de Pâques',
        debut: '10 Avril 2026',
        fin: '20 Avril 2026',
        couleur: 'green'
      }
    ],

    evenementsImportants: [
      { date: '15 Septembre 2025', event: "Rentrée Universitaire - Cérémonie accueil", type: 'rentree' },
      { date: '20 Septembre 2025', event: 'Début des cours tous niveaux', type: 'cours' },
      { date: '15 Octobre 2025', event: 'Journée Portes Ouvertes', type: 'evenement' },
      { date: '5-7 Novembre 2025', event: "Semaine Entrepreneuriat", type: 'evenement' },
      { date: '15 Décembre 2025', event: "Fête fin année - Noël", type: 'fete' },
      { date: '20 Janvier 2026', event: 'Début Examens 1er Semestre', type: 'examen' },
      { date: '17 Février 2026', event: 'Reprise des cours - 2ème Semestre', type: 'cours' },
      { date: '20-22 Mars 2026', event: 'Forum Entreprises et Stages', type: 'evenement' },
      { date: '1 Juin 2026', event: 'Début Examens 2ème Semestre', type: 'examen' },
      { date: '20 Juin 2026', event: 'Résultats et Délibérations', type: 'resultats' },
      { date: '30 Juin 2026', event: 'Cérémonie de Remise des Diplômes', type: 'diplome' }
    ],

    emploisDuTemps: {
      HEST: {
        mention: 'Sciences et Technologies',
        horaires: 'Lundi - Vendredi: 8h - 17h / Samedi: 8h - 12h',
        semaine: [
          {
            jour: 'Lundi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Programmation Orientée Objet', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Travaux Pratiques POO', type: 'TP', salle: 'Lab Info 1' },
              { heure: '14:00 - 16:00', matiere: 'Base de Données Avancées', type: 'TD', salle: 'Salle B2' },
              { heure: '16:15 - 17:15', matiere: 'Anglais Technique', type: 'TD', salle: 'Salle C1' }
            ]
          },
          {
            jour: 'Mardi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Réseaux & Sécurité', type: 'CM', salle: 'Amphi B' },
              { heure: '10:15 - 12:15', matiere: 'TP Réseaux Cisco', type: 'TP', salle: 'Lab Réseau' },
              { heure: '14:00 - 17:00', matiere: 'Projet Développement Web', type: 'Projet', salle: 'Salle Projet' }
            ]
          },
          {
            jour: 'Mercredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Intelligence Artificielle', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'TP Machine Learning', type: 'TP', salle: 'Lab Info 2' },
              { heure: '14:00 - 16:00', matiere: 'Génie Logiciel', type: 'TD', salle: 'Salle B1' }
            ]
          },
          {
            jour: 'Jeudi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Développement Mobile', type: 'CM', salle: 'Amphi C' },
              { heure: '10:15 - 12:15', matiere: 'TP React Native', type: 'TP', salle: 'Lab Info 1' },
              { heure: '14:00 - 16:00', matiere: 'Architecture Logicielle', type: 'TD', salle: 'Salle B3' }
            ]
          },
          {
            jour: 'Vendredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Cloud Computing', type: 'CM', salle: 'Amphi B' },
              { heure: '10:15 - 12:15', matiere: 'DevOps & CI/CD', type: 'TP', salle: 'Lab Info 2' },
              { heure: '14:00 - 16:00', matiere: 'Conférence Tech', type: 'Conf', salle: 'Amphi Principal' }
            ]
          },
          {
            jour: 'Samedi',
            cours: [
              { heure: '08:00 - 12:00', matiere: 'Travail sur Projets Personnels', type: 'Projet', salle: 'Lab Info' }
            ]
          }
        ]
      },
      HECM: {
        mention: 'Commerce et Management',
        horaires: 'Lundi - Vendredi: 8h - 17h / Samedi: 8h - 12h',
        semaine: [
          {
            jour: 'Lundi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Management Stratégique', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Étude de Cas Management', type: 'TD', salle: 'Salle B1' },
              { heure: '14:00 - 16:00', matiere: 'Marketing Digital', type: 'CM', salle: 'Amphi B' },
              { heure: '16:15 - 17:15', matiere: 'Anglais des Affaires', type: 'TD', salle: 'Salle C2' }
            ]
          },
          {
            jour: 'Mardi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Comptabilité Analytique', type: 'CM', salle: 'Amphi C' },
              { heure: '10:15 - 12:15', matiere: 'TD Comptabilité', type: 'TD', salle: 'Salle B2' },
              { heure: '14:00 - 17:00', matiere: 'Projet Business Plan', type: 'Projet', salle: 'Salle Projet' }
            ]
          },
          {
            jour: 'Mercredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Finance dEntreprise', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Analyse Financière', type: 'TD', salle: 'Salle B1' },
              { heure: '14:00 - 16:00', matiere: 'Commerce International', type: 'CM', salle: 'Amphi B' }
            ]
          },
          {
            jour: 'Jeudi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Gestion des Ressources Humaines', type: 'CM', salle: 'Amphi C' },
              { heure: '10:15 - 12:15', matiere: 'Cas Pratiques RH', type: 'TD', salle: 'Salle B3' },
              { heure: '14:00 - 16:00', matiere: 'Droit des Affaires', type: 'CM', salle: 'Amphi A' }
            ]
          },
          {
            jour: 'Vendredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Entrepreneuriat', type: 'CM', salle: 'Amphi B' },
              { heure: '10:15 - 12:15', matiere: 'Pitch Startup', type: 'Atelier', salle: 'Salle Innovation' },
              { heure: '14:00 - 16:00', matiere: 'Conférence Entreprise', type: 'Conf', salle: 'Amphi Principal' }
            ]
          },
          {
            jour: 'Samedi',
            cours: [
              { heure: '08:00 - 12:00', matiere: 'Simulation de Gestion dEntreprise', type: 'Projet', salle: 'Salle B1' }
            ]
          }
        ]
      },
      HELS: {
        mention: 'Lettres et Sciences Humaines',
        horaires: 'Lundi - Vendredi: 8h - 17h / Samedi: 8h - 12h',
        semaine: [
          {
            jour: 'Lundi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Théories de la Communication', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Atelier Rédaction Journalistique', type: 'Atelier', salle: 'Salle Média' },
              { heure: '14:00 - 16:00', matiere: 'Philosophie Contemporaine', type: 'CM', salle: 'Amphi B' },
              { heure: '16:15 - 17:15', matiere: 'Langues (Anglais/Français)', type: 'TD', salle: 'Centre Langues' }
            ]
          },
          {
            jour: 'Mardi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Pédagogie Générale', type: 'CM', salle: 'Amphi C' },
              { heure: '10:15 - 12:15', matiere: 'Didactique des Disciplines', type: 'TD', salle: 'Salle B2' },
              { heure: '14:00 - 17:00', matiere: 'Micro-enseignement', type: 'Pratique', salle: 'Salle Pédagogie' }
            ]
          },
          {
            jour: 'Mercredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Journalisme Multimédia', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Production Audiovisuelle', type: 'TP', salle: 'Studio Média' },
              { heure: '14:00 - 16:00', matiere: 'Éthique et Déontologie', type: 'TD', salle: 'Salle B1' }
            ]
          },
          {
            jour: 'Jeudi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Psychologie de lApprentissage', type: 'CM', salle: 'Amphi B' },
              { heure: '10:15 - 12:15', matiere: 'Gestion de Classe', type: 'TD', salle: 'Salle B3' },
              { heure: '14:00 - 16:00', matiere: 'Philosophie de lÉducation', type: 'CM', salle: 'Amphi C' }
            ]
          },
          {
            jour: 'Vendredi',
            cours: [
              { heure: '08:00 - 10:00', matiere: 'Communication Digitale', type: 'CM', salle: 'Amphi A' },
              { heure: '10:15 - 12:15', matiere: 'Réseaux Sociaux & Community Management', type: 'TP', salle: 'Lab Média' },
              { heure: '14:00 - 16:00', matiere: 'Conférence Invitée', type: 'Conf', salle: 'Amphi Principal' }
            ]
          },
          {
            jour: 'Samedi',
            cours: [
              { heure: '08:00 - 12:00', matiere: 'Projets Pédagogiques / Reportages', type: 'Projet', salle: 'Salles Diverses' }
            ]
          }
        ]
      }
    }
  };

  const emploiDuTemps = calendrierData.emploisDuTemps[selectedMention];

  const getTypeColor = (type) => {
    const colors = {
      CM: 'bg-blue-500',
      TD: 'bg-purple-500',
      TP: 'bg-green-500',
      Projet: 'bg-orange-500',
      Atelier: 'bg-pink-500',
      Conf: 'bg-red-500',
      Pratique: 'bg-teal-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'rentree': return '🎓';
      case 'cours': return '📚';
      case 'examen': return '📝';
      case 'evenement': return '🎉';
      case 'fete': return '🎊';
      case 'resultats': return '📊';
      case 'diplome': return '🏆';
      default: return '📅';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Année Académique {calendrierData.anneeAcademique}</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Calendrier Universitaire
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Emplois du temps, dates importantes et périodes académiques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white shadow-2xl"
          >
            <GraduationCap className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Rentrée</h3>
            <p className="text-3xl font-bold">{calendrierData.rentree}</p>
            <p className="mt-2 text-green-100">Début de l'année académique</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white shadow-2xl"
          >
            <Award className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fin d'Année</h3>
            <p className="text-3xl font-bold">{calendrierData.finAnnee}</p>
            <p className="mt-2 text-blue-100">Examens et résultats</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white shadow-2xl"
          >
            <BookOpen className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">2 Semestres</h3>
            <p className="text-3xl font-bold">30 Semaines</p>
            <p className="mt-2 text-purple-100">De cours intensifs</p>
          </motion.div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Périodes Académiques</h2>
          <div className="space-y-4">
            {calendrierData.periodes.map((periode, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl border-l-4 ${
                  periode.couleur === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-600' :
                  periode.couleur === 'red' ? 'bg-red-50 dark:bg-red-900/20 border-red-600' :
                  periode.couleur === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-600' :
                  'bg-purple-50 dark:bg-purple-900/20 border-purple-600'
                }`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{periode.nom}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Du {periode.debut} au {periode.fin}
                    </p>
                  </div>
                  <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Événements Importants</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {calendrierData.evenementsImportants.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{getEventIcon(evt.type)}</span>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900 dark:text-white">{evt.event}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{evt.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Emploi du Temps par Mention</h2>

          <div className="flex gap-2 mb-6 flex-wrap">
            {Object.keys(calendrierData.emploisDuTemps).map((mention) => (
              <button
                key={mention}
                onClick={() => setSelectedMention(mention)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedMention === mention
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                {mention}
              </button>
            ))}
          </div>

          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {emploiDuTemps.mention}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              <Clock className="inline w-4 h-4 mr-2" />
              {emploiDuTemps.horaires}
            </p>
          </div>

          <div className="space-y-6">
            {emploiDuTemps.semaine.map((jour, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <h4 className="text-xl font-bold">{jour.jour}</h4>
                </div>
                <div className="p-4 space-y-3">
                  {jour.cours.map((cours, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600 mb-1" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">
                          {cours.heure}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-gray-900 dark:text-white">{cours.matiere}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cours.salle}</p>
                      </div>
                      <span className={`px-3 py-1 ${getTypeColor(cours.type)} text-white text-sm font-medium rounded-full`}>
                        {cours.type}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Légende des Types de Cours</h4>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                CM - Cours Magistral
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
                TD - Travaux Dirigés
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                TP - Travaux Pratiques
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                Projet - Projets Groupés
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium">
                Atelier - Ateliers Pratiques
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                Conf - Conférences
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendrierUniversitaire;
