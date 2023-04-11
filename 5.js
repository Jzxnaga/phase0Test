/**
 * =======
 * MatchIn
 * =======
 *
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 *
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                         | Job Experience (years) |
 * | ------------ | --------------------------------------- | ---------------------- |
 * | PT XYZ       | XML, Kotlin, PHP, C++, Javascript, HTML |            4           |
 * | PT ABC       | Python, HTML, PHP                       |            3           |
 * | PT HIJ       | C++, Javascript                         |            2           |
 * | PT KLM       | Golang, Javascript, JQuery              |            2           |
 * | PT JKL       | Python, HTML, PHP                       |            8           |
 *
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 *
 * [Example]
 *  @applicant = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'C++'],
 *    experience: 2
 *  }
 *
 * Penjelasan:
 * 1. Tidak masuk PT XYZ => pengalaman < 4 tahun
 * 2. Tidak masuk PT ABC => tidak memiliki skill yang cocok dan pengalaman < 3 tahun
 * 3. Masuk PT HIJ => memiliki skill yang cocok (C++, javascript) dan pengalaman 2 tahun
 * 4. Tidak masuk PT KLM => hanya memiliki skill javascript
 * 5. Tidak masuk PT JKL => hanya memiliki skill HTML dan pengalaman < 8 tahun
 *
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['C++', 'Javascript'] => `sesuai urutan dari perusahaan`
 *   }
 * ]
 *
 * [Rules]
 * 1. DILARANG menggunakan built in function apapun kecuali .push() dan .unshift()
 * 2. Output `harus sesuai dengan contoh` yang telah diberikan
 */

let xyz = {
  skills: ["XML", "Kotlin", "PHP", "C++", "Javascript", "HTML"],
  experience: 4,
};
let abc = {
  skills: ["Python", "HTML", "PHP"],
  experience: 3,
};
let hij = {
  skills: ["C++", "Javascript"],
  experience: 2,
};
let klm = {
  skills: ["GoLang", "Javascript", "JQuery"],
  experience: 2,
};
let jkl = {
  skills: ["PHP", "Python", "HTML"],
  experience: 8,
};

function matchIn(applicant) {
  // Write your code here
  let ret = new Array();
  let matchedSkillsCount = [0, 0, 0, 0, 0];

  //xyz
  if (applicant.experience >= xyz.experience) {
    let matchedSkills = new Array();
    for (let i = 0; i < xyz.skills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (xyz.skills[i] == applicant.skills[j]) {
          matchedSkillsCount[0]++;
          matchedSkills.push(xyz.skills[i]);
        }
      }
    }
    if (matchedSkillsCount[0] >= 2) {
      let curRet = {
        companyName: "PT XYZ",
        matchedSkills,
      };
      ret.push(curRet);
    }
  }

  //abc
  if (applicant.experience >= abc.experience) {
    let matchedSkills = new Array();
    for (let i = 0; i < abc.skills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (abc.skills[i] == applicant.skills[j]) {
          matchedSkillsCount[1]++;
          matchedSkills.push(abc.skills[i]);
        }
      }
    }
    if (matchedSkillsCount[1] >= 2) {
      let curRet = {
        companyName: "PT ABC",
        matchedSkills,
      };
      ret.push(curRet);
    }
  }
  //hij
  if (applicant.experience >= hij.experience) {
    let matchedSkills = new Array();
    for (let i = 0; i < hij.skills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (hij.skills[i] == applicant.skills[j]) {
          matchedSkillsCount[2]++;
          matchedSkills.push(hij.skills[i]);
        }
      }
    }
    if (matchedSkillsCount[2] >= 2) {
      let curRet = {
        companyName: "PT HIJ",
        matchedSkills,
      };
      ret.push(curRet);
    }
  }
  //klm
  if (applicant.experience >= klm.experience) {
    let matchedSkills = new Array();
    for (let i = 0; i < klm.skills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (klm.skills[i] == applicant.skills[j]) {
          matchedSkillsCount[3]++;
          matchedSkills.push(klm.skills[i]);
        }
      }
    }
    if (matchedSkillsCount[3] >= 2) {
      let curRet = {
        companyName: "PT KLM",
        matchedSkills,
      };
      ret.push(curRet);
    }
  }
  //jkl
  if (applicant.experience >= jkl.experience) {
    let matchedSkills = new Array();
    for (let i = 0; i < jkl.skills.length; i++) {
      for (let j = 0; j < applicant.skills.length; j++) {
        if (jkl.skills[i] == applicant.skills[j]) {
          matchedSkillsCount[4]++;
          matchedSkills.push(jkl.skills[i]);
        }
      }
    }
    if (matchedSkillsCount[4] >= 2) {
      let curRet = {
        companyName: "PT JKL",
        matchedSkills,
      };
      ret.push(curRet);
    }
  }
  return ret.length > 0 ? ret : "You are unqualified!";
}

var applicant1 = {
  name: "Alpha",
  skills: ["Android", "Kotlin", "XML", "Python", "PHP"],
  experience: 5,
};
console.log(matchIn(applicant1));
console.log();
// [
//   { companyName: 'PT XYZ', matchedSkills: [ 'XML', 'kotlin', 'PHP' ] },
//   { companyName: 'PT ABC', matchedSkills: [ 'python', 'PHP' ] },
// ]

var applicant2 = {
  name: "Beta",
  skills: ["PHP", "HTML", "CSS", "JQuery", "Python"],
  experience: 1,
};
console.log(matchIn(applicant2));
console.log();
// You are unqualified!

var applicant3 = {
  name: "Charlie",
  skills: ["HTML", "Photoshop", "CSS", "Javascript"],
  experience: 7,
};
console.log(matchIn(applicant3));
console.log();
// [
//   { companyName: 'PT XYZ', matchedSkills: [ 'javascript', 'HTML' ] }
// ]

var applicant4 = {
  name: "Delta",
  skills: ["Python", "PHP", "C++", "Javascript"],
  experience: 3,
};
console.log(matchIn(applicant4));
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'python', 'PHP' ] },
//   { companyName: 'PT HIJ', matchedSkills: [ 'C++', 'javascript' ] }
// ]
