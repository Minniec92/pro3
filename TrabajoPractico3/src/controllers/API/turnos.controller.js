const TurnoModel = require("../../models/turno.model.js");
const PacienteModel = require("../../models/paciente.model.js");

const obtenerPorPaciente = async (req, res) => {
const { idPaciente } = req.params;
try {
const turnos = await TurnoModel.buscarPorPaciente(idPaciente);

if (turnos.length === 0) {
    return res.status(404).json({ mensaje: 'No hay turnos para este paciente.' });
}

res.json(turnos);
} catch (error) {
res.status(500).json({ mensaje: 'Error al buscar turnos.', error });
}
};

const eliminarTurno = async (req, res) => {
const { idTurno } = req.params;
try {
const eliminado = await TurnoModel.eliminar(idTurno);

if (eliminado === 0) {
    return res.status(404).json({ mensaje: 'No se encontró el turno.' });
}

res.redirect('/api/v1/turnos?mensaje=Turno eliminado correctamente');
} catch (error) {
res.status(500).json({ mensaje: 'Error al cancelar el turno.', error });
}
};

const crearTurno = async (req, res) => {
let pacienteId;

if (req.cookies.admin === 'true') {
    pacienteId = req.body.pacienteId;
}        else if (req.paciente) {
    pacienteId = req.paciente.id;
}       else {
    return res.status(401).json({ mensaje: 'Acceso no autorizado' });
}

const { fecha, hora } = req.body;

try {
const turnoExistente = await TurnoModel.buscarPorFechaYHora(fecha, hora);

if (turnoExistente) {
    return res.redirect('/api/v1/turnos?mensaje=Ya existe un turno para esa fecha y hora');
}

await TurnoModel.crear({ fecha, hora, pacienteId });

if (req.session?.isAdmin) {
    res.redirect('/api/v1/turnos?mensaje=El turno fue creado correctamente');
} else {
    res.redirect('/mis-turnos');
}
} catch (error) {
res.status(500).json({ mensaje: 'Error al crear turno.', error });
}
};

const renderListaTurnos = async (req, res) => {
try {
    const turnos = await TurnoModel.obtenerConPacientes();

console.log('MENSAJE RECIBIDO:', req.query.mensaje);
res.render('turnos', { turnos, mensaje: req.query.mensaje });
} catch (error) {
res.status(500).send('Error al cargar los turnos');
}
};

const edit = async (req, res) => {
    const { id } = req.params;

    try {
    const turno = await TurnoModel.buscarPorId(id);
    if (!turno) return res.status(404).send("Turno no encontrado");

    res.render("editar-turno", { turno });
    } catch (error) {
    res.status(500).send("Error al obtener turno");
    }
};

const update = async (req, res) => {
    const { idTurno } = req.params;
    const { fecha, hora, pacienteId } = req.body;

    try {
    const actualizado = await TurnoModel.actualizar(idTurno, { fecha, hora, pacienteId });

    if (actualizado === 0) {
        return res.status(404).send("Disculpe. Turno no encontrado");
    }

    res.redirect("/api/v1/turnos?mensaje=El turno fue actualizado correctamente");
    } catch (error) {
    res.status(500).send("Error al actualizar turno");
    }
};

module.exports = {
obtenerPorPaciente,
eliminarTurno,
crearTurno,
renderListaTurnos,
edit,
update
};
