import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, ProductListComponent, RoomListComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
