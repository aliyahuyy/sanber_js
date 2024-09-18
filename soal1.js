//untuk menerima inputan, install npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});

function hitungAkarPangkat2(x) {
    // Cek apakah input bilangan negatif
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }

    // Cek apakah input bilangan ganjil
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }

    // Jika input valid, hitung akar pangkat 2
    return `Akar pangkat 2 dari ${x} adalah ${Math.sqrt(x)}`;
}

// Input dari user
const userInput = prompt("Masukkan bilangan genap:"); // Mengambil input dari user

const x = parseInt(userInput); // Konversi input ke integer

if (isNaN(x)) {
    console.log("Input harus berupa angka!");
} else {
    console.log(hitungAkarPangkat2(x));
}