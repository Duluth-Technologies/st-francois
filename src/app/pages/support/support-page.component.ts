import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [],
  templateUrl: './support-page.component.html',
  styleUrl: './support-page.component.css'
})
export class SupportPageComponent {
  @ViewChild('donationVideo')
  private readonly donationVideo?: ElementRef<HTMLVideoElement>;

  protected isMuted = true;

  protected toggleMuted(): void {
    const video = this.donationVideo?.nativeElement;
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
