import { IVec4Like } from './IVec4Like';
import { Vec4 } from './Vec4';

export function AddScalar (a: IVec4Like, scalar: number, out: Vec4 = new Vec4()): Vec4
{
    return out.set(
        a.x + scalar,
        a.y + scalar,
        a.z + scalar,
        a.w + scalar
    );
}
