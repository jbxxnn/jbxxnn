"use client";

import { useState } from "react";

type CopyEmailProps = {
  email: string;
  className?: string;
};

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      aria-label={`Copy ${email}`}
      title={copied ? "Copied" : "Click to copy"}
    >
      {copied ? "Copied" : email}
    </button>
  );
}
