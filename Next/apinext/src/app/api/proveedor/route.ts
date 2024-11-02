import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para obtener todos los usuarios
async function getAllProveedors() {
  try {
    const proveedor = await prisma.proveedor.findMany();
    return NextResponse.json(proveedor);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener los proveeodres' }, { status: 500 });
  }
}

// Función para obtener un usuario por ID
async function getProveedorsById(id: number) {
  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { id },
    });

    if (!proveedor) {
      return NextResponse.json({ error: 'Proveedor no encontrado' }, { status: 404 });
    }

    return NextResponse.json(proveedor);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener el proveedor' }, { status: 500 });
  }
}

// Handler principal para la petición GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    return getProveedorsById(parseInt(id));
  } else {
    return getAllProveedors();
  }
}

// Crear un nuevo usuario
export async function POST(request: Request) {
  const { name, descripcion } = await request.json();
  try {
    const proveedor = await prisma.proveedor.create({
      data: { name, descripcion }
    });
    return NextResponse.json(proveedor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el proveedor' }, { status: 500 });
  }
}

// Actualizar un usuario existente
export async function PUT(request: Request) {
  const { id, name, descripcion } = await request.json();
  try {
    const proveedor = await prisma.proveedor.update({
      where: { id: parseInt(id) },
      data: { name, descripcion }
    });
    return NextResponse.json(proveedor);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el proveedor' }, { status: 500 });
  }
}

// Eliminar un usuario
export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await prisma.proveedor.delete({
      where: { id: parseInt(id) }
    });
    return NextResponse.json({ message: 'Proveedor eliminado exitosamente' }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el Proveedor' }, { status: 500 });
  }
}
