// ==================================================================================================
console.log("Hello, World!");

// Statement
var lala1;
let lala2;
const lala3;

// Expression
5;
3 + 7;

// ==================================================================================================

// Ini merupakan komentar satu baris, kode di bawah tidak akan dijalankan
// console.log("Halo!");

/* Ini merupakan komentar dengan lebih dari satu baris
Teks apapun yang berada disini akan dijadikan komentar.
Ketika menggunakan ini, jangan lupa untuk menutupnya.
*/

// ==================================================================================================

let fullName =
  let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */

// ==================================================================================================