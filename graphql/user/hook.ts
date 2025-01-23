import { useQuery } from "@apollo/client";
import { GetUsersDocument } from "../generated";

export const useClient = () => {
  const { data, loading } = useQuery(GetUsersDocument, {
    pollInterval: 5000,
  });

  return { data, loading };
};
