window.onload = function(){

    /* document.querySelector()
addEventListener()
classList.add()
classList.remove()
  */
  
   var modal = document.querySelector('#modal');
   // modal.style.display = 'none';
   modal.classList.add('modalremover');
   
   close.onclick = function(){
      modal.classList.toggle('modalremover');
   }

//    btn.onclick = function(){
//      m
//    }



}