window.onload = function(){

    /* document.querySelector()
addEventListener()
classList.add()
classList.remove()
  */
  
   var modal = document.querySelector('#modal');
   // modal.classList.add('modalremover');
   var close = document.querySelector('#close')
   close.onclick = function(){
      console.log('closed');
      modal.classList.add('modalremover');
      // modal.style.transition = "all 4s ease-in"s
   }
   var btn = document.querySelector('#btn');
   btn.onclick = function(){
      console.log('clicked');
      modal.classList.remove('modalremover');
      // modal.style.transition = "all 4s ease-in"
   }



}