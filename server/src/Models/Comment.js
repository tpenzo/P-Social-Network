
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentModel = new Schema(
   {
      user: { type: mongoose.Types.ObjectId, ref: 'user' },
      postId: mongoose.Types.ObjectId,
      content: { type: String, required: true },
      likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
   },
   { timestamps: true }
);

export default mongoose.model('comment', CommentModel);

