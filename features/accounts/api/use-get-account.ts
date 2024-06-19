import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAccount = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["accounts", { id }],
    queryFn: async () => {
      const response = await client.api.accounts[":id"].$get({ param: { id } });
      if (!response.ok) {
        throw new Error("Failed to fetch account: " + response.statusText);
      }
      const { account } = await response.json();
      return account;
    },
  });

  return query;
};
