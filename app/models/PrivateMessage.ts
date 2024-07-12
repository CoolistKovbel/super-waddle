import mongoose, { Model, Document } from "mongoose";

interface IPrivateMEssage extends Document {
  usernmae: string;
  subject: string;
  from: string;
  content: string;
  reason: string;
  MetaAddress: string;
}

const PrivateMEssageSchema = new mongoose.Schema<IPrivateMEssage>(
  {
    usernmae: {
      type: String,
    },
    subject: {
      type: String,
    },
    MetaAddress: {
      type: String,
    },
    from: {
      type: String,
    },
    content: {
      type: String,
    },
    reason: {
      type: String,
    },
  },
  { timestamps: true }
);

let PrivateMEssagetModel: Model<IPrivateMEssage>;

try {
  // Try to retrieve an existing model
  PrivateMEssagetModel = mongoose.model<IPrivateMEssage>("PrivateMEssage");
} catch (e) {
  // If the model doesn't exist, define it
  PrivateMEssagetModel = mongoose.model<IPrivateMEssage>(
    "PrivateMEssage",
    PrivateMEssageSchema
  );
}

export const PrivateMEssagetRequest = PrivateMEssagetModel;
