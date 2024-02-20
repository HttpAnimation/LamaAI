document.getElementById("webhookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    var webhookUrl = document.getElementById("webhookUrl").value;
    var message = document.getElementById("message").value;
    
    // Send the webhook request
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert("Webhook message sent successfully!");
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      alert("Failed to send webhook message!");
    });
  });