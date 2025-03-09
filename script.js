function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if (!day || !month || !year) {
        alert("Please enter a valid date, month, and year.");
        return;
    }
    let birthDate = new Date(year, month - 1, day); 
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    let dayDiff = currentDate.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    document.getElementById("age").innerText = "Your age is: " + age + " years.";
}