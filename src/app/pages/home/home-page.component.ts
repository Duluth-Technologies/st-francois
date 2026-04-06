import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild('featureVideo')
  private readonly featureVideo?: ElementRef<HTMLVideoElement>;

  protected isFeatureVideoOpen = false;

  protected openFeatureVideo(): void {
    this.isFeatureVideoOpen = true;

    requestAnimationFrame(() => {
      const video = this.featureVideo?.nativeElement;
      if (!video) {
        return;
      }

      video.currentTime = 0;
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;
      void video.play();
    });
  }

  protected closeFeatureVideo(): void {
    const video = this.featureVideo?.nativeElement;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    this.isFeatureVideoOpen = false;
  }

  @HostListener('document:keydown.escape')
  protected onEscapeKey(): void {
    if (this.isFeatureVideoOpen) {
      this.closeFeatureVideo();
    }
  }
}
