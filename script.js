document.getElementById('calc_form').addEventListener("submit",function(e){
e.preventDefault();

const startDateStr=document.getElementById('starting-date').value;
const principleAmount=parseFloat(document.getElementById('amount').value);
const interestRate=parseFloat(document.getElementById('rate').value);
console.log(startDateStr)

try {
    //  Parse the start date
    const [day, month, year] = startDateStr.split("-").map(Number);
    const startDate = new Date(day, month-1, year);
    const currentDate = new Date();
    //console.log(startDate)

    if (isNaN(startDate.getTime())) {
        throw new Error("Invalid date format. Please use DD-MM-YYYY.");
    }
const dayDuration=Math.abs((currentDate - startDate) / (1000 * 60 * 60 * 24));
const monthDuration=(dayDuration/30);
const interestPerMonth=(principleAmount/100)*interestRate;
const interest=interestPerMonth*monthDuration;
const totalAmount=interest+principleAmount;

const resultDiv=document.getElementById('result');
resultDiv.innerHTML=`
    <p>Day Duration: ${dayDuration.toFixed(0)} days</p>
    <p>Month Duration: ${monthDuration.toFixed(3)} months</p>
    <p>Interest Per Month: ${interestPerMonth.toFixed(0)}/month</p>
    <p>Total Interest : ${interest.toFixed(0)} Rs</p>
    <p>Total Amount: ${totalAmount.toFixed(0)} Rs</p>
`;
resultDiv.style.display="block";
}catch (error) {
    // Handle errors
    alert(error.message);
}
})
document.getElementById('reset_button').addEventListener("click", function() {
    // Reset form fields
    document.getElementById('calc_form').reset();
    // Hide the result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = "none";
});