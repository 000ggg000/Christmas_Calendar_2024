import { routes } from './data.js';

function calculateDistanceForRoute(route) {
    let totalDistance = 0;

    for (let i = 0; i < route.length -1; i++) {
        totalDistance = totalDistance + calculateDistance(route[i], route[i+1]);
    }

    return totalDistance;
}

function calculateDistance(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function findShortestRoute(routes) {
    let shortestRouteId = -1;
    let shortestRouteDistance = Infinity;
    let length = 0;

     for (let i = 0; i < routes.length; i++) {
        length = calculateDistanceForRoute(routes[i]);
        if (length < shortestRouteDistance) {
            shortestRouteId = i;
            shortestRouteDistance = length;
        }
    }

    return shortestRouteDistance;
}

function findLongestRoute(routes) {
    let longestRouteId = -1;
    let longestRouteDistance = -Infinity;
    let length = 0;

    for (let i = 0; i < routes.length; i++) {
        length = calculateDistanceForRoute(routes[i]);
        if (length > longestRouteDistance) {
            longestRouteId = i;
            longestRouteDistance = length;
        }
    }

    return longestRouteDistance;
}

const shortestRoute = findShortestRoute(routes);
console.log("Shortest route:", shortestRoute);

const longestRoute = findLongestRoute(routes);
console.log("Longest route:", longestRoute);

const distanceDiference = (longestRoute - shortestRoute);
console.log (distanceDiference.toFixed(2));
