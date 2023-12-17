import { createServer, Model, hasMany, Server, Response } from "miragejs";
import trips from "./trips.json";

const ITEMS_PER_PAGE = 10;

export function makeServer({ environment = "development" } = {}): Server {
  return createServer({
    environment,
    models: {
      trip: Model.extend({
        advantages: hasMany(),
      }),
      advantage: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/trips", (schema, request) => {
        const page = request.queryParams.page ? parseInt(request.queryParams.page as string) : 1;
        const itemsPerPage = ITEMS_PER_PAGE;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedTrips = trips.slice(startIndex, endIndex);

        return {
          trips: paginatedTrips,
          totalPages: Math.ceil(trips.length / itemsPerPage),
        };
      });

      this.get("/trip/:tripId", (schema, request) => {
        const { tripId } = request.params;
        const trip = trips.find((t) => String(t.id) === tripId);
        return trip || new Response(404, {}, { error: "Trip not found" });
      });
    },
  });
}
