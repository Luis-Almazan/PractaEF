import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para obtener todos los usuarios
async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los usuarios' }, { status: 500 });
  }
}

// Función para obtener un usuario por ID
async function getUserById(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener el usuario' }, { status: 500 });
  }
}

// Handler principal para la petición GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    return getUserById(parseInt(id));
  } else {
    return getAllUsers();
  }
}

// Crear un nuevo usuario
export async function POST(request: Request) {
  const { name, email } = await request.json();
  try {
    const user = await prisma.user.create({
      data: { name, email }
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el usuario' }, { status: 500 });
  }
}

// Actualizar un usuario existente
export async function PUT(request: Request) {
  const { id, name, email } = await request.json();
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email }
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el usuario' }, { status: 500 });
  }
}

// Eliminar un usuario
export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    return NextResponse.json({ message: 'Usuario eliminado exitosamente' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el usuario' }, { status: 500 });
  }
}
