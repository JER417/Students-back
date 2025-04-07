import { connectDB } from '../../lib/db';
import Student from '../../models/Student';

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({});
    
    return Response.json({ 
      success: true, 
      data: students 
    });
  } catch (error) {
    return Response.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();
    
    const student = await Student.create(body);
    
    return Response.json({ 
      success: true, 
      data: student 
    }, { status: 201 });
  } catch (error) {
    return Response.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}