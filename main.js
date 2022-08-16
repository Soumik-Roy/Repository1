document.getElementById("resume-btn").onclick = function () {
  // location.href = "/assets/Resume.pdf";
  window.open("https://drive.google.com/file/d/18avIQFSfz7vzGk55NrBvOrgmjwZABHTL/view?usp=sharing", '_blank');
};

document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-div").style.top = "0";
  } else {
    document.getElementById("navbar-div").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}