
var scrollControl = function (){
    var $scollSection = $('.wrap'),
        $currentCount = 0,
        $text = $('.title-section .title'),
        $titleLength = $text.length,
        $textPoint = $('.text-point');
        $textTop = [];
    return {
        init : function(){
            this.srcoll();
            this.scrollText();
        },
        srcoll : function(){
            var timer;
            var _self = this;
            $scollSection.on('scroll touchmove mousewheel', function(e){
                _self.scrollEvent(e);
                if($currentCount == $titleLength) {
                    $scollSection.unbind();
                    return ;
                }
                e.preventDefault();
            }
        )},
        scrollEvent : function(e){
            var wheelEvent = e.originalEvent.wheelDelta;
                wheelEvent === 120 ? $currentCount-- : $currentCount++;
                $text.eq($currentCount).addClass('active').siblings().removeClass('active');
                
        },
        scrollText : function(){
            $textPoint.each(function (index){
                $textTop.push($textPoint.eq(index).offset().top);
            })
            $scollSection.on('scroll ', function(e){
                console.log(1111);
            });
        },
    }
}
var scroll = scrollControl();
scroll.init();


// $('.wrap').on('scroll touchmove mousewheel', function(e) {
//     var E = e.originalEvent;
//     if (E.detail) {
//         delta = E.detail
//         console.log(delta)
//     }else{
//         delta = E.wheelDelta;
//         console.log(delta)
//     };
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//  })



 