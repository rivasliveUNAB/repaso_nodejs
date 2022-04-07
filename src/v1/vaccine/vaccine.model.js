import mongoose from 'mongoose';

const { Schema } = mongoose;
export const modelName = 'vaccines'; // plural

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    effect_secondary: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    supplier_phone: {
      type: String
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
export default mongoose.models.Vaccine || mongoose.model(modelName, schema);
