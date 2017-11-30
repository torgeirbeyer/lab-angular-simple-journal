import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';
import { JournalEntry } from '../../models/journal-entry';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journalEntryList: JournalEntry[];
  journalEntry: JournalEntry;


  constructor(private journalEntriesService: JournalEntriesService) { }

  ngOnInit() {
    this.journalEntriesService.getJournalEntries().subscribe((journalEntryList) => this.journalEntryList = journalEntryList);
  }

}
