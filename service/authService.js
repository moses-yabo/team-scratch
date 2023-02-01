module.exports.register = async (req, res) => {
  //  user  registration
  const user = User.findOne("email");
  if (!user) {
    const _ = req.body;
    const newUser = await User.create({
      name: _.name,
      email: _.email,
      password: _.password,
      passwordConfirm: _.passwordConfirm,
      role: _.role,
    });
    createSendToken(newUser, 201, res);
  }
};
module.exports.login = () => {};
module.exports.logout = () => {};
