const mongoose = require("mongoose");
const { Schema } = mongoose;

// 스키마 객체 생성
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// 모델 생성
// 첫번째 인자는 해당 collection의 단수적 표현을 나타내는 문자열이다. 실제 collection의 이름은 복수형으로 자동 변환되어 사용된다.
module.exports = mongoose.model("User", userSchema);
