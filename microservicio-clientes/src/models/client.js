const createTableQuery = `
  CREATE TABLE IF NOT EXISTS clients (
    id uuid PRIMARY KEY,
    name text,
    email text,
    apellido text,
    phone text,
    address text
  )
`;

const createTable = async (client) => {
  await client.execute(createTableQuery);
  console.log('Tabla de clientes creada o ya existente');
};

const findAll = (client) => client.execute('SELECT * FROM clients');

const findById = (client, id) => client.execute('SELECT * FROM clients WHERE id = ?', [id]);

const create = (client, clientData) => {
  const query = 'INSERT INTO clients (id, name, email, apellido, phone, address) VALUES (uuid(), ?, ?, ?, ?, ?)';
  const params = [clientData.name, clientData.email, clientData.apellido, clientData.phone, clientData.address];
  return client.execute(query, params, { prepare: true });
};

const update = (client, id, clientData) => {
  const query = 'UPDATE clients SET name = ?, email = ?, apellido = ?, phone = ?, address = ? WHERE id = ?';
  const params = [clientData.name, clientData.email, clientData.apellido, clientData.phone, clientData.address, id];
  return client.execute(query, params, { prepare: true });
};

const deleteClient = (client, id) => client.execute('DELETE FROM clients WHERE id = ?', [id]);

module.exports = {
  createTable,
  findAll,
  findById,
  create,
  update,
  delete: deleteClient
};