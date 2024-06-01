import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

  tickerArray: any[] = [
    {
      ticketId: 'Jira-001',
      ticketName: 'Layout Page',
      status: 'In Progress'
    },
    {
      ticketId: 'Jira-004',
      ticketName: 'Password',
      status: 'Done'
    },
    {
      ticketId: 'Jira-002',
      ticketName: 'Ionic',
      status: 'To Do'
    },
    {
      ticketId: 'Jira-003',
      ticketName: 'React',
      status: 'In Progress'
    },
    {
      ticketId: 'Jira-005',
      ticketName: 'Single Page',
      status: 'Done'
    },
    {
      ticketId: 'Jira-006',
      ticketName: 'Star',
      status: 'To Do'
    },
    {
      ticketId: 'Jira-007',
      ticketName: 'News',
      status: 'In Progress'
    },
    {
      ticketId: 'Jira-008',
      ticketName: 'Stucture',
      status: 'Done'
    },
    {
      ticketId: 'Jira-009',
      ticketName: 'Login-page',
      status: 'To Do'
    },
    {
      ticketId: 'Jira-010',
      ticketName: 'homepage Page',
      status: 'In Progress'
    }
  ]
  currentItem: any;

  filterTicker(status: string) {
    return this.tickerArray.filter(m => m.status == status);
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const record = this.tickerArray.find(m => m.ticketId == this.currentItem.ticketId)
    if (record != undefined) {
      record.status = status;
    }

    this.currentItem = null;
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}

