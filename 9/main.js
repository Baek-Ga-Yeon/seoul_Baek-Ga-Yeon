var firtstSlide = document.querySelector('.item:first-child');
// firstSlide.classList.add('show');

function slide() {
    var currentSlide = document.querySelector('.show');
    
    if(currentSlide) {
        currentSlide.classList.remove('show');
        var nextSlide = currentSlide.nextElementSibling;
        
        
    if(nextSlide) {
    
            nextSlide.classList.add("show");
        
    } else {
        firtstSlide.classList.add('show');
    
    } else {
        firtstSlide.classList.add('show');
    
}
        
        
        
slide();
setInterval(slide();, 2000);

        
        