document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const result = document.getElementById('akan-name');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    if (!birthdate) {
      result.textContent = '⚠️ Please enter a valid date.';
      return;
    }

    if (!gender) {
      result.textContent = '⚠️ Please select a gender.';
      return;
    }

    // Split date
    const [yearStr, monthStr, dayStr] = birthdate.split("-");
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const day = parseInt(dayStr);

    // Akan names
    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    };

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // ✅ Get the actual weekday
    const birthDateObj = new Date(year, month - 1, day);
    const dayIndex = birthDateObj.getDay();

    const akanName = akanNames[gender][dayIndex];
    const dayName = days[dayIndex];

    result.textContent = `🎂 You were born on a ${dayName}. Your Akan name is ${akanName}!`;
  });
});
