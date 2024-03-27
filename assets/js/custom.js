let mainSwitch = document.querySelector('#switch');
let headingColor = document.querySelectorAll('.heading-dark');
let paraColor = document.querySelectorAll('.para-dark');
let heading_border_after = document.querySelectorAll('.border-switch');
let homeBanner = document.querySelector('.home-banner');
let ourStoryBanner = document.querySelector('.ourStory-banner');
let ourValuesBanner = document.querySelector('.ourValues-banner');


mainSwitch.addEventListener('click', function (e) {
    if (mainSwitch.value === 'light') {
        mainSwitch.value = 'dark';
        /** Light Mode */

        for (let i = 0; i < headingColor.length; i++) {
            headingColor[i].setAttribute('data-txt-color', '#000');
        }
        for (let j = 0; j < paraColor.length; j++) {
            paraColor[j].setAttribute('data-txt-color', '#000');
        }
        //headingColor.setAttribute('data-txt-color','#000');
        //paraColor.setAttribute('data-txt-color','#000');
        homeBanner.style.backgroundImage = "url()";
        ourStoryBanner.style.backgroundImage = "url()";
        ourValuesBanner.style.backgroundImage = "url()";

        for (let k = 0; k < heading_border_after.length; k++) {
            if (heading_border_after[k].classList.contains("b-before-after")) {
                heading_border_after[k].classList.remove("b-before-after-dark");
                heading_border_after[k].classList.add("b-before-after-dark");
            }
        }


        //console.log('light');

    } else if (mainSwitch.value === 'dark') {
        mainSwitch.value = 'light';
        /** Dark Mode */
        for (let i = 0; i < headingColor.length; i++) {
            headingColor[i].setAttribute('data-txt-color', 'green');
        }
        for (let j = 0; j < paraColor.length; j++) {
            paraColor[j].setAttribute('data-txt-color', 'light');
        }

        homeBanner.style.backgroundImage = "url(assets/img/bg-1.jpg)";
        ourStoryBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";
        ourValuesBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";

        for (let k = 0; k < heading_border_after.length; k++) {
            if (heading_border_after[k].classList.contains("b-before-after-dark")) {
                heading_border_after[k].classList.remove("b-before-after-dark");
                heading_border_after[k].classList.add("b-before-after");
            }
        }

        //console.log('dark');
    }


});