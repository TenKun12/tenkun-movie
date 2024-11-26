export function toHourMinutes(time) {
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  return `${hour}h ${minute}m`;
}
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

export const getYear = (dateStr) => {
  const date = new Date(dateStr);
  return date.getFullYear();
};
