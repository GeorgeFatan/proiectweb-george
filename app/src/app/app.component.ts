import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'FilmeFlix';

  constructor(private elementRef: ElementRef,
              public auth: AngularFireAuth){}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('/assets/imagini/background/background.jpg')";
  }
}
