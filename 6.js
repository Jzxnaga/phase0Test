/**
 * ============
 * Hitung Prima
 * ============
 *
 * [Instruction]
 * Buatlah sebuah function untuk menghitung ada berapa angka prima dari angka 0 sampai @num
 * dimana @num adalah angka input yang diberikan sebagai parameter untuk function hitungPrima kita
 *
 * [Rules]
 * 1. `Wajib menggunakan rekursif`
 * 2. Dilarang menambah dan merubah tipe data parameter
 * 3. Dilarang membuat function lain selain hitungPrima
 */

let cnt = 0;
let primaNum = new Array();

function hitungPrima(num) {
  // Write your code here
  if (num > 1) {
    let prima = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prima = false;
        break;
      }
    }
    if (prima) {
      cnt++;
      primaNum.push(num);
    }
    hitungPrima(num - 1);
  } else {
    if (cnt == 0) {
      console.log(cnt);
    } else {
      let strPrima = [primaNum[primaNum.length - 1]];
      for (let i = primaNum.length - 2; i >= 0; i--) {
        strPrima = strPrima + "," + primaNum[i];
      }
      console.log(cnt + " {karena " + strPrima + " adalah prima)");
      primaNum.length = 0;
    }
    cnt = 0;
  }
}

console.log(hitungPrima(1)); // 0
console.log();
console.log(hitungPrima(2)); // 1 (karena 2 adalah prima)
console.log();
console.log(hitungPrima(10)); // 4 (karena 2,3,5,7 adalah prima)
console.log();
console.log(hitungPrima(20)); // 8 (karena 2,3,5,7,11,13,17,19 adalah prima)
console.log();
