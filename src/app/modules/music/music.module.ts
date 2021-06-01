import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InterpretListComponent } from './interpret-list/interpret-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    InterpretListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MusicRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    DragDropModule
  ],
  providers: [],
})
export class MusicModule { }
