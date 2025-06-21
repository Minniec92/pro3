const login = (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@novatech.com' && password === 'admin123') {
    res.cookie('admin', true, { httpOnly: true });
    return res.redirect('/admin');
  }

  res.render('login-admin', { error: 'Credenciales incorrectas' });
};

const renderLoginAdmin = (req, res) => {
  res.render('login-admin');
};

const renderAdminPanel = (req, res) => {
  res.render('admin', { admin: true });
};

const logout = (req, res) => {
  res.clearCookie('admin');
  res.redirect('/');
};

module.exports = {
  login,
  renderLoginAdmin,
  renderAdminPanel,
  logout
};
