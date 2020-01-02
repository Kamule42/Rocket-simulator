import { Component, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuComponent } from '../menu-component';
import { Actions } from '../actions.enum';

@Component({
  selector: 'app-new-game-menu',
  templateUrl: './new-game-menu.component.html',
  styleUrls: ['./new-game-menu.component.css']
})
export class NewGameMenuComponent implements OnInit, MenuComponent {


  @Output('actionRequired')
  actionRequired$: Subject<Actions> = new Subject();

  constructor() { }



  public get actionRequired(): Observable<Actions>{
    return this.actionRequired$;
  }


  ngOnInit() {
  }

}