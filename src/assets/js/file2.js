$(document).ready( function( ) {
    $('.header').verticalMarquee( 1, 1 );
} );

jQuery.fn.verticalMarquee = function(vertSpeed, horiSpeed, index) {
    this.css('float', 'left');

    vertSpeed = vertSpeed || 1;
    horiSpeed = 5/horiSpeed || 1;

    var windowH = this.parent().height(),
        thisH = this.height(),
        parentW = (this.parent().width() - this.width()) / 2,
        rand = Math.random() * (index * 1000),
        current = this;

    this.css('margin-top', windowH + thisH);
    this.parent().css('overflow', 'hidden');

    setInterval(function() {
        current.css({
            marginTop: function(n, v) {
                return parseFloat(v) - vertSpeed;
            },
            marginLeft: function(n, v) {
                return (Math.sin(new Date().getTime() / (horiSpeed * 1000) + rand) + 1) * parentW;
            }
        });
    }, 15);

    setInterval(function() {
        if (parseFloat(current.css('margin-top')) < -thisH) {
            current.css('margin-top', windowH + thisH);
        }
    }, 1500);
};

var header = 1;
$('.header').each(function(header) {  
    $(this).verticalMarquee(1, 1, header);
    header++
});
