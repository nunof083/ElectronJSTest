const dateName = document.getElementsByClassName("date-day-name");
const dateComplete = document.getElementsByClassName("date-complete");
const datehours = document.getElementsByClassName("date-hours");
const languageInput = document.getElementById("language");

async function dateDisplay() {
    const now = new Date();
    const dayIndex = now.getDay();
    const dayNumber = now.getUTCDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    if (languageInput.value === "fr") {
        days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    }
    else if (languageInput.value === "en") {
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    else if (languageInput.value === "nl") {
        days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

    }

    const nameDay = days[dayIndex];

    dateName[0].innerHTML = nameDay;
    dateComplete[0].innerHTML = dayNumber + "/" + month + "/" + year;
    datehours[0].innerHTML = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

    setTimeout(dateDisplay, 1000);
}



dateDisplay();