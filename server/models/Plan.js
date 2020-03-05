const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    trainer: { type: Schema.Types.ObjectId, ref: 'User' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, enum: [ "perder peso", "ganar masa muscular", "definición", "capacidad aeróbica" ] },
    validity: String,
  },
  {
    timestamps: true
  }
);

const Plan = mongoose.model("Plan", planSchema);
module.exports = Plan;
