import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: {
          type: Number,
        },
        color: {
          type: String,
        },
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not processed",
      enum: [
        "Processing",
        "Not Processed",
        "Cash on Delivery",
        "Dispatched",
        "Cancelled",
        "Completed",
        "Delivered",
      ],
    },
    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
