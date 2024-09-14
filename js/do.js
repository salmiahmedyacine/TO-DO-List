let box_input = document.getElementById('box-input');
let btn = document.getElementById('btn');
let writeTask = document.getElementById('writeTask');
let tasks = document.getElementById('tasks');

btn.onclick = function() {
    let taskInput = box_input.value.trim();

    if (taskInput.length == 0) {
        writeTask.style.display = 'block';
    } else {
        
        writeTask.style.display = 'none';

        
        let newTask = `
            <div class="task">
                <div id="taskName">
                    <img src="images/unchecked.png" class="check" alt="unchecked">
                    <p class="task-text">${taskInput}</p>
                </div>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        tasks.innerHTML += newTask;

        box_input.value = '';

        tasks.style.display = 'block';

        const allChecks = document.querySelectorAll('.check');
        allChecks.forEach((check) => {
            check.onclick = function() {
                if (check.src.includes('unchecked.png')) {
                    check.src = 'images/checked.png';
                    check.nextElementSibling.classList.add('completed');
                } else {
                    check.src = 'images/unchecked.png';
                    check.nextElementSibling.classList.remove('completed');
                }
            };
        });

        const allDeleteButtons = document.querySelectorAll('.fa-xmark');
        allDeleteButtons.forEach((deleteBtn) => {
            deleteBtn.onclick = function() {
                deleteBtn.parentElement.remove();
            };
        });
    }
};
