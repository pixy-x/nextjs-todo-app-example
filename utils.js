String.prototype.removeSpaces = function () {
  return this.replace(/\s/g, "");
};

String.prototype.limitText = function (maxLen = 146) {
  if (this.length > maxLen) {
    return `${this.substring(0, maxLen - 3)}...`;
  }

  return this;
};

export const getDateString = () => {
  const dateObj = new Date();

  const day = dateObj.toLocaleDateString();
  const time = dateObj.toLocaleTimeString();

  return `${day} — ${time}`;
};
