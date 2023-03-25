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

const mediaQuery = window.matchMedia('(max-width: 538px)');
const mediaQueryTelegramm = window.matchMedia('(max-width: 768px)');

const projects = [
  {
    name: 'ToDoList_vite_materialUI',
    href: 'https://github.com/Sviatoslove/ToDoList_vite_materialUI.git',
    technologies: 'React.js',
  },
  {
    name: 'Novostnik',
    href: 'https://github.com/Sviatoslove/project_novostnik.git',
    technologies: 'React.js',
  },
  {
    name: 'Fast-Company',
    href: 'https://github.com/Sviatoslove/Fast-Company.git',
    technologies: 'React.js',
  },
  {
    name: 'ToDoList',
    href: 'https://github.com/Sviatoslove/toDoList_12.git',
    technologies: 'React.js',
  },
  {
    name: 'NewsBar',
    href: 'https://github.com/Sviatoslove/newsBar_11.git',
    technologies: 'React.js',
  },
  {
    name: 'Reports v3.0',
    href: 'https://sviatoslove.github.io/Reports-3_0/',
    technologies: 'JavaScript',
  },
  {
    name: 'ToDoList authorization',
    href: 'https://sviatoslove.github.io/To-Do_List_authorization/',
    technologies: 'JavaScript',
  },
  {
    name: 'Reports',
    href: 'https://sviatoslove.github.io/Reports/',
    technologies: 'JavaScript',
  },
  {
    name: 'Work to server',
    href: 'https://sviatoslove.github.io/Work_to_server_10/',
    technologies: 'JavaScript',
  },
  {
    name: 'Dictionary',
    href: 'https://sviatoslove.github.io/Dictionary_9/',
    technologies: 'JavaScript',
  },
  {
    name: 'AIM Game',
    href: 'https://sviatoslove.github.io/AIM_Game_8_4/',
    technologies: 'JavaScript',
  },
  {
    name: 'Desk party',
    href: 'https://sviatoslove.github.io/desk_party_8_3/',
    technologies: 'JavaScript',
  },
  {
    name: 'Slider',
    href: 'https://sviatoslove.github.io/slider_1_8_2/',
    technologies: 'JavaScript',
  },
  {
    name: 'Drag & drop',
    href: 'https://sviatoslove.github.io/Drag_drop_8_1/',
    technologies: 'JavaScript',
  },
  {
    name: 'Cards',
    href: 'https://sviatoslove.github.io/cards_8/',
    technologies: 'JavaScript',
  },
  {
    name: 'Maze',
    href: 'https://sviatoslove.github.io/maze_7_3/',
    technologies: 'JavaScript',
  },
  {
    name: 'Border-radius',
    href: 'https://sviatoslove.github.io/borderRadius_7_2/',
    technologies: 'JavaScript',
  },
  {
    name: 'Sliders',
    href: 'https://sviatoslove.github.io/sliders_7_1/',
    technologies: 'JavaScript',
  },
  {
    name: 'Tabs',
    href: 'https://sviatoslove.github.io/tabs_7/',
    technologies: 'JavaScript',
  },
  {
    name: 'Cool design',
    href: 'https://sviatoslove.github.io/Cool_design_6_1/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'Peter Nikson',
    href: 'https://sviatoslove.github.io/Peter_Nikson_6/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'Travel with team',
    href: 'https://sviatoslove.github.io/Travel_with_team_5_1/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'My portfolio',
    href: 'https://sviatoslove.github.io/My_portfolio_5/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'Wayup',
    href: 'https://sviatoslove.github.io/wayup_4_1/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'About me',
    href: 'https://sviatoslove.github.io/about_me_4/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'We now khow',
    href: 'https://sviatoslove.github.io/We_now_khow_3_1/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'MY LOGO',
    href: 'https://sviatoslove.github.io/MYLOGO_3/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'BENELLI',
    href: 'https://sviatoslove.github.io/BENELLI_2/',
    technologies: 'HTML5, CSS3',
  },
  {
    name: 'Design Corporation',
    href: 'https://sviatoslove.github.io/Design_Corporation_1/',
    technologies: 'HTML5, CSS3',
  },
];

const checkNone = () => {
  if (sideBarBurger.classList.contains('open_menu')) {
    mouseOverSidebar.classList.add('none');
  } else {
    mouseOverSidebar.classList.remove('none');
  }
};

const backlight = (elemMenu) => {
  let timeoutBacklight = (elem) => {
    setTimeout(() => {
      elem.classList.add('backlight');
    }, 1550);
    setTimeout(() => {
      elem.classList.remove('backlight');
    }, 1750);
  };
  const closeSideBurger = () => {
    if (sideBarBurger.classList.contains('open_menu')) {
      moveSideBarBurger();
    }
  };
  if (elemMenu === menuLink[0]) {
    closeSideBurger();
    timeoutBacklight(backlightItem[3]);
  } else if (elemMenu === menuLink[1]) {
    if (sideBarBurger.classList.contains('open_menu')) {
      timeoutBacklight(backlightItem[0]);
    } else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[0]);
    }
  } else if (elemMenu === menuLink[2]) {
    closeSideBurger();
    timeoutBacklight(backlightItem[2]);
  } else if (elemMenu === menuLink[3]) {
    closeSideBurger();
    timeoutBacklight(backlightItem[4]);
  } else if (elemMenu === menuLink[4]) {
    closeSideBurger();
    timeoutBacklight(backlightItem[5]);
  } else if (elemMenu === menuLink[5]) {
    if (sideBarBurger.classList.contains('open_menu')) {
      timeoutBacklight(backlightItem[1]);
    } else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[1]);
    }
  }
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -window.pageYOffset);
  }
};

const closeBurgerMenu = () => {
  menuBurger.classList.remove('open_menu');
  menuNav.classList.remove('open_menu');
  wrapperBurger.classList.remove('open_menu');
  mouseOver.classList.remove('none');
  sloganText.classList.remove('open__menu__slogan__text');
};

const closeBurgerSidebar = () => {
  sideBarBurger.classList.remove('open_menu');
  sideBar.classList.remove('open_menu');
  wrapperSidebarBurger.classList.remove('open_menu');
  checkNone();
};

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

document.addEventListener('scroll', function () {
  if (window.pageYOffset >= 50) {
    goTopBtn.classList.add('back_to_top-show');
    closeBurgerMenu();
  } else {
    goTopBtn.classList.remove('back_to_top-show');
  }
});

goTopBtn.addEventListener('click', () => {
  backToTop();
  closeBurgerSidebar();
});

const handleTabletChange = (event) => {
  document.addEventListener('click', (e) => {
    if (widthWind <= 768 && widthWind > 576) {
      if (e.target === sideBarBurger) {
        moveSideBarBurger();
      } else if (e.target === menuBurger) {
        moveMenuBurger();
      }
    } else if (widthWind <= 576) {
      if (event.matches) {
        if (e.target === menuBurger) {
          moveMenuBurger();
          sloganText.classList.toggle('open__menu__slogan__text');
        } else if (e.target === sideBarBurger) {
          moveSideBarBurger();
        }
      } else if (e.target === sideBarBurger) {
        moveSideBarBurger();
      } else if (e.target === menuBurger) {
        moveMenuBurger();
      }
    } else {
      moveMenuBurger();
    }
    backlight(e.target);
  });
};

mediaQuery.addListener(() => {
  if (mediaQuery) {
    closeBurgerMenu();
    closeBurgerSidebar();
    setDottedInProjects();
    checkNone();
    setTimeout(() => {
      setDottedInProjects();
    }, 20);
  } else {
    closeBurgerMenu();
    closeBurgerSidebar();
    setDottedInProjects();
    checkNone();
    setTimeout(() => {
      setDottedInProjects();
    }, 20);
  }
});

mediaQuery.addListener(handleTabletChange(mediaQuery));

mediaQuery.addListener(() => {
  if (mediaQueryTelegramm.matches) {
    document.querySelector('.icon').style.width = '15px';
    document.querySelector('.icon').style.height = '15px';
    setTimeout(() => {
      setDottedInProjects();
    }, 20);
  } else {
    document.querySelector('.icon').style.width = '30px';
    document.querySelector('.icon').style.height = '30px';
    setTimeout(() => {
      setDottedInProjects();
    }, 20);
  }
});

if (mediaQueryTelegramm.matches) {
  document.querySelector('.icon').style.width = '15px';
  document.querySelector('.icon').style.height = '15px';
} else {
  document.querySelector('.icon').style.width = '30px';
  document.querySelector('.icon').style.height = '30px';
}

function setDottedInProjects() {
  const itemsProjects = Array.from(
    document.querySelectorAll('.my__project__item')
  );
  const itemsProjectsLinkWrapper = Array.from(
    document.querySelectorAll('.my__project__link__wrapper')
  );
  const itemsProjectsInstr = Array.from(
    document.querySelectorAll('.my__project__instr')
  );
  const itemsProjectsAfter = Array.from(
    document.querySelectorAll('.my__project__after')
  );
  let widthItemsProjectsInstr = [];
  itemsProjects.forEach((itemPr, idxPr) => {
    itemsProjectsLinkWrapper.forEach((itemLink, idxLink) => {
      if (idxPr === idxLink) {
        widthItemsProjectsInstr.push(itemPr.clientWidth - itemLink.clientWidth);
      }
    });
  });
  let widthAfter = [];
  widthItemsProjectsInstr.forEach((itemWidthInstr, idxWidthInstr) => {
    itemsProjectsInstr.forEach((itemInstr, idxInstr) => {
      if (idxWidthInstr === idxInstr) {
        widthAfter.push(itemWidthInstr - itemInstr.clientWidth);
      }
    });
  });
  itemsProjectsAfter.forEach((itemAfter, idxAfter) => {
    widthAfter.forEach((itemWidthAfter, idxWidthAfter) => {
      if (idxAfter === idxWidthAfter) {
        itemAfter.style.width = `${itemWidthAfter - 2}px`;
      }
    });
  });
}

function drawingProjects() {
  const myProjectList = document.querySelector('.my__project__list');
  myProjectList.innerHTML = `${projects
    .map(
      (project) => `
    <li class="my__project__item">
    <div class="my__project__link__wrapper">
        <a class="my__project__link" href=${project.href}>${project.name}</a>
    </div>
    <div class="my__project__after"></div>
    <div class="my__project__instr">
        <span class="my__project__bracket">
            [
        </span>
        ${project.technologies}
        <span class="my__project__bracket">
            ]
        </span>
    </div>
    </li>
  `
    )
    .join('')}`;
}

drawingProjects();

setTimeout(() => {
  setDottedInProjects();
}, 200);
