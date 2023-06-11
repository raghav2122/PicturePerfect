// menubar
let menu_open = 0;
const menu = () => { 
    if(menu_open === 0) {
        document.querySelectorAll('.menu-bar').forEach(element => element.classList.add('open-menu'))
        document.querySelectorAll('#line-1').forEach(element => {
            element.style.transform = 'rotate(45deg)';
            element.style.backgroundColor = 'black';
        });
        document.querySelectorAll('#line-2').forEach(element => {
            element.style.transform = 'rotate(-45deg)';
            element.style.backgroundColor = 'black';
        });
        document.querySelectorAll('.navbar-left').forEach(element => element.style.color = 'black')
        setTimeout(() => {
            document.querySelectorAll('.navb-a').forEach(element => {
              element.style.opacity = '0';
              element.style.animation = 'fadeIn 1s forwards';
              element.style.color = 'black'; // Set the desired color
            });
          }, 1000); // Delay of 1000 milliseconds (1 second)
          
          
        document.querySelector('.disc2').style.backgroundColor = 'black';
        document.querySelector('.fix-nav').style.backgroundColor = 'white';
        document.querySelector('.mode-disc').style.backgroundColor = 'black';

        document.querySelector('.mode').style.color = 'black';
        document.querySelectorAll('.disp').forEach(element => element.classList.add('disp-none'))
        document.querySelector('.drop-down-box-1').style.transform = 'translateY(0)';
        document.querySelector('.drop-down-box-2').style.transform = 'translateY(0)';
        document.querySelector('.drop-down-box-2').style.transition = 'transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)';
        document.querySelector('.drop-down-box-1').style.transition = 'transform 1s ease-in-out';
        menu_open = 1;
    }

    else {
        document.querySelectorAll('.menu-bar').forEach(element => element.classList.remove('open-menu'))
        document.querySelectorAll('#line-1').forEach(element => {
            element.style.transform = 'rotate(0)';
            element.style.backgroundColor = 'white';
        });
        document.querySelectorAll('#line-2').forEach(element => {
            element.style.transform = 'rotate(0)';
            element.style.backgroundColor = 'white';
        });
        document.querySelectorAll('.navbar-left').forEach(element => element.style.color = 'white')
        document.querySelectorAll('.navb-a').forEach(element => element.style.color = 'white')
        document.querySelector('.disc').style.backgroundColor = 'white';
        document.querySelector('.disc2').style.backgroundColor = 'white';
        document.querySelector('.fix-nav').style.backgroundColor = 'black';
        document.querySelector('.mode-disc').style.backgroundColor = 'white';
        document.querySelector('.mode').style.color = 'white';
        document.querySelectorAll('.disp').forEach(element => element.classList.remove('disp-none'))
        document.querySelector('.drop-down-box-1').style.transform = 'translateY(-100%)';
        document.querySelector('.drop-down-box-2').style.transform = 'translateY(-100%)';
        document.querySelector('.drop-down-box-1').style.transition = 'transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)';
        document.querySelector('.drop-down-box-2').style.transition = 'transform 1s ease-in-out';
        menu_open = 0;
    }
}

document.querySelector('.menu-bar').addEventListener('click', () => menu());
document.querySelector('.fix-nav-menu-bar').addEventListener('click', () => menu());
document.querySelector('.close').addEventListener('click', () => menu());
// Opens the carousel box when active-tab is clicked

// document.querySelector('.carousel-item').addEventListener('click', () => menu());

/**************************************************************************************/

// carousel functioning
const carousel = (id) => {
    document.querySelectorAll('.carousel-item').forEach(element => {element.style.transform = `translateX(${(1-id)*100}%)`;})
    document.querySelectorAll('.bg-img').forEach(element => {element.style.transform = `translateX(${(1-id)*100}%)`;})
    document.querySelectorAll('.carousel-btn').forEach(element => element.classList.remove('carousel-btn-active'));
    document.querySelector(`#carousel-btn${id}`).classList.add('carousel-btn-active')
    let i=1
    document.querySelectorAll('.carousel-item').forEach((element, i) => {
        document.querySelectorAll(`.c-${i}`).forEach(ele => {
            if(i !==id){
                ele.style.animation = 'downward 2s cubic-bezier(0, 0.52, 0.68, 1.42)';
            }
            else{
                ele.style.animation = 'upward 2s cubic-bezier(0, 0.52, 0.68, 1.42)';
            }
        });
        i++;
    })
}

document.querySelector('#carousel-btn1').addEventListener('click', () => carousel(1))
document.querySelector('#carousel-btn2').addEventListener('click', () => carousel(2))
document.querySelector('#carousel-btn3').addEventListener('click', () => carousel(3))
document.querySelector('#carousel-btn4').addEventListener('click', () => carousel(4))
document.querySelector('#carousel-btn5').addEventListener('click', () => carousel(5))

let box = document.querySelectorAll('.carousel-item-box');

const carousel_box = (inside) => { 

    if(inside === 0) {
        box.forEach(element => {
            element.style.borderColor = 'white';
            element.style.opacity = '0.7';
            document.querySelector('.carousel-item-box-body-span').style.transform = 'translateX(4px)';
        })
    }

    else {
        box.forEach(element => {
            element.style.borderColor = '#636363';
            element.style.opacity = '1';
            document.querySelector('.carousel-item-box-body-span').style.transform = 'translateX(0)';
        })
    }
}
function autoClickButtons() {
    const buttonIds = ['#carousel-btn1', '#carousel-btn2', '#carousel-btn3', '#carousel-btn4', '#carousel-btn5'];
    let index = 0;
  
    const intervalId = setInterval(() => {
      const button = document.querySelector(buttonIds[index]);
      button.click(); // Simulate button click
      setTimeout(() => {
        button.classList.remove('clicked'); // Return button to its initial state
      }, 1000); // Delay of 1 second for returning the button
  
      index = (index + 1) % buttonIds.length; // Update the index and loop back to 0 if it exceeds the array length
    }, 4500); // Delay of 2 seconds for each button
  
  }
  
  // Call the function
  autoClickButtons();
  
  

/**************************************************************************************/

// theme
let mode = 1
let root = document.querySelector(':root');
let light = document.querySelector('.light')

const change_mode = () => {
    if(mode === 1) {
        light.innerHTML = 'Dark Mode'
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        mode = 0;
    }

    else{
        light.innerHTML = 'Light Mode'
        root.style.setProperty('--white', 'white')
        root.style.setProperty('--black', 'black')
        mode = 1;
    }
}

document.querySelector('.mode').addEventListener('click', () => change_mode())

/**************************************************************************************/


let fix_nav = document.querySelector('.fix-nav');

let bg_img = document.querySelectorAll('.bg-img');

// parallax
let scrolltop = window.pageYOffset;

const parallax = (scrolltop) => {
  scrolltop = window.pageYOffset;

  if (scrolltop < 700 || scrolltop > 5550) {
    fix_nav.style.transform = `translateY(-100%)`;
  } else {
    fix_nav.style.transform = `translateY(0)`;
  }

  document.querySelector('.navigate-carousel').style.transform = `translateY(calc(${(-scrolltop * 0.15)}px))`;
  document.querySelector('.scroll').style.transform = `translateY(calc(${(-scrolltop * 0.15)}px))`;

  bg_img.forEach(element => {
    element.style.opacity = `${1 - scrolltop * 0.0012}`;
  });

  document.querySelectorAll('.fam-card-col-2').forEach(element => {
    element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.35}px + 30%))`;
  });

  document.querySelectorAll('.fam-card-col-3').forEach(element => {
    element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.2}px + 15%))`;
  });

  document.querySelectorAll('.fam-card-col-4').forEach(element => {
    element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.3}px + 22%))`;
  });

  if (scrolltop % 100 < 50) {
    document.querySelector('.circle-rotate').style.transform = `rotate(10deg)`;
  } else {
    document.querySelector('.circle-rotate').style.transform = `rotate(0deg)`;
  }

  document.querySelector('.pizza-translate-div').style.transform = `translateY(calc(${(-5070 + scrolltop) * 0.07}px - 10%)`;
  document.querySelector('.festival-translate-div').style.transform = `translateY(calc(${(-3425 + scrolltop) * 0.07}px - 10%)`;
  document.querySelector('.arc-translate-div').style.transform = `translateY(calc(${(-3500 + scrolltop) * 0.07}px - 10%)`;
  document.querySelector('.huspy-translate-div').style.transform = `translateY(calc(${(-3800 + scrolltop) * 0.07}px - 10%)`;
  document.querySelector('.room-translate-div').style.transform = `translateY(calc(${(-3800 + scrolltop) * 0.07}px - 10%)`;

  document.querySelectorAll('.pang-translate-div').forEach(element => {
    element.style.transform = `translateY(calc(${(-4440 + scrolltop) * 0.05}px - 10%)`;
  });

  document.querySelector('.footer-translate').style.transform = `translateY(calc(${(-5510 + scrolltop) * 0.1}px)`;
};

window.addEventListener("scroll", () => {
  if (window.innerWidth > 760) {
    parallax();
  }
});


/**************************************************************************************/

// underline function
const underline_out = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_out'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_in');
}

const underline_in = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_in'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_out');
}

document.querySelector('.about-div-2-link').addEventListener('mouseover', () => underline_in(1))
document.querySelector('.about-div-2-link').addEventListener('mouseout', () => underline_out(1))

document.querySelector('.about-div-3-link').addEventListener('mouseover', () => underline_in(2))
document.querySelector('.about-div-3-link').addEventListener('mouseout', () => underline_out(2))

document.querySelector('.und_3').addEventListener('mouseover', () => underline_in(3))
document.querySelector('.und_3').addEventListener('mouseout', () => underline_out(3))

document.querySelector('.und_4').addEventListener('mouseover', () => underline_in(4))
document.querySelector('.und_4').addEventListener('mouseout', () => underline_out(4))

document.querySelector('.und_5').addEventListener('mouseover', () => underline_in(5))
document.querySelector('.und_5').addEventListener('mouseout', () => underline_out(5))

/**************************************************************************************/
