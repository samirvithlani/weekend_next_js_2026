import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
   
    
}, { timestamps: true })
export type ProductDoc = InferSchemaType<typeof categorySchema>;
export const Product: Model<ProductDoc> = mongoose.model<ProductDoc>("category", categorySchema)