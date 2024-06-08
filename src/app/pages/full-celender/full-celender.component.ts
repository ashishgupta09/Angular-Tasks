import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-full-celender',
  templateUrl: './full-celender.component.html',
  styleUrls: ['./full-celender.component.scss']
})
export class FullCelenderComponent implements OnInit {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-06-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  ngOnInit(): void {
    
  }

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
 
}
