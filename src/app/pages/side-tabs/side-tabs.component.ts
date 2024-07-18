import { Component, OnInit } from '@angular/core';
import { dE } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-side-tabs',
  templateUrl: './side-tabs.component.html',
  styleUrls: ['./side-tabs.component.scss']
})
export class SideTabsComponent implements OnInit {

  ngOnInit(): void {
    this.openCity('News', null, 'green');
  }

  openCity(cityName: string, event: MouseEvent | null, color: string): void {

    const tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablink') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }

    const city = document.getElementById(cityName);
    if (city) {
      city.style.display = 'block';
    }

    if (event) {
      (event.target as HTMLElement).style.backgroundColor = color;
    } else {
      const defaultOpen = document.getElementById('defaultOpen');
      if (defaultOpen) {
        defaultOpen.style.backgroundColor = color;
      }
    }
  }

}
