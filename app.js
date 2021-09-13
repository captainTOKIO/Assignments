console.log("prem");

let btn = document.getElementById('btn');
function errorMessage() {
    var error = document.getElementById("error")
    if (isNaN(document.getElementById("bill-amount").value)) 
    {

        // Changing HTML to draw attention
        error.innerHTML = "<span style='color: red;'>"+
                    "Please enter a valid number</span>"
    } else {
        error.innerHTML = ""
    }
}

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let numOfPeople = document.getElementById("peopleamt").value;
  

    
    let tipAmount = document.getElementById('tip-amount').value = (billAmount * tipPercentage) / numOfPeople ;
    document.getElementById('total-bill').value = parseFloat(billAmount) + (parseFloat(tipAmount)*numOfPeople);
});