/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { Line } from './Line';

/**
 * Clone the given line.
 *
 * @function Phaser.Geom.Line.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} source - The source line to clone.
 *
 * @return {Phaser.Geom.Line} The cloned line.
 */
export function Clone (source: ILine): Line
{
    return new Line(source.x1, source.y1, source.x2, source.y2);
}
