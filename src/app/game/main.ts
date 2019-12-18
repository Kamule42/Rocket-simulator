
import {Engine, Color} from 'excalibur';

import { Earth } from './gameItems/planets/earth';

export class Game{
  public start(canvas: string){
    
    let engine = new Engine({
        canvasElementId: canvas,
        width: 1000,
        height: 1000            
    });
    let earth = new Earth(200,0);

    engine.add(earth);
    engine.backgroundColor = Color.fromHex("0A0863");
    engine.start();
  }
}