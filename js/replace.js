
var colorsTitle = document.getElementsByClassName('colors-title');
var choose_box = document.getElementsByClassName('choose-box');
var chooseCapacity = document.getElementsByClassName('choose-capacity');
var label = document.getElementsByClassName('phone-img');
var capacity_box = document.getElementsByClassName('capacity-box');
var submit_button_area = document.getElementsByClassName('submit-button-area');
for (var i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function () {
        var choose_box = document.getElementsByClassName('choose-box')
        choose_box[0].style.display = 'none';
        if(choose_box[0].style.display = 'none'){
            chooseCapacity[0].style.display = "block";
            colorsTitle[0].innerText = "Choose Capacity"
        }
    });
}
for (var i = 0; i < capacity_box.length; i++) {
    capacity_box[i].addEventListener("click", function () {
        chooseCapacity[0].style.display = 'none';
        if(chooseCapacity[0].style.display = 'none'){
            submit_button_area[0].style.display = "block";
    
            colorsTitle[0].innerText = "CONTACT INFO"
        }
    });
}

