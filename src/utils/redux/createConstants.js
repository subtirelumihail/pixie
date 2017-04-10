const createConstants = (constants) => {
  return constants.reduce((acc, val) => {
    acc[val] = val;
    return acc;
  }, {});
};

export default createConstants;
