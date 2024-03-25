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
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Min Aung Paing";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
        }
    });


 var projects = [
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
      

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
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
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

showProjects(projects);

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