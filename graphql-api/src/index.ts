import { bootstrap } from "vesper";
import { PointsController } from "./controller/PointsController";
import { Points } from "./entity/Points";
import { User } from "./entity/User";
import { GraphQLDate, GraphQLDateTime, GraphQlTime } from "graphql-iso-date";

bootstrap({
    port: 4000,
    controllers: [
        PointsController
    ],
    entities: [
        Points, User
    ],
    schemas: [
        __dirname + "/schema/**/*.graphql"
    ],
    customResolvers: {
        Date: GraphQLDate,
        Time: GraphQlTime,
        DateTime: GraphQLDateTime
    },
    cors: true
}).then(() => {
    console.log("Your app is up and running on http://localhost:4000. " +
        "You can use playground in development mode on http://localhost:4000/playground");
}).catch(error => {
    console.log(error.stack ? error.stack : error);
});