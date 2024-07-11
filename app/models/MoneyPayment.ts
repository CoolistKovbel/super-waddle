import mongoose, { Model, Document } from 'mongoose';

interface IMoneyPayment extends Document {
    MoneyHash: string;
    MoneyPaymentID: string;
    from: string;
    amount: string;
    reason: string;
    MetaAddress: string;
}

const MoneyPaymentSchema = new mongoose.Schema<IMoneyPayment>(
  {
    MoneyHash: {
      type: String,
    },
    MoneyPaymentID: {
      type: String,
    },
    MetaAddress: {
        type: String
    },
    from: {
      type: String,
    },
    amount: {
      type: String,
    },
    reason: {
      type: String,
    },
  },
  { timestamps: true }
);

let MoneyPaymentModel: Model<IMoneyPayment>;

try {
  // Try to retrieve an existing model
  MoneyPaymentModel = mongoose.model<IMoneyPayment>('MoneyPayment');
} catch (e) {
  // If the model doesn't exist, define it
  MoneyPaymentModel = mongoose.model<IMoneyPayment>('MoneyPayment', MoneyPaymentSchema);
}

export const MoneyPaymentRequest = MoneyPaymentModel;
