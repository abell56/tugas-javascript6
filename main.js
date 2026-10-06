// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("--- 1. Menampilkan Data Awal ---");
  index();

  console.log("\n--- 2. Menambahkan Minimal 2 Data (Proses Push) ---");
  const user1 = {
    nama: 'Gilang Pratama',
    umur: 23,
    alamat: 'Jl. Gatot Subroto No. 88, Bogor',
    email: 'gilang.pratama@example.com'
  };

  const user2 = {
    nama: 'Anisa Rahmawati',
    umur: 22,
    alamat: 'Jl. Asia Afrika No. 101, Bandung',
    email: 'anisa.rahmawati@example.com'
  };

  // Tambah dua data
  store(user1);
  store(user2);

  console.log("\n--- 3. Menampilkan Data Setelah Ditambahkan ---");
  index();

  console.log("\n--- 4. Menghapus Data Terakhir ---");
  destroy();

  console.log("\n--- 5. Menampilkan Data Setelah Dihapus ---");
  index();
};

main();
