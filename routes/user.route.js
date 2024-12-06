const express = require('express');
const router = express.Router();
const userController = require('../src/Users/userController');


router.route('/').post(userController.userSignUp);
router.route('/users/:id').get(userController.getUserById)
router.route('/check-username').get(userController.checkIfUserNameExist);
router.route('/check-email').get(userController.checkIfEmailExist);
router.route('/authenticate-user').get(userController.authenticateUser);
router.route('/get-users').get(userController.getAllUsers);
router.route('/delete-user/:id').delete(userController.deleteUserById);
router.route('/update-user/:id').put(userController.updateUser);



module.exports = router;