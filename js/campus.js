/**
 * Created by Administrator on 2017/3/11.
 */
(function () {
    var $content = $('#content');
    var $part1 = $('#part1');

    $(window).resize(part1H);
    part1H();
    function part1H(){
        var winH = $(window).height();
        $part1.height(winH - parseFloat($content.css('margin')));
    }

})();
