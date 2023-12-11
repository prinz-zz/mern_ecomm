import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const token = jwt.sign(
    { userId }, 
    process.env.JWT_SECRET, {
    expiresIn: "3d",
  });


  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 900000,
  });
  
};
