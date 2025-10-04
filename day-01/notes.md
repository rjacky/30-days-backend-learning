Apa itu backend?

Backend adalah bagian aplikasi atau website yang bekerja di balik layar, tidak terlihat oleh pengguna, dan bertugas mengelola data, menjalankan logika bisnis, serta memastikan server berfungsi optimal untuk mendukung frontend. Ini termasuk infrastruktur seperti server, basis data, API (Application Programming Interface), dan kode yang memproses data untuk memberikan fungsi aplikasi yang diminta oleh pengguna. 

Cara Kerja Backend?
1. **Permintaan Pengguna**: Ketika pengguna berinteraksi dengan frontend (misalnya, mengisi formulir atau mengklik tombol), permintaan tersebut dikirim ke backend.
2. **Pemrosesan Data**: Backend memproses permintaan tersebut, mengambil data dari basis data, dan melakukan tindakan yang diperlukan sesuai dengan logika aplikasi.
3. **Pengembalian Respo**n: Backend mengirimkan data atau hasil pemrosesan kembali ke frontend, yang kemudian menampilkannya kepada pengguna.

Komponen Penting dalam Request & Response?
- **URL** (Uniform Resource Locator): Alamat unik dari sumber daya yang dituju (misalnya, /api/users/123).
- **Method**: Jenis aksi yang ingin dilakukan. Yang paling umum adalah:
    - **GET**: Meminta data (contoh: mengambil daftar produk).
    - **POST**: Mengirim data baru untuk dibuat (contoh: mendaftar akun baru).
    - **PUT/PATCH**: Memperbarui data yang sudah ada (contoh: mengubah alamat profil).
    - **DELETE**: Menghapus data (contoh: menghapus postingan).
- **Headers**: Informasi tambahan tentang request/response (misalnya, tipe data yang dikirim).
- **Body/Payload**: Data utama yang dikirim (hanya ada di method seperti POST dan PUT).
- **Status Code**: Kode tiga digit dalam response yang menandakan hasil dari request.

Pembelajaran
- Mengenal framework Hapi.js.

- Memahami cara membuat server sederhana menggunakan Hapi.

- Belajar membuat routing (endpoint) dasar untuk API (GET request).

