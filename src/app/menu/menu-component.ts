import { Observable } from 'rxjs';
import {Actions} from './actions.enum';

export interface MenuComponent {
  data: any;
  actionRequired: Observable<Actions>;
}