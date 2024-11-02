# Crear proyecto 

npx create-next-app@latest

# Instalar Prisma

npm install prisma @prisma/client

# Iniciar Prisma 

npx prisma init

# migrar tablas
npx prisma migrate dev --name init


Ejemplos:

## obtener clientes

    http://localhost:3000/api/users

## obtener clientes por id

    http://localhost:3000/api/users?id=3

# crear clientes

    http://localhost:3000/api/users

            {
                "name": "Luis",
                "email": "Luis.almazan@gmail.com"
            }

# actualizar clientes 

    http://localhost:3000/api/users

                {
                    "id": 1,
                    "name": "Luis Josue",
                    "email": "Luis.almazan@gmail.com"
                }

# Eliminar clientes

    http://localhost:3000/api/users

                {
                    "id": 1
                }
