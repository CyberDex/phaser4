import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function Floor (a: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    const { x, y, z, w } = a;

    return out.set(
        Math.floor(x),
        Math.floor(y),
        Math.floor(z),
        Math.floor(w)
    );
}
