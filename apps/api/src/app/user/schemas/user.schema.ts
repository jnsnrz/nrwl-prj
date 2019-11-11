import { Schema, Document, Model, model } from 'mongoose';

export interface IUser {
    name: string;
    login: string;
    password: string;
    salt: string;
    location: any;
    languages: string[];
    dateCreate: Date;
}

export interface IUserDocument extends IUser, Document {
    checkPassword(password: string): boolean;
}

export interface IUserModel extends Model<IUserDocument> {
    findByFilter(filter: any, options?: any): Promise<IUserDocument>;
}

export const UserSchema = new Schema({
    name: {
        type: String,
        index: true,
    },
    login: {
        type: String,
        index: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    location: {
        type: Schema.Types.Mixed,
    },
    languages: {
        type: [String],
    },
    dateCreate: {
        type: Schema.Types.Date,
    },
},
{
    collection: 'users',
    read: 'nearest'
  }
);