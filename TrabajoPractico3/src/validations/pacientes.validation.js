const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

const registerPatientSchema = Joi.object({
    dni: Joi.string().required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

module.exports = { loginSchema, registerPatientSchema };
