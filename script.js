// Firebase configuration
const firebaseConfig = {
    // You'll need to replace these with your Firebase project credentials
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const grado = document.getElementById('grado').value;
    const grupo = document.getElementById('grupo').value;
    
    // Add data to Firebase
    db.collection('registros').add({
        nombre: nombre,
        grado: grado,
        grupo: grupo,
        fecha: new Date()
    })
    .then(() => {
        alert('¡Registro exitoso!');
        document.getElementById('registroForm').reset();
    })
    .catch((error) => {
        alert('Error en el registro: ' + error.message);
    });
});