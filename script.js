// PSEUDOCODE

// Hamburger Menu
// when click on hamburger icon
// populate a <ul> with the <a>'s in it
// 


const slideOutMenu = document.querySelector(".hidden");
// const showMenuItems = function(){};





slideOutMenu.addEventListener("click", function (e) {
    const clickedHamburger = document.querySelector("#hamburger");

    if (clickedHamburger.checked === true) {

        const ulElement = document.querySelector(".hiddenMenu");
        // const listElement = document.querySelector(".menuItem");


        // ulElement.display = "block";

        // ulElement.createElement(listElement);

        // console.log(ulElement);

        updateSlideOutMenu();
    }
});



function updateSlideOutMenu() {
    slideOutMenu.toggle(ulElement);
    slideOutMenu.toggle(slideOutMenu);
};
