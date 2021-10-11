const express = require('express');
const router = express.Router();
const myList = require('../controllers/plant')
const favorite = require('../controllers/favorite')

router.post('/addMyList', myList.addMyList);
router.post('/getMyList', myList.getMyList);

router.post('/getMusicList', play.getMusicList);
router.post('/addMusic', play.addMusic);

export default plantListRouter;