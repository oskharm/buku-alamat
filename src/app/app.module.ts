import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Material design component
import {MatToolbarModule} from '@angular/material/toolbar'; // material Toolbar
import {MatButtonModule} from '@angular/material/button'; //  material Button

// Daftar Card Alamat
import {MatCardModule} from '@angular/material/card';  // material Card List
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; // material Menu

// Dialog Penambahan Alamat
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
  ],

  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatToolbarModule, // toolbar
    MatButtonModule, // button

    // Card List
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule, 

    // Dialog Penambahan Alamat
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

