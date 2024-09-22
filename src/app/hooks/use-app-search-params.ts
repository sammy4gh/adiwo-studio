"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Custom hook to get and set query parameters
export function useAppSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Set query parameter
  const setSearchParam = (
    queryParams: Record<string, string | null | undefined>,
  ) => {
    const params = new URLSearchParams(searchParams!);
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return { searchParams, setSearchParam };
}
