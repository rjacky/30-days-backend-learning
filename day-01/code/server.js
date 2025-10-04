'use strict'; // Mengaktifkan mode ketat agar JavaScript lebih aman dan mencegah kesalahan umum

// Mengimpor modul Hapi dari package '@hapi/hapi'
const Hapi = require('@hapi/hapi');

// Fungsi async utama untuk inisialisasi server
const init = async () => {

    // Membuat instance server Hapi dengan konfigurasi port dan host
    const server = Hapi.server({
        port: 3000,          // Server akan berjalan di port 3000
        host: 'localhost'    // Dapat diakses melalui http://localhost:3000
    });

    //Data Dummy (sementara belum dari database)

    // Daftar kursus (course) contoh
    const courses = [
        { id: 1, title: 'Belajar Node.js', level: 'Beginner' },
        { id: 2, title: 'Pemrograman Backend dengan Hapi', level: 'Intermediate' },
    ];

    // Daftar pengguna (user) contoh
    const users = [
        { id: 1, name: 'Andi', role: "student" },
        { id: 2, name: 'Budi', role: "instructor" },
    ];

    // ==== ROUTING ====

    // Route: Halaman utama (root "/")
    // Method: GET
    // Deskripsi: Menampilkan pesan sambutan dari API LMS
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return { message: 'Selamat datang di API LMS berbasis Hapi.js 🎓' };
        }
    });

    // Route: Daftar kursus
    // Method: GET
    // Path: /api/courses
    // Deskripsi: Mengembalikan daftar kursus dari data dummy
    server.route({
        method: 'GET',
        path: '/api/courses',
        handler: (request, h) => {
            return { courses };
        }
    });

    // Route: Daftar pengguna
    // Method: GET
    // Path: /api/users
    // Deskripsi: Mengembalikan daftar pengguna dari data dummy
    server.route({
        method: 'GET',
        path: '/api/users',
        handler: (request, h) => {
            return { users };
        }
    });

    //menjalankan server
    await server.start(); // Menjalankan server Hapi
    console.log(`✅ Server berjalan di: ${server.info.uri}`); // Menampilkan URL server di terminal
};

// Memanggil fungsi inisialisasi untuk memulai server
init();
