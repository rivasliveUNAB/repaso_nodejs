import mongoose from 'mongoose';
import { modelName as trainerModelName } from '../trainer/trainer.model';

const { Schema } = mongoose;
export const modelName = 'pets'; // plural

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    race: {
      type: String,
      require: true,
      required: true,
    },
    trainer: {
      type: Schema.Types.ObjectId,
      ref: trainerModelName,
      require: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'deleted'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models.Pet || mongoose.model(modelName, schema);
