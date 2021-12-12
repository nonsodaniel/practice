import { Inotes } from "../models/news.model";

export const useNewsList = (): Inotes[] | null => {
  const news =
    localStorage.getItem("newsData") &&
    JSON.parse(localStorage.getItem("newsData") || "");
  if (!news) {
    return null;
  }

  return news;
};
