import {Bezier} from "../Bezier";
import {Vec2} from "./Vec2";
export function Vec2Bezier(a, b, c, d, t, out = new Vec2()) {
  return out.set(Bezier(t, a.x, b.x, c.x, d.x), Bezier(t, a.y, b.y, c.y, d.y));
}
