function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random() * 1677300).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    document.getElementById("colorDisplay").innerText = "Background color: #" + randomColor;
  }