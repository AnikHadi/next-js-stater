"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useParamHook() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, push } = useRouter();
  return [searchParams, pathName, replace, push];
}
