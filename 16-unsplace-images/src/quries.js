import {
    useQuery,
  } from "@tanstack/react-query";
  import axios from "axios";

  export const useGetImages = (queryImage) => {
    const { data, isLoading,isError } = useQuery({
      queryKey: ["images", queryImage],
      queryFn: async ({ queryKey }) => {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&&query=${queryKey[1]}`
        );
        return response.data;
      },
    });
    return { data, isLoading,isError };
  };