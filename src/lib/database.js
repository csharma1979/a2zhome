import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGODB_URL);
}

const dbConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default dbConnect;
