# 🌟 Random Quote Generator (Bright Multi-Color Theme)

Aplikasi web responsif berbasis **Vanilla JavaScript** untuk menampilkan kutipan motivasi dan teknologi secara acak. Fitur unggulan proyek ini adalah kemampuannya untuk mengubah palet warna latar belakang (*ambient background*) dan tombol secara selaras setiap kali kutipan baru dipicu.

Proyek ini sangat direkomendasikan untuk siswa SMK yang ingin mendalami arsitektur data *Array Array of Objects* dan rekayasa manipulasi gaya visual melalui JavaScript DOM.

---

## 🚀 Fitur Utama

* **Dynamic Theme Transition:** Perubahan warna latar belakang didukung oleh properti CSS `transition` sehingga perpindahan warna antar-kutipan terasa halus dan tidak kaku di mata.
* **Anti-Duplication Algorithm:** Menggunakan struktur kontrol `do-while loop` untuk mendeteksi indeks acak, memastikan kutipan yang sama tidak akan muncul dua kali berturut-turut.
* **Semantic Layout Structure:** Menggunakan tag semantik HTML5 seperti `<main>` dan `<footer>` demi menjaga standar keterbacaan struktur web (*SEO & Accessibility friendly*).
* **Instant Load Ready:** Dilengkapi *event listener* `DOMContentLoaded` sehingga pengguna langsung disuguhi kutipan acak saat pertama kali membuka halaman tanpa melihat teks kosong.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Wadah tata letak tanda kutip, teks, dan tombol aksi
├── style.css        # Efek transasi warna halus dan ornamen bayangan pop art
└── javascript.js    # Kumpulan database kutipan, fungsi pengacak, dan pengubah visual
