import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    }
}, { timestamps: true })
export type ProductDoc = InferSchemaType<typeof productSchema>;
export const Product: Model<ProductDoc> = mongoose.model<ProductDoc>("products", productSchema)