tas.addEventListener("click",tasSecimi);
kagit.addEventListener("click",kagitSecimi);
makas.addEventListener("click",makasSecimi);
delScors.addEventListener('click',resetprogramı);
winner.addEventListener('click',winnerprogramı);
// random.addEventListener("click",randomSecimi);

let oyuncuHamlesi = ['taş', 'kağıt', 'makas'];
let oyuncuskor= 0;
let bilgisayarskor= 0;
// deneme=0

function tasSecimi() {
  oyuncuHamlesi="taş"
  randomSecimi();
  // alert(oyuncuHamlesi);
   }
function kagitSecimi() {
    oyuncuHamlesi="kağıt"
    randomSecimi();
    // alert(oyuncuHamlesi);
   }
function makasSecimi() {
    oyuncuHamlesi="makas"
    randomSecimi();
    // alert(oyuncuHamlesi);
   }


function randomSecimi() {
    let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));
    // alert(bilgisayarHamlesi);
  


  if(oyuncuHamlesi==bilgisayarHamlesi) {

  alert('Berabere kaldınız');

  } 
  else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="kağıt" ) {
  
  
  bilgisayarskor++;
  countComputer.innerText = bilgisayarskor;


  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=kağıt. Kaybettiniz, bilgisayar kazandı');

  }
  else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="makas") {


  oyuncuskor++;
  countPlayer.innerText = oyuncuskor;

  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=makas.Tebrikler, kazandınız');

  }
  else if (oyuncuHamlesi=="kağıt" &&  bilgisayarHamlesi=="taş") {


  oyuncuskor++;
  countPlayer.innerText = oyuncuskor;

  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=taş.Tebrikler, kazandınız');

  }
  else if (oyuncuHamlesi=="kağıt" &&  bilgisayarHamlesi=="makas") {

 
  bilgisayarskor++;
  countComputer.innerText = bilgisayarskor;


  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=makas.Kaybettiniz, bilgisayar kazandı');
  
  }
  else if (oyuncuHamlesi=="makas" &&  bilgisayarHamlesi=="taş") {

  
  bilgisayarskor++;
  countComputer.innerText = bilgisayarskor;


  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=taş.Kaybettiniz, bilgisayar kazandı');
  
  }
  else if (oyuncuHamlesi=="makas" &&  bilgisayarHamlesi=="kağıt") {

  oyuncuskor++;
  countPlayer.innerText = oyuncuskor;

  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=kağıt. Tebrikler, kazandınız');

  }
  else {

  alert('hatalı giriş yaptınız!');

  }
} 

function resetprogramı () {
  oyuncuskor=0;
  bilgisayarskor=0;
  countPlayer.innerText = oyuncuskor;
  countComputer.innerText = bilgisayarskor;
}

function winnerprogramı () {

  if (oyuncuskor > bilgisayarskor) {
    alert('Tebrikler Oyuncu Kazandı');
  }

  else if (oyuncuskor < bilgisayarskor) {
    alert('Üzgünüz Kaybettiniz Bilgisayar Kazandı');
  }
  
  else {
    alert('Berabere Kaldınız');
  }
}