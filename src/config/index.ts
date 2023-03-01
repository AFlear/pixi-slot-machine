import { ConfigInterface } from './contract';

export const config: ConfigInterface = {
  gameWidth: 800,
  gameHeight: 600,
  reelsPosition: { x: 205, y: 50 },
  playButtonPosition: { x: 315, y: 375},
  totalReels: 5,
  reelSpinningCycles: 3,
  reelSpinningSpeedFactor: [25, 23, 19, 15, 10],
  reelShuffleSpinningSpeedFactor: false,
  totalReelCells: 7,
  reelVisibleCells: 3,
  reelCellHeight: 100,
  reelCellWidth: 65,
  reelVerticalPadding: 25,
  reelHorizontalMargin: 5,
  modalPosition: {x: 305, y:50},
};
