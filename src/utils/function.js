import constants from "./constants";

export function imageRes(imageName) {
  return `@/assets/${imageName}`;
}

export function toInternetImage(imageUrl) {
  return `${constants.BASE_IMAGE_URL}/${imageUrl}`;
}

export function isEmpty(value) {
  return value.trim().length < 1;
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GH", options);
}
