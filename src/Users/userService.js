const User = require('./userModel');
const userController = require('./userController');

exports.userSignUp = async (userData)=>{
    const user = new User(userData);
    return await user.save();

}

exports.checkIfUserNameExist = async(name) => {
    const user = await User.findOne({name:name});
    return user !== null
}

exports.checkIfEmailExist = async(email) => {
    const user = await User.findOne({email:email})
    return user !== null
}

exports.authenticateUser = async (email, password) => {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      throw new Error('user not found or incorrect credential');
    }
    return user
  };

  exports.checkUserById = async(id) => {
    try{
        const user = await User.findById(id);
        return user;
    }catch{
        throw new Error('Error fetching user by Id');
    }
  }

  exports.getAllUsers = async() => {
    try{
        const users = await User.find({})
        return users
    }catch{
        throw new Error('Error fetching from the user database')
    }
  }

  exports.deleteUserById = async(id) => {
    const result = await User.findByIdAndDelete(id);
    if(!result){
        throw new Error('User not found');
    }
  }

  exports.updateUserByID = async(id, updatedUserData) => {
    const updateUser = await User.findByIdAndUpdate(id, updatedUserData, {new:true})
    if(!updateUser){
      throw new Error('User not found');
    }
    return updateUser
  }