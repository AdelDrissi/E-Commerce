require('dotenv').config(); // Charge les variables d'environnement depuis .env
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI; // Utilise la variable d'environnement pour MongoDB Atlas
// Ou si tu veux utiliser la base de données locale, tu peux utiliser process.env.MONGO_URI_LOCAL

mongoose
  .connect(uri)
  .then(() => console.log('Connexion à MongoDB réussie!'))
  .catch((err) => console.log('Erreur de connexion à MongoDB:', err));
