import sortieHecm from '../assets/sortieHecm.jpg';
import conferenceia from '../assets/iaConference.jpg';
import conferenceOratoire from '../assets/conferenceOratoire.jpg'
import hack1 from '../assets/robo2.jpg';
import smatching from '../assets/sport.jpg';
import laureatAF from '../assets/laureatAF.jpg';
import tech from '../assets/market.jpg';
import confBasket from '../assets/conferenceBasket.jpg';

export const newsList = [
  {
    type: 'Événement',
    date: '30 Mai 2025',
    title: "Conférence sur l'Art Oratoire et l'Éloquence",
    category: 'Conférence',
    participants: '200+ étudiants',
    location: 'Amphithéâtre UPA',
    duration: '3 heures',
    description: "Une conférence exceptionnelle animée par les champions du monde de débat 2024. Un moment unique pour développer vos compétences en communication et découvrir les secrets de l'éloquence auprès des meilleurs.",
    image: conferenceOratoire,
    fullDescription: "L'Université Privée d'Ambohidratrimo a eu l'immense honneur et le privilège d'accueillir une conférence d'exception sur le thème 'Eloquence et Authenticité : Trouver votre Voix Intérieure'. Cet événement unique a été animé par deux figures emblématiques de l'art oratoire malgache et international.\n\nLes étudiants ont eu l'opportunité rare d'interagir avec Ny Avo RAZAFINDRAZAKA et Josie RAMANANTSOA, champions du monde de débat (La Haye 2024), qui ont partagé leurs expériences, techniques et conseils pour exceller dans la prise de parole en public. Cette conférence s'inscrit dans notre mission de former des leaders communicants, capables de porter leurs idées avec impact et conviction.",
    details: [
      "Intervenants d'exception : Ny Avo RAZAFINDRAZAKA (Champion du Monde de Débat - La Haye 2024, Double Champion de Madagascar en Art Oratoire) et Josie RAMANANTSOA (Championne du Monde de Débat - La Haye 2024, Championne de Plaidoyer contre la Corruption)",
      "Ateliers pratiques sur les techniques d'éloquence, la gestion du stress, la structuration d'un discours percutant et l'art de convaincre",
      "Sessions de questions-réponses interactives permettant aux étudiants d'échanger directement avec les champions",
      "Simulations de débats et exercices de prise de parole en public avec retours personnalisés",
      "Remise de certificats de participation et opportunités de mentorat pour les étudiants les plus motivés"
    ],
    highlights: [
      'Champions du monde de débat 2024',
      'Ateliers pratiques interactifs',
      'Techniques professionnelles dévoilées',
      'Certificats de participation'
    ],
    tags: ['Éloquence', 'Communication', 'Leadership', 'Développement Personnel']
  },
  {
    type: 'Actualité',
    date: '5 Mai 2025',
    title: 'Cérémonie de Remise des Diplômes 2025',
    category: 'Cérémonie',
    participants: '300+ diplômés et familles',
    location: 'Campus UPA - Grande Salle',
    duration: '4 heures',
    description: 'Un moment solennel et émouvant célébrant la réussite de nos diplômés 2025. Félicitations à tous nos nouveaux alumni qui s\'apprêtent à embrasser leur avenir professionnel !',
    image: sortieHecm,
    fullDescription: "La cérémonie de remise des diplômes 2025 a été un moment de grande émotion et de fierté pour toute la communauté UPA. Plus de 300 diplômés des trois écoles (HEST, HECM, HELS) ont reçu leur parchemin, marquant l'aboutissement de plusieurs années de travail acharné et de dévouement.\n\nLa cérémonie s'est déroulée en présence des familles, des enseignants, du personnel administratif et de représentants du monde professionnel. Les discours inspirants, les témoignages touchants et les moments de célébration ont rendu cette journée inoubliable. Bravo à tous nos nouveaux alumni, ambassadeurs de l'excellence UPA !",
    details: [
      "Discours inspirant du Président de l'Université sur l'importance de l'éducation et les responsabilités des futurs leaders",
      "Remise symbolique des diplômes par faculté (HEST, HECM, HELS) en présence des doyens et professeurs",
      "Témoignages émouvants de Major de Promotion partageant leurs parcours, défis et réussites",
      "Remise de prix d'excellence académique et bourses pour les étudiants méritants",
      "Cocktail de clôture avec buffet gastronomique, networking entre alumni, étudiants actuels et professionnels",
      "Séance photos officielles et création de souvenirs mémorables avec toges et toques"
    ],
    highlights: [
      '300+ diplômés célébrés',
      'Discours inspirants',
      'Prix d\'excellence remis',
      'Networking professionnel'
    ],
    tags: ['Diplômes', 'Cérémonie', 'Réussite', 'Alumni']
  },
    { type: 'Événement', date: '15 Mars 2025', title: 'Hackathon Innovation Étudiante', description: 'Participez à notre hackathon annuel et proposez des solutions technologiques innovantes.', image: hack1, details: [
        "Défi 48h pour résoudre un cas réel.",
        "Coaching par des alumni experts.",
        "Lots et visibilité pour les gagnants."
      ]
    },
    { type: 'Actualité', date: '08 Février 2025', title: 'Smatching', description: 'Première participation aux tournois national de Basket ball pour notre Université', image: smatching, details: [
        "Un grand encouragement à notre équipe",
        "Le tournois et les affrontements dureront 1 semaine",
        "Une victoire pour notre équipe"
      ]
    },
      { type: 'Actualité', date: '04 Février 2025', title: 'Championnat de lecture', description: 'Notre championne de lecture "ARIMALALA Fy Irina Anay"', image: laureatAF, details: [
        "Elle etait encore étudiante en 2ème année das la mention HECM",
        "L'Alliance Française avait organisé un championnat de lecture à l'Alliance française d'Antananarivo Ampefiloha",
        "Elle a gagné la première place du tournois. Felicitation Anay."
      ]
    },
      { type: 'Événement', date: '02 Avril 2024', title: 'Conférence dédiée au basket-ball', description: 'Ne ratez pas notre conférence sur le basket-ball organisé par le BDS UP Ambohidratrimo', image: confBasket, details: [
        "Echange entre professionnels et coachs",
        "Apprenez les règles fondamentaux de ce sport"
      ]
    },

];
