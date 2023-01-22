String.prototype.removeSpaces = function () {
  return this.replace(/\s/g, "");
};

export const getDateString = () => {
  const dateObj = new Date();

  const day = dateObj.toLocaleDateString();
  const time = dateObj.toLocaleTimeString();

  return `${day} - ${time}`;
};
