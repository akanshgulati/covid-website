require('./page.css')
require('./small-page.css')
window.chromeOpen = () => {
  window.location.href = 'https://chrome.google.com/webstore/detail/covid-19-tracker/ehpkefnpbbmohfkanokkjklihkjbamjm'
}
window.firefoxOpen = () => {
  window.location.href = 'https://addons.mozilla.org/en-US/firefox/addon/covid-19-tracker'
}
let isFixed = false
window.addEventListener('scroll', () => {
  if (!isFixed && document.documentElement.scrollTop > document.documentElement.clientHeight/2) {
    isFixed = true;
    document.querySelector('.header').classList.add('small')
    document.querySelector('#download-footer').classList.add('show-xs')
    document.querySelector('#download-footer').classList.remove('hide-xs')
  } else if (isFixed && document.documentElement.scrollTop <= document.documentElement.clientHeight/2) {
    isFixed = false;
    document.querySelector('.header').classList.remove('small')
    document.querySelector('#download-footer').classList.remove('show-xs')
    document.querySelector('#download-footer').classList.add('hide-xs')
  }
})
