document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateTotal);
});

function calculateTotal() {
    const roomType = document.getElementById("roomType").value;
    const amenities = Array.from(document.getElementById("amenities").options)
        .filter(option => option.selected)
        .map(option => option.value);
    const totalDays = parseInt(document.getElementById("totalDays").value);
    const totalPersons = parseInt(document.getElementById("totalPersons").value);
    const advanceAmount = parseFloat(document.getElementById("advanceAmount").value);

    const roomRate = (roomType === "delux") ? 2500 : 4000;
    const amenitiesCost = amenities.reduce((total, amenity) => {
        if (amenity === "ac") total += 1000;
        if (amenity === "locker") total += 300;
        return total;
    }, 0);

    const totalRoomCost = roomRate * totalDays;
    const totalAmenitiesCost = amenitiesCost * totalDays;
    const additionalCharges = (totalPersons > 2) ? ((totalPersons - 2) * 1000) * totalDays : 0;
    const totalCost = totalRoomCost + totalAmenitiesCost + additionalCharges;

    const totalRoomCostField = document.getElementById("totalRoomCost");
    const totalAmenitiesCostField = document.getElementById("totalAmenitiesCost");
    const totalCostField = document.getElementById("totalCost");
    const additionalChargesField = document.getElementById("additionalCharges");

    totalRoomCostField.value = `Rs. ${totalRoomCost}/-`;
    totalAmenitiesCostField.value = `Rs. ${totalAmenitiesCost}/-`;
    totalCostField.value = `Rs. ${totalCost}/-`;
    additionalChargesField.value = (additionalCharges > 0) ? `Rs. ${additionalCharges}/-` : "No additional charges";

    const balanceAmount = totalCost - advanceAmount;
    const balanceField = document.getElementById("balance");
    balanceField.value = `Rs. ${balanceAmount}/-`;
    const roomRateField = document.getElementById("roomRate");
    roomRateField.value = `Rs. ${roomRate}/-`;
}
