function compute()
{
    p = Number(document.getElementById("principal").value);
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
    const interest = p * years * rate / 100;
    const amount = parseInt(p) + parseInt(interest);
    const result = document.getElementById('result');
    const year = Number(new Date().getFullYear()) + parseInt(years);
    if(p === isNaN || p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    if(years === '') {
        document.getElementById('years').focus();
        return;
    } 
    result.innerHTML = `
        If you deposit ${p}, <br>
        at an interest rate of ${rate}%,<br>
        You will receive an amount of ${amount}, <br>
        in the year ${year}<br>
    `

    
    
}

console.log("script")
      
function updateRate() {
    console.log("update rate")
    let rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').textContent = rateval;

}