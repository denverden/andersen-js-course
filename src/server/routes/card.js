import express from 'express';

const router = express.Router();

router.route('/').get(async (req, res) => {
  return res.json(await req.context.models.Card.find());
});

module.exports = router;
