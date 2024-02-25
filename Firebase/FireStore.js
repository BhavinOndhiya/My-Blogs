const firestore = require('./Firebase'); // Assuming firebase.js is in the same directory

// Now you can use the `firestore` object to interact with Firestore
firestore.collection('user').doc('user').get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  })
  .catch(err => {
    console.error('Error getting document:', err);
  });
