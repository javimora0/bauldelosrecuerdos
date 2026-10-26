
const memories = [
    {
        number: 1,
        photo: "assets/fotos/recuerdo-01.JPEG",
        titleLine1: "Todo empieza",
        titleLine2: "en algún momento.",
        caption: "20/08/26 - El principio ♥",
        backLabel: "El principio",
        message: "Esa noche parece que todo se alineó para que tu y yo nos cruzasemos y nuestra vida cambiara para siempre."
    },
    {
        number: 2,
        photo: "assets/fotos/recuerdo-02.JPEG",
        titleLine1: "Sin darme cuenta",
        titleLine2: "...",
        caption: "11/09/26 - Benditas flores... ♥",
        backLabel: "Y ENTONCES...",
        message: "Sin darme cuenta, para ese entonces ya estaba perdidamente enamorado de ti."
    },
    {
        number: 3,
        photo: "assets/fotos/recuerdo-03.JPEG",
        titleLine1: "Nuestra primera",
        titleLine2: "siesta...",
        caption: "14/09/26 - Mi cumpleaños ♥",
        backLabel: "ESAS PEQUEÑAS COSAS",
        message: "Un libro, una pulsera y una frase que me casi me hace llorar 🥺. `Quiero mirarte a los ojos y darme cuenta de la vida`. "
    },
    {
        number: 4,
        photo: "assets/fotos/recuerdo-04.JPEG",
        titleLine1: "El NESTEA de",
        titleLine2: "maracuya....",
        caption: "15/09/26 - Nuestro primer atardecer ♥",
        backLabel: "ESAS PEQUEÑAS COSAS",
        message: "Con una manta, snacks de lentejas y contigo, una tarde increíble, aquí ya no había vuelta atras, estaba enamorado de ti."
    },
    {
        number: 5,
        photo: "assets/fotos/recuerdo-05.JPEG",
        titleLine1: "Conoces a mis",
        titleLine2: "amigos...",
        caption: "19/09/26 - Nuestro primer te quiero ♥",
        backLabel: "ESAS PEQUEÑAS COSAS",
        message: "Lo diré hasta el resto de mis días, si me piden que describa la felicidad sin duda diría lo que ese día sentí cuando escuche de tu boca decir que me querias. Gracias."
    },
    {
        number: 6,
        photo: "assets/fotos/recuerdo-06.JPEG",
        titleLine1: "Pequeños momentos",
        titleLine2: "...",
        caption: "24/09/26 - Primera fajita juntos... ♥",
        backLabel: "UNA PEQUEÑA CONFESIÓN",
        message: "No siempre hay que hacer grandes cosas para ser felices, en este momento, contigo, preparando la cena yo me sentía en el autentico paraiso a tu lado..."
    },
    {
        number: 7,
        photo: "assets/fotos/recuerdo-07.JPEG",
        titleLine1: "Miami Gastro",
        titleLine2: "...",
        caption: "03/10/26 - Confesiones...",
        backLabel: "03/10/26 - Confesiones...",
        message: "Recuerdo que esta noche tuvo tres fases: La primera la alegría de vernos y cenar juntos, la segundo al llegar a casa que mejor no digo lo bien que lo pasamos y la tercera al abrirnos el uno con el otro, nos conocimos un poco mas..."
    },
    {
        number: 8,
        photo: "assets/fotos/recuerdo-08.JPEG",
        titleLine1: "El parque y",
        titleLine2: "el banco",
        caption: "07/10/26 - Como adolescentes... ♥",
        backLabel: "Y SI VOLVIERA AL PRINCIPIO...",
        message: "Tus padres vuelven a casa y nosotros a los 15, morreandonos en un parque, para mi es suficiente con tal de verte aun que sea 5 minutos, 5 minutos que me alegran el resto de la semana..."
    },
    {
        number: 9,
        photo: "assets/fotos/recuerdo-09.JPEG",
        titleLine1: "Mérida",
        titleLine2: "y mucho morro",
        caption: "10/10/26 - Nuestro primer viaje...",
        backLabel: "ANTES DE LLEGAR AL FINAL",
        message: "Un viaje corto pero suficiente para darme cuenta que quiero recorrer cada rincon del mundo de tu mano."
    },
    {
        number: 10,
        photo: "assets/fotos/recuerdo-10.png",
        titleLine1: "Y ahora...",
        titleLine2: "quiero preguntarte algo.",
        caption: "Y no tienes ni idea de lo que es... ♥",
        backLabel: "TENGO UNA PREGUNTA PARA TI...",
        message: "Carmen, volvería a elegirte una y mil veces. Me encanta nuestra historia, pero me hace todavía más ilusión todo lo que nos queda por vivir. Así que hoy quiero preguntartelo oficialmente: ¿quieres ser mi novia? ❤️"    }
];



let currentMemoryIndex = 0;
let nextMemoryIndex = 0;
const startButton = document.getElementById("startButton");
const welcomeScreen = document.querySelector(".welcome-screen");
const memoryScreen = document.getElementById("memoryScreen");

const firstMemoryButton = document.getElementById("firstMemoryButton");
const photoScreen = document.getElementById("photoScreen");
const backToMemories = document.getElementById("backToMemories");

const photoFlipButton = document.getElementById("photoFlipButton");
const flipHint = document.getElementById("flipHint");
const saveMemoryButton = document.getElementById("saveMemoryButton");


function loadMemory(index) {
    const memory = memories[index];

    if (!memory) return;

    currentMemoryIndex = index;

    document.getElementById("memoryNumber").textContent =
        `RECUERDO ${String(memory.number).padStart(2, "0")} DE 10`;

    document.getElementById("memoryTitle").innerHTML =
        `${memory.titleLine1}<br><em>${memory.titleLine2}</em>`;

    const photo = document.getElementById("memoryPhoto");
    photo.src = memory.photo;
    photo.alt = `Fotografía del recuerdo ${memory.number}`;

    document.getElementById("memoryCaption").textContent =
        memory.caption;

    document.getElementById("memoryBackLabel").textContent =
        memory.backLabel;

    document.getElementById("memoryBackMessage").textContent =
        memory.message;

    const proposalActions = document.getElementById("proposalActions");
    const proposalResponse = document.getElementById("proposalResponse");

    proposalActions.hidden = true;
    proposalResponse.hidden = true;

    document.getElementById("proposalYesButton").disabled = false;
    document.getElementById("proposalAbsolutelyButton").disabled = false;

    photoScreen.classList.toggle("final-memory", index === 9);
    saveMemoryButton.hidden = false;
}


const memoryThumbnails = document.querySelectorAll(".memory-thumb");

memoryThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        // No permitir abrir recuerdos bloqueados.
        if (!thumbnail.classList.contains("unlocked")) {
            return;
        }

        // Cargar el recuerdo seleccionado.
        loadMemory(index);

        // Reiniciar la fotografía antes de abrirla.
        photoFlipButton.classList.remove("flipped");
        photoFlipButton.setAttribute("aria-pressed", "false");

        flipHint.textContent =
            "Toca la fotografía para descubrir su otra cara";

        saveMemoryButton.disabled = true;
        saveMemoryButton.classList.remove("ready");

        // Mostrar la pantalla del recuerdo.
        showScreen(photoScreen, memoryScreen);
    });
});


function showScreen(screenToShow, screenToHide) {
    screenToHide.classList.remove("visible");
    screenToHide.setAttribute("aria-hidden", "true");

    setTimeout(() => {
        screenToShow.classList.add("visible");
        screenToShow.setAttribute("aria-hidden", "false");
    }, 100);
}

// Bienvenida → baúl.
startButton.addEventListener("click", () => {
    startButton.disabled = true;
    welcomeScreen.classList.add("leaving");

    setTimeout(() => {
        welcomeScreen.style.display = "none";

        memoryScreen.classList.add("visible");
        memoryScreen.setAttribute("aria-hidden", "false");
    }, 800);
});

// Baúl → primer recuerdo.
firstMemoryButton.addEventListener("click", () => {
    if (nextMemoryIndex >= memories.length) return;

    loadMemory(nextMemoryIndex);
    showScreen(photoScreen, memoryScreen);
});

// Girar la fotografía para ver el reverso.
photoFlipButton.addEventListener("click", () => {
    const isFlipped = photoFlipButton.classList.toggle("flipped");
    const isFinalMemory = currentMemoryIndex === 9;
    const proposalActions = document.getElementById("proposalActions");

    proposalActions.hidden = !(isFlipped && isFinalMemory);
    saveMemoryButton.hidden = isFlipped && isFinalMemory;
    photoFlipButton.setAttribute("aria-pressed", String(isFlipped));

    if (isFlipped) {
        flipHint.textContent = "Descubre lo que guarda este recuerdo.";
        saveMemoryButton.disabled = false;
        saveMemoryButton.classList.add("ready");
    } else {
        flipHint.textContent = "Toca la fotografía para descubrir su otra cara";
        saveMemoryButton.disabled = true;
        saveMemoryButton.classList.remove("ready");
    }
});

// Guardar el primer recuerdo y volver al baúl.

saveMemoryButton.addEventListener("click", () => {
    if (saveMemoryButton.disabled) return;

    const savedIndex = currentMemoryIndex;
    const savedThumb = memoryThumbnails[savedIndex];

    // Marcar el recuerdo actual como guardado.
    savedThumb.classList.remove("locked");
    savedThumb.classList.add("unlocked");
    savedThumb.setAttribute(
        "aria-label",
        `Recuerdo ${savedIndex + 1}, desbloqueado`
    );
    savedThumb.querySelector(".thumb-lock").textContent = "♥";
    const unlockedCount = memoryScreen.querySelectorAll(
        ".memory-thumb.unlocked"
    ).length;

    document.getElementById("memoryProgress").textContent =
        `${unlockedCount} de 10 recuerdos descubiertos`;

    const progressFill = document.getElementById("memoryProgressFill");
    const progressTrack = document.getElementById("memoryProgressTrack");

    progressFill.style.width = `${unlockedCount * 10}%`;
    progressTrack.setAttribute("aria-valuenow", String(unlockedCount));

    // Avanzar al siguiente recuerdo pendiente.
    if (savedIndex === nextMemoryIndex) {
        nextMemoryIndex++;
    }

    // Actualizar el texto del botón central.
    const nextSubtitle = document.getElementById("nextMemorySubtitle");

    if (nextMemoryIndex < memories.length) {
        nextSubtitle.textContent =
            `Recuerdo ${String(nextMemoryIndex + 1).padStart(2, "0")}`;
    } else {
        nextSubtitle.textContent = "Has descubierto los diez recuerdos ♥";
        firstMemoryButton.disabled = true;
    }

    showScreen(memoryScreen, photoScreen);

    // Preparar la fotografía para la próxima apertura.
    setTimeout(() => {
        photoFlipButton.classList.remove("flipped");
        photoFlipButton.setAttribute("aria-pressed", "false");

        flipHint.textContent =
            "Toca la fotografía para descubrir su otra cara";

        saveMemoryButton.disabled = true;
        saveMemoryButton.classList.remove("ready");
    }, 750);
});


// Volver al baúl sin guardar.
backToMemories.addEventListener("click", () => {
    showScreen(memoryScreen, photoScreen);

    setTimeout(() => {
        photoFlipButton.classList.remove("flipped");
        photoFlipButton.setAttribute("aria-pressed", "false");

        flipHint.textContent = "Toca la fotografía para descubrir su otra cara";
        saveMemoryButton.disabled = true;
        saveMemoryButton.classList.remove("ready");
    }, 750);
});


function createFinalHearts() {
    const container = document.getElementById("finalHearts");

    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < 28; i++) {
        const heart = document.createElement("span");

        heart.className = "final-heart-particle";
        heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.setProperty(
            "--heart-left",
            `${Math.random() * 100}%`
        );

        heart.style.setProperty(
            "--heart-size",
            `${10 + Math.random() * 14}px`
        );

        heart.style.setProperty(
            "--heart-duration",
            `${5 + Math.random() * 4}s`
        );

        heart.style.setProperty(
            "--heart-delay",
            `${Math.random() * 1.5}s`
        );

        heart.style.setProperty(
            "--heart-drift",
            `${-60 + Math.random() * 120}px`
        );

        heart.addEventListener("animationend", () => {
            heart.remove();
        });

        container.appendChild(heart);
    }
}

function answerProposal() {
    const proposalActions = document.getElementById("proposalActions");
    const proposalResponse = document.getElementById("proposalResponse");
    const photoScreen = document.getElementById("photoScreen");
    const finalScreen = document.getElementById("finalScreen");

    proposalActions.hidden = true;
    proposalResponse.hidden = true;

    photoScreen.classList.remove("visible");
    photoScreen.setAttribute("aria-hidden", "true");
    createFinalHearts();
    finalScreen.classList.add("visible");
    finalScreen.setAttribute("aria-hidden", "false");
}

document.getElementById("proposalYesButton").addEventListener(
    "click",
    answerProposal
);

document.getElementById("proposalAbsolutelyButton").addEventListener(
    "click",
    answerProposal
);


const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");

backgroundMusic.volume = 0.15;

musicToggle.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
        try {
            await backgroundMusic.play();

            musicToggle.classList.add("is-playing");
            musicToggle.setAttribute("aria-pressed", "true");
            musicToggle.setAttribute("aria-label", "Pausar música");
            musicIcon.textContent = "♫";
            musicLabel.textContent = "Pausar música";
        } catch (error) {
            musicLabel.textContent = "No se pudo reproducir";
            musicToggle.setAttribute("aria-label", "No se pudo reproducir la música");
        }
    } else {
        backgroundMusic.pause();

        musicToggle.classList.remove("is-playing");
        musicToggle.setAttribute("aria-pressed", "false");
        musicToggle.setAttribute("aria-label", "Reproducir música");
        musicIcon.textContent = "♫";
        musicLabel.textContent = "Activar música";
    }
});


const autumnParticles = document.getElementById("autumnParticles");

if (
    autumnParticles &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    const symbols = ["✦", "✧", "·", "🍂"];
    const particleCount = window.innerWidth < 600 ? 12 : 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        particle.className = "autumn-particle";
        particle.textContent = symbols[i % symbols.length];

        particle.style.setProperty("--left", `${Math.random() * 100}%`);
        particle.style.setProperty("--size", `${8 + Math.random() * 10}px`);
        particle.style.setProperty("--duration", `${12 + Math.random() * 14}s`);
        particle.style.setProperty("--delay", `${-Math.random() * 24}s`);
        particle.style.setProperty("--drift", `${-35 + Math.random() * 70}px`);
        particle.style.setProperty("--opacity", `${0.25 + Math.random() * 0.35}`);

        autumnParticles.appendChild(particle);
    }
}

