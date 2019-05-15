// See: https://www.w3schools.com/js/js_variables.asp
//   Sepecially see 'JavaScript Identifiers' section.
// All JS variables must be identified with unique names.
// These uniques names are called identifiers.
// A valide identifier name must follow these rules:
//   Must begin with letter, '$', or _
//   May contain letters, digits, underscores, and dollar signes.
//   Must be unique in scope of definition,
//     i.e. you can't declare two variables with the same name at the same
//     level of scope.
//     Since they are case sensitive 'Dog' and 'dog' are unique.
//   Cannot be resurved work

let _ = 'an underscore';
let $ = 'a dollar sign';
let a = 'a letter';

console.log('an underscore:' + _);
console.log('a dollar sign:' + $);
console.log('a letter:' + a);

let __ = 'underscores';
let $$ = 'dollar signs';
let aa = 'letters';

console.log('underscores:' + __);
console.log('dollar signs:' + $$);
console.log('letters:' + aa);

// This will generate an error message.
//    const return = 'return';
//    ^^^^^^
//    SyntaxError: Unexpected token return
// Wish it said "Can't use reserve work, like keywords, for identifier."
//
// The following lines cause build errors:
// const return = 'return';
// const if = 'if';

let myIdentifierName = 'myIdentifierName';

// Error because it is already declared
//let myIdentifierName = 'myIdentifier';

var myID1 = 'original value';
// This works and is bad.  I have accidently declared the variable twice
// but the 
var myID1 = 'new values';
