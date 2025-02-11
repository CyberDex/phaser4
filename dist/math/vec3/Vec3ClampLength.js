import {Clamp} from "../Clamp";
import {GetVec3Length} from "./GetVec3Length";
import {Vec3} from "./Vec3";
import {Vec3DivideScalar} from "./Vec3DivideScalar";
import {Vec3Scale} from "./Vec3Scale";
export function Vec3ClampLength(a, min, max, out = new Vec3()) {
  const length = GetVec3Length(a);
  Vec3DivideScalar(a, length || 1, out);
  return Vec3Scale(out, Clamp(min, max, length), out);
}
