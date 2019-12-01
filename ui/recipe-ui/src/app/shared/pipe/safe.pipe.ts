import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * pipe interface
 */
@Pipe({name: 'safeHtml'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * this is the override of the standard pipe transform method
   * @param value string to be transformed
   */
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
