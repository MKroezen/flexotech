import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MarketSegmentsComponent } from './market-segments/market-segments.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MarketSegmentsComponent,
  ],
})
export class AppComponent implements OnInit {
  isSidebarActive = false;
  currentLanguage: string;

  constructor(
    @Inject(LOCALE_ID) private localeId: string,
    private router: Router
  ) {
    this.currentLanguage = this.localeId.split('-')[0];
  }
  ngOnInit() {
    // This method is called after the component is initialized
  }

  switchLanguage(lang: string) {
    // Navigate to the same route with a different language
    const currentRoute = this.router.url.split('?')[0];
    window.location.href = `/${lang}${currentRoute}`;
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  changeLanguage(lang: string) {
    window.location.href = `/${lang}/`;
  }
}
