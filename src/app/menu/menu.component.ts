import { Component, OnInit } from '@angular/core';

interface IMenuLink{
  routePath: string;
  linkName: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menu: Array<IMenuLink> = [
    
    
    {
      routePath: '/about-igem',
      linkName: 'About iGEMTo'
    },
    {
      routePath: '/our-projects',
      linkName: 'Our Projects'
    },
    {
      routePath: '/our-teams',
      linkName: 'Our Teams'
    },
    {
      routePath: '/contact-us',
      linkName: 'Contact Us'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
