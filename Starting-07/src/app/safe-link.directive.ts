import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a [appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onClick($event)'
    }
})

export class SafelinkDirective {
    queryParams = input('appSafeLink', { alias: 'appSafeLink' });

    constructor() {
        console.log('SafeLinkDirective initialized');
    }

    onClick(event: Event) {
        const wantsToNavigate = confirm('Are you sure you want to navigate to this link?');
        if (!wantsToNavigate) {
            event.preventDefault();
        }

        const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + "?from=" + this.queryParams();
    }
}