import { IUser } from "@/types/user";
import mongoose, { Schema, Document, models, Model } from "mongoose";
import { ICommentBase, Icomment } from "./comment";

export interface IPostBase {
    user: IUser;
    text: string;
    image?: string;
    comments: Icomment[];
    likes: string[];
}

export interface IPost extends Document, IPostBase {
    createdAt: Date;
    updatedAt: Date;
}

interface IPostMethods {
    likePost: (userId: string) => Promise<void>;
    unLikePost: (userId: string) => Promise<void>;
    commentOnPost: (comment: ICommentBase) => Promise<void>;
    getAllComments: () => Promise<Icomment[]>;
    removePost: () => Promise<void>;
}

interface IPostStatics {
    getAllPosts: () => Promise<IpostDocument[]>;
}

export interface IpostDocument extends IPost, IPostMethods {} // singular instance of a post
interface IpostModel extends Model<IpostDocument>, IPostStatics {} // all posts

const PostSchema = new Schema<IpostDocument[]>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {type: String, required: true},
    imageUrl: {type: String},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    likes: [{type: String}]
}, 
{
    timestamps: true
});
