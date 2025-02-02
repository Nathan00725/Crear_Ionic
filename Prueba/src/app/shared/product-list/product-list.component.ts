import { Component, OnInit } from '@angular/core';
import {IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [IonButton],
})
export class ProductListComponent {

userName: string ='Nathan Lopez'; 
totalStudents: number = 100;
saveDisabled: boolean = true
}