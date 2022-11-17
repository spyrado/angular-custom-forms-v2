import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fornecedor',
    loadChildren: () => import('./pages/fornecedor/fornecedor.module').then(m => m.FornecedorModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then(m => m.ClienteModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
