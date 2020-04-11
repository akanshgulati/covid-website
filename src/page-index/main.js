require('./page.css')
require('./small-page.css')
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})
window.chromeOpen = () => {
  window.location.href = 'https://chrome.google.com/webstore/detail/covid-19-tracker/ehpkefnpbbmohfkanokkjklihkjbamjm'
}
window.firefoxOpen = () => {
  window.location.href = 'https://addons.mozilla.org/en-US/firefox/addon/covid-19-tracker'
}
