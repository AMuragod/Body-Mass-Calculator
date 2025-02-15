const btnEl=document.getElementById("btn");

function calculateBMI()
{
    const heightValue=document.getElementById("height").value/100;
    const weightValue=document.getElementById("weight").value;

    const bmiValue=weightValue/(heightValue*heightValue);

   const result=document.getElementById("bmi-result");

   result.value=bmiValue;
}

btnEl.addEventListener("click",calculateBMI);
