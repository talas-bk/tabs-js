
document.addEventListener('DOMContentLoaded', () => { displayTabs()})

function displayTabs() {
  const navs = document.querySelectorAll('.nav');
  const contents = document.querySelectorAll('.tabs-content');
  
  navs.forEach(tab => tab.addEventListener('click', function() {
    navs.forEach(k => k.classList.remove('show-content'))
    this.classList.add('show-content')

    contents.forEach(cont => cont.classList.remove('show-content'))
    const tabsId = this.getAttribute('data-tab');
    document.querySelector(`#tab${tabsId}`).classList.add('show-content');
 
}))

}