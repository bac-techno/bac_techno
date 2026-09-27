/* =====================================
   BAC TECHNO
   Main JavaScript
===================================== */


/* =====================================
   HOME
===================================== */

function goHome() {

    document
        .getElementById("home")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   SUBJECTS
===================================== */

function showSubjects() {

    document
        .getElementById("subjects")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   SUBJECT DATA
===================================== */

const subjects = {

    "Mathématiques": {

        icon: "📐",

        chapters: [
            "Fonctions",
            "Dérivation",
            "Suites",
            "Probabilités",
            "Géométrie"
        ]

    },


    "Physique-Chimie": {

        icon: "⚛️",

        chapters: [
            "Mécanique",
            "Électricité",
            "Ondes",
            "Chimie",
            "Transformations"
        ]

    },


    "Informatique": {

        icon: "💻",

        chapters: [
            "Algorithmique",
            "Python",
            "Variables",
            "Conditions",
            "Boucles"
        ]

    },


    "Français": {

        icon: "🇫🇷",

        chapters: [
            "Compréhension",
            "Expression",
            "Littérature",
            "Argumentation"
        ]

    },


    "العربية": {

        icon: "📖",

        chapters: [
            "النحو",
            "البلاغة",
            "التعبير",
            "تحليل النصوص"
        ]

    },


    "Philosophie": {

        icon: "🧠",

        chapters: [
            "الإنسان",
            "المعرفة",
            "السياسة",
            "الأخلاق"
        ]

    }

};


/* =====================================
   OPEN SUBJECT
===================================== */

function openSubject(subjectName) {

    const subject =
        subjects[subjectName];


    if (!subject) {

        return;

    }


    const content =
        document.getElementById(
            "subject-content"
        );


    let chaptersHTML = "";


    subject.chapters.forEach(
        function(chapter, index) {

            chaptersHTML += `

                <div
                    class="chapter"
                    onclick="openChapter(
                        '${subjectName}',
                        '${chapter}'
                    )"
                >

                    📖
                    <strong>
                        ${index + 1}.
                        ${chapter}
                    </strong>

                </div>

            `;

        }
    );


    content.innerHTML = `

        <h2>
            ${subject.icon}
            ${subjectName}
        </h2>

        <p>
            Choisis un chapitre :
        </p>

        ${chaptersHTML}

    `;


    document
        .getElementById("subject-modal")
        .classList.add("active");

}


/* =====================================
   CLOSE SUBJECT
===================================== */

function closeSubject() {

    document
        .getElementById("subject-modal")
        .classList.remove("active");

}


/* =====================================
   CHAPTER
===================================== */

function openChapter(
    subject,
    chapter
) {

    alert(

        "📚 " +
        subject +
        "\n\n" +

        "📖 Chapitre : " +
        chapter +

        "\n\n" +

        "🚀 Le cours de ce chapitre sera ajouté ici."

    );

}


/* =====================================
   VIDEO
===================================== */

function openVideo(videoPath) {

    const modal =
        document.getElementById(
            "video-modal"
        );


    const player =
        document.getElementById(
            "video-player"
        );


    const source =
        document.getElementById(
            "video-source"
        );


    source.src = videoPath;


    player.load();


    modal.classList.add("active");


    player.play().catch(
        function() {

            // Autoplay may be blocked
            // by the browser.

        }
    );

}


/* =====================================
   CLOSE VIDEO
===================================== */

function closeVideo(event) {

    if (
        event &&
        event.target !==
        document.getElementById(
            "video-modal"
        )
    ) {

        return;

    }


    const modal =
        document.getElementById(
            "video-modal"
        );


    const player =
        document.getElementById(
            "video-player"
        );


    player.pause();


    player.currentTime = 0;


    modal.classList.remove("active");

}


/* =====================================
   QUIZ
===================================== */

let score = 0;


function showQuiz() {

    document
        .getElementById("quiz")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   ANSWER
===================================== */

function answer(choice) {

    const result =
        document.getElementById(
            "result"
        );


    if (choice === 2) {

        result.innerHTML =
            "✅ Correct ! La dérivée de x² est 2x.";

        result.style.color =
            "#4ade80";


        score = 100;


        updateProgress();


    } else {

        result.innerHTML =
            "❌ Incorrect. La bonne réponse est 2x.";

        result.style.color =
            "#f87171";

    }

}


/* =====================================
   PROGRESS
===================================== */

function updateProgress() {

    const progressBar =
        document.getElementById(
            "progress-bar"
        );


    const progressText =
        document.getElementById(
            "progress-text"
        );


    progressBar.style.width =
        score + "%";


    progressText.innerText =
        score + "%";


    localStorage.setItem(
        "bacTechnoProgress",
        score
    );

}


/* =====================================
   SHOW PROGRESS
===================================== */

function showProgress() {

    document
        .getElementById(
            "progress-section"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   LOAD SAVED PROGRESS
===================================== */

function loadProgress() {

    const savedProgress =
        localStorage.getItem(
            "bacTechnoProgress"
        );


    if (savedProgress !== null) {

        score =
            Number(savedProgress);


        updateProgress();

    }

}


/* =====================================
   ESC KEY
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSubject();

            const videoModal =
                document.getElementById(
                    "video-modal"
                );


            if (
                videoModal.classList.contains(
                    "active"
                )
            ) {

                closeVideo();

            }

        }

    }
);


/* =====================================
   START
===================================== */

loadProgress();