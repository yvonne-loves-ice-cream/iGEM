import { Component, Renderer2 ,Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  txt = '';
  wordIndex = 0;
  isDeleting = false;

  sponserList: string[] = [
  "../../assets/Sponsors/biozone.jpeg",
  "../../assets/Sponsors/CAGEF.png",
"../../assets/Sponsors/CSB.png",
"../../assets/Sponsors/DSIF.png",
"../../assets/Sponsors/EEB.jpeg",
"../../assets/Sponsors/genscript.png",
"../../assets/Sponsors/HMB.png",
"../../assets/Sponsors/IBBME.png",
"../../assets/Sponsors/Medicine_By_Design.png",
"../../assets/Sponsors/pioreactor.png",
"../../assets/Sponsors/shell.png",
"../../assets/Sponsors/skule-alumni.png",
"../../assets/Sponsors/SKULE.png",
"../../assets/Sponsors/SnapGene.png",
"../../assets/Sponsors/UC.png",
"../../assets/Sponsors/UofT_Eng.png",
"../../assets/Sponsors/UofT_Med.png"
];



  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {

  }



  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = "autotype.js";  
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }
}
