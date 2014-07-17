'use strict';


var UploadModel = require('../../models/upload');


module.exports = function (router) {

    var model = new UploadModel();


    router.get('/', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('upload/index', model);
            }
        });
    });

};
