document.getElementById("verifyBtn").addEventListener("click", function() {
  // Get Instagram ID from input field
  let instaID = document.getElementById("instaID").value.trim();
  
  // Check if the user entered an ID
  if (instaID === "") {
    alert("Please enter your Instagram ID!");
    return;
  }
  
  // Redirect user to verification page with ID
  window.location.href = "verify.html?id=" + encodeURIComponent(instaID);
});