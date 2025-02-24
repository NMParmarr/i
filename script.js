//Header toggle
let MenuBtn = document.getElementById("MenuBtn");
let isopen = false;

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  document.querySelector("body").classList.toggle("menuopen");
  this.classList.toggle("fa-xmark");
  isopen = !isopen;
});

function pop(e) {
  if (isopen == e) {
    document.querySelector("body").classList.remove("mobile-nav-active");
    document.querySelector("body").classList.remove("menuopen");
    MenuBtn.classList.remove("fa-xmark");
    isopen = false;
  }
}
function actv(e) {
  document.querySelectorAll(".ac").forEach((x) => {
    x.classList.remove("active");
  });
  e.classList.add("active");
}

let typed = new Typed(".auto-input", {
  strings: ["Mobile App Developer.", "Flutter Developer.", "Programmer."],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";

            // status.innerHTML = "Oops! Server down..try again later";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      // status.innerHTML = "Oops! Server down..try again later";
    });
}

form.addEventListener("submit", handleSubmit);
