"use client";
import { Check } from "lucide-react";
import { permanentRedirect } from "next/navigation";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertMessage {
  title: string;
  message: string;
  searchParams: any;
}

export default function AlertMessage({
  title,
  message,
  searchParams,
}: AlertMessage) {
  const alertType = searchParams.fileUpload;
  //   console.log(alertType);
  //   const search = window.location.search;
  //   console.log(new URLSearchParams(search));

  console.log(permanentRedirect);
  return (
    <Alert>
      <Check className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
