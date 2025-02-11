import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFilter,
  faTshirt,
  faBoxOpen,
  faTag,
  faTree,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-market-segments',
  imports: [FontAwesomeModule],
  templateUrl: './market-segments.component.html',
  styleUrl: './market-segments.component.css',
})
export class MarketSegmentsComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;
  constructor(library: FaIconLibrary) {
    library.addIcons(faFilter, faTshirt, faBoxOpen, faTag, faTree, faLightbulb);
  }

  ngAfterViewInit() {
    this.setupFadeInEffect();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.cards.forEach((card) => observer.observe(card.nativeElement));
  }

  private setupFadeInEffect() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));
  }
}
