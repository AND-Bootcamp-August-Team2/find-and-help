const ParseDate = (date) => {
  const dateParse = new Date(date).toLocaleDateString("en-gb");
  return dateParse === "Invalid Date" ? date : dateParse;
};

export default ParseDate;
