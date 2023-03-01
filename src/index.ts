import * as PIXI from 'pixi.js';
import { config } from './config';
import PlayButton from './components/PlayButton';
import Reels from './components/Reels';
import Background  from './assets/background.jpg';
import Won from './assets/won.png'
import Modal from './components/Modal'
import './style.css';

const { gameWidth, gameHeight } = config;
let modal = null;
function createApplication(): PIXI.Application {
  const app = new PIXI.Application({
    width: gameWidth,
    height: gameHeight
  });
  app.renderer.resize(window.innerWidth, window.innerHeight);
  app.stage.scale.x = window.innerWidth / gameWidth;
  app.stage.scale.y = window.innerHeight / gameHeight;
  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.stage.scale.x = window.innerWidth / gameWidth;
    app.stage.scale.y = window.innerHeight / gameHeight;
  });
  return app;
}

function loadAssets(onComplete: () => void): void {
  const loader = PIXI.Loader.shared;
    PIXI.Loader.shared.add('background', Background);
    PIXI.Loader.shared.add('won', Won)
    loader.onComplete.once(onComplete);
  loader.load();
}

function render(app: PIXI.Application) {
  document.body.appendChild(app.view);
}
function showModal(){
    modal.triggerModal();
}
window.onload = () =>
  loadAssets(() => {
    const app = createApplication();
    const stage = app.stage;
    const back = PIXI.Sprite.from('background');
    back.x = 0;
    back.y = 0;
    back.width = gameWidth;
    back.height = gameHeight;
    stage.addChild(back);
    const button = new PlayButton(config);
    stage.addChild(button);
    const reels = new Reels(config, app.ticker, showModal);
    stage.addChild(reels);
    modal = new Modal();
    modal.addChild(PIXI.Sprite.from('won'));
    stage.addChild(modal);
    button.on('click', function (this: PlayButton, that: Modal) {
      if (!reels.areSpinning()) {
        this.setDisabled();
        reels.spin(() => {
          this.setInactive();
        });
      }
    });


    render(app);
  });

