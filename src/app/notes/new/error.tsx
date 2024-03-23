"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error }: ErrorPageProps) {
  return <section>{error.message}</section>;
}
