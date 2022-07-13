const User = require('../../../models/user');
const { generateToken } = require('../../../utils/jwt');

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();
  if (!user) {
    return res.status(404).json('email not found');
  }
 
  const validPassword = await user.validatePassword(password);  
  if (!validPassword) {
    return res.status(401).json('Invalid username or password');
  }
  const id=user.id;
  const username=user.username;
  const token = await generateToken({id});
  return res.json({ token, username });
}

module.exports = { login };
