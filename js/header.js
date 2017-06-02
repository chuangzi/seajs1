define(function(require, exports, module) {
    var $ = require('jquery');
    var calendar = require('calendar');
    var moment = require('moment');
    require('../css/header.css');

    function init() {
        // var time = moment('20111031','YYYYMMDD').fromNow();
        // alert(time)
        // var time1 = moment().subtract(10, 'days').calendar();
        // alert(time1)
        // var time2 = moment().format('MMMM Do YYYY, h:mm:ss a');
        // alert(time2)
        // var time3 = moment().calendar();
        // alert(time3)

        setTime();
        setInterval(function () {
            setTime();
        },1000)
        function setTime() {
            $('.now').html(moment().format('YYYY MMMM Do , h:mm:ss a'))
        }
    }
    module.exports.init = init;

});
