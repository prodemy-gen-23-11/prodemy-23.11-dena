const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mahasiswa = Object();

const questions = [
    "NIM : ",
    "Nama : ",
    "Jurusan : "
];

function askQuestion(index) {
    if (index >= questions.length) {
        console.log(mahasiswa);
        rl.close();
        return;
    }

    rl.question(questions[index], (answer) => {
        switch (index) {
            case 0:
              mahasiswa.nim = answer;
              break;
            case 1:
              mahasiswa.nama = answer;
              break;
            case 2:
              mahasiswa.jurusan = answer;
              break;
          }
          
        askQuestion(index + 1);
    });
}

console.log("Silahkan isi data berikut ")
askQuestion(0);