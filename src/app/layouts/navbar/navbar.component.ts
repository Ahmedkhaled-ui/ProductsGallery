import {
  Component,
  computed,
  inject,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../shared/services/theme/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);

  checkMode = computed(() => this.themeService.checkMode());

  darkMode(): void {
    this.themeService.checkMode.set(true);
    this.themeService.enableDarkMode();
  }
  lightMode(): void {
    this.themeService.checkMode.set(false);
    this.themeService.enableLightMode();
  }
}
