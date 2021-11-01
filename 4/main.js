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