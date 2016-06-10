/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*jslint this*/
/*jslint for:true */
var todos = [];
var compteur = 2;
var alert = document.getElementById('alert');
var todo;
todo = {
    check: function () {
        "use strict";
        var task = document.getElementById('task').value;
        var validate = task.trim();
        if (validate.length === 0) {
            alert.style.display = 'block';
            alert.style.opacity = 1;
            alert.innerHTML = "Attention le champ est vide !";
            setTimeout(function () {
                setTimeout(function () {
                    alert.style.display = 'none';
                }, 150);
                alert.style.opacity = 0;
            }, 3000);
            return;
        }
        if (validate.length > 90) {
            console.log(validate.length);
            alert.style.display = 'block';
            alert.style.opacity = 1;
            alert.innerHTML = "C'est une ToDoList pas un roman ( 90 caracteres max)";
            setTimeout(function () {
                setTimeout(function () {
                    alert.style.display = 'none';
                }, 150);
                alert.style.opacity = 0;
            }, 3000);
        } else {
            this.add(validate);
        }

    },
    add: function (validate) {
        "use strict";
        var validateTask = {id_task: compteur, name: validate, status: false};
        compteur += 1;
        todos.push(validateTask);
        this.render();
        document.getElementById('task').value = "";
    },
    render: function () {
        "use strict";
        var in_progress = document.getElementById('in_progress');
        var done = document.getElementById('done');
        var i;
        done.innerHTML = "";
        in_progress.innerHTML = "";
        for (i = 0; i < todos.length; i += 1) {
            if (todos[i].status === true) {
                done.innerHTML += "<li class='list_task'><p><input type='checkbox' onclick='todo.done ( " + i + " )' id=' " + i + " ' checked /><label class ='my_label' for=' " + i + " '> " + todos[i].name + "</label><i class='small material-icons my_icon' onclick='todo.remove( " + i + " )' >clear</i></p></li>";
            } else {
                in_progress.innerHTML += "<li class='list_task'><p><input type='checkbox' onclick='todo.done( " + i + " )' id=' " + i + " ' /><label class ='my_label' for=' " + i + " '> " + todos[i].name + "</label><i class='small material-icons my_icon' onclick='todo.remove( " + i + " )' >clear</i></p></li>";
            }
        }
    },
    remove: function (i) {
        "use strict";
        todos.splice(i, 1);
        this.render();
    },
    done: function (i) {
        "use strict";
        todos[i].status = !todos[i].status;
        this.render();
    }
};
todo.render();