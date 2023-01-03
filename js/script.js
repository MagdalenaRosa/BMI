'use strict';
let btn = document.querySelector("#btn");
btn.addEventListener("click",calcBMI);

function calcBMI(){

    let height=parseInt(document.querySelector("#wzrost").value);

    let weight=parseInt(document.querySelector("#waga").value);
    
    let result=document.querySelector("#wynik");
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Wprowadź poprawną wartość dla wzrostu!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Wprowadź poprawną wartość dla wagi!";
  
    else {
  
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Niedowaga: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                `Waga prawidłowa :<br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 25 && bmi < 30) 
            result.innerHTML = 
            `Nadwaga:<br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 25 && bmi < 30) 
            result.innerHTML = 
            `Nadwaga: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 30 && bmi < 35) 
            result.innerHTML = 
            `Otyłość stopnia 1: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 35 && bmi < 40) 
            result.innerHTML = 
            `Otyłość stopnia 2: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else result.innerHTML =
            `Otyłóść stopnia 3: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
    }
}

