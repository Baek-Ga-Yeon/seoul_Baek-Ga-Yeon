var $select = $('.select');

/*

$select.click(function() {
    $select.removeClass('on');
    $(this).addClass('on');
})

*/

function slide() {
    var currentSlide = document.querySelector('.show');
    
    if(currentSlide) {
        currentSlide.classList.remove('show');
        var nextSlide = currentSlide.nextElementSibling;
        
        
    if(nextSlide) {
    
            nextSlide.classList.add("show");

    
    } else {
        firtstSlide.classList.add('show');
    
}
        
        
        
slide();
setInterval(slide();, 2000);




/*

$select.click(function() {
    $(this).addClass('on').sibling();
    console.log($(this).addClass('on').siblings());
})



$(this).next().toggleClass('hide');

*/


$list_title_wrap.click(function() {
    $(this).next().toggleClass('hide');
    
    var hideLength = $('.list_article_wrap.hide').length;
    
    if(hideLength === 4) {
        $close_text.hide ();
        $open_text.show();
    }
    
    if(hideLength === 0) {
        $open_text.hide();
        $close_text.show();
    }
})