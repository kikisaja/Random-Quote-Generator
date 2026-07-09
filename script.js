// --- 1. DATA KUTIPAN & WARNA (ARRAY OF OBJECTS) ---
const KUMPULAN_DATA = [
    {
        teks: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.",
        author: "Steve Jobs",
        warna: "#ff477e" // Pink Pop
    },
    {
        teks: "Jangan takut gagal. Kegagalan adalah langkah awal menuju pemahaman yang lebih dalam.",
        author: "Bapak Guru RPL",
        warna: "#06d6a0" // Hijau Mint
    },
    {
        teks: "Kode yang rapi dan terstruktur mencerminkan pikiran programmer yang terorganisir.",
        author: "Pepatah Coding",
        warna: "#00f0ff" // Cyan Pop
    },
    {
        teks: "Mulai dari mana saja kamu berada. Gunakan apa yang kamu punya. Lakukan apa yang kamu bisa.",
        author: "Arthur Ashe",
        warna: "#ffb703" // Kuning Pop
    },
    {
        teks: "Bukan karena hari ini indah kita bahagia, tetapi karena kita bahagia maka hari ini menjadi indah.",
        author: "Anonim",
        warna: "#ff97b7" // Pastel Rose
    }
];

// --- 2. SELEKSI ELEMEN DOM ---
const txtQuote = document.getElementById("text-quote");
const txtAuthor = document.getElementById("author-quote");
const btnNext = document.getElementById("btn-next");

// Menyimpan indeks kutipan terakhir agar tidak muncul kembar berurutan
let indeksTerakhir = -1;

// --- 3. LOGIKA UTAMA GENERATOR ---
function tampilkanKutipanAcak() {
    let indeksAcak;

    // Lakukan perulangan acak jika angka acak yang keluar sama dengan indeks sebelumnya
    do {
        indeksAcak = Math.floor(Math.random() * KUMPULAN_DATA.length);
    } while (indeksAcak === indeksTerakhir);

    // Kunci indeks terpilih saat ini
    indeksTerakhir = indeksAcak;

    // Ambil object data berdasarkan indeks terpilih
    const dataTerpilih = KUMPULAN_DATA[indeksAcak];

    // Ganti isi teks di UI HTML
    txtQuote.innerText = dataTerpilih.teks;
    txtAuthor.innerText = "— " + dataTerpilih.author;

    // Ganti warna tema secara dinamis lewat DOM Style
    document.body.style.backgroundColor = dataTerpilih.warna;
    btnNext.style.backgroundColor = dataTerpilih.warna;
}

// --- 4. EVENT LISTENERS ARSITEKTUR ---
btnNext.addEventListener("click", tampilkanKutipanAcak);

// Jalankan fungsi sekali saat halaman web baru pertama kali dimuat
document.addEventListener("DOMContentLoaded", tampilkanKutipanAcak);
