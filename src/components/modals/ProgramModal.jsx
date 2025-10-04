import React, { useState } from 'react';
import { X, Calendar, Clock, BookOpen, GraduationCap, Users, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export default function ProgramModal({ school, program, programKey, onClose }) {
  const [activeTab, setActiveTab] = useState('modules');

  const scheduleData = program.schedule || {
    rentree: '15 Septembre 2025',
    finAnnee: '30 Juin 2026',
    vacances: [
      { nom: 'Vacances de Noël', debut: '20 Décembre 2025', fin: '5 Janvier 2026' },
      { nom: 'Vacances de Pâques', debut: '10 Avril 2026', fin: '20 Avril 2026' }
    ]
  };

  const emploiDuTemps = program.emploiDuTemps || [
    {
      jour: 'Lundi',
      cours: [
        { heure: '08:00 - 10:00', matiere: 'Cours Magistral', salle: 'Amphi A' },
        { heure: '10:15 - 12:15', matiere: 'Travaux Pratiques', salle: 'Lab 1' },
        { heure: '14:00 - 16:00', matiere: 'Travaux Dirigés', salle: 'Salle B2' }
      ]
    },
    {
      jour: 'Mardi',
      cours: [
        { heure: '08:00 - 10:00', matiere: 'Cours Magistral', salle: 'Amphi B' },
        { heure: '10:15 - 12:15', matiere: 'Projet', salle: 'Salle Projet' }
      ]
    },
    {
      jour: 'Mercredi',
      cours: [
        { heure: '08:00 - 10:00', matiere: 'Travaux Pratiques', salle: 'Lab 2' },
        { heure: '10:15 - 12:15', matiere: 'Séminaire', salle: 'Salle C3' },
        { heure: '14:00 - 16:00', matiere: 'Étude Autonome', salle: 'Bibliothèque' }
      ]
    },
    {
      jour: 'Jeudi',
      cours: [
        { heure: '08:00 - 10:00', matiere: 'Cours Magistral', salle: 'Amphi A' },
        { heure: '10:15 - 12:15', matiere: 'Travaux Dirigés', salle: 'Salle B1' }
      ]
    },
    {
      jour: 'Vendredi',
      cours: [
        { heure: '08:00 - 10:00', matiere: 'Projet', salle: 'Salle Projet' },
        { heure: '10:15 - 12:15', matiere: 'Conférence', salle: 'Amphi B' }
      ]
    }
  ];

  const admissionInfo = program.admissionInfo || {
    prerequis: [
      'Baccalauréat série scientifique ou équivalent',
      'Dossier académique complet',
      'Test d\'entrée réussi',
      'Entretien de motivation'
    ],
    duree: '3 ans (Licence) / 5 ans (Master)',
    diplome: 'Licence / Master',
    debouches: [
      'Ingénieur dans des entreprises internationales',
      'Consultant spécialisé',
      'Chef de projet',
      'Entrepreneur / Créateur de startup',
      'Chercheur / Enseignant'
    ]
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <div className={`sticky top-0 z-10 bg-gradient-to-r ${school.gradient} p-6 text-white rounded-t-lg`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={school.image} alt={school.code} className="w-14 h-14 rounded-lg shadow-lg" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">{school.code}</span>
              </div>
              <h2 className="text-3xl font-bold">{program.title}</h2>
              <p className="text-white/90 text-sm mt-1">{school.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-2 mt-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'modules'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Modules
          </button>
          <button
            onClick={() => setActiveTab('emploi')}
            className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'emploi'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Emploi du Temps
          </button>
          <button
            onClick={() => setActiveTab('calendrier')}
            className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'calendrier'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Calendrier
          </button>
          <button
            onClick={() => setActiveTab('admission')}
            className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'admission'
                ? 'bg-white text-gray-900'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <GraduationCap className="w-4 h-4 inline mr-2" />
            Admission
          </button>
        </div>
      </div>

      <div className="p-8">
        {activeTab === 'modules' && (
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Spécialisations</h3>
              <div className="flex flex-wrap gap-3">
                {program.specializations.map((spec, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 bg-gradient-to-r ${school.gradient} text-white rounded-full font-medium shadow-md`}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Programme d'Études</h3>
              {program.modules.map((module, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${school.gradient} text-white flex items-center justify-center text-lg font-bold shadow-md`}>
                      {idx + 1}
                    </div>
                    {module.category}
                  </h4>
                  <ul className="space-y-3">
                    {module.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'emploi' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Emploi du Temps Type</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Voici un exemple d'emploi du temps hebdomadaire pour ce programme. Les horaires peuvent varier selon les semestres.
            </p>
            <div className="space-y-4">
              {emploiDuTemps.map((jour, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className={`bg-gradient-to-r ${school.gradient} text-white px-6 py-3 font-bold text-lg`}>
                    {jour.jour}
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {jour.cours.map((cours, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-600"
                        >
                          <div className="flex-shrink-0">
                            <Clock className="w-5 h-5 text-blue-600 mb-1" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {cours.heure}
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-bold text-gray-900 dark:text-white">{cours.matiere}</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{cours.salle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'calendrier' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Calendrier Universitaire 2025-2026</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-600 rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Rentrée Universitaire</h4>
                </div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{scheduleData.rentree}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Début de l'année académique</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Fin de l'Année</h4>
                </div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{scheduleData.finAnnee}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Fin des cours et examens</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Périodes de Vacances</h4>
              <div className="space-y-4">
                {scheduleData.vacances.map((vacance, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{vacance.nom}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Du {vacance.debut} au {vacance.fin}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">Vacances</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dates Importantes</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Examens du 1er Semestre:</strong> Janvier 2026
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Examens du 2ème Semestre:</strong> Juin 2026
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Session de Rattrapage:</strong> Juillet 2026
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'admission' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Conditions d'Admission</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <Users className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Durée</h4>
                <p className="text-gray-700 dark:text-gray-300">{admissionInfo.duree}</p>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <GraduationCap className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Diplôme Obtenu</h4>
                <p className="text-gray-700 dark:text-gray-300">{admissionInfo.diplome}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Prérequis</h4>
              <div className="space-y-3">
                {admissionInfo.prerequis.map((req, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Débouchés Professionnels</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {admissionInfo.debouches.map((debouche, idx) => (
                  <div
                    key={idx}
                    className={`p-5 bg-gradient-to-r ${school.gradient} text-white rounded-xl shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="font-medium">{debouche}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-center">
              <h5 className="text-2xl font-bold mb-2">Prêt(e) à rejoindre ce programme ?</h5>
              <p className="text-white/90 mb-4">Les inscriptions sont ouvertes. Postulez dès maintenant !</p>
              <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                S'inscrire Maintenant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
