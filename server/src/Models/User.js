import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModel = new Schema(
   {
      firstname: { type: String, required: true, trim: true },
      lastname: { type: String, required: true, trim: true },
      age: { type: Number, min: 13 },
      username: { type: String, required: true, trim: true, maxlength: 25, unique: true },
      password: { type: String, required: true },
      avatar: {
         type: String,
         default:
            'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      role: { type: String, default: 'user' },
      email: { type: String, required: true, trim: true, unique: true },
      gender: { type: String, default: 'male   ' },
      phone: { type: String, default: '' },
      address: { type: String, default: '' },
      story: { type: String, default: '', maxlength: 200 },
      followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
      following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
   },
   { timestamps: true }
);

export default mongoose.model('User', UserModel);
