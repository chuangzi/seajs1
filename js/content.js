define(function(require, exports, module) {

    var $ = require('jquery');
    var Slide = require('Slide');
    require('../css/content.css');


    function init() {
        var slide = new Slide({
            $target: $('#slide')
        });
    }
    module.exports.init = init;

});
