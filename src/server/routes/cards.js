import express from 'express';
import Card from '../controllers/cards';

const router = express.Router();

router.get('/', Card.cards_get_all);

router.post('/add', Card.cards_create);

module.exports = router;
