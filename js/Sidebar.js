function togglemenu() {
    var element = document.getElementById("sidebar");
    element.classList.remove("active");
    const containerlist = document.querySelector('.main-container');
    containerlist.classList.remove("active");
  }

  function togglemenucollpsed() {
    var element = document.getElementById("sidebar");
    element.classList.add("active");
    const container = document.querySelector('.main-container');
    container.classList.add("active");
  }