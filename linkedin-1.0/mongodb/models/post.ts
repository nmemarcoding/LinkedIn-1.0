import { IUser } from "@/types/user";
import mongoose , { Schema, Document, models, Model } from "mongoose"

export interface IpostBase {
    user: IUser;
    text: string;
    image?: string;
    comments: Icomment[];
    likes: string[];
}