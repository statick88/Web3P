const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    clientId: { type: String, required: true },
    date: { type: Date, default: Date.now },
    totalVenta: { type: Number, default: 0 }  // Cambiado a default: 0 en lugar de required: true
});

module.exports = mongoose.model('Venta', ventaSchema);
