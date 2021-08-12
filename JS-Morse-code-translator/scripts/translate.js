import {cypher, reverseCypher} from "./cypher.js";

function translator(input, id){
    
    
    let outPut = [null, null];
    console.clear();
    
    //if something has been modified in the letters box
    if(id === "letters") {
        let wordsArray = [];
        let morseArray = [];
        let lettersString = "";
        let morseOutString = "";
        
        lettersString = input;
        
        //check to make sure the most recently input character is supported
        const myRE = /[a-z]|[A-Z]|[0-9]|[ .,?'!]/;
        if(!myRE.test(input[input.length-1])){
            lettersString = lettersString.slice(0, -1); //this removes the unsupported character that has just been input so that it never displays
            outPut[0] = "-1";
            alert(`The character \"${input[input.length-1]}\" is not supported`);
        }
        
        lettersString = lettersString.toLowerCase(); //uppercase and lowercase have the same morse codes
        wordsArray = lettersString.split(" ");        
        wordsArray.forEach(word => {
            let characters = word.split("");

            characters.forEach(char => {
                morseArray.push(cypher[char] + " "); //add one space between letters
            });

            morseArray.push("   "); //add three more spaces between words (there is already one after the final letter)
        });
        
        morseOutString = morseArray.join("");
        morseOutString = morseOutString.slice(0, -4); //remove the four trailing spaces
        outPut[1] = morseOutString;
    }


    //if something has been modified in the Morse Code box
    if(id === "morse") {

        let lettersArray = [];
        let morseWords = [];
        let morseString = "";
        let lettersOutString = [];
        let spaceFlag = false;
        morseString = input;

        //check to make sure the most recently input character is either a dot, dash or space
        const myRE = /[.\- ]/;
        if(input.length > 0 && !myRE.test(input[input.length-1])){
            morseString = morseString.slice(0, -1); //this removes the unsupported character that has just been input so that it never displays
            alert("Please enter only the characters \".\", \"-\" and \"space\" in this box");
            outPut[1] = "-1"; 
        }


        morseWords = morseString.split("    "); //split the morse code into words

        morseWords.forEach(word => {
            let characters = word.split(" "); //split the words into Morse character codes

            characters.forEach(char => {
                if(reverseCypher[char]){
                    lettersArray.push(reverseCypher[char]);
                }
                else if (char)  {
                    lettersArray.push("[ ]");
                }
            });

            lettersArray.push(" "); //add a space between the words
        });

        lettersOutString = lettersArray.join("");      
        lettersOutString = lettersOutString.slice(0, -1); //remove the trailing space
        outPut[0] = lettersOutString;
    }
    console.log(outPut);
    return outPut;
}

export {translator}