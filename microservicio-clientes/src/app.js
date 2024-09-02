require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config');
const clientRoutes = require('./routes/clientRoutes');
const Client = require('./models/client');

const app = express();

// Conectar a la base de datos y crear la tabla
const initDatabase = async () => {
  const cassandraClient = await connectDB();
  await Client.createTable(cassandraClient);
  return cassandraClient;
};

// Middlewares
app.use(cors());
app.use(express.json());

// Inicializar la base de datos antes de configurar las rutas
initDatabase()
  .then(client => {
    app.locals.cassandraClient = client;
    console.log('Cliente de Cassandra guardado en app.locals');

    // Configurar rutas después de inicializar la base de datos
    app.use('/api/clients', clientRoutes);

    // Iniciar el servidor
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  });

// Manejo de cierre de la aplicación
process.on('SIGINT', async () => {
  if (app.locals.cassandraClient) {
    await app.locals.cassandraClient.shutdown();
  }
  process.exit(0);
});