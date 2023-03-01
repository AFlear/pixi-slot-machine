import * as PIXI from 'pixi.js';
import { ConfigInterface } from '../../config/contract';
import Button from '../UI/Button';

import playButtonActive from './assets/active.png';
import playButtonInactive from './assets/inactive.png';

class PlayButton extends Button {
  constructor(config: ConfigInterface) {
    super({
      activeTexture: PIXI.Texture.from('playButtonActive'),
      inactiveTexture: PIXI.Texture.from('playButtonActive'),
      disabledTexture: PIXI.Texture.from('playButtonInactive')
    });
    this.position.set(config.playButtonPosition.x, config.playButtonPosition.y);
    this.width = 128;
    this.height = 200;
  }
}

PIXI.Loader.shared.add('playButtonActive', playButtonInactive);
PIXI.Loader.shared.add('playButtonInactive', playButtonActive);
PIXI.Loader.shared.add('playButtonDisabled', playButtonActive);

export default PlayButton;
