let styleProject = document.getElementById('webstyle');
let excursionProject = document.getElementById('excursion');
let teaProject = document.getElementById('tea');

function zoom(event) {
  event.target.style.transform = 'scale(2)';
}

styleProject.addEventListener('mouseover', zoom);
excursionProject.addEventListener('mouseover', zoom);
teaProject.addEventListener('mouseover', zoom);