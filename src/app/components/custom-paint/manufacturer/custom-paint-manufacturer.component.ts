import { Component, OnInit } from '@angular/core';
import { CustomPaintManufacturer } from "app/models/custom-paint/custom-paint-manufacturer";
import { CustomPaintService } from "app/services/custom-paint.service";
import { Title } from "@angular/platform-browser";
import { AppSettings } from "app/app.settings";

@Component({
    moduleId: module.id,
    selector: 'custom-paint-manufacturer',
    templateUrl: '../../../views/custom-paint-manufacturer.component.html',
})
export class CustomPaintManufacturerComponent implements OnInit {
    manufacturers: CustomPaintManufacturer[] = [];
    mediaPath: string = '/assets/images/';
    
    constructor(private service: CustomPaintService, private titleService: Title) { }

    ngOnInit() {
        AppSettings.setTitle('Cores Personalizadas', this.titleService);
        this.getManufacturers();
     }

    getManufacturers(){
        this.service.getManufacturers()
        .then(manufacturers => this.manufacturers = manufacturers)
        .catch(error => console.log(error));
    }
}