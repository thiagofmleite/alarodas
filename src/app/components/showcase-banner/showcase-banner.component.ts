import { Component, OnInit, Input, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ShowCaseBanner } from "app/models/showcase/showcase-banner";
import { AppSettings } from "app/app.settings";
import { Globals } from "app/models/globals";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'showcase-banner',
    templateUrl: '../../views/showcase-banner.component.html',
    styleUrls: ['../../styles/showcase-banner.component.css']
})
export class ShowcaseBannerComponent implements OnInit {
    
    @Input() banners: ShowCaseBanner[];
    
    mediaPath: string;
    items: string[] = [];
    options = {items: 1, dots: false, navigation: true}
    carouselClasses: string[] = ['owl-theme', 'owl-carousel', 'list-style-none'];
    
    constructor(private globals: Globals) { }

    ngOnInit() {
        this.mediaPath = `${this.globals.store.link}/static/showcases/`;

        this.banners.forEach(banner => {
            this.items.push(`${this.mediaPath}${banner.fullBanner}`);
        });
    }

    ngAfterViewChecked() {
        if(this.banners
		&& $('#main-banner ul').children('li').length > 0 
		&& $('#main-banner ul').children('.owl-stage-outer').length == 0){
        
            $("#main-banner ul").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
            });
		}   
        
    }

    isMobile(): boolean{
        return AppSettings.isMobile();
    }

}
