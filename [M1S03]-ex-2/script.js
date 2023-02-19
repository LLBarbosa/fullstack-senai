function generateLink() {
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const link = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phone) + "&text=" + encodeURIComponent(message);
    document.getElementById("result").innerHTML = "<a href='" + link + "' target='_blank'>" + link + "</a>";
  }