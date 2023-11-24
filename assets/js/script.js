const CLASS_SELECTOR = document.getElementById("class");
const SELECT_CHAMP = document.getElementById("campeao");
const GEN_CHAMP_LISTENER = document.getElementById("gerar_campeao");
const CHAMP_IMAGE = document.getElementById("champ_image");
//
const ALL_CHAMPIONS = ["Androxus", "Ash", "Atlas",
"Azaan", "Barik", "Betty La Bomba", "Bomb King", "Buck", 
"Caspian", "Cassie", "Corvus", "Dredge", "Drogoz", "Evie",
"Fernando", "Furia", "Grohk", "Grover", "Imani", "Inara",
"Io", "Jenos", "Kasumi", "Khan", "Kinessa", "Koga", "Lex",
"Lian", "Lillith", "Maeve", "Makoa", "Mal'Damba", "Moji",
"Nyx", "Octavia", "Omen", "Pip", "Raum", "Rei", "Ruckus",
"Saati", "Seris", "Sha Lin", "Skye", "Strix", "Talus",
"Terminus", "Tiberius", "Torvald", "Tyra", "Vatu", "VII",
"Viktor", "Vivian", "Vora", "Willo", "Yagorath", "Ying",
"Zhin"];

const TK_CHAMPIONS = ["Ash", "Atlas", "Azaan", "Barik", "Fernando", "Inara", "Khan",
"Makoa", "Nyx", "Raum", "Ruckus", "Terminus", "Torvald", "Yagorath"];

const DMG_CHAMPIONS = ["Betty-La-Bomba", "Bomb-King", "Cassie","Dredge", "Drogoz",
"Imani", "Kinessa", "Lian", "Octavia", "Omen", "Saati", "Sha-Lin", "Strix", "Tiberius",
"Tyra", "Viktor", "Vivian", "Willo"];

const SUP_CHAMPIONS = ["Corvus", "Furia", "Grohk", "Grover", "Io", "Jenos", "Lillith",
"Mal'Damba", "Pip", "Rei", "Seris", "Ying"];

const FLANK_CHAMPIONS = ["Androxus", "Buck", "Caspian", "Evie", "Kasumi", "Koga", "Lex", "Maeve",
"Moji", "Skye", "Talus", "Vatu", "VII", "Vora", "Zhin"];


GEN_CHAMP_LISTENER.addEventListener("click", function sortear() {
    let champSort;
    let champList;
//
    if (CLASS_SELECTOR.value === "Todas") {
        champList = ALL_CHAMPIONS;
    } else if (CLASS_SELECTOR.value === "Tanque") {
        champList = TK_CHAMPIONS;
    } else if (CLASS_SELECTOR.value === "Suporte") {
        champList = SUP_CHAMPIONS;
    } else if (CLASS_SELECTOR.value === "Dano") {
        champList = DMG_CHAMPIONS;
    } else if (CLASS_SELECTOR.value === "Flanco") {
        champList = FLANK_CHAMPIONS;
    }
    champSort = champList[Math.floor(Math.random() * champList.length)];
    SELECT_CHAMP.innerText = champSort.replace("-", " ");
    SELECT_CHAMP.innerText = champSort.replace(/-/g, " ", "g");


    CHAMP_IMAGE.src = `https://webcdn.hirezstudios.com/paladins/champion-icons/${champSort.toLowerCase()}.jpg`;

    return champSort;
})



/*     Original coding

GEN_CHAMP_LISTENER.addEventListener("click", function sortear() {
    
    if (CLASS_SELECTOR.value === "Todas") {
        let champSortAll = ALL_CHAMPIONS[Math.floor(Math.random() * ALL_CHAMPIONS.length)];
        SELECT_CHAMP.innerText = champSortAll;
        return champSortAll;
    } else if (CLASS_SELECTOR.value === "Tanque") {
        let champSortTk = TK_CHAMPIONS[Math.floor(Math.random() * TK_CHAMPIONS.length)];
        SELECT_CHAMP.innerText = champSortTk;
        return champSortTk;
    } else if (CLASS_SELECTOR.value === "Suporte") {
        let champSortSup = SUP_CHAMPIONS[Math.floor(Math.random() * SUP_CHAMPIONS.length)];
        SELECT_CHAMP.innerText = champSortSup;
        return champSortSup;
    } else if (CLASS_SELECTOR.value === "Dano") {
        let champSortDmg = DMG_CHAMPIONS[Math.floor(Math.random() * DMG_CHAMPIONS.length)];
        SELECT_CHAMP.innerText = champSortDmg;
        return champSortDmg;
    } else if (CLASS_SELECTOR.value === "Flanco") {
        let champSortFlk = FLANK_CHAMPIONS[Math.floor(Math.random() * FLANK_CHAMPIONS.length)];
        SELECT_CHAMP.innerText = champSortFlk;
        return champSortFlk;
    }
}) */

/*      Refactor 1:

GEN_CHAMP_LISTENER.addEventListener("click", function sortear() {
    const champClasses = {
        "Todas": ALL_CHAMPIONS,
        "Tanque": TK_CHAMPIONS,
        "Suporte": SUP_CHAMPIONS,
        "Dano": DMG_CHAMPIONS,
        "Flanco": FLANK_CHAMPIONS
    }
    let champSort = champClasses[CLASS_SELECTOR.value][Math.floor(Math.random() * champClasses[CLASS_SELECTOR.value].length)]
    SELECT_CHAMP.innerText = champSort;
    return champSort;
}) */
