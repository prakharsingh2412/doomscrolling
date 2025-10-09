import mongoose, { Document, Schema } from "mongoose";

export interface IScrollData extends Document {
  userId: string;
  scrollPercent: number;
  stage: number;
  timestamp: Date;
}

const ScrollDataSchema: Schema = new Schema({
  userId: { type: String, required: true },
  scrollPercent: { type: Number, required: true },
  stage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IScrollData>("ScrollData", ScrollDataSchema);
