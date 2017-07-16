var NoteModel = require('../models/NoteModel.js');

/**
 * NoteController.js
 *
 * @description :: Server-side logic for managing Notes.
 */
module.exports = {

    /**
     * NoteController.list()
     */
    list: function (req, res) {
        NoteModel.find(function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note.',
                    error: err
                });
            }
            return res.json(Notes);
        });
    },

    /**
     * NoteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        NoteModel.findOne({_id: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note.',
                    error: err
                });
            }
            if (!Note) {
                return res.status(404).json({
                    message: 'No such Note'
                });
            }
            return res.json(Note);
        });
    },

    /**
     * NoteController.create()
     */
    create: function (req, res) {
        var Note = new NoteModel({
			title : req.body.title,
			body : req.body.body

        });

        Note.save(function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Note',
                    error: err
                });
            }
            return res.status(201).json(Note);
        });
    },

    /**
     * NoteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NoteModel.findOne({_id: id}, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Note',
                    error: err
                });
            }
            if (!Note) {
                return res.status(404).json({
                    message: 'No such Note'
                });
            }

            Note.title = req.body.title ? req.body.title : Note.title;
			Note.body = req.body.body ? req.body.body : Note.body;
			
            Note.save(function (err, Note) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Note.',
                        error: err
                    });
                }

                return res.json(Note);
            });
        });
    },

    /**
     * NoteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NoteModel.findByIdAndRemove(id, function (err, Note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Note.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
