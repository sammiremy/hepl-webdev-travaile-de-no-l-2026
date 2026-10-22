const page = document.querySelector("#text_to_print");
const nextBtn = document.querySelector("#next_page");
const backBtn = document.querySelector("#back_page");
const choicesBtnParent = document.querySelector("#choices_to_print");
const DelayBetweenWord = 20 //milisecond
const history = []


const playerData = {
    name: "",
    gender : "",
    age : "",
    npc1_name : "",
    np1_gender : "",


};

const inputConfig = {
    name:   { type: "text",   value: "sam" },
    age:    { type: "text",   value: "20" },
    gender: { type: "select", value: ["un garçons", "une fille", "un hummain"] },


}

const allCharacter = {
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


const story = {

    text0:{
        text:"",
        next:"text1"
    },
    text1: {
        text: "[name] était [gender] comme les autres de [age] ans",
        next: "text2"
          
    },

    text2: {
        text:"jusqu'aux jour où <player:il/elle> se transforma en plâtre. à l'age de {age} ans. C'était vraiment {gender} formidable",
        next: "text3"

  
    },

    text3:{
        text:" dans son dernier soupir, <player:il/elle> formula un ultime souait",
              choices: [
            {
                text: "se bourrer la geule",
                next: "text4"
            },
            {
                text: "être triste",
                next: "text5"
            }
        ]

    },

    text4: {
        text:"<player:il/elle> décida de se bourrer la geule "

    },
    text5: {
        text:"<player:il/elle> décida de rester seul dans sa tristesse "

  
    },

};


let curentPage = "text0"
let userChoices = "";
let node = story[curentPage]



function replaceVariableInText(text){
  let allVariable =  text.match(/{[^}]+}/g);

  if(allVariable == null){
    return text
  }
  for(let i=0;i<allVariable.length;i++){

    //this code remove the { } by startingt at the first character and ending at the last -1, so it only keep the variabe name
    let variableName = allVariable[i].substring(1, allVariable[i].length -1)
    
    if(playerData[variableName] != undefined){
      
        //this replace the found variable by it's value in the dictionary
        text = text.replace(allVariable[i], playerData[variableName])
    }else{

        console.error("there is no entry in the dictionary for a variable display");        
    }

  }
  return text


}

function createAnInput(inputName){

    const value = inputConfig[inputName];

    if(value == undefined){
        return "Not Defined : " + inputName
    }



    //----------text---------
    if( value.type == "text"){

        const inputToSend = document.createElement("input");
        if(playerData[inputName] == ""){

            inputToSend.placeholder =inputConfig[inputName].value;
        }else{

            inputToSend.value = playerData[inputName]
        }
        inputToSend.type = "text";
        inputToSend.classList.add("userInputInText");

        inputToSend.addEventListener("input", function(){
                if (inputToSend.value == null){
                    return;
                } 
            
                playerData[inputName] = inputToSend.value
                //inputToSend.readOnly = true;
                

            


            });
            return inputToSend
        
    }

    if( value.type == "select"){

        const placeHolderValue = inputConfig[inputName].value;
        const allChoices = inputConfig[inputName].value
        const selectToSend = document.createElement("select");

        selectToSend.classList.add("userSelectInText");

        for(let i = 0 ;i < allChoices.length ; i++){
            let option = document.createElement("option");
            //console.log(allChoices[i])
            option.value = allChoices[i]
            option.textContent = allChoices[i]
            selectToSend.appendChild(option);
        

        }
        
        if(playerData[inputName] ===""){
            playerData[inputName] = allChoices[0];

        }
        selectToSend.value = playerData[inputName]

        selectToSend.addEventListener("change", function(){
    
        playerData[inputName] = selectToSend.value;
    

    });

    return selectToSend;
    }





 
    

    
  

}


function chooseGenderToPrint(curentWord){

    
    const whoIsTalking = curentWord.split(":")[0]

    const allGenderChoices = curentWord.split(":")[1].split("/");

    if(maleAcronym.includes(allCharacter[whoIsTalking].gender)){
        //male
        if(allGenderChoices[0] == null || allGenderChoices[0] == undefined){
            return "error in gender"
        }
        return allGenderChoices[0]

    }
    if(femlaAcronym.includes(allCharacter[whoIsTalking].gender)){
        //female
        if(allGenderChoices[1] == null || allGenderChoices[1] == undefined){
            return "error in gender"
        }
        return allGenderChoices[1]

    }
    if(GenderNeutralAcronym.includes(allCharacter[whoIsTalking].gender)){
        //gender neutral

         if(allGenderChoices[2] == null || allGenderChoices[2] == undefined){
            return "error in gender"
        }
        return allGenderChoices[2]


    }

    
    
}

function findGenderOfCharacter(whoIsTalking){

    const gender = characters[whoIsTalking].gender


}




function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

async function PrintPage(textToPrint, choices){

    await removePage();
    page.textContent = " "

    textToPrint = replaceVariableInText(textToPrint)
    wordList = textToPrint.split(" ")
    wordCount = wordList.length;

    for(i =0;i<wordCount;i++){
        let curentWord = wordList[i]
     
        if(i%10 == 0){
            row = document.createElement("span")
            page.appendChild(row)

        }
        const span = document.createElement("span");

        //------input------
        if(curentWord.match(/^\[(\w+)\](.*)$/)){
            
            span.append(" ", createAnInput(curentWord.substring(1, curentWord.length -1)," " ))
            row.append(span)
            continue

        }


        //------gender-----

        if(curentWord.match(/^<(\w+):([^/>]*)\/([^/>]*)>(.*)$/)){
            span.append(" ",chooseGenderToPrint(curentWord.substring(1,curentWord.length -1)), " ")
            row.append(span)
            continue

        }
        span.classList.add("word");
        span.textContent=curentWord;
        row.append(" ",span," ");

        await wait(DelayBetweenWord)
    }

    if(choices == 1){
        allChoices = story[curentPage].choices
    
        for(let i = 0 ;i<allChoices.length;i++){

        const choicesButton = document.createElement("button")
        choicesButton.classList.add("choices")
        choicesButton.textContent = allChoices[i].text
        choicesButton.value = allChoices[i].next
        
        choicesButton.addEventListener("click", function(){

            if(checkIfCanAdvanceInStory()){
                
                userChoices = choicesButton.value;
                progressInStory();

            }


        });
        choicesBtnParent.append(choicesButton)
        }

      
        


    }


    // console.log("children of page = "+page.childElementCount)




}

async function removePage(){
    while(page.childElementCount > 0){
        lastChild = page.lastChild
        page.removeChild(lastChild)
        await wait(DelayBetweenWord);

    }
    // console.log("all children has been remove")

}


function findNexText(){

    if(userChoices != ""){
        curentPage = userChoices;
        userChoices = "";
    }

    if("next" in node){
        curentPage = node.next
    }
    
    updateNode()

}

function checkIfCanAdvanceInStory(){

    const allUserChoices = document.querySelectorAll("input, select");
    if(allUserChoices.length == 0){
        return true
    }

    for(let i=0;i<allUserChoices.length;i++){
        if(allUserChoices[i].value.trim("") ===""){
            return false
        }
    }

    return true;
}

function updateNode(){
    node = story[curentPage]
}
function clearChoicesButton(){
    choicesBtnParent.replaceChildren()

}
function printNode(){
   if("choices" in node){
        PrintPage(node.text, 1)

    }else{
        //go there if the user has no choices to make
        PrintPage(node.text, 0)
    
    }
    
}

function progressInStory(){
    history.push(curentPage)
    clearChoicesButton()
    findNexText()
    printNode()
    console.log(history)

}





nextBtn.addEventListener("click", function(event){

    if(checkIfCanAdvanceInStory()){
        progressInStory();
    }
    



});

backBtn.addEventListener("click", function(event){
    if(history.length === 0) return;
    curentPage = history.pop();
    clearChoicesButton()
    updateNode();
    printNode();
});