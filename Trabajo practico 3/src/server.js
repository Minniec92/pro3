const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const rutaPacientes = require('./routes/pacientes.route.js');
const rutaTurnos = require('./routes/turnos.route.js');
const home = require('./routes/home.routes.js');
const vistas = require('./routes/views.routes.js');
const morgan = require('morgan');
const rutaAdmin = require('./routes/admin.routes');
const authMiddleware = require('./middlewares/auth.middleware.js');
dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    this.engine();
    this.rutas();
  }

  engine() {
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname, 'views', 'pug'));
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(methodOverride('_method'));
    this.app.use(morgan('dev'));
    this.app.use(cookieParser());
    this.app.use(authMiddleware);
    this.app.use(express.static(path.join(__dirname,'..', 'public')));
  }

  rutas() {
    this.app.use('/admin', rutaAdmin);
    this.app.use('/api/v1/pacientes', rutaPacientes);
    this.app.use('/api/v1/turnos', rutaTurnos);
    this.app.use('/', home);
    this.app.use('/', vistas);
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}, host: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
