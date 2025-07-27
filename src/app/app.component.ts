import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowBiteService } from './shared/services/Flowbite/flow-bite.service';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ThemeService } from './shared/services/theme/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ProductsGallery';
  constructor(private flowbiteService: FlowBiteService) {}
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.loadTheme();
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
