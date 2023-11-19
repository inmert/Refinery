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
  
  export const filterData = (data, value, property) => {
    return data.filter((item) => {
      return (
        value &&
        item &&
        item[property] &&
        item[property].toLowerCase().includes(value.toLowerCase())
      );
    });
  };
  