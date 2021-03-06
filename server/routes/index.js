// eslint-disable-next-line new-cap
const router = require('express').Router();
const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const positionController = require('../controllers/positionController');
const isLoggedIn = require('../helpers/auth');

router.get('/user', isLoggedIn, userController.get);
router.get('/user/:id', userController.get);
router.post('/user', userController.post);
router.put('/user', userController.put);

router.get('/event', eventController.get);
router.get('/event/:id', eventController.get);
router.post('/event', eventController.post);
router.put('/event', eventController.put);

router.get('/position', positionController.get);
router.get('/position/:id', positionController.get);
router.post('/position', positionController.post);
router.put('/position', positionController.put);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
