var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/ArticleController.js');

/*
 * GET
 */
router.get('/', ArticleController.list);

/*
 * GET
 */
router.get('/:id', ArticleController.show);

/*
 * POST
 */
router.post('/', ArticleController.create);

/*
 * PUT
 */
router.put('/:id', ArticleController.update);

/*
 * DELETE
 */
router.delete('/:id', ArticleController.remove);

module.exports = router;
