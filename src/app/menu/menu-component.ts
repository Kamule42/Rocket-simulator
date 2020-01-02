import { Observable } from 'rxjs';
import {Actions} from './actions.enum';

export interface MenuComponent {
  actionRequired: Observable<Actions>;
}