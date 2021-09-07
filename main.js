function aTask() {
    let task_title = document.getElementById("title").value;
    let div = document.getElementById('content');
    let newTask = document.createElement('div');
    newTask.className = "task";
    div.appendChild(newTask);

    //add newTask
    let newText = document.createElement('p');
    newText.textContent = task_title;
    newText.className = "newText";
    newTask.appendChild(newText);

    //save in localstorage
    localStorage.setItem('title', JSON.stringify(newTask));

    // delete newTask
    let delText = document.createElement('p');
    delText.textContent = "X";
    delText.className = "delText";
    newTask.appendChild(delText);
    delText.addEventListener('click', () => div.removeChild(newTask));

    //edit newTask
    let editText = document.createElement('p');
    editText.textContent = "edit";
    editText.className = "editText";
    newTask.appendChild(editText);
    editText.addEventListener('click', () => {
        let task_edit = document.getElementById("title");
        if (task_edit.value != newText.innerText) {
            task_edit.value = newText.innerText
        }
        div.removeChild(newTask);
    });

    //open window
    newText.addEventListener('click', () => {
        let win = document.getElementById("model_window");
        let winText = document.createElement('p');
        winText.textContent = newText.innerText;
        winText.className = "winText";
        win.textContent = winText.innerText;

        //close window
        let delWin = document.createElement('p');
        delWin.textContent = "X";
        delWin.className = "delWin";
        win.appendChild(delWin);
        delWin.addEventListener('click', () => {
            document.getElementById("model_window").style.display = "none";
        })
        win.style.display = "block";
    })
}

