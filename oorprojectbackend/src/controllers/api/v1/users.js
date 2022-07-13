const User = require('../../../models/user');
const TaskerDetail = require('../../../models/taskerDetail');
const { generateToken } = require('../../../utils/jwt')

// PUT one user
exports.update = async (req, res) => {
  
};

// DELETE one user
exports.destroy = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.sendStatus(404);
  }
  /* await User.updateMany(
    {
      _id: { $in: u.courses }
    },
    // {
    //   students: student._id
    // },
    {
      $pull: {
        students: student._id
      }
    }
  ); */
  res.json(user);
  return res.sendStatus(204);
      
};

// POST/create one user
exports.store = async (req, res) => {
  const { email, password, username, postcode, userType } = req.body;
    try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(409).json('User already exist');
    }
      // Token load should be user_id and user_name. The other information can not put to token.
      const user = new User({ email, password, username, postcode, userType });
      await user.hashPassword();
      await user.save();
      const Id = user.id;
      const token = await generateToken({Id});
      res.status(201).send({username,token});
    } catch (e) {  
            res.status(400).send(e);
    }
};

// GET one user
exports.show = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("taskerDetail").exec();
  if (!user) {
    return res.sendStatus(404);
  }  
  return res.json(user);
};
  
// GET all users
exports.index = async (req, res) => {
  const users = await User.find().exec();
  return res.json(users);
}





