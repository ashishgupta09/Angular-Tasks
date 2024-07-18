import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  item = [
    {
      title: "Section 1",
      Content: 'This is new form to create the form and this is new starting with new !'
    },
    {
      title: "Section 2",
      Content: 'This is new form to create the form and this is new starting with new !'
    },
    {
      title: "Section 3",
      Content: 'This is new form to create the form and this is new starting with new !'
    }
  ]

  activeIndex: number | null = null;

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }
  }

}
