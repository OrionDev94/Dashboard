export const list = () => {
  "use strict";

  const ul = document.getElementById('to-do');
  const input = document.querySelector('.input-task');
  const addBtn = document.querySelector("#addBtn");
  const closeBtn = document.createElement('button');
  let listItems = [];

  function generateLi() {
    let inputValue = input.value;

    const div = document.createElement('div');
    div.classList.add('d-flex', 'flex-row', 'align-items-center');

    closeBtn.classList.add('btn-close', 'col-auto', 'm-2', 'col-md-2');

    const li = document.createElement("li");
    li.classList.add('list-group-item', 'list-group-item-action', 'm-2', 'col-md-10');
    li.innerHTML = inputValue;
    // li.setAttribute ( (id) => {
    //     if (li.id)
    // })


    div.appendChild(li);
    div.appendChild(closeBtn);
    ul.appendChild(div);
  }

  function clearInput () {
    input.value = '';
  }

  function deleteTask () {
    
  }

  addBtn.addEventListener("click", () => {
    generateLi();
    clearInput ();
  });

};

export default list();
