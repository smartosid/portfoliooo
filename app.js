const splash= document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
           splash.classList.add('display-none');
    },3500);
})
// Assuming you have a reference to your splash screen element
const splashScreen = document.querySelector('.splash');

// Function to show the splash screen
function showSplashScreen() {
    splashScreen.classList.add('display-block');
}

// Function to hide the splash screen
function hideSplashScreen() {
    splashScreen.classList.remove('display-block');
}

// Example usage
// Show splash screen
showSplashScreen();

// Hide splash screen after a delay (e.g., 3 seconds)
setTimeout(hideSplashScreen, 3500);


document.addEventListener("DOMContentLoaded", function () {
    const greetings = {
        en: "• Hello",
        es: "• Hola",
        fr: "• Bonjour",
        de: "• Hallo",
        it: "• Ciao",
        pt: "• Olá",
        
        zh: "• 你好",
        ru: "• Привет",
        ar: "• مرحبا",
        pm: "• Namaste",
    };

    const greetingElement = document.getElementById("greeting");
    const introElement = document.getElementById("intro");

    const languages = Object.keys(greetings);
    let index = 0;

    function displayGreeting() {
        if (index < languages.length) {
            const languageCode = languages[index];
            const greetingMessage = greetings[languageCode];

            greetingElement.textContent = greetingMessage;

            index++;

            setTimeout(displayGreeting, 300); // Change the delay if needed
        } else {
            // All greetings displayed, hide the intro and show the website content
            introElement.style.display = "none";
            document.body.style.overflow = "auto"; // Allow scrolling after intro
            
        }
    }

    displayGreeting();
});





















$(document).ready(function() {

    //sticky header
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
    
        // Update the active section in the header
        updateActiveSection();
      });
    
      $(".header ul li a").click(function(e) {
        e.preventDefault(); 
    
        var target = $(this).attr("href");
    
        if ($(target).hasClass("active-section")) {
          return; 
        }
    
        if (target === "#home") {
          $("html, body").animate(
            {
              scrollTop: 0 
            },
            500
          );
        } else {
          var offset = $(target).offset().top - 40; 
    
          $("html, body").animate(
            {
              scrollTop: offset
            },
            500
          );
        }
    
        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
      });
    
  
      //Initial content revealing js
      ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
      });
    
      ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
      });
      ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
      });
      ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
      });
      ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
      });
  
    //contact form to excel sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
    const form = document.forms['submitToGoogleSheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
      
    });
    
    function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();
    
      // Checking if scroll position is at the top of the page
      if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
      }
    
      // Iterate through each section and update the active class in the header
      $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
    
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
        }
      });
    }
    