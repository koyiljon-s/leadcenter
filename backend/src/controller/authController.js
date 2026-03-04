import authService from "../services/authService.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.login(username, password);
    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
