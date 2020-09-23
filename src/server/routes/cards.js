import express from 'express';
import Card from '../controllers/cards';

const router = express.Router();

router.get('/', Card.cards_get_all);

router.post('/', Card.cards_create);

router.get('/:id', Card.cards_get_one);

router.patch('/:id', Card.cards_update);

router.delete('/:id', Card.cards_delete);

module.exports = router;
