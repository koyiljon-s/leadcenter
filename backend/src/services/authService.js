import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import authRepository from "../repositories/authRepository.js";

const authService = {
  login: async (username, password) => {
    const admin = authRepository.getAdmin();

    if (!admin.username || !admin.password) {
      throw new Error("Admin credentials not configured");
    }

    if (username !== admin.username) {
      throw new Error("Invalid username");
    }

    // DEBUG: Check if hash format is valid
    if (!admin.password.startsWith('$2b$')) {
       console.warn("The password in .env does not look like a bcrypt hash.");
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ username: admin.username }, env.jwtSecret, {
      expiresIn: "24h",
    });

    return token;
  },
};

export default authService;
