"use strict"


$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        waitForAnimate:false,
    });
    $('.slider1').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        waitForAnimate:false,
    });
});


/*const itemsMenu = document.querySelectorAll('.menu__item');
if (itemsMenu.length > 0) {
    itemsMenu.forEach (itemMenu => {
        itemMenu.addEventListener("click", function (e) {
            itemMenu.getBoundingClientRect().width
        });
    });
}*/

/* -----------------Стилізація елементів при загрузці сторінки---------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const tabCheckBox = this.querySelectorAll('.tabs__checkbox');
    tabCheckBox.forEach(checkBox => {
        const checkBoxInput = checkBox.querySelector('input');
        if (checkBoxInput && checkBoxInput.checked) {
            checkBox.classList.add('_active');
        }
    });
});


const tabCheckBox = document.querySelectorAll('.tabs__checkbox');
tabCheckBox.forEach(checkBox => {
    checkBox.addEventListener('click', function (e) { 
        console.log('click');
        const checkBoxInput = checkBox.querySelector('input');     
        if(checkBox.classList.contains('_active')){
            checkBoxInput.checked = false;
        } else {
            checkBoxInput.checked = true;
        }
        checkBox.classList.toggle('_active');
        return(false);
    });
});

const tabItem = document.querySelectorAll('.tabs__item');
const tabContent = document.querySelectorAll('.tabs__block');
tabItem.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabItem.forEach(tab => {
            tab.classList.remove('_active');
        });
        tab.classList.add('_active');
        tabContent.forEach(content => {
            content.classList.remove('_active');
        });
        tabContent[index].classList.add('_active');
    });
});

/* -----------------Меню Бургер---------------------- */

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__wrapper');
    iconMenu.addEventListener('click', function(event) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};