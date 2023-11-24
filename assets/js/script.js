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
