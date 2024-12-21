function connectToFirebase() {
  // Initialize Firebase (replace with your config)
  firebase.initializeApp({...});
  const database = firebase.database();

  let retryCount = 0;
  const maxRetries = 5;
  const retryDelay = 1000; // 1 second

  function attemptConnection() {
    database.ref('/').once('value', (snapshot) => {
        console.log('Connected to Firebase!');
      }, (error) => {
        if (error && retryCount < maxRetries) {
          console.error('Firebase connection failed:', error);
          retryCount++;
          const delay = retryDelay * Math.pow(2, retryCount);
          setTimeout(attemptConnection, delay);
        } else if (error) {
          console.error('Firebase connection failed permanently after multiple retries.');
          // Handle the permanent failure appropriately (e.g., display error message to the user)
        }
    });
  }

  attemptConnection();
}

connectToFirebase();