
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostModel = new Schema(
   {
      user: { type: mongoose.Types.ObjectId, ref: 'user' },
      content: String,
      images: { type: Array, default: [] },
      likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
      comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
   },
   { timestamps: true }
);

export default mongoose.model('post', PostModel);


