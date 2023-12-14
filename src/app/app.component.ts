import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,HerosectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day3';

  name:string='merin';

  changenew(){
    alert('The name is'+this.name)
  }

districts: any=[
  {
    id:1,
    title:"Trivandrum",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVHoJl-ltXPYzewI9eGLk_ctf8_JX7wdeulCITRFd9Q&s"
  }
];







}
