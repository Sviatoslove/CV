let icon = document.querySelector('.icon');
let menuBurger = document.querySelector('.menu__burger__header');
let menuNav = document.querySelector('.nav');
let sideBarBurger = document.querySelector('.burger__sidebar');
let sideBar = document.querySelector('.sidebar');
let wrapperBurger = document.querySelector('.wrapper__burger');
let mouseOver = document.querySelector('.mouse__over');
let mouseOverSidebar = document.querySelector('.mouse__over__sidebar');
let capabilitiesItemLink = document.querySelector('.capabilities');
let goTopBtn = document.querySelector('.back_to_top');
let sloganText = document.querySelector('.slogan__text');
let wrapperSidebarBurger = document.querySelector('.wrapper__sidebar__burger');
let tel = document.querySelector('.tel');
let menuLink = document.querySelectorAll('.menu__link');
let backlightItem = Array.from(document.querySelectorAll('.backlight_item'));
let widthWind = document.querySelector('body').offsetWidth;

const mediaQuery = window.matchMedia('(max-width: 538px)')
const mediaQueryTelegramm = window.matchMedia('(max-width: 768px)')

const checkNone = () => {
  if(sideBarBurger.classList.contains('open_menu')) {
    mouseOverSidebar.classList.add('none');
  }else {
    mouseOverSidebar.classList.remove('none');
  };
};

const backlight = (elemMenu) => {
  let timeoutBacklight = elem => {
    setTimeout(() => {
      elem.classList.add('backlight')
    }, 1550);
    setTimeout(() => {
      elem.classList.remove('backlight')
    }, 1750);
  };
  const closeSideBurger = () => {
    if(sideBarBurger.classList.contains('open_menu')) {
      moveSideBarBurger();
    }
  }
  if(elemMenu === menuLink[0]) {
    closeSideBurger()
    timeoutBacklight(backlightItem[3]);
  }else if(elemMenu === menuLink[1]) {
    if(sideBarBurger.classList.contains('open_menu')) {
    timeoutBacklight(backlightItem[0]);
    }else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[0]);
    };
  }else if(elemMenu === menuLink[2]) {
    closeSideBurger()
    timeoutBacklight(backlightItem[2]);
  }else if(elemMenu === menuLink[3]) {
    closeSideBurger()
    timeoutBacklight(backlightItem[4]);
  }else if(elemMenu === menuLink[4]) {
    closeSideBurger()
    timeoutBacklight(backlightItem[5]);
  }else if(elemMenu === menuLink[5]) {
    if(sideBarBurger.classList.contains('open_menu')) {
    timeoutBacklight(backlightItem[1]);
    }else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[1]);
    };
  }
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, (-window.pageYOffset));
  };
};

const closeBurgerMenu = () => {
  menuBurger.classList.remove('open_menu');
  menuNav.classList.remove('open_menu');
  wrapperBurger.classList.remove('open_menu');
  mouseOver.classList.remove('none');
  sloganText.classList.remove('open__menu__slogan__text');
}

const closeBurgerSidebar = () => {
  sideBarBurger.classList.remove('open_menu');
  sideBar.classList.remove('open_menu');
  wrapperSidebarBurger.classList.remove('open_menu');
  checkNone();
}

const moveSideBarBurger = () => {
  sideBarBurger.classList.toggle('open_menu');
  sideBar.classList.toggle('open_menu');
  wrapperSidebarBurger.classList.toggle('open_menu');
  mouseOverSidebar.classList.toggle('none');
 checkNone();
};

const moveMenuBurger = () => {
  menuBurger.classList.toggle('open_menu');
  menuNav.classList.toggle('open_menu');
  wrapperBurger.classList.toggle('open_menu');
  mouseOver.classList.toggle('none');
  checkNone();
};

document.addEventListener("scroll", function() {
  if(window.pageYOffset >= 50) {
    goTopBtn.classList.add('back_to_top-show');
    closeBurgerMenu();
  }else {
    goTopBtn.classList.remove('back_to_top-show');
  }
});

goTopBtn.addEventListener('click', () => {
  backToTop();
  closeBurgerSidebar();
});

const handleTabletChange = event => {
  document.addEventListener('click', e => {
    if(widthWind <= 768 && widthWind > 576) {
      if(e.target === sideBarBurger) {
        moveSideBarBurger();
      }else if(e.target === menuBurger) {
        moveMenuBurger();
      };
    } else if(widthWind <= 576) {
      if(event.matches) {
        if(e.target === menuBurger) {
          moveMenuBurger();
          sloganText.classList.toggle('open__menu__slogan__text');
        }else if (e.target === sideBarBurger) {
          moveSideBarBurger();
        }
      }else if (e.target === sideBarBurger) {
        moveSideBarBurger();
      }else if (e.target === menuBurger) {
        moveMenuBurger();
      };
    }else {
      moveMenuBurger();
    };
    backlight(e.target);
  });
};

mediaQuery.addListener(() => {
  if(mediaQuery) {
    closeBurgerMenu();
    closeBurgerSidebar();
    setDottedInProjects()
    checkNone();
    setTimeout(() => {setDottedInProjects()}, 20)
  }else {
    closeBurgerMenu();
    closeBurgerSidebar();
    setDottedInProjects()
    checkNone();
    setTimeout(() => {setDottedInProjects()}, 20)
  };
});

mediaQuery.addListener(handleTabletChange(mediaQuery))

mediaQuery.addListener(() => {
  if(mediaQueryTelegramm.matches) {
    document.querySelector('.icon').style.width = '15px'
    document.querySelector('.icon').style.height = '15px'
    setTimeout(() => {setDottedInProjects()}, 20)
  }else {
    document.querySelector('.icon').style.width = '30px'
    document.querySelector('.icon').style.height = '30px'
    setTimeout(() => {setDottedInProjects()}, 20)
  };
});

if(mediaQueryTelegramm.matches) {
  document.querySelector('.icon').style.width = '15px'
  document.querySelector('.icon').style.height = '15px'
}else {
  document.querySelector('.icon').style.width = '30px'
  document.querySelector('.icon').style.height = '30px'
};

function setDottedInProjects() {
  const itemsProjects = Array.from(document.querySelectorAll('.my__project__item'));
  const itemsProjectsLinkWrapper = Array.from(document.querySelectorAll('.my__project__link__wrapper'));
  const itemsProjectsInstr = Array.from(document.querySelectorAll('.my__project__instr'));
  const itemsProjectsAfter = Array.from(document.querySelectorAll('.my__project__after'));
  let widthItemsProjectsInstr = [];
  itemsProjects.forEach((itemPr, idxPr) => {
    itemsProjectsLinkWrapper.forEach((itemLink, idxLink) => {
      if(idxPr === idxLink) {
        widthItemsProjectsInstr.push(itemPr.clientWidth - itemLink.clientWidth)
      }
    })
  })
  let widthAfter = [];
  widthItemsProjectsInstr.forEach((itemWidthInstr, idxWidthInstr) => {
    itemsProjectsInstr.forEach((itemInstr, idxInstr) => {
      if(idxWidthInstr === idxInstr) {
        widthAfter.push(itemWidthInstr - itemInstr.clientWidth)
      }
    })
  })
  itemsProjectsAfter.forEach((itemAfter, idxAfter) => {
    widthAfter.forEach((itemWidthAfter, idxWidthAfter) => {
      if(idxAfter === idxWidthAfter) {
        itemAfter.style.width = `${itemWidthAfter - 2}px`
      }
    })
  })
}
setTimeout(() => {setDottedInProjects()}, 200)