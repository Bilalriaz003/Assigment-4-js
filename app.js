// QUESTION 1
var userInput = prompt("Enter a single character:");
var result = userInput;
console.log(result);
if (character.length !== 1) {
    return "Invalid input. Please enter a single character.";
}


// Check if the character is a digit
if (asciiValue >= 48 && asciiValue <= 57) {
    document.write("The input is a number.");
}

// Check if the character is an uppercase letter
if (asciiValue >= 65 && asciiValue <= 90) {
    document.write("The input is an uppercase letter.");
}

// Check if the character is a lowercase letter
if (asciiValue >= 97 && asciiValue <= 122) {
    document.write("The input is a lowercase letter.");
}

// If none of the above, it is an invalid character
else{
document.write( "The input is neither a number nor a letter.");
}


// QUESTION 2
var num1=+prompt("Enter a character 1");
var num2=+prompt("Enter a character 2");
if(num1>num2){
    document.write(num1);
}
else if (num1==num2){
    document.write(num1+" is equals to "+num2);

}
else{
    document.write(num2);
}


// QUESTION 3
var num1=+prompt("Enter a character 1");

if(num1>0){
    document.write("Number is +");
}
else if (num1<0){
    document.write("Number is negative");

}
else{
    document.write("Number is zero");
}



// QUESTION 4
var num1=prompt("Enter a character 1");
if(num1=="a" || num1=="e" || num1=="i" ||  num1=="o" ||  num1=="u"  ){
    document.write(true);
}
else{
    document.write(false);
}



// QUESTION 5
var pass="123abc";
var ask=prompt("Enter your password");
if(ask.length==0){
     ask=prompt("please Enter your password");
     if(ask==pass){
        document.write("Corect! The password you entered matches the original password");
    }
    else{
        document.write("Incorrect password")
    }
}
else if(ask==pass){
    document.write("Corect! The password you entered matches the original password");
}
else{
    document.write("Incorrect password")
}


