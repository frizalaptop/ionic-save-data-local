import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonInput, IonButton, IonText, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { DataMahasiswaService } from '../services/data-mahasiswa.service'; // Import Service

@Component({
  selector: 'app-hapus-mhs',
  templateUrl: './hapus-mhs.page.html',
  styleUrls: ['./hapus-mhs.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonItem, IonInput, IonButton, IonText, IonSelect, IonSelectOption,
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class HapusMhsPage implements OnInit {

  // Variabel untuk menampung form
  formMahasiswa!: FormGroup;

  idMahasiswa: string | null = '';

  mahasiswa: any; // Variabel untuk menampung data mahasiswa yang dihapus

  // PERBAIKAN DI SINI: Inject Service dan Router ke Constructor
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataMahasiswaService, // <--- Service Data
    private router: Router,                     // <--- Service Router (Pindah Halaman)
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Menangkap parameter 'id' dari URL
    this.idMahasiswa = this.route.snapshot.paramMap.get('id');

    if(!confirm('Yakin ingin menghapus data ini?')) {
      this.router.navigateByUrl('/home');
      return;
    }

    // Jika idMahasiswa tidak null, ambil data mahasiswa berdasarkan id tersebut
    if (this.idMahasiswa) {
      this.dataService.hapusData(this.idMahasiswa).then(() => {
        // Setelah data dihapus, pindah kembali ke halaman utama
        this.router.navigateByUrl('/home');
      });
    }
  }

  
}
