import { env } from "../config/env.js";

const AuthRepository = {
  getAdmin: () => {
    return {
      username: env.adminUsername,
      password: env.adminPassword,
    };
  },
};

export default AuthRepository;
