const Client = require('../models/client');
const { types } = require('cassandra-driver');

exports.getClients = async (req, res) => {
  try {
    const result = await Client.findAll(req.app.locals.cassandraClient);
    res.json(result.rows);
  } catch (error) {
    console.error('Error en getClients:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const result = await Client.findById(req.app.locals.cassandraClient, types.Uuid.fromString(req.params.id));
    if (result.rows.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error en getClientById:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    await Client.create(req.app.locals.cassandraClient, req.body);
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (error) {
    console.error('Error en createClient:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    await Client.update(req.app.locals.cassandraClient, types.Uuid.fromString(req.params.id), req.body);
    res.json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    console.error('Error en updateClient:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    await Client.delete(req.app.locals.cassandraClient, types.Uuid.fromString(req.params.id));
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error('Error en deleteClient:', error);
    res.status(500).json({ message: error.message });
  }
};