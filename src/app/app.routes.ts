import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // Perhatikan bagian /:id -> ini adalah parameter dinamis
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'tambah-mhs',
    loadComponent: () => import('./tambah-mhs/tambah-mhs.page').then( m => m.TambahMhsPage)
  },
  {
    path: 'ubah-mhs/:id',
    loadComponent: () => import('./ubah-mhs/ubah-mhs.page').then( m => m.UbahMhsPage)
  },
  {
    path: 'hapus-mhs/:id',
    loadComponent: () => import('./hapus-mhs/hapus-mhs.page').then( m => m.HapusMhsPage)
  },

];
