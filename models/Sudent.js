import mongoose from 'mongoose';

// Verificar si el modelo ya existe para evitar recompilación
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  studentId: {
    type: String,
    required: [true, 'Please provide a student ID'],
    unique: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'graduated', 'on leave'],
    default: 'active',
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);