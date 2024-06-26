import categories from "@/app/api/[[...route]]/categories";
import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { handle } from "hono/vercel";
import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/accounts", accounts).route("categories", categories);

showRoutes(app, { verbose: true });

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
