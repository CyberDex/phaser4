import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function SetFromSphericalCoords (radius: number, phi: number, theta: number, out: IVec3 = new Vec3()): IVec3
{
    const sinPhiRadius = Math.sin(phi) * radius;

    return out.set(
        sinPhiRadius * Math.sin(theta),
        Math.cos(phi) * radius,
        sinPhiRadius * Math.cos(theta)
    );
}
