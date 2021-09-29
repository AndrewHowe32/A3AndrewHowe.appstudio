let pass1 = prompt("Enter a password: ")
let pass2 = prompt("Enter a alternative password: ")

function compare(pass1, pass2) {
   let equal = pass1.localeCompare(pass2)
   return (equal == 0) ? "The passwords are the same": "The passwords are not the same"
}

console.log(compare(pass1, pass2))