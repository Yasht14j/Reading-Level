const btn = document.querySelector("#submitButton");
const msg = document.querySelector("#message");

const result = document.querySelector("#result");




btn.addEventListener('click', () => {
    const messageTxt = msg.value;
    console.log("message: recieved");
    gradeLvlFinder(messageTxt);

});

// index = 0.0588 * L - 0.296 * S - 15.8
function gradeLvlFinder ( messageTxt ) {

let words = 1;
let letters = 0;
let sentences = 0;
let L;
let S;


for(let i = 0; i < messageTxt.length; i++){
    if (    (messageTxt.charCodeAt(i) > 64  && messageTxt.charCodeAt(i) < 91 ) ||  (messageTxt.charCodeAt(i) > 96  && messageTxt.charCodeAt(i) < 123)) {
        letters+=1;
    }  

    else if ( messageTxt[i] === " "){
        words += 1;
    }

    else if ( messageTxt[i] === "." || messageTxt[i] === "?" || messageTxt[i] === "!"){
        sentences += 1;
    }

}

L = letters/words * 100;
S =sentences/words * 100;

const grade = Math.round(0.0588 * L - 0.296 * S - 15.8);

if (grade < 1){
   result.textContent = " lower than grade 1";
}

else if ( grade > 12) {
    result.textContent= "above college level";
}

else {
    result.textContent= "This is grade " + grade + " level work";
}


}

