/**
 * ======
 * Pacman
 * ======
 *
 * [Desription]
 * Anda sedang bermain game pacman. Function pacman menerima input berupa
 * array yang merupakan field untuk pacman berjalan dan mengembalikan output
 * berupa array field yang telah ditelusuri oleh Pacman.
 * Disini karakter Pacman direpresentasikan sebagai 'C'.
 *
 * Disini ada papan permainan (yang direpresentasikan sebagai array).
 * papan permainan -> ['.', '.', '*', '$']
 *
 * - '.' merupakan jalan biasa yang dapat dilewati pacman
 * - '*' merupakan makanan
 * - '$' merupakan musuh
 *
 * Jika pacman bertemu titik, maka dia akan berjalan melewatinya.
 * Jika pacman bertemu makanan, dia akan makan makanan tersebut dan tempat tersebut akan menjadi titik '.'
 * Jika pacman bertemu dengan '$' maka pacman akan langsung mati.
 *
 * [Example]
 * 1.
 * @Input = ['.','*','*','*']
 * Pacman akan menelusuri papan permainan, dia akan bertemu '*' dan
 * makan makanan tersebut lalu melanjutkan perjalanan sampai index terakhir papan, maka:
 * @Output = ['.','.','.','C']
 *
 * 2.
 * @Input = ['.', '*', '$', '*']
 * Pacman berjalan terus, tapi dia mati karena bertemu dengan '$', maka:
 * @Output = ['.', '.', '$', '*']
 *
 * 3.
 * @Input = ['.', '*', '*', '.', '$', '*', '*']
 * Disini, ketika pacman berada pada index ke 4 dari array tersebut,
 * dia bertemu dengan sebuah monster '$'. Maka, pacman di titik tersebut langsung mati, dan
 * papan permainan tidak berubah setelah pacman menyentuh musuh tersebut, sehingga:
 * @Output = ['.', '.', '.', '.' , '$', '*', '*']
 *
 * [Rules]
 * 1. `Wajib menuliskan pseudocode` atau -50
 * 2. Dilarang menggunakan iterators (forEach, map, filter, reduce)
 * 3. Dilarang menggunakan built-in function: indexOf, lastIndexOf, some, every, find, findIndex, includes
 */

function pacman(array) {
  /**
   * dari awal sampe akhri array di cek
   * kalau . atau * C pindah ke tempat itu jadi yang belakangnya jadi . doank
   * kalau ketemu $ dia ttp kesana tapi mati makanya jadi $ dan belakangnya jadi .
   */
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ".") {
      array[i] = "C";
    } else if (array[i] == "*") {
      array[i] = "C";
    } else {
      array[i] = "$";
      array[i - 1] = ".";
      break;
    }
    if (i > 0) {
      array[i - 1] = ".";
    }
  }
  return array;
}
console.log(pacman(["*", ".", ".", "*"]));
// ['.', '.', '.', 'C']

console.log(pacman([".", "*", "$", "*"]));
//['.', '.', '$', '*']

console.log(pacman([".", ".", ".", ".", "*", "*", "*", "*"]));
//['.', '.', '.', '.', '.', '.', '.', 'C']

console.log(pacman([".", "*", "*", ".", "$", "*", "*"]));
//['.', '.', '.', '.' , '$', '*', '*']

console.log(pacman([]));
//[]
