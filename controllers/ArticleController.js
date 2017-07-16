var ArticleModel = require('../models/ArticleModel.js');

/**
 * ArticleController.js
 *
 * @description :: Server-side logic for managing Articles.
 */
module.exports = {

    /**
     * ArticleController.list()
     */
    list: function (req, res) {
        ArticleModel.find(function (err, Articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Article.',
                    error: err
                });
            }
            return res.json(Articles);
        });
    },

    /**
     * ArticleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ArticleModel.findOne({_id: id}, function (err, Article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Article.',
                    error: err
                });
            }
            if (!Article) {
                return res.status(404).json({
                    message: 'No such Article'
                });
            }
            return res.json(Article);
        });
    },

    /**
     * ArticleController.create()
     */
    create: function (req, res) {
        var Article = new ArticleModel({
			title : req.body.title,
			link : req.body.link,
			note : req.body.note

        });

        Article.save(function (err, Article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Article',
                    error: err
                });
            }
            return res.status(201).json(Article);
        });
    },

    /**
     * ArticleController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ArticleModel.findOne({_id: id}, function (err, Article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Article',
                    error: err
                });
            }
            if (!Article) {
                return res.status(404).json({
                    message: 'No such Article'
                });
            }

            Article.title = req.body.title ? req.body.title : Article.title;
			Article.link = req.body.link ? req.body.link : Article.link;
			Article.note = req.body.note ? req.body.note : Article.note;
			
            Article.save(function (err, Article) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Article.',
                        error: err
                    });
                }

                return res.json(Article);
            });
        });
    },

    /**
     * ArticleController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ArticleModel.findByIdAndRemove(id, function (err, Article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Article.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
