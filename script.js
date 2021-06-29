NavBtn = document.getElementsByClassName('nav-btn')[0];
mainContent = document.getElementsByClassName('main-content')[0];
navItem = document.getElementsByClassName('nav-items')[0];

let navClick = false;

NavBtn.addEventListener('click',() =>{
  if (navClick == false) {
    mainContent.style.transform = 'rotate(-25deg)';
    console.log("rotate 30");
    navItem.style.left = '33px';
    NavBtn.style.transform = 'rotate(120deg)';
    navClick = true;
  }else{
    console.log("rotate 0");

    mainContent.style.transform = 'rotate(0)';
    navItem.style.left = '-130px';
    NavBtn.style.transform = 'rotate(0deg)';

    navClick = false;
  }

})
