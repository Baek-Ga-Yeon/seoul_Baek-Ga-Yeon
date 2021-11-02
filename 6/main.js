var fixedNav = ddocument.querySelector('nav');

// window.addEventListener('scroll')
// window.onscroll = function() { ..... }
// document.addEventListener('scroll')

window.addEventListener('scroll', Function () {
    var top = window.scrollY
            || window.pageY0ffset
            || ||document.DocumentElement.scrollTop
            || document.body.scrollTop;
    
/*
if(top > 50) {
fixedNav.classList.add('active');
} else {
    fixedNav.classList.remove('active');
}
*/

                        
                        
                        
})






var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    
    var value = document.getElementById('txt').value;
    
    if(value) {
        // console.log(value);
        addListTodo(value);
        document.getElementById('txt').value = "";
    }
    
})

function addListTodo(text) {
    var list = document.getElementById('todo');
    var item = document.createElement('li');
    item.textContent = text;

    // console.log(item);
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');

}




var addBtn = document.getElementById('add');


addBtn.addEventListener('click', function() {
    
    var value = document.getElementById('txt').value;
    
    if(value) {
        // console.log(value);
        addListTodo(value);
        document.getElementById('txt').value = "";
    }
    
    
    
})





var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
var wheelEvt = isFirefox ? 'DOMMouseScroll' : 'wheel';

window.addEventListener(wheelEvt, mouseWhellEvt);

function mouseWheelEvt(e) {
    var index = e.wheelDelta ? e.wheelDelta : -e.detail;
    
    (index < 0)
    
        ? fixedNav.classList.add('active')
        : fixedNav.classList.renive('active');
}




