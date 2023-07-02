require("dotenv").config();
const axios = require("axios");

exports.findNearestHospitals = async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    const radius = 5000; // Search radius in meters
    const type = "hospital"; // Search for hospitals/clinics
    const location = `${lat},${lon}`;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}`;

    const response = await axios.get(url);

    if (response.status === 200) {
      const results = response.data.results;
      const hospitalPromises = results.map(async (result) => {
        const placeId = result.place_id;
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_phone_number&key=${apiKey}`;

        const detailsResponse = await axios.get(detailsUrl);
        const hospitalDetails = detailsResponse.data.result;
        const phoneNumber = hospitalDetails?.formatted_phone_number || "N/A";

        // Calculate distance using Haversine formula
        const { lat: hospitalLat, lng: hospitalLon } = result.geometry.location;
        const distance = calculateDistance(lat, lon, hospitalLat, hospitalLon);

        // Construct Google Maps URL
        const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
        return {
          name: result.name,
          phoneNumber: phoneNumber,
          distance: distance,
          mapsUrl: mapsUrl,
        };
      });

      const hospitals = await Promise.all(hospitalPromises);
      hospitals.sort((a, b) => a.distance - b.distance);
      return res.status(200).json(hospitals);
    } else {
      throw new Error("Unable to fetch hospital data.");
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error finding nearest hospitals." });
  }
};

// Function to calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  // Round distance to 2 decimal places
  return Math.round(distance * 100) / 100;
}

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
