const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    telephone: Number,
    mobile: Number,
    email: String,
    instagram: String,
    website: String,
    weight: Number,
    targetWeight: Number,
    imgPath: String,
    role: { type: String, enum: ["user", "trainer"], default: "user" },
    mode: [{ type: String, enum: ["online", "presencial"]}],
    speciality: [{ type: String, enum: ["perder peso", "ganar masa muscular", "maraton"]}],
    about: String,
    plan: [{ type: Schema.Types.ObjectId, ref: "Plan" }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
