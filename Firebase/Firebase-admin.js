require('dotenv').config(); // Load environment variables from .env file

var admin = require("firebase-admin");

if (!admin.apps.length) {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY);
  const privateKey = process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
  console.log(privateKey);  

  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey,
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();