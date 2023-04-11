/**
 * =================
 * Matrix Transposer
 * =================
 *
 * [Description]
 * Matriks transpose adalah matriks yang diperoleh dengan cara menukar elemen pada baris
 * menjedi elemen pada kolom. Transpose sendiri dilakukan dengan meletakkan baris pada
 * matriks input menjadi kolom pada matriks output, begitu juga sebaliknya.
 * Untuk penjelasan lebih lanjut perhatikan contoh di bawah.
 *
 * [Instruction]
 * Buatlah sebuah function yang merubah posisi multidimensional array of numbers menjadi
 * posisi transpose-nya.
 *
 * [Example]
 * @input = [
 *    [1, 2, 3], -> baris 1
 *    [4, 5, 6], -> baris 2
 *    [7, 8, 9], -> baris 3
 * ]
 * @output = [
 *    [1, 4, 7],
 *    [2, 5, 8],
 *    [3, 6, 9],
 * ]   ↓  ↓  ↓
 *    b1 b2 b3
 *
 * [Rules]
 * 1. Tidak diperbolehkan menggunakan built-in function selain push dan unshift
 */

function transpose(matrix) {
  // Write your code here
  let a = matrix.length;
  let b = matrix[0].length;
  let ret = new Array(b);
  for (let i = 0; i < b; i++) {
    ret[i] = new Array(a);
  }
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      ret[j][i] = matrix[i][j];
    }
  }
  return ret;
}

let matrix1 = [
  [1, 2, 3, 4, 5],
  [6, 8, 4, 6, 1],
  [9, 7, 3, 1, 6],
];
console.log(transpose(matrix1));
console.log();
/*
[
[1,6,9],
[2,8,7],
[3,4,3],
[4,6,1],
[5,1,6]
]
*/

let matrix2 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(transpose(matrix2));
console.log();
/*
[
  [ 1, 1, 1 ],
  [ 2, 2, 2 ],
  [ 3, 3, 3 ]
]
*/

let matrix3 = [
  [7, 8, 4],
  [5, 2, 2],
  [9, 7, 7],
  [8, 2, 3],
  [6, 5, 3],
  [4, 6, 5],
  [1, 9, 4],
  [2, 0, 4],
  [4, 2, 2],
  [6, 0, 2],
  [7, 1, 3],
];
console.log(transpose(matrix3));
console.log();

/*
[
  [ 7, 5, 9, 8, 6, 4, 1, 2, 4, 6, 7 ],
  [ 8, 2, 7, 2, 5, 6, 9, 0, 2, 0, 1 ],
  [ 4, 2, 7, 3, 3, 5, 4, 4, 2, 2, 3 ]
]
*/
