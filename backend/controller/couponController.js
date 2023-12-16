import Coupon from "../models/couponModel.js";
import asyncHandler from "express-async-handler";
import { validateMongoDbId } from "../utils/validateMongoDbId.js";


//create coupon
export const createCoupon = asyncHandler( async(req, res, next) => {
    try {
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

//get all coupon
export const getAllCoupons = asyncHandler( async(req, res) =>{
    try {
        const getAllCoupons = await Coupon.find();
        res.json(getAllCoupons);
    } catch (error) {
        throw new Error(error);
    }
});

//update coupon
export const updateCoupons = asyncHandler( async(req, res) =>{

    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const updatedCoupons = await Coupon.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedCoupons);
    } catch (error) {
        throw new Error(error);
    }
});


//delete coupon
export const deleteCoupons = asyncHandler( async(req, res) =>{

    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const deletedCoupons = await Coupon.findByIdAndDelete(id);
        res.json(deletedCoupons);
    } catch (error) {
        throw new Error(error);
    }
});



