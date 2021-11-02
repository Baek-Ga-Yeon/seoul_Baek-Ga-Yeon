var btnModal = document.querySelector('.btn-modal');
var Modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function() {
    Modal.classList.add('active');
})

btnClose.addEventListener('click', function() {
    Modal.classList.remove('active');
})

modal.addEventListener('click', function(e) {
    var target = e.target;
    var isLayer = target.classList.contain('modal-layer');
    console.log(isLayer);
    
    if(isLayer) {
        modal.classList.remove('active');
    }
})