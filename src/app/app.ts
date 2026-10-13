import { Component, DestroyRef, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgClass, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // TODO: Remove the open day popup and its image after 8 November 2026.
  private static readonly openDayCutoff = Date.parse('2026-11-07T23:00:00Z'); // 8 Nov, 00:00 in Paris
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isMenuOpen = signal(false);
  protected readonly isOpenDayNoticeVisible = signal(Date.now() < App.openDayCutoff);

  @ViewChild('openDayDialog')
  set openDayDialog(dialog: ElementRef<HTMLDialogElement> | undefined) {
    if (dialog && this.isOpenDayNoticeVisible()) {
      queueMicrotask(() => {
        if (dialog.nativeElement.isConnected && !dialog.nativeElement.open) {
          dialog.nativeElement.showModal();
        }
      });
    }
  }

  constructor() {
    if (this.isOpenDayNoticeVisible()) {
      let timeout: number;
      const checkCutoff = () => {
        const remaining = App.openDayCutoff - Date.now();
        if (remaining <= 0) {
          this.isOpenDayNoticeVisible.set(false);
          return;
        }
        timeout = window.setTimeout(checkCutoff, Math.min(remaining, 2_147_483_647));
      };
      checkCutoff();
      this.destroyRef.onDestroy(() => window.clearTimeout(timeout));
    }
  }

  protected closeOpenDayNotice(): void {
    this.isOpenDayNoticeVisible.set(false);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
}
