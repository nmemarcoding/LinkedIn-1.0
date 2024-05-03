import {IUser} from "@/types/user";
import mongoose, { Schema, Document, models, Model } from "mongoose";

export interface ICommentBase {
    user: IUser;
    text: string;
    
}

export interface Icomment extends Document, ICommentBase {
    createAt: Date;
    updateAt: Date;
}

const commentSchema = new Schema<Icomment>({
    user:{
        userId: {type: String, required: true},
        userImage: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String}
    },
    text: {type: String, required: true},
    }, 
    {
        timestamps: true
    
});

export const comment =mongoose.model<Icomment>("Comment", commentSchema);