import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type key = string;
type value = string | "";

export const updateSearchParameters = (
  key: key,
  value: value,
  search: any,
  permanentRedirect: any
) => {
  // const newSearchParams = new URLSearchParams(window.location.search);
  const newSearchParams = search
    ? new URLSearchParams(search)
    : new URLSearchParams();

  if (value === null || value === "") {
    newSearchParams.delete(key);
  } else {
    newSearchParams.set(key, value);
  }
  // window.history.replaceState(null, "", `?${newSearchParams.toString()}`);
  console.log("url", newSearchParams);
  return permanentRedirect("/hello");
};
