const {
  selectArticles,
  selectArticle,
  updateArticle,
} = require('../models/articles.modles');

exports.getArticles = (req, res, next) => {
  const { sort_by, order, topic } = req.query;
  return selectArticles(sort_by, order, topic)
    .then((articles) => res.status(200).send({ articles }))
    .catch((err) => {
      return next(err);
    });
};

exports.getArticle = (req, res, next) => {
  const { article_id } = req.params;
  return selectArticle(article_id)
    .then((article) => res.status(200).send({ article }))
    .catch((err) => {
      return next(err);
    });
};

exports.patchArticle = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;
  return updateArticle(article_id, inc_votes)
    .then((article) => res.status(200).send({ article }))
    .catch((err) => {
      return next(err);
    });
};
