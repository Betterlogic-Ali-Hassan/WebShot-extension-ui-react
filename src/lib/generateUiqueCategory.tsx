export const generateUniqueCategory = (
  description: string,
  query: string
): string => {
  const words = (description || query).split(" ");
  const uniqueWords = Array.from(new Set(words));
  const category = uniqueWords.slice(0, 2).join(" ");
  return category.charAt(0).toUpperCase() + category.slice(1);
};
