// middlewares/checkRole.js

export const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      // Misalnya, role user disimpan di req.user.role
      const userRole = req.user.role;  // Sesuaikan dengan cara anda mengakses role
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: "Forbidden: Invalid role" });
      }
  
      next();  // Lanjutkan ke middleware berikutnya jika role sesuai
    };
  };
  