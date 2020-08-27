/* eslint-disable  import/no-named-as-default */
/* eslint-disable  import/no-named-as-default-member */

import Entity from './Entities';

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserPlayer');
    this.body.velocity.y = -200;
  }
}

export default PlayerLaser;
