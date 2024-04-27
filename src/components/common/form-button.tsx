"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  color: `default` | `primary` | `secondary` | `success` | `warning` | `danger`;
}

export default function FormButton({ children, color }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" color={color} disabled={pending} isLoading={pending}>
      {children}
    </Button>
  );
}
