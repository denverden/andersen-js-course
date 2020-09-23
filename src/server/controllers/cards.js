import mongoose from 'mongoose';
import Card from '../models/card';

exports.cards_get_all = (req, res) => {
  Card.find()
    .then(records => {
      const response = {
        count: records.length,
        cards: records.map(record => {
          return {
            _id: record._id,
            word: record.word,
            translation: record.translation,
            image: record.image,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.cards_create = (req, res) => {
  const card = new Card({
    _id: new mongoose.Types.ObjectId(),
    word: req.body.word,
    translation: req.body.translation,
    image: req.body.image,
    audio: req.body.audio,
  });
  card
    .save()
    .then(record => {
      res.status(201).json({
        message: 'Created card success!',
        createdCard: {
          _id: record._id,
          translation: record.translation,
          image: record.image,
          audio: record.audio,
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
};
