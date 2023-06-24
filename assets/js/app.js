const menuItems = document.querySelectorAll(".filter-item");
const menuSection = document.querySelectorAll("section");


window.addEventListener('load', ()=>{
    addActiveClass()
})


// Listen For CLick Event on Single Menu Item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {

    removeActiveFromMenu();
    removeActiveClassFromSection();

    item.classList.add("active");
   
    menuSection.forEach((section) => {
      if (section.id == item.id) {
        section.classList.add("active");
      }
      if(item.id == 'all'){
        addActiveClass()
      }
    });

  });

});

// remove Active Class From Menu Item
function removeActiveFromMenu() {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
}

// hide a section/s
function removeActiveClassFromSection() {
 
  menuSection.forEach((section) => {
 section.classList.remove("active");
  });
}

// add active class 

function addActiveClass(){
    menuSection.forEach(section =>{
        section.classList.add('active')
    })
}
