import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';
import { JournalEntry } from '../../models/journal-entry';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  journalEntry: JournalEntry;

  constructor(public journalEntryService: JournalEntriesService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.journalEntryService.getJournalEntry(params.id)
      .subscribe(journalEntry => this.journalEntry = journalEntry);
    });
  }

}
