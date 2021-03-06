/**
Copyright 2019 Google Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

/**
 * This class represents a badge which the player can earn throughout the game. Achieved badge is colored versus the pending badge is desaturated.
 */
class Badge extends PIXI.Sprite {

  constructor(badgeName) {
    super(PIXI.loader.resources[badgeName].texture);
  }

  pending() {
    const colorMatrix = new PIXI.filters.ColorMatrixFilter();
    this.filters = [colorMatrix];
    colorMatrix.desaturate();
  }
}