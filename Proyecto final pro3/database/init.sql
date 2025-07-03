CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

INSERT INTO "Productos" (nombre, descripcion, precio, stock, categoria) VALUES
('Notebook Lenovo', 'Intel i5, 8GB RAM, 256GB SSD', 420000, 10, 'Electrónica'),
('Mouse Logitech', 'Inalámbrico, ergonómico', 18000, 25, 'Accesorios'),
('Silla Gamer', 'Reclinable, con apoyabrazos', 95000, 8, 'Muebles');

SELECT 'Base de datos inicializada correctamente' AS status;
