let mainSwitch = document.querySelector('#switch');
let headingColor = document.querySelectorAll('.heading-dark');
let paraColor = document.querySelectorAll('.para-dark');
let heading_border_after = document.querySelectorAll('.border-switch');
let homeBanner = document.querySelector('.home-banner');
let ourStoryBanner = document.querySelector('.ourStory-banner');
let ourValuesBanner = document.querySelector('.ourValues-banner');
let navbarPanel = document.querySelector('.navbar');

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
        navbarPanel.setAttribute('data-txt-color','black');
        //ourStoryBanner.style.backgroundImage = "url()";
        //ourValuesBanner.style.backgroundImage = "url()";

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

        navbarPanel.setAttribute('data-txt-color','black-opacity');
        homeBanner.style.backgroundImage = "url(assets/img/bg-1.jpg)";
       // ourStoryBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";
       // ourValuesBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";

        for (let k = 0; k < heading_border_after.length; k++) {
            if (heading_border_after[k].classList.contains("b-before-after-dark")) {
                heading_border_after[k].classList.remove("b-before-after-dark");
                heading_border_after[k].classList.add("b-before-after");
            }
        }

        //console.log('dark');
    }


});
/********** Dark and Light - Setup  ********/





/********** Mobile Navbars  ********/

let navButton = document.querySelector('.dropdown-navbar');
    let firstBar = document.querySelector('.navbar-toggler-icon-1:nth-of-type(1)');
    let middleBar = document.querySelector('.navbar-toggler-icon-1:nth-of-type(2)');
    let lastBar = document.querySelector('.navbar-toggler-icon-1:nth-of-type(3)');
    navButton.addEventListener('click', () => {
      if (navButton.classList.contains('inactive')) {
        firstBar.style = "transform:rotate(145deg)";
        middleBar.style = "display:none;";
        lastBar.style = "transform:rotate(220deg);margin-top:-2px";

        navButton.classList.remove('inactive');
      } else {
        navButton.classList.add('inactive');
        firstBar.style = "transform:rotate(0deg)";
        middleBar.style = "display:block;";
        lastBar.style = "transform:rotate(0deg);margin-top:6px";
      }


      //console.log(middleBar);

    })

/********** Mobile Navbars  ********/





/**************** Services Hide and Show **************/

let serviceReadBtn = document.querySelectorAll('a.read-more');
let items_id = [];                                                                      
for (let i = 0; i < serviceReadBtn.length; i++) {

  let box_className = serviceReadBtn[i].classList[2];
  items_id.push(box_className);                                            // Push all the elements to the array

  serviceReadBtn[i].addEventListener('click', () => {
    let details_page;

    if (serviceReadBtn[i].classList.contains(box_className)) {

      document.querySelector('.details-' + box_className).classList.remove('d-none');     // Removed unused Section

      const filteredNames = items_id.filter((items_ids) => items_ids !== box_className);   // Matched the Selected Content box class name from the Array

      for (let j = 0; j < filteredNames.length; j++) {
        console.log(filteredNames[j]);
        document.querySelector('.details-' + filteredNames[j]).classList.add('d-none');        // Add class on those Content box are unused
      }

    }
  })

}
console.log(items_id);         // Display All Content Boxs Class Name


/**************** Services Hide and Show **************/