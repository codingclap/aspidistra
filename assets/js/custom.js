let mainSwitch = document.querySelector('#switch');
let headingColor = document.querySelectorAll('.heading-dark');
let paraColor = document.querySelectorAll('.para-dark');
let homeBanner = document.querySelector('.home-banner');
let ourStoryBanner = document.querySelector('.ourStory-banner');

mainSwitch.addEventListener('click', function (e) {
    if (mainSwitch.value === 'light') {
        mainSwitch.value = 'dark';
        /** Light Mode */
        
 
        headingColor.setAttribute('data-txt-color','#000')
        paraColor.setAttribute('data-txt-color','#000')
        homeBanner.style.backgroundImage="url()";
        ourStoryBanner.style.backgroundImage="url()";
        
        console.log('light');

    } else if (mainSwitch.value === 'dark') {
        mainSwitch.value = 'light';
        /** Dark Mode */
        headingColor.setAttribute('data-txt-color','green')
        paraColor.setAttribute('data-txt-color','light')
        homeBanner.style.backgroundImage="url(assets/img/bg-1.jpg)";
        ourStoryBanner.style.backgroundImage="url(assets/img/our-story-bg.png)";


        console.log('dark');
    }
});