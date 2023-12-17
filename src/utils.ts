export const formatWeight = (valueInKg: number) => {
  if (valueInKg >= 1000) {
    const valueInTonne = (valueInKg / 1000).toFixed(2);
    return `${valueInTonne} t`;
  } else {
    return `${valueInKg} kg`;
  }
};
