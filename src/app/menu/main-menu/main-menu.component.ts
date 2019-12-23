import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuComponent } from '../menu-component';
import { Actions } from '../actions.enum';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, MenuComponent {


  @Input() data: any;
  actionRequired$: Subject<Actions> = new Subject();

  ngOnInit() {
  }

  public get actionRequired(): Observable<Actions>{
    return this.actionRequired$;
  }

  newGame(){
    this.actionRequired$.next(Actions.NEW_GAME)
  }

}