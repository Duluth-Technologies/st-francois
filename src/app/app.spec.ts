import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    vi.spyOn(Date, 'now').mockReturnValue(Date.parse('2026-11-01T12:00:00Z'));
    // jsdom does not implement the native dialog API.
    Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
      configurable: true,
      value: function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
      }
    });
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).showModal;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shows the open day flyer and closes it when requested', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.open-day-dialog img')?.getAttribute('src')).toBe(
      '/media/portes-ouvertes-2026.jpg'
    );
    expect(compiled.querySelector('.open-day-dialog')?.hasAttribute('open')).toBe(true);

    (compiled.querySelector('.open-day-dialog-close') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(compiled.querySelector('.open-day-dialog')).toBeNull();
  });

  it('does not show the flyer from 8 November in Paris', () => {
    vi.spyOn(Date, 'now').mockReturnValue(Date.parse('2026-11-07T23:00:00Z'));
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('.open-day-dialog')).toBeNull();
  });
});
