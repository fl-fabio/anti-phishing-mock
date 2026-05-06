// script.js

const loginForm = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");

loginForm.addEventListener("submit", function(event){

  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const timestamp = new Date().toLocaleString();

  const csvHeader = "email,password,timestamp\n";

  const csvRow = `${email},${password},${timestamp}\n`;

  const csvContent = csvHeader + csvRow;

  createCSV(csvContent);

  messageBox.innerHTML = `
    <p class="danger">
      Simulazione completata.
    </p>

    <br>

    <p>
      I dati inseriti sono stati salvati in un file CSV locale.
    </p>

    <br>

    <p class="warning">
      In un vero attacco phishing le informazioni verrebbero
      inviate ad un server remoto controllato da un attaccante.
    </p>
  `;

  loginForm.reset();

});

function createCSV(content){

  const blob = new Blob(
    [content],
    {
      type: "text/csv;charset=utf-8;"
    }
  );

  const fileURL = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");

  downloadLink.href = fileURL;

  downloadLink.download = "credentials-demo.csv";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);

}