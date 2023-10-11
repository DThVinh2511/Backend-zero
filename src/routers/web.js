const express = require('express');
const {
  getHomePage,
  getABC,
  getCreateUsers,
  getCreatePage,
  getUpdatePage,
  updateUsers
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/abc', getABC);
router.post('/create-user', getCreateUsers);
router.get('/createUser', getCreatePage)
router.get('/update-user/:id', getUpdatePage);
router.post('/update-user', updateUsers);

module.exports = router;