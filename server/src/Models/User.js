
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
            'https://res.cloudinary.com/dykgq5bav/image/upload/v1668917354/P-Social%20Network/e1xafacqnt47wl1xpve5.png',
      },
      role: { type: String, default: 'user' },
      email: { type: String, required: true, trim: true, unique: true },
      gender: { type: String, default: 'male' },
      phone: { type: String, default: '' },
      address: { type: String, default: '' },
      story: { type: String, default: '', maxlength: 200 },
      followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
      following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
   },
   { timestamps: true }
);

export default mongoose.model('user', UserModel);





