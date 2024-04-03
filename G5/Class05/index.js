console.log("Hello from typescript!");
// PRIMITIVE DATA TYPES
var message = "Hello world!";
console.log(message);
var fullName = "John Doe";
var isDone = true;
//const age: number = "29"; // it will return error
var age = 29;
// *** Type inference ***
// let company: string
var company = "Symphony";
company = "OpenAI";
// company = 5 // it will return error. we cannot assign value that is number to variable that expects value to be string
// Please do not do this at home
var randomValue = "Some random value"; // string
randomValue = 10; // number
randomValue = 10 > 5; //boolean
// *** Type with functions
function addNumbers(numberOne, numberTwo) {
    return "".concat(numberOne + numberTwo);
}
// console.log(addNumbers(10, "2")) // error
console.log(addNumbers(10, 2));
var buildName = function (firstName, lastName, middleName, //default value
age, // optional (it may be provided or may not =) )
// gender: string // error (we cannot put mendatory parameter after optional one)
email) {
    if (middleName === void 0) { middleName = ""; }
    if (age) {
        return "".concat(firstName, " ").concat(middleName, " ").concat(lastName, " is ").concat(age, " years old.");
    }
    return "".concat(firstName, " ").concat(middleName, " ").concat(lastName, ".");
};
console.log(buildName("John", "Doe"));
console.log(buildName("Bob", "Bobski", "Lee"));
console.log(buildName("Sarah", "Ann", "", 26));
var createUser = function (username, password, age, gender) {
    var userEnitity = {
        username: username,
        password: password,
        age: age,
        gender: gender,
    };
    console.log("User is created:", userEnitity);
};
createUser("some_username", "some_password", undefined, "male");
createUser("some_username_2", "some_password_2");
