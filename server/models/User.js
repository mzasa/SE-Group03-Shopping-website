import mongoose from 'mongoose';

const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: 6,
		maxlength: 20
	},

	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 20
	},

	email: {
		type: String,
		required: true,
		maxlength: 50
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

export const Users = mongoose.model('users', UserSchema);
