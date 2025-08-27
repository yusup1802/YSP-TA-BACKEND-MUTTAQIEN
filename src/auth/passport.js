import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { prisma } from "#configPath"; 

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    // console.log("Decoded JWT payload:", jwt_payload);
    try {
      const user = await prisma.user.findUnique({
        where: { id: jwt_payload.userId },
        select: {
          id: true,
          email: true,
          role: true,
          muridProfile: {
            include: {
              rfid:true,
              waliMurids:true,
              kelas:{
                include:{
                  waliKelas:true
                }
              },
            },
          },
          guruProfile: {
            select: {
              id: true,
              nik: true,
              name: true,
              noGuru: true,
              rfid:true,
              Kelas: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      if (user) {
        return done(null, user); // Jika user ditemukan, kembalikan user
      } else {
        return done(null, false); // Jika user tidak ditemukan
      }
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        console.error("Error verifying JWT:", error);
        return done(null, false, { message: "Token expired" });
      }
      return done(error, false); // Tangani error lain
    }
  })
);

export { passport };
