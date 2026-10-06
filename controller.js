// controller.js
import users from "./data.js";

const index = () => {
  // Menampilkan data menggunakan map()
  console.log("=== DAFTAR DATA USERS ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
};

const store = (user) => {
  // Menambahkan data menggunakan push()
  users.push(user);
  console.log(`[STORE] Berhasil menambahkan data: ${user.nama}`);
};

const destroy = () => {
  // Menghapus data terakhir menggunakan pop()
  const deletedUser = users.pop();
  if (deletedUser) {
    console.log(`[DESTROY] Berhasil menghapus data: ${deletedUser.nama}`);
  } else {
    console.log(`[DESTROY] Tidak ada data untuk dihapus.`);
  }
};

export { index, store, destroy };
