// export const truncateString = (string: string = "", maxLength: number = 250) =>
//   string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export const truncateString = (text: string, maxLength: number) => {
  let textArray = text.replace(/<[^>]*>?/gm, "").split(" ");
  if (text.length <= maxLength) return text;
  return textArray.slice(0, maxLength).join(" ") + "...";
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
