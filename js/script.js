'use strict';
const btn = document.querySelector("#btn");
btn.addEventListener("click",calcBMI);

function calcBMI(){

    const height=parseInt(document.querySelector("#wzrost").value);

    const weight=parseInt(document.querySelector("#waga").value);
    
    const result=document.querySelector("#wynik");
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Wprowadź poprawną wartość dla wzrostu!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Wprowadź poprawną wartość dla wagi!";
  
    else {
  
        const bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Niedowaga: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi >= 18.5 && bmi <= 25) 
            result.innerHTML = 
                `Waga prawidłowa :<br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi > 25 && bmi <= 30) 
            result.innerHTML = 
            `Nadwaga:<br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi > 30 && bmi <= 35) 
            result.innerHTML = 
            `Otyłość stopnia 1: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else if (bmi > 35 && bmi <= 40) 
            result.innerHTML = 
            `Otyłość stopnia 2: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
        else result.innerHTML =
            `Otyłóść stopnia 3: <br>Wskaźnik BMI:<span>${bmi}</span>`;
  
    }
}

