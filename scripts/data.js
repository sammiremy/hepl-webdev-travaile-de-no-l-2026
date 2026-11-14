const story = {
 
    text0: {
        text: "",
        next: "text1"
    },
 
    text1: {
        text: "Un dimanche matin de brume , [name], [gender] de [age] ans, flânait entre les stands d'une brocante,  comme chaque semaine.",
        next: "text2"
    },
 
    text2: {
        text: "Tout au fond, sous une bâche, une vieille marchande vendait une montre à gousset sans aiguilles. « Elle ne donne pas l'heure, dit-elle. Elle donne des secondes chances. »",
        next: "text3"
    },
 
    text3: {
        text: "Quarante euros. La montre était étrangement chaude au creux de la main de {name}, et <player:il/elle> hésita longtemps.",
        choices: [
            { text: "l'acheter sans discuter", next: "text4a" },
            { text: "marchander d'abord",      next: "text4b" }
        ]
    },
 
    text4a: {
        text: "{name} paya sans discuter. La marchande eut un sourire triste : « Personne ne marchande jamais ce genre d'objet. Personne ne le regrette tout de suite non plus. »",
        next: "text5"
    },
 
    text4b: {
        text: "{name} proposa vingt euros. La vieille accepta sans broncher, et ce fut le plus inquiétant : elle semblait attendre cette phrase depuis longtemps.",
        next: "text5"
    },
 
    text5: {
        text: "Le soir, dans sa chambre, la montre se mit à battre. Deux aiguilles pâles apparurent sur le cadran : une pour l'heure, l'autre pour une date qui n'existait pas encore.",
        next: "text6"
    },
 
    text6: {
        text: "On sonna à la porte. C'était [npc1_name], [npc1_gender] qui fréquentait toutes les brocantes de la région, et qui n'avait pas l'air de venir pour le thé : « Cette montre m'appartient. Je la cherche depuis dix ans. »",
        next: "text7"
    },
 
    text7: {
        text: "{npc1_name} tendit la main, la voix tremblante. Derrière ce regard, il y avait quelque chose entre la colère et la peur.",
        choices: [
            { text: "lui rendre la montre",       next: "text8a" },
            { text: "nier et la cacher",          next: "text8b" }
        ]
    },
 
    text8a: {
        text: "{name} tendit la montre. {npc1_name} la prit avec soulagement, puis la remit aussitôt dans la main de {name} : « Elle ne reste qu'à celui qui l'a achetée. Moi, je ne peux que la regarder. »",
        next: "text9"
    },
 
    text8b: {
        text: "{name} nia tout en bloc. {npc1_name} eut un rire sec et resta planté devant la porte : « Mentir à quelqu'un qui connaît cet objet... mauvaise idée. »",
        next: "text9"
    },
 
    text9: {
        text: "Pour prouver ses dires, {npc1_name} posa un doigt sur le cadran : « Fais tourner l'aiguille d'une heure en arrière. Une heure, pas plus. Tu verras. »",
        next: "text10"
    },
 
    text10: {
        text: "La montre battait de plus en plus fort, comme un cœur qui s'impatientait. Le tic-tac remplissait toute la pièce.",
        choices: [
            { text: "tourner l'aiguille d'une heure", next: "text11a" },
            { text: "attendre et écouter {npc1_name}", next: "text11b" }
        ]
    },
 
    text11a: {
        text: "{name} tourna l'aiguille. Le monde vacilla : la tasse de thé refroidie fumait de nouveau, le soleil remontait le long du mur. {name} avait remonté une heure, en gardant tous ses souvenirs.",
        next: "text12"
    },
 
    text11b: {
        text: "{name} attendit. {npc1_name} finit par avouer qu'un an plus tôt, <npc1:il/elle> avait utilisé cette montre pour sauver quelqu'un, et que depuis, le prix se payait lentement.",
        next: "text12"
    },
 
    text12: {
        text: "Chaque tour d'aiguille volait quelque chose : un souvenir, une ride, un jour de vie. {name} regarda sa main : elle paraissait déjà plus vieille que {age} ans.",
        next: "text13"
    },
 
    text13: {
        text: "La montre réclamait une décision. {npc1_name} se tut. Dehors, les cloches sonnaient une heure qui n'existait plus.",
        choices: [
            { text: "tout effacer et remonter avant l'achat",   next: "text14a" },
            { text: "garder la montre et prendre la place de la marchande", next: "text14b" },
            { text: "briser la montre",                          next: "text14c" }
        ]
    },
 
    text14a: {
        text: "{name} tourna l'aiguille jusqu'au bout, encore et encore. Les heures défilèrent à l'envers : la sonnette, le soir, la brocante, la bâche, la vieille marchande.",
        next: "end1"
    },
 
    text14b: {
        text: "{name} referma la main sur la montre. Elle fit entendre un battement paisible, comme un accord. {npc1_name} recula d'un pas, comprenant ce qui venait de se passer.",
        next: "end2"
    },
 
    text14c: {
        text: "{name} posa la montre sur le sol et leva le talon. {npc1_name} ferma les yeux. Le verre éclata.",
        next: "end3"
    },
 
    end1: {
        text: "FIN 1 : Le dimanche d'avant. {name} se retrouva devant le stand, quarante euros dans la poche. La vieille marchande sourit. « Vous cherchez quelque chose ? » {name} haussa les épaules, passa son chemin, et ne sut jamais pourquoi son cœur battait si fort ce matin-là."
    },
 
    end2: {
        text: "FIN 2 : La marchande sous la bâche. Des années plus tard, un dimanche de brume, {name} tient un petit stand au fond d'une brocante. Quand quelqu'un s'arrête devant une montre sans aiguilles, {name} sourit : « Elle ne donne pas l'heure. »"
    },
 
    end3: {
        text: "FIN 3 : Le temps qui passe. Plus de secondes chances, plus de retours en arrière. {name} et {npc1_name} balayèrent ensemble les éclats de verre. Dehors, il pleuvait, l'heure était la bonne, et pour la première fois depuis longtemps, elle ne pouvait plus être changée."
    },
 
};

let inputConfig = {
    name:        { type: "text",   value: "Thibaut" },
    age:         { type: "text",   value: "21" },
    gender:      { type: "select", value: ["un garçon", "une fille", "un humain"] },
    npc1_name:   { type: "text",   value: "Mathilde" },
    npc1_gender: { type: "select", value: ["un collectionneur", "une collectionneuse", "un passionné"] },
};
 
let playerData = {
    name: "",
    gender: "",
    age: "",
    npc1_name: "",
    npc1_gender: "",
};

let allCharacter = {
    player : {
        get name()   { return playerData.name; },
        get gender() { return playerData.gender; }
    },
    npc1 : {
        get name()   { return playerData.npc1_name; },
        get gender() { return playerData.np1_gender; }
    }
};



const maleAcronym = ["un garçons", "m"];
const femlaAcronym = ["une fille", "f"];
const GenderNeutralAcronym = ["un hummain", "n"]


 