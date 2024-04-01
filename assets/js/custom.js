'use strict'

let mainSwitch = document.querySelector('#switch');
let headingColor = document.querySelectorAll('.heading-dark');
let paraColor = document.querySelectorAll('.para-dark');
let paraOneColor = document.querySelectorAll('.para1-dark');
let heading_border_after = document.querySelectorAll('.border-switch');
let homeBanner = document.querySelector('.home-banner');
let navbarPanel = document.querySelector('.navbar');
let ourStory = document.querySelector('.ourStory');
let footerImg = document.querySelector('.footer-img');
let tabsLink = document.querySelectorAll('button.nav-link');

let finalTabs = [];
for (let ss = 0; ss < tabsLink.length; ss++) {

  tabsLink[ss].addEventListener('click', function (e) {
    darkMode();
     
  });

}

function darkMode() {
  for (let pop = 0; pop < tabsLink.length; pop++) {
    if (tabsLink[pop].attributes['aria-selected'].nodeValue === "false" && tabsLink[pop].classList.contains('light-mode')) {
      tabsLink[pop].classList.add("unselected");
    }else{
      tabsLink[pop].classList.remove("unselected");
    }
     
  }
}

mainSwitch.addEventListener('click', function (e) {
  if (mainSwitch.value === 'light') {
    mainSwitch.value = 'dark';
    /** Light Mode */

    for (let i = 0; i < headingColor.length; i++) {
      headingColor[i].setAttribute('data-txt-color', 'dark');
    }
    for (let j = 0; j < paraColor.length; j++) {
      paraColor[j].setAttribute('data-txt-color', 'dark');
    }
    for (let k = 0; k < paraOneColor.length; k++) {
      paraOneColor[k].setAttribute('data-txt-color', 'dark');
    }
    ourStory.setAttribute('data-bg-color', 'gray-light');
    homeBanner.style.backgroundImage = "url()";
    navbarPanel.setAttribute('data-bg-color', 'black');
    footerImg.src = "assets/img/aspidistra-big-dark.png";
    document.getElementById('nav-tabContent').style.border = "2px solid #545454";
    //ourStoryBanner.style.backgroundImage = "url()";
    //ourValuesBanner.style.backgroundImage = "url()";

    for (let l = 0; l < heading_border_after.length; l++) {
      if (heading_border_after[l].classList.contains("b-before-after")) {
        heading_border_after[l].classList.remove("b-before-after-dark");
        heading_border_after[l].classList.add("b-before-after-dark");
      }
    }

    for (let m = 0; m < tabsLink.length; m++) {
      if (tabsLink[m].attributes['aria-selected'].nodeValue == "true") {
        tabsLink[m].classList.add("light-mode");
        tabsLink[m].classList.remove("dark-mode");
        tabsLink[m].classList.add("light-mode");
        tabsLink[m].classList.remove("dark-mode");

      } else {
        tabsLink[m].style.backgroundColor = "unset";
        tabsLink[m].style.color = "unset";
        tabsLink[m].classList.add("light-mode");
        tabsLink[m].classList.remove("dark-mode");
      }
      // console.log(tabsLink[m].attributes['aria-selected'].nodeValue);
    }


    // console.log(customBorder);

  } else if (mainSwitch.value === 'dark') {
    mainSwitch.value = 'light';
    /** Dark Mode */
    for (let i = 0; i < headingColor.length; i++) {
      headingColor[i].setAttribute('data-txt-color', 'green');
    }
    for (let j = 0; j < paraColor.length; j++) {
      paraColor[j].setAttribute('data-txt-color', 'light');
    }
    for (let k = 0; k < paraOneColor.length; k++) {
      paraOneColor[k].setAttribute('data-txt-color', 'gray');
    }

    ourStory.setAttribute('data-bg-color', 'none');
    navbarPanel.setAttribute('data-bg-color', 'black-opacity');
    homeBanner.style.backgroundImage = "url(assets/img/bg-1.jpg)";
    footerImg.src = "assets/img/aspidistra-big.png";
    document.getElementById('nav-tabContent').style.border = "2px solid #fff";
    // ourStoryBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";
    // ourValuesBanner.style.backgroundImage = "url(assets/img/our-story-bg.png)";

    for (let l = 0; l < heading_border_after.length; l++) {
      if (heading_border_after[l].classList.contains("b-before-after-dark")) {
        heading_border_after[l].classList.remove("b-before-after-dark");
        heading_border_after[l].classList.add("b-before-after");
      }
    }

    for (let m = 0; m < tabsLink.length; m++) {
      if (tabsLink[m].attributes['aria-selected'].nodeValue == "true") {
        if (tabsLink[m].classList.contains('light-mode')) {
          tabsLink[m].classList.add("dark-mode");
          tabsLink[m].classList.remove("light-mode");
          tabsLink[m].style.backgroundColor = "";
          tabsLink[m].style.color = "";
        } else {
          tabsLink[m].classList.add("dark-mode"); 
          tabsLink[m].classList.remove("light-mode");
          tabsLink[m].style.backgroundColor = "";
          tabsLink[m].style.color = "";
        }
      } else {
        tabsLink[m].style.backgroundColor = "";
        tabsLink[m].style.color = "";
        tabsLink[m].classList.add("dark-mode");
        tabsLink[m].classList.remove("light-mode");
        tabsLink[m].classList.remove("unselected");
      }
      // console.log(tabsLink[m].attributes['aria-selected'].nodeValue);
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

// let serviceReadBtn = document.querySelectorAll('a.read-more');
// let items_id = [];
// for (let i = 0; i < serviceReadBtn.length; i++) {

//   let box_className = serviceReadBtn[i].classList[2];
//   items_id.push(box_className);                                            // Push all the elements to the array

//   serviceReadBtn[i].addEventListener('click', () => {
//     let details_page;

//     if (serviceReadBtn[i].classList.contains(box_className)) {

//       document.querySelector('.details-' + box_className).classList.remove('d-none');     // Removed unused Section

//       const filteredNames = items_id.filter((items_ids) => items_ids !== box_className);   // Matched the Selected Content box class name from the Array

//       for (let j = 0; j < filteredNames.length; j++) {
//         console.log(filteredNames[j]);
//         document.querySelector('.details-' + filteredNames[j]).classList.add('d-none');        // Add class on those Content box are unused
//       }

//     }
//   })

// }
//console.log(items_id);         // Display All Content Boxs Class Name


/**************** Services Hide and Show **************/