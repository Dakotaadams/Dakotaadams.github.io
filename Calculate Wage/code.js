document.addEventListener("DOMContentLoaded", function () {
    let normalHoursInput = document.getElementById("Nhours");
    let normalRateInput = document.getElementById("NRate");
    let overtimeRateInput = document.getElementById("ORate");
    let workedHoursInput = document.getElementById("Whours");
    let resultParagraph = document.getElementById("result");
    let calculateButton = document.getElementById("btn");

    calculateButton.addEventListener("click", function () {
        let normalHours = parseFloat(normalHoursInput.value);
        let normalRate = parseFloat(normalRateInput.value);
        let overtimeRate = parseFloat(overtimeRateInput.value);
        let workedHours = parseFloat(workedHoursInput.value);

        if (
            isNaN(normalHours) ||
            isNaN(normalRate) ||
            isNaN(overtimeRate) ||
            isNaN(workedHours)
        ) {
            resultParagraph.textContent =  "Please fill in all fields correctly.";
            return;
        }

        let totalPay;
        if (workedHours <= normalHours) {
            totalPay = workedHours * normalRate;
        } else {
            const overtimeHours = workedHours - normalHours;
            totalPay = (normalHours * normalRate) + (overtimeHours * overtimeRate);
        }
        resultParagraph.textContent = ` $${totalPay.toFixed(2)} dollars`;
        
    });
});