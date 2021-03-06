import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { InterpretDetailComponent } from './interpret-detail/interpret-detail.component';
import { InterpretListComponent } from './interpret-list/interpret-list.component';
import { DndItemComponent } from './dnd-item/dnd-item.component';


@NgModule({
  declarations: [
    DndItemComponent,
    InterpretListComponent,
    InterpretDetailComponent,
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
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MusicRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class MusicModule { }
