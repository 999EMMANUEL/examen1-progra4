import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import App from "./App";
import Home from "./ComponentHome/Home";
import CarParts from "./ComponentCarParts/CarParts";

const rootRoute = createRootRoute({ component: App });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const carPartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/repuestos",
  component: CarParts,
});

const routeTree = rootRoute.addChildren([homeRoute, carPartsRoute]);

export const router = createRouter({ routeTree });
