

// Rolagem da pagina
document.onscroll = EvenntoDeScrool;

function EvenntoDeScrool () {
 console.log ('rollando na função');

}

function container () {
  style="width:100%";
  align= "center";
  text-center;

}





// Como selecionar os produtos ao menu

function exibir_menu (menu) {

  let elementos = document.getElementsByClassName('container');
      console.log(elementos);


  for (var i=0; i<elementos.length; i++){
    console.log(elementos[i].id)
    if(menu == elementos[i].id)
    elementos[i].style = "display:block";
    else
    elementos[i].style = "display:none";
        
  }
}




//let myCarousel = document.querySelector('#carouselExampleInterval')
//let carousel = new bootstrap.Carousel(myCarousel, {
//  interval: 2000,
 // wrap: false
//})