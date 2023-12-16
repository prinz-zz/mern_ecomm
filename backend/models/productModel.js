import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      type: String,
      required: true,
    },
    brand: {
      // type: String,
      // enum: ["Apple", "Samsung", "LG", "Bosch"],
      type: String,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
      select:false,
    },
    quantity: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
    },
    color: {
      type: String,
      enum: ["black", "white", "red", "green", "yellow", "blue"],
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    totalRatings: {
        type: String,
        default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
