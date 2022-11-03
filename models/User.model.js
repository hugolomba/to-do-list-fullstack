const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      require: [true, "Username is requeired"],
      unique: true,
    },
    passwordHash: {
      type: String,
      require: [true, "Password is required"],
    },
    coverImgUrl: String,
    profileImgUrl: String,
    todos: [], //array de ids das tarefas que vão ser criadas depois
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
