import mongoose from 'mongoose';
import { modelName as petModelName } from '../pet/pet.model';
import { modelName as vaccineModelName } from '../vaccine/vaccine.model';

const { Schema } = mongoose;
export const modelName = 'applyVaccines'; // plural

const schema = new Schema(
  {
    pet: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: petModelName,
    },
    vaccine: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: vaccineModelName,
    },
    effect_secondary: {
      type: String
    },
    dateApplication: {
      type: Date,
      default: Date.now,
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
export default mongoose.models.ApplyVaccine || mongoose.model(modelName, schema);
