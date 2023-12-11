import jwt from "jsonwebtoken";

export const refreshToken = (res, userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 900000,
  });

};
