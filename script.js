var menuItem = document.querySelectorAll('.menu-item');

for (let i = 0; i < menuItem.length; i++) {
  let item = menuItem[i];
  item.addEventListener('click', function (ev) {
    ev.preventDefault();
    const sections = document.querySelectorAll('.section');
    //console.log(this.dataset.menu);
    for (let j = 0; j < sections.length; j++) {
      const section = sections[j];
      section.style.display = 'none';
    };
    const currentSection = document.getElementById(this.dataset.menu + '-tab');
    currentSection.style.display = 'block';
  });
}

menuItem[0].addEventListener('click', function() {
  menuItem[1].style.borderBottom = 'none';
  menuItem[2].style.borderBottom = 'none';
})

menuItem[1].addEventListener('click', function(ev) {
  menuItem[2].style.borderBottom = 'none';
  ev.target.style.borderBottom = '0.15rem solid #000';
})

menuItem[2].addEventListener('click', function(ev) {
  menuItem[1].style.borderBottom = 'none';
  ev.target.style.borderBottom = '0.15rem solid #000';
})