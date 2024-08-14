var activeDropdown = {};

function get() {
    document.getElementById('mobileMenu').addEventListener('click', toggleMenu);
    document.getElementById('Sector').addEventListener('click', showDropdown);
     document.getElementById('Agency').addEventListener('click', showDropdown);
    document.getElementById('Location').addEventListener('click', showDropdown);
}
var openArray = [];
var open = [];

function subfilter(e) {
    var element = e.target.id;
    console.log(element);


    for (var j = 0; j < openArray.length; j++) {
        openArray[j].style.display = "none";
        console.log(openArray[j]);
        open.style.backgroundColor = "white";
        open.style.color = "#084d80";


    }
    openArray = [];
    var x = document.querySelectorAll('#' + element);
    var w = x[0];

    // if (!x.classList.contains('show')) {
    //   x.classList.add('show');
    // } else {
    //   x.classList.remove('show');
    // }


    for (var i = 1; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
            x[0].style.backgroundColor = "#084d80";
            x[0].style.color = "white";
            openArray.push(x[i]);
            open = x[0];
            // console.log(x[i]);
        } else {
            x[i].style.display = "none";
            x[0].style.backgroundColor = "white";
            x[0].style.color = "#084d80";

        }
    }
    // var name = e.target.parentNode.parentNode.parentNode.id + 'name';
    //    document.getElementById(name).innerHTML = element;
    // document.getElementById(name).style.backgroundColor = "#084d80";
    // document.getElementById(name).style.color = 'white';


    // document.getElementById(name).innerHTML = element;

    // var id1 = document.getElementById(name);
    console.log(id1);
    console.log(open);




}



function subfilteropen(e) {
    var element = e.target.id;
    console.log(element);


    for (var j = 0; j < openArray.length; j++) {
        openArray[j].style.display = "none";
        console.log(openArray[j]);
        open.style.backgroundColor = "white";
        open.style.color = "#084d80";


    }
    openArray = [];
    var x = document.querySelectorAll('#' + element);
    var w = x[0];

    // if (!x.classList.contains('show')) {
    //   x.classList.add('show');
    // } else {
    //   x.classList.remove('show');
    // }


    for (var i = 1; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
            x[0].style.backgroundColor = "#084d80";
            x[0].style.color = "white";
            openArray.push(x[i]);
            open = x[0];
            // console.log(x[i]);
        } else {
            x[i].style.display = "none";
            x[0].style.backgroundColor = "white";
            x[0].style.color = "#084d80";

        }
    }
    // var name = e.target.parentNode.parentNode.parentNode.id + 'name';

    // document.getElementById(name).innerHTML = element;
    // document.getElementById(name).style.backgroundColor = "#084d80";
    // document.getElementById(name).style.color = 'white';



    // var id1 = document.getElementById(name);
    console.log(openArray);
    console.log(open);
    console.log(activeDropdown)




}

const menu = document.querySelector('.menu');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
menuTrigger.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle('active');
}

function disFunction() {
    var element = document.getElementById("mobileMenu");
    element.classList.toggle("activeMenu");
}

function showDropdown(event) {
    if (activeDropdown.id && activeDropdown.id !== event.target.id) {
        activeDropdown.element.classList.remove('active');
    }
    //checking if a list element was clicked, changing the inner button value
    if (event.target.tagName === 'LI') {
        activeDropdown.button.innerHTML = event.target.innerHTML;
        for (var i = 0; i < event.target.parentNode.children.length; i++) {
            if (event.target.parentNode.children[i].classList.contains('check')) {
                event.target.parentNode.children[i].classList.remove('check');
            }
        }
        //timeout here so the check is only visible after opening the dropdown again
        window.setTimeout(function() {
            event.target.classList.add('check');
        }, 500)
    }
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].classList.contains('dropdown-selection')) {
            activeDropdown.id = this.id;
            activeDropdown.element = this.children[i];
            this.children[i].classList.add('active');
        }
        //adding the dropdown-button to our object
        else if (this.children[i].classList.contains('dropdown-button')) {
            activeDropdown.button = this.children[i];
        }
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('filter') && !event.target.classList.contains('multiple')) {
        activeDropdown.element.classList.remove('active');
    }
}