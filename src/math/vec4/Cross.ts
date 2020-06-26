import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

// Returns the cross-product of three vectors in a 4-dimensional space

export function Cross (u: IVec4Like, v: IVec4Like, w: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    const { x: ux, y: uy, z: uz, w: uw } = u;
    const { x: vx, y: vy, z: vz, w: vw } = v;
    const { x: wx, y: wy, z: wz, w: ww } = w;

    const A = vx * wy - vy * wx;
    const B = vx * wz - vz * wx;
    const C = vx * ww - vw * wx;
    const D = vy * wz - vz * wy;
    const E = vy * ww - vw * wy;
    const F = vz * ww - vw * wz;
    const G = ux;
    const H = uy;
    const I = uz;
    const J = uw;

    return out.set(
        H * F - I * E + J * D,
        -(G * F) + I * C - J * B,
        G * E - H * C + J * A,
        -(G * D) + H * B - I * A
    );
}
