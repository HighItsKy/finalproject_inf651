let getTheListItem = (num1, num2) =>{
    const elem = document.getElementById("myPage").querySelectorAll("li");
    const a = "";
    if(num1 == 1){ //If it is the first list
      return elem[num2].textContent;
    }
    else{//If it is the second list
      const a = 3 + num2;
      console.log(elem[a].textContent);
    }

  };

  