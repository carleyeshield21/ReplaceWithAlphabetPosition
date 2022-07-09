// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase()
    // console.log(text)
    let arr = []
    for(i=0; i<=text.length-1; i++){
        // console.log(text[i])
        for(j=0; j<=alphabet.length-1; j++){
            // console.log(text[i], alphabet[j])
            if(text[i] == alphabet[j]){
                arr.push(j+1)
            }
        }
        // console.log('========')
    }
    console.log(text)
    console.log(arr.join(' '))
}
alphabetPosition("The sunset sets at twelve o' clock.")
console.log('========')
alphabetPosition("The narwhal bacons at midnight.")