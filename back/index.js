const express = require('express');
const admin = require('firebase-admin');
const path = require('path');

// Ruta al archivo JSON de credenciales de Firebase
const serviceAccount = require('./keyProyecto.json');

// Inicializa Firebase Admin SDK con la cuenta de servicio
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Inicializa Firestore
const db = admin.firestore();

// Inicializa la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta por defecto que redirige a /opiniones
app.get('/', (req, res) => {
    res.redirect('/opiniones');
});

// Ruta para obtener todas las opiniones
app.get('/opiniones', async (req, res) => {
    try {
        const opinionesRef = db.collection('opiniones');
        const snapshot = await opinionesRef.get();

        if (snapshot.empty) {
            return res.status(404).send('No se encontraron opiniones.');
        }

        let opiniones = [];
        snapshot.forEach(doc => {
            opiniones.push({ id: doc.id, ...doc.data() });
        });

        res.json(opiniones);
    } catch (error) {
        console.error("Error obteniendo documentos: ", error);
        res.status(500).send('Error obteniendo opiniones.');
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ${PORT})');
    console.log('Abre en tu navegador: http://localhost:${PORT}/opiniones');
});