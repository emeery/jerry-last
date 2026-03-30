import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


const AllMaterialModules = [
    MatIconModule,
    MatToolbarModule
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule {}