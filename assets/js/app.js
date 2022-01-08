
// let username = "admin"
// let a = prompt("login");
// if (a === username){
//   console.log(a);
// }
// else {
//   alert("bomadi");
// }

// let password = "12345"
// let b = prompt("password")
// if (b === password){
//   console.log(b);
//   alert(" salom ");
// }



// for (aim = 0; aim <= 100; aim++){
//   if (aim % 2 == 0){
//     console.log(aim);;
//   }
// }


// for( aim = 0; aim <= 100; aim++)
//         if(aim%3 == 0)
//         console.log(aim);


  // for( aim = 0; aim <= 100; aim++)
  //       if(aim%5 == 0)
  //       console.log(aim);

  
// let negr;

// do {
//   negr = prompt("enter a number greater than 100?", 100);
// }
// while (negr < 100 && negr);




let a = +prompt("1 dan 4 gacha tanla");
switch (a) {
  case 1:
    let result = ex1(+prompt("a ni kiriting:"), +prompt("b ni kiriting:"));
    function ex1(a, b) {
     if(a > b) {
       console.log("Kichik son: " + b);
     } 
     else if (a < b){
       console.log("Kichik son: " + a);
     }
    }
    break;
    case 2:
      let natija = ex2(+prompt("x ni kiriting: "), +prompt("n ni kiriting: "));
    function ex2(x, n) {
      console.log(x**n);
    }
      break;
      case 3:
        let g = 1000;
    function ex3() {
      for(m =1; m <= g; m++){
        if (m%2 != 0) {
          console.log(m);
        }
      }
    }
    ex3();
    break;
    case 4:
    
    break;
  default:
    break;
}