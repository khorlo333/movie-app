import { token } from "@/utilities/token";

export const response = await fetch("https://api.themoviedb.org/3/", {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
