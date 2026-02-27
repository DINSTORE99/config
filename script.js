// ======================
// SETTING HARI EXPIRED
// ======================
const HARI_EXPIRED = 1;

function toggleOperator(id) {
  const menus = document.querySelectorAll(".btn-list");
  
  menus.forEach(menu => {
    if (menu.id === id) {
      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    } else {
      menu.style.display = "none";
    }
  });
  
  document.querySelectorAll(".sub").forEach(sub => {
    sub.style.display = "none";
  });
}


function toggleSub(id) {
  const subs = document.querySelectorAll(".sub");
  
  subs.forEach(sub => {
    if (sub.id === id) {
      sub.style.display =
        sub.style.display === "block" ? "none" : "block";
    } else {
      sub.style.display = "none";
    }
  });
}

function format(num) {
  return num < 10 ? "0" + num : num;
}


function startCountdown() {
  
  const expire = new Date();
  expire.setDate(expire.getDate() + HARI_EXPIRED);
  expire.setHours(0, 0, 0, 0); 
  function update() {
    const now = new Date().getTime();
    const distance = expire.getTime() - now;
    
    if (distance <= 0) {
      document.getElementById("timer").innerHTML = "EXPIRED";
      return;
    }
    
    const h = Math.floor(distance / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML =
      format(h) + " : " +
      format(m) + " : " +
      format(s);
  }
  
  update();
  setInterval(update, 1000);
}

startCountdown();

window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loadingScreen").style.display = "none";
  }, 1000); // 2000 = 2 detik
});
