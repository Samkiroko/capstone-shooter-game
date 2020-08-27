/* eslint-disable  import/no-named-as-default */
/* eslint-disable  import/no-named-as-default-member */

import Entity from './Entities';

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserEnemy0');
    this.body.velocity.y = 200;
  }
}

export default EnemyLaser;
