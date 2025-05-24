const body = document.querySelector(".main-content");
const navBtns = document.querySelectorAll(".control");
const sections = document.querySelectorAll(".section");

const addActiveToBtn = ()=>{
  navBtns.forEach(btn=>{
    // Remove 'active-btn' from all buttons
    btn.addEventListener("click", function(){
      navBtns.forEach(b => b.classList.remove("active-btn"));
      // Add 'active-btn' to the clicked one
      this.classList.add('active-btn');

      // get the data id
      const id = this.dataset.id;
      sections.forEach(sec=>{
        // remove active class from all sections
        sec.classList.remove('active');
      })
      // add active class to the section with the same id
      document.getElementById(id).classList.add('active');
    });
    
  });
}
addActiveToBtn();