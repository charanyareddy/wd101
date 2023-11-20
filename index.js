document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const dataTableBody = document.querySelector('#dataTable tbody');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Additional validation for age between 18 and 55
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    if (age < 18 || age > 55) {
      alert('You must be between 18 and 55 years old to register.');
      return;
    }

    // Display entered data in the table
    const newRow = dataTableBody.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptTerms ? 'Yes' : 'No'}</td>`;

    // Clear the form
    registrationForm.reset();
  });
});
