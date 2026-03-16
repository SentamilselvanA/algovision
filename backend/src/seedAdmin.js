import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

const adminUser = {
  name: 'System Admin',
  email: 'admin@algovision.com',
  password: 'admin123', // This will be hashed
  role: 'admin'
};

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminUser.email });
    if (existingAdmin) {
      console.log('Admin user already exists');
    } else {
      const hashedPassword = await bcrypt.hash(adminUser.password, 10);
      const newAdmin = new User({
        ...adminUser,
        password: hashedPassword
      });
      await newAdmin.save();
      console.log('Admin user created successfully');
      console.log('Email: admin@algovision.com');
      console.log('Password: admin123');
    }

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
}

seedAdmin();
