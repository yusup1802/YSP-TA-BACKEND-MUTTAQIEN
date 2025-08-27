import { PrismaClient } from "../../prisma/generated/prisma/index.js";
import { validation } from "../middleware/validation.js";
const prisma = new PrismaClient();

export { prisma, validation };
