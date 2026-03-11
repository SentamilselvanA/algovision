import mongoose from 'mongoose';

const algorithmSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  timeComplexity: { type: String, required: true },
  spaceComplexity: { type: String, required: true },
  whenToUse: { type: String, required: true },
  code: {
    javascript: String,
    python: String,
    cpp: String
  }
});

export default mongoose.model('Algorithm', algorithmSchema);
