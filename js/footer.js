define(function(require, exports, module) {
    var $ = require('jquery');
    var Prettify = require('prettify');
    // require('../css/footer.css');
    function init() {
        Prettify.autorun();

    }
    module.exports.init = init;

});
