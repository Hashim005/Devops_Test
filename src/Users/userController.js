// const { query } = require('express')

const userService = require('./userService')



 function userSignUp(req, res){
   const userData = req.body
   userService.userSignUp(userData)
   .then(newUser => {
    res.status(201).json(newUser)
   })
   .catch(error => {
    res.status(400).json({message:'error create in user', error})
   })


   

}

function checkIfUserNameExist(req, res) {
    const { name } = req.query;  // get 'name' from query parameter
    userService.checkIfUserNameExist(name)
        .then(userExist => {
            res.status(200).json({ exists: userExist });
        })
        .catch(error => {
            res.status(500).json({ message: "Error checking username", error });
        });
}

function checkIfEmailExist(req, res) {
    const { email } = req.query;  // get 'email' from query parameter
    userService.checkIfEmailExist(email)
        .then(emailExist => {
            res.status(200).json({ exists: emailExist });
        })
        .catch(error => {
            res.status(500).json({ message: "Error checking email", error });
        });
}

function authenticateUser(req, res) {
    const { email, password } = req.query;  // Extract from query parameters
  
    userService.authenticateUser(email, password)
      .then(user => {
        res.status(200).json(user);  // Return the user if found
      })
      .catch(error => {
        res.status(401).json({ message: 'Authentication failed', error: error.message });
      });
  }

  function getUserById(req, res){
    const userService = require('./userService');
    const {id} = req.params
    userService.checkUserById(id)
    .then(user => {
        if(user){
            res.status(200).json(user)

        }
        else{
            res.status(404).json({message:" user not found"})
        }
        
    })
    .catch(error =>{
        res.status(500).json({message:"Error fetching user", error:error.message})
    })

  }


  function getAllUsers(req, res){
    userService.getAllUsers()
    .then(users =>{
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({message:"Error fetching user",error:error.message})
    })
  }

  function deleteUserById(req, res){
    const {id} = req.params;
    userService.deleteUserById(id)
    .then(()=>{
        res.status(200).json({message:"user deleted successfully"})
    })
    .catch(error =>{
        res.status(500).json({message:"Error deleting user", error})
    }) 
  }

  function updateUser(req, res){
    const {id} = req.params;
    const updateUserData = req.body;
    userService.updateUserByID(id, updateUserData)
    .then(updateUser => {
        res.status(200).json(updateUser);
    })
    .catch(error => {
        res.status(500).json({message:"Failed to update user", error})
    })
  }



module.exports = {
     userSignUp,
     checkIfUserNameExist,
     checkIfEmailExist,
     authenticateUser,
     getUserById,
     getAllUsers,
     deleteUserById,
     updateUser
    

}