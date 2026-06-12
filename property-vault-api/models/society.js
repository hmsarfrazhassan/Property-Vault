import mongoose from "mongoose";

const societySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Society name must be atleast 3 character long"],
      required: [true, "Society name is required"],
      unique: [true, "Society name already exist"],
    },
    logo: {
      type: String,
    },
    address: {
      type: String,
      minlength: [10, "Society adress must be atleast 10 chracter long"],
      required: [true, "Society name is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Society", societySchema);
