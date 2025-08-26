// dummyData.js

// 50 locations (sequential)
export const locations = Array.from({ length: 50 }, (_, i) => ({
  id: `loc${i + 1}`,
  name: `Location ${i + 1}`,
  latitude: 27.6000 + i * 0.001, // sequential lat
  longitude: 85.2000 + i * 0.001 // sequential lng
}));

// 10 companies
export const companies = Array.from({ length: 10 }, (_, i) => ({
  id: `comp${i + 1}`,
  name: `Company ${i + 1}`,
  contact: `01-${400000 + i}`
}));

// 30 vehicles
export const vehicles = Array.from({ length: 30 }, (_, i) => ({
  id: `veh${i + 1}`,
  companyId: `comp${(i % 10) + 1}`, // distribute across companies
  type: ["Bus", "Mini Bus", "Micro", "Tempo"][i % 4],
  capacity: [40, 25, 15, 10][i % 4]
}));

// 20 routes with multiple sequential stops
export const routes = Array.from({ length: 20 }, (_, i) => {
  const start = i * 2 + 1; // ensures unique start
  const end = start + 6;   // route covers 7 locations
  const stops = [];
  for (let j = start; j <= end && j <= 50; j++) {
    stops.push(`loc${j}`);
  }
  return {
    id: `route${i + 1}`,
    companyId: `comp${(i % 10) + 1}`,
    vehicleId: `veh${(i % 30) + 1}`,
    startLocationId: `loc${start}`,
    endLocationId: `loc${end}`,
    stops,
    type: i % 2 === 0 ? "point-to-point" : "distance-based"
  };
});

// 20 fares (half point-to-point, half distance-based)
export const fares = Array.from({ length: 20 }, (_, i) => {
  if (i % 2 === 0) {
    // point-to-point fares based on sequential stops
    return {
      id: `fare${i + 1}`,
      routeId: `route${i + 1}`,
      model: "point-to-point",
      prices: [
        { from: `loc${i * 2 + 1}`, to: `loc${i * 2 + 3}`, fare: 20 },
        { from: `loc${i * 2 + 3}`, to: `loc${i * 2 + 5}`, fare: 25 },
        { from: `loc${i * 2 + 1}`, to: `loc${i * 2 + 5}`, fare: 40 }
      ]
    };
  } else {
    // distance-based fare model
    return {
      id: `fare${i + 1}`,
      routeId: `route${i + 1}`,
      model: "distance-based",
      baseFare: 15,
      perKm: 2,
      maxFare: 60
    };
  }
});
