// PSEUDOCODE

// Hamburger Menu
// when click on hamburger icon
// populate a <ul> with the <a>'s in it
// 


const slideOutMenu = document.querySelector(".hidden");
// const showMenuItems = function(){};

const ulElement = document.querySelector(".hiddenMenu");



slideOutMenu.addEventListener("click", function (e) {
    const clickedHamburger = document.querySelector("#hamburger");

    ulElement.classList.toggle("active");
    // ulElement.classList.toggle();

    // if (clickedHamburger.checked === true) {

        
    //     // const listElement = document.querySelector(".menuItem");

    //     // console.log(e)

    //     ulElement.classList.toggle(".hiddenMenu")

    //     // ulElement.createElement(listElement);


    //     updateSlideOutMenu();
    // }
});



function updateSlideOutMenu() {
    slideOutMenu.toggle(ulElement);
    slideOutMenu.toggle(slideOutMenu);
};
