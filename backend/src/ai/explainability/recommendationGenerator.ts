export function generateRecommendations(peaks: any[], waste: any[]) {
  const recs = [];

  if (peaks.length) {
    recs.push({
      type: "Peak Shaving",
      impact: "High",
      explanation:
        `${peaks.length} peak hours detected where demand exceeded normal levels. 
        These peaks account for a disproportionate share of total energy usage and 
        drive demand charges. Shifting or flattening these loads yields most savings.`
    });
  }

  if (waste.length) {
    recs.push({
      type: "Night Waste Reduction",
      impact: "Medium",
      explanation:
        `${waste.length} low-occupancy hours show elevated consumption, 
        indicating HVAC or lighting running unnecessarily. Reducing after-hours 
        operation cuts avoidable baseline load.`
    });
  }

  return recs;
}
