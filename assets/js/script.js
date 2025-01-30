var projects = [
    {
        "name": "Exam App",
        "desc": "An App to take coding Tests with a built in compiler and cheat proof",
        "image": "examappdemo.png",
        "links": {
        "code": "https://github.com/MgMap/examApp"
        }
      },
    {
      "name": "Typing Tutor",
      "desc": "Typing Game is an engaging and educational game designed to improve your typing skills using assembly language.",
      "image": "asm_demo.gif",
      "links": {
      "code": "https://github.com/MgMap/Typing-Game.git"
      }
    },
    {
      "name": "Calculator",
      "desc": "The program is primarily developed in C++, with a (GUI) inspired by the design of an iPhone calculator.",
      "image": "demo.gif",
      "links": {
      "code": "https://github.com/MgMap/Calculator.git"
      }
    },
    {
      "name": "Flappy Bird Clone",
      "desc": "This project is a simple clone of the popular game Flappy Bird, implemented in C++ using the SFML",
      "image": "flappy_demo.gif",
      "links": {
        "code": "https://github.com/MgMap/Flappy-Bird.git"
      }
    },
    {
      "name": "PayRoll-Manager",
      "desc": "PayRoll Managers is a comprehensive program designed to manage payroll tasks efficiently.",
      "image": "pay_roll_manager.gif",
      "links": {
        "code": "https://github.com/MgMap/PayRoll-Manager.git"
      }
    },
    {
      "name": "Poker Analysis",
      "desc": "The Poker Analysis Program is designed to analyze poker hands and calculate the probabilities of various hand rankings. ",
      "image": "demo_poker.png",
      "links": {
        "code": "https://github.com/MgMap/PokerAnalysis.git"
      }
    },
    {
      "name": "Tic Tac Toe",
      "desc": "This is a simple Tic Tac Toe game created using SFML (Simple and Fast Multimedia Library) for the user interface.",
      "image": "TICTACTOE.gif",
      "links": {
        "code": "https://github.com/MgMap/TicTacToe_sfml.git"
      }
    }
  ];
  let skills = [
      {
          "name": "React",
          "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
      },
      {
          "name": "NodeJS",
          "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
      },
      {
          "name": "HTML5",
          "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
      },
      {
          "name": "CSS",
          "icon": "https://img.icons8.com/color/48/000000/css3.png"
      },
      {
          "name": "JavaScript",
          "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
      },
      {
          "name": "Java",
          "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
      },
      {
          "name": "Python",
          "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
      },
      {
          "name": "C++",
          "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
      },
      {
          "name": "Git VCS",
          "icon": "https://img.icons8.com/color/48/000000/git.png"
      },
      {
          "name": "GitHub",
          "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
      },
  ]
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("V4IfOPwhy8m00TgV8");

        emailjs.sendForm('service_y45nlsk', 'template_6oi71hl', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Min Aung Paing";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";

        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Web development", "Robotics", "Machine Learing", "AI"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

   

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

    showSkills(skills);


    showProjects(projects);



// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });