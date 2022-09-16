const toggle = document.querySelector('.toggle-button');
toggle.addEventListener('click', () => {
   toggle.classList.toggle('active');

   document.querySelectorAll(".toggle-btn").forEach(item => {
      if(item.style.display == "none") {
         return item.style.display = "block";
      } else {
         return item.style.display = "none";
      }

   })
   document.querySelectorAll(".toggle-btn-active").forEach(item => {
      if(item.style.display == "block") {
         return item.style.display = "none";
      } else {
         return item.style.display = "block"
      }
      
})
})

