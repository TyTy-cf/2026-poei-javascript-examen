function detectTab() { // Détecte le tab actif, sert pour lui retirer les propriétés après
    const selected = document.querySelector('.active');

    if (selected) {
        return selected;
    }
}

function changeTab(oldTab, newTab) { // Transitionne de tab
    const divs = document.querySelectorAll('.tab-pane');
    let newTabId = "";

    for (const char of newTab.attributes[3].textContent) { // En gros, j'ai récupéré la valeur contenue dans data-bs-target comme ça, parce que je n'arrivais pas autrement
        if (char !== "#") newTabId += char;
    }

    if (divs) {
        for (const div of divs) { // Ensuite j'ai parcouru chaque div possédant la classe tab-pane
            tabClass = div.classList;
            for (const classe of tabClass) {
                if (classe === "show") { // Si jamais la div possédait la classe show, on retire show et active (vu que les 2 vont de pair)
                    div.classList.toggle('show');
                    div.classList.toggle('active');
                    break;
                }
            }
            if (div.attributes[1].textContent === newTabId) { // J'ai relié les attributs id des divs et data-bs-toggle des boutons..
                div.classList.toggle('show');
                div.classList.toggle('active');
            }
        }

        oldTab.classList.toggle('active');
        newTab.classList.toggle('active');
    }
}

window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener('click', () => {
            const actualTab = detectTab();
            changeTab(actualTab, button)
        })
    }
})

// Commentaire : Je me suis compliqué la vie je crois, mais bon au moins ça fonctionne !
// Je t'ai laissé quelques explications pour que tu comprennes ce que j'ai voulu faire..