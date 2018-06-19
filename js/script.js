
    document.getElementById("result").innerHTML = "";
    // document.getElementById("result").style.color = "red";

    for(var i = 1; i<=100; i++){
      if (i%3 == 0 && i%5 == 0){
        document.getElementById("result").innerHTML += "<br>fizzbuzz" + i;
      } else if (i%5 == 0) {
        document.getElementById("result").innerHTML += "<br>buzz" + i;
      } else if (i%3 == 0) {
        document.getElementById("result").innerHTML += "<br>fizz" + i;
    }
  }
