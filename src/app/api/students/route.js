// Cambia esto:
import { connectDB } from '@/lib/db';
import Student from '@/models/Student';

// Por esto:
import { connectDB } from '../../../lib/db';
import Student from '../../../models/Student';
export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({});
    
    return NextResponse.json({ 
      success: true, 
      data: students 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}

// También podemos implementar POST, PUT, DELETE si es necesario
export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();
    
    const student = await Student.create(body);
    
    return NextResponse.json({ 
      success: true, 
      data: student 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}