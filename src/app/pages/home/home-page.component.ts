import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild('heroVideo')
  private readonly heroVideo?: ElementRef<HTMLVideoElement>;

  protected isMuted = true;

  protected toggleMuted(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) {
      this.isMuted = !this.isMuted;
      return;
    }

    const nextMuted = !this.isMuted;
    video.muted = nextMuted;
    video.defaultMuted = nextMuted;

    if (!nextMuted) {
      video.volume = 1;
      void video.play();
    }

    this.isMuted = nextMuted;
  }
}
