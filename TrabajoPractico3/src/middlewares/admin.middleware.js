function adminMiddleware(req, res, next) {
  if (req.cookies && req.cookies.admin === 'true') {
    return next();
  }
  res.status(403).send('Acceso denegado');
}

module.exports = adminMiddleware;
