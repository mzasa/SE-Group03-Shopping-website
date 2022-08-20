import mongoose from 'mongoose';
//OBJ sản phẩm
const schema = new mongoose.Schema({
    attachment: String,
    cost: {
        type: Number,
        required: true,
        default: 0,
    },
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    }
});

export const PostModel = mongoose.model('Post', schema);