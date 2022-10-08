let id = 0;

document.getElementById('add').addEventListener('click', ()  => {
let createdDate = new Date();
let table = document.getElementById('taskList');
let row = table.insertRow(1);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = document.getElementById('new-task').value;
row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
row.insertCell(3).innerHTML = document.getElementById('new-start-time').value;
row.insertCell(4).innerHTML = document.getElementById('new-end-date').value;
row.insertCell(5).innerHTML = document.getElementById('new-end-time').value;
let actions = row.insertCell(6)
actions.appendChild(createdDDeleteButton(id++));
document.getElementById('new-task').value = '';
});

function createdDDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-danger';
    btn.id = id; 
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleted row with task: ${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}