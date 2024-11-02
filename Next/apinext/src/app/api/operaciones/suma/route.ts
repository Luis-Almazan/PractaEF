import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { num1, num2, operation } = await request.json();

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return NextResponse.json({ error: 'num1 y num2 deben ser números' }, { status: 400 });
  }

  let result;

  switch (operation) {
    case 'suma':
      result = num1 + num2;
      break;
    case 'resta':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        return NextResponse.json({ error: 'No se puede dividir por cero' }, { status: 400 });
      }
      result = num1 / num2;
      break;
    default:
      return NextResponse.json({ error: 'Operación no válida. Usa add, subtract, multiply o divide' }, { status: 400 });
  }

  return NextResponse.json({ result });
}
