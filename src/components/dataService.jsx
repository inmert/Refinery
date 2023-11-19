export const fetchData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/inmert/inmert.github.io/master/input.json");
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  
 // dataService.js
export const filterData = (data, value, property) => {
  return data.filter((item) => {
    const lowerCaseProperty = item[property]?.toLowerCase();

    if (property === "timestamp" && value) {
      // If the property is a timestamp and a range is provided
      if (value.start && value.end) {
        const itemTimestamp = new Date(lowerCaseProperty);
        const startTimestamp = new Date(value.start);
        const endTimestamp = new Date(value.end);

        // Check if the item timestamp is within the range
        return itemTimestamp >= startTimestamp && itemTimestamp <= endTimestamp;
      } else {
        // If only one date is provided, perform regular inclusion check
        return lowerCaseProperty.includes(value.toLowerCase());
      }
    }

    // For other properties, check if they include the provided value
    return lowerCaseProperty && lowerCaseProperty.includes(value.toLowerCase());
  });
};

  