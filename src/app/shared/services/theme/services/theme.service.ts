import {
  Injectable,
  Inject,
  Renderer2,
  RendererFactory2,
  WritableSignal,
  signal,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly renderer: Renderer2;
  private readonly htmlElement: HTMLElement;
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  checkMode: WritableSignal<boolean> = signal(false);

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.htmlElement = this.document.documentElement;
    this.loadTheme();
  }

  // enableDarkMode(): void {
  //   this.renderer.addClass(this.htmlElement, 'dark');
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     localStorage.setItem('theme', 'dark');
  //   }
  // }

  // enableLightMode(): void {
  //   this.renderer.removeClass(this.htmlElement, 'dark');
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     localStorage.setItem('theme', 'light');
  //   }
  // }
  enableDarkMode(): void {
    this.renderer.addClass(this.htmlElement, 'dark');
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      localStorage.setItem('theme', 'dark');
    }
  }

  enableLightMode(): void {
    this.renderer.removeClass(this.htmlElement, 'dark');
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme(): void {
    if (this.htmlElement.classList.contains('dark')) {
      this.enableLightMode();
      this.checkMode.set(false);
    } else {
      this.enableDarkMode();
      this.checkMode.set(true);
    }
  }

  loadTheme(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.renderer.addClass(this.htmlElement, 'dark');
        this.checkMode.set(true);
      } else {
        this.renderer.removeClass(this.htmlElement, 'dark');
        this.checkMode.set(false);
      }
    }
  }

  // isDarkMode(): boolean {
  //   this.checkMode.set(false);
  //   return this.htmlElement.classList.contains('dark');
  // }
}
