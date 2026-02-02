import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'; // 1. Import Preferences

@Injectable({
  providedIn: 'root'
})
export class DataMahasiswaService {

  // Kunci penyimpanan (ibarat nama laci)
  private KEY_MAHASISWA = 'data_mahasiswa_app';

  constructor() { }

  // FUNGSI 1: Membaca Data
  async getData() {
    // Ambil data mentah dari penyimpanan
    const { value } = await Preferences.get({ key: this.KEY_MAHASISWA });

    // Jika ada datanya, kembalikan dalam bentuk Objek (JSON Parse)
    // Jika kosong, kembalikan array kosong []
    return value ? JSON.parse(value) : [];
  }

  // FUNGSI 2: Menambah Data Baru
  async tambahData(mahasiswaBaru: any) {
    // 1. Ambil data lama dulu
    const dataLama = await this.getData();

    // 2. Tambahkan data baru ke array data lama
    // (Beri ID otomatis berdasarkan timestamp agar unik)
    mahasiswaBaru.id = Date.now();
    dataLama.push(mahasiswaBaru);

    // 3. Simpan kembali ke Preferences dalam bentuk String (JSON Stringify)
    return await Preferences.set({
      key: this.KEY_MAHASISWA,
      value: JSON.stringify(dataLama)
    });
  }

  // FUNGSI 3: Mengubah Data Berdasarkan ID
  async ubahData(idMahasiswa: string | null, mahasiswaBaru: any) {
    // 1. Ambil data lama dulu
    const dataLama = await this.getData();

    // 2. Cari index mahasiswa yang ingin diubah berdasarkan ID
    const index = dataLama.findIndex((mhs: any) => mhs.id === parseInt(idMahasiswa!));

    // 3. Jika ditemukan, ganti datanya
    if (index !== -1) {
      mahasiswaBaru.id = parseInt(idMahasiswa!); // Pastikan ID tetap sama
      dataLama[index] = mahasiswaBaru;
    }

    // 4. Simpan kembali ke Preferences dalam bentuk String (JSON Stringify)
    return await Preferences.set({
      key: this.KEY_MAHASISWA,
      value: JSON.stringify(dataLama)
    });   
  }

  // FUNGSI 4: Menghapus Data Berdasarkan ID
  async hapusData(idMahasiswa: string | null) {
    // 1. Ambil data lama dulu
    const dataLama = await this.getData();

    // 2. Cari index mahasiswa yang ingin diubah berdasarkan ID
    const index = dataLama.findIndex((mhs: any) => mhs.id === parseInt(idMahasiswa!));

    // 3. Jika ditemukan, hapus datanya
    if (index !== -1) {
      dataLama.splice(index, 1); // Hapus 1 elemen pada index tersebut
    }
    
    // 3. Simpan kembali ke Preferences dalam bentuk String (JSON Stringify)
    return await Preferences.set({
      key: this.KEY_MAHASISWA,
      value: JSON.stringify(dataLama)
    });   
  }
}
