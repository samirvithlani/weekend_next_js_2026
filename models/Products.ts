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
    }
}, { timestamps: true })
export type ProductDoc = InferSchemaType<typeof productSchema>;
export const Product: Model<ProductDoc> = mongoose.model<ProductDoc>("products", productSchema)