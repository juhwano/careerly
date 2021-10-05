const user = require("../../../models/user");

const authController = {
  readAllMember: async (req, res) => {
    try {
      const result = await user.find();
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "서버 에러",
      });
    }
  },
  signUpMember: async (req, res) => {
    const { email, name, password } = req.body;

    try {
      const result = await user.findOne({ email });
      // 중복x
      if (!result) {
        const userModel = new user({ email, name, password });
        userModel.save();
        res.status(200).json({
          message: "회원가입 성공",
          registerSuccess: true,
          data: userModel,
        });
        // 중복o
      } else {
        res.status(409).json({
          message: "중복된 아이디가 있습니다.",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
        error,
      });
    }
  },
  signInMember: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      const result = await user.findOne({ email, password });
      if (result) {
        res.status(200).json({
          message: "로그인 성공",
          loginSuccess: true,
          data: result,
        });
      } else {
        res.status(409).json({
          message: "로그인 실패",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = authController;
