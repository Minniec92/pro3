> 👥 **Integrantes del grupo**  
👧 Castro, Jennifer.  
👦 Murinigo, Mariano Iván.


> 💻 Instrucciones de instalación : 

 1) Clonamos el repositorio en vscode ( gitclone + la url )desde el git que nos brindaron (https://github.com/santozzi/practico3progra3)
 2) Ingresamos a la carpeta en la que tenemos el proyecto con cd + ruta del archivo 
 3) Instalamos las dependencias para poder trabajar sobre los archivos con npm install 
 4) Creamos el archivo .env con el port 3001 para poder ingresar al local host y ver las modificiaciones que vamos realizando sobre la API. 
 5) Iniciamos el servidor con npm start 
 6) Abrimos el http://localhost:3001 para visualizar el tp terminado y funcionando. 

> 🔗 Endpoints utilizados 


🔐 Autenticación

- `GET /login` → Formulario de login para pacientes
- `POST /login` → Procesa el login del paciente
- `GET /admin/login` → Formulario de login para administrador
- `POST /admin/login` → Procesa el login del administrador
- `GET /logout` → Cierra la sesión (paciente o admin)

👤 Pacientes (API)

- `GET /api/v1/pacientes` → Ver todos los pacientes
- `GET /api/v1/pacientes/nuevo` → Formulario para crear paciente
- `POST /api/v1/pacientes` → Crear nuevo paciente
- `GET /api/v1/pacientes/editar/:id` → Formulario para editar paciente
- `PUT /api/v1/pacientes/:id` → Actualizar paciente
- `DELETE /api/v1/pacientes/:id` → Eliminar paciente

📅 Turnos (API)

- `GET /api/v1/turnos` → Ver todos los turnos
- `GET /api/v1/turnos/nuevo` → Formulario para crear turno
- `POST /api/v1/turnos` → Crear nuevo turno
- `GET /api/v1/turnos/editar/:id` → Formulario para editar turno
- `PUT /api/v1/turnos/:id` → Actualizar turno
- `DELETE /api/v1/turnos/:id` → Eliminar turno

---

👤 Paciente (Mis Turnos)

- `GET /mis-turnos` → Ver turnos del paciente logueado

🛠️ Administrador

- `GET /admin` → Panel del administrador (requiere login)


PD: Para ingresar como usuario admin el mail es "admin@novatech.com" y la contraseña "admin123" 

OBS : EL PACIENTE SOLO PODRÁ SER ELIMINADO CUANDO NO TENGA TURNOS ASIGNADOS. 