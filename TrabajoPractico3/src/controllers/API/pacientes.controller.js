const jwt = require("jsonwebtoken");
const PacienteModel = require("../../models/paciente.model.js");

class PacientesController {
  async login(req, res) {
    try {
      const { dni, password } = req.body;
      const paciente = await PacienteModel.buscarPorDni(dni);

      if (!paciente || paciente.password !== password) {
        throw new Error("Credenciales inválidas");
      }

      const token = jwt.sign(
        { id: paciente.id },
        process.env.JWT_SECRET || "secreto123",
        { expiresIn: "1h" }
      );

      res.cookie("token", token, { httpOnly: true });
      res.redirect("/mis-turnos");
    } catch (error) {
      res.status(401).render("login", { error: "DNI o contraseña incorrectos", paciente: null, admin: false });
    }
  }

  async list(req, res) {
    const pacientes = await PacienteModel.obtenerTodos();
    res.render("pacientes", {
      pacientes,
      mensaje: req.query.mensaje || null,
      paciente: req.paciente || null,
      admin: req.cookies.admin === 'true'
    });
  }

  async create(req, res) {
    const { dni, nombre, apellido, email, password } = req.body;

    try {
      const existente = await PacienteModel.buscarPorDni(dni);

      if (existente) {
        return res.redirect("/api/v1/pacientes?mensaje=Ya existe un paciente con ese DNI");
      }

      await PacienteModel.crear({ dni, nombre, apellido, email, password });

      res.redirect('/login?mensaje=Paciente creado con éxito. Ahora podés iniciar sesión');
    } catch (error) {
      res.status(500).json({ message: "Error del servidor" });
    }
  }

  async delete(req, res) {
    const id = req.params.id;

    try {
      const eliminado = await PacienteModel.eliminar(id);

      if (!eliminado) {
        return res.status(404).json({ message: `No existe el paciente con id ${id}` });
      }

      res.redirect("/api/v1/pacientes?mensaje=El paciente fue eliminado correctamente");
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar", error });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const { dni, nombre, apellido, email, password } = req.body;

    try {
      const existente = await PacienteModel.buscarPorDni(dni);

      if (existente && existente.id != id) {
        return res.redirect("/api/v1/pacientes?mensaje=Ya existe otro paciente con ese DNI");
      }

      const actualizado = await PacienteModel.actualizar(id, { dni, nombre, apellido, email, password });

      if (actualizado === 0) {
        return res.status(404).send("Paciente no encontrado");
      }

      res.redirect("/api/v1/pacientes?mensaje=El paciente se actualizó correctamente");
    } catch (error) {
      res.status(500).send("Error al actualizar");
    }
  }

  async NewPacient(req, res) {
    res.render("new-paciente", {
      paciente: req.paciente || null,
      admin: req.cookies.admin === 'true'
    });
  }

  async edit(req, res) {
    const { id } = req.params;

    try {
      const paciente = await PacienteModel.buscarPorId(id);
      if (!paciente) return res.status(404).send("Paciente no encontrado");

      res.render("editar-paciente", {
        paciente,
        admin: req.cookies.admin === 'true',
        paciente: req.paciente || null
      });
    } catch (error) {
      res.status(500).send("Error al obtener paciente");
    }
  }
}

module.exports = new PacientesController();
