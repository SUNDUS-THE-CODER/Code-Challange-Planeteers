import { rest } from "msw";
import { data } from "./data";

let planeteers = data;

export const handlers = [
  rest.get("http://localhost:8003/planeteers", (req, res, ctx) => {
    return res(ctx.json(planeteers));
  })
];
