function submitForm(event) {
  event.preventDefault(); // Prevent actual form submission

  // Get input values
  document.getElementById("displayName").innerText =
    document.getElementById("name").value;
  document.getElementById("displayEmail").innerText =
    document.getElementById("email").value;

  // Format salary value
  const salary = parseFloat(document.getElementById("salary").value);
  const formattedSalary = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);
  document.getElementById("displaySalary").innerText = formattedSalary;

  document.getElementById("displayHireDate").innerText =
    document.getElementById("hireDate").value;

  // Show success alert
  document.getElementById("successAlert").classList.remove("d-none");
  // Show alert message
  alert(
    "1.EmpName: " +
      document.getElementById("displayName").innerText +
      "\n" +
      "2.Email: " +
      document.getElementById("displayEmail").innerText +
      "\n" +
      "3.Salary: " +
      document.getElementById("displaySalary").innerText +
      " \n" +
      "4.HireDate: " +
      document.getElementById("displayHireDate").innerText +
      "\n"
  );
  // Reset form fields
  document.getElementById("myForm").reset();
}

function hideAlert() {
  document.getElementById("successAlert").classList.add("d-none");
}

