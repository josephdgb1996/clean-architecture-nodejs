import * as mongoose from 'mongoose';

export const WallvSchema = new mongoose.Schema({
    title: {
        type: String,
        max: 80,
        min: 5,
        required: true,
    },
    input: {
        type: String,
    },
    output: {
        type: String,
        required: true,
    },
    keyword: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    parentid: {
        type: mongoose.Schema.Types.ObjectId,
    },
});
