import { Component } from "@angular/core";
@Component({
    selector: "sinhvien",
    templateUrl: "./sinhvien.component.html",
    styleUrls: ["./sinhvien.component.css"]
})

export class SinhvienComponent {
    name:string = "Tran Van Toi";
    namsinh:number=1999;
    
    clickHinh() {
        console.log("Ban vua click !!!");
    }

    isLoggedIn:boolean = true;

    user = {
        name: "dien vien",
        tuoi: "ai"
    }
}