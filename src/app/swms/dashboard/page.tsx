// /app/swms/dashboard/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the default section (valves)
    router.replace("/swms/dashboard/sections/valves");
  }, [router]);

  // Optionally, you can return null or a loading indicator while redirecting
  return null;
}
