const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.render('new-paciente', { error: error.details[0].message });
    }
    next();
};

module.exports = validate;
