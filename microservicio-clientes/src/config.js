const { Client } = require('cassandra-driver');

const client = new Client({
  contactPoints: [process.env.CASSANDRA_HOST || 'localhost'],
  localDataCenter: process.env.CASSANDRA_DC || 'datacenter1',
  protocolOptions: { port: process.env.CASSANDRA_PORT || 9042 }
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Conectado a Cassandra');
    
    // Crear el keyspace si no existe
    await client.execute(`
      CREATE KEYSPACE IF NOT EXISTS ${process.env.CASSANDRA_KEYSPACE}
      WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}
    `);
    
    console.log('Keyspace creado o ya existente');
    
    // Conectar al keyspace
    const keyspaceClient = new Client({
      contactPoints: [process.env.CASSANDRA_HOST || 'localhost'],
      localDataCenter: process.env.CASSANDRA_DC || 'datacenter1',
      keyspace: process.env.CASSANDRA_KEYSPACE,
      protocolOptions: { port: process.env.CASSANDRA_PORT || 9042 }
    });

    await keyspaceClient.connect();
    console.log(`Conectado al keyspace ${process.env.CASSANDRA_KEYSPACE}`);

    return keyspaceClient;
  } catch (error) {
    console.error('Error al conectar a Cassandra:', error);
    process.exit(1);
  }
};

module.exports = { connectDB };