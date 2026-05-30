import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a [appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onClick($event)'
    },
    hostDirectives: [LogDirective]
})

export class SafelinkDirective {
    queryParams = input('appSafeLink', { alias: 'appSafeLink' });
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('SafeLinkDirective initialized');
    }

    onClick(event: Event) {
        const wantsToNavigate = confirm('Are you sure you want to navigate to this link?');
        if (!wantsToNavigate) {
            event.preventDefault();
        }

        const address = this.hostElementRef.nativeElement.href;
        this.hostElementRef.nativeElement.href = address + "?from=" + this.queryParams();
    }
}