import { Document, Types } from 'mongoose';

export interface IKendal extends Document {
    readonly title: string;
    readonly input: string;
    readonly output: string;
    readonly keywords: string[];
    readonly category: string;
    readonly parentid: Types.ObjectId;
}
