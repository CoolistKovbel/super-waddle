import mongoose, { Model, Document } from 'mongoose';

interface IServiceRequest extends Document {
    serviceType: string;
    serviceUserRequest: string;
    useremail: string;
    username: string;

}

const serviceRequestSchema = new mongoose.Schema<IServiceRequest>(
  {
    serviceType: {
      type: String,
    },
    serviceUserRequest: {
      type: String,
    },
    useremail: {
      type: String,
    },
    username: {
      type: String,
    },

  },
  { timestamps: true }
);

let ServiceRequestModel: Model<IServiceRequest>;

try {
  // Try to retrieve an existing model
  ServiceRequestModel = mongoose.model<IServiceRequest>('ServiceRequest');
} catch (e) {
  // If the model doesn't exist, define it
  ServiceRequestModel = mongoose.model<IServiceRequest>('ServiceRequest', serviceRequestSchema);
}

export const ServiceRequest = ServiceRequestModel;
