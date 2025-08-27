import jwt from "jsonwebtoken";
import { passport} from '#auth/passport.js';
export const authenticateRefreshToken = (req, res, next) => {
  const { refreshToken } = req.body; // Mengambil refresh token dari body

  if (!refreshToken) {
    return res.status(403).json({ message: "Refresh token required" });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET); // Verifikasi refresh token
    req.user = decoded; // Menyimpan user yang terdecode ke dalam request
    next(); // Lanjutkan ke middleware berikutnya
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
};

export const authenticateAccessToken = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    // console.log("Authorization:", req.headers.authorization); // di backend

    if (info && info.name === "TokenExpiredError") {
      console.log("message: Token expired");
      return res.status(401).json({ message: "Token expired" });
    }

    if (err || !user) {
      console.log("message: Unauthorized");
      
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user; // Menyimpan user ke dalam request
    next(); // Melanjutkan ke middleware selanjutnya
  })(req, res, next); // Panggil authenticate dengan parameter
};