const PacienteModel = require('../models/paciente.model.js');
const TurnoModel = require('../models/turno.model.js');

const renderIndex = (req, res) => {
  res.render('index', {
    paciente: req.paciente || null,
    admin: req.cookies.admin === 'true'
  });
};

const renderListaPacientes = async (req, res) => {
  const pacientes = await PacienteModel.obtenerTodos();
  res.render('pacientes', {
    pacientes,
    mensaje: req.query.mensaje || null,
    paciente: req.paciente || null,
    admin: req.cookies.admin === 'true'
  });
};

const renderNuevoPaciente = (req, res) => {
  res.render('new-paciente', {
    paciente: req.paciente || null,
    admin: req.cookies.admin === 'true'
  });
};

const renderEditarPaciente = async (req, res) => {
  const { id } = req.params;
  const pacienteDB = await PacienteModel.buscarPorId(id);
  if (!pacienteDB) return res.status(404).send('Paciente no encontrado');
  res.render('editar-paciente', {
    paciente: pacienteDB,
    admin: req.cookies.admin === 'true',
  });
};

const renderListaTurnos = async (req, res) => {
  if (req.cookies.admin !== 'true' && !req.paciente) {
    return res.status(401).send('Acceso no autorizado');
  }

  const turnos = await TurnoModel.obtenerConPacientes();

  res.render('turnos', {
    turnos,
    mensaje: req.query.mensaje || null,
    paciente: req.cookies.admin ? null : req.paciente || null,
    admin: req.cookies.admin === 'true'
  });
};

const renderNuevoTurno = async (req, res) => {
  const isAdmin = req.cookies.admin === 'true';
  const pacientes = isAdmin ? await PacienteModel.obtenerTodos() : [];

  res.render('new-turno', {
    pacientes,
    paciente: req.paciente || null,
    admin: isAdmin
  });
};

const renderEditarTurno = async (req, res) => {
  const { id } = req.params;
  const turno = await TurnoModel.buscarPorId(id);
  if (!turno) return res.status(404).send('Turno no encontrado');
  res.render('editar-turno', {
    turno,
    paciente: req.paciente || null,
    admin: req.cookies.admin === 'true'
  });
};

const renderLogin = (req, res) => {
  res.render('login', {
    paciente: null,
    admin: false
  });
};

const renderMisTurnos = async (req, res) => {
  const pacienteId = req.paciente.id;

  try {
    const turnos = await TurnoModel.buscarPorPaciente(pacienteId);

    res.render('turnos', {
      turnos,
      mensaje: req.query.mensaje || null,
      paciente: req.paciente,
      admin: false
    });
  } catch (error) {
    res.status(500).send('Error al cargar los turnos del paciente');
  }
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('admin');
  res.redirect('/');
};

const renderLoginAdmin = (req, res) => {
  res.render('login-admin', {
    paciente: null,
    admin: false
  });
};

const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@novatech.com' && password === 'admin123') {
    res.cookie('admin', true, { httpOnly: true });
    return res.redirect('/admin');
  }

  res.render('login-admin', {
    error: 'Credenciales incorrectas',
    paciente: null,
    admin: false
  });
};

const renderAdminPanel = (req, res) => {
  if (!req.cookies.admin) {
    return res.redirect('/admin/login');
  }

  res.render('admin', {
    mensaje: 'Bienvenido, administrador',
    paciente: null,
    admin: true
  });
};

module.exports = {
  renderIndex,
  renderListaPacientes,
  renderNuevoPaciente,
  renderEditarPaciente,
  renderListaTurnos,
  renderNuevoTurno,
  renderEditarTurno,
  renderLogin,
  renderMisTurnos,
  renderLoginAdmin,
  loginAdmin,
  renderAdminPanel,
  logout
};
