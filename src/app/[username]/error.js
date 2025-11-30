"use client";

import StatusCard from "@/components/StatusCard";

export default function Error() {
  return (
    <StatusCard title='Something went wrong!'>
      Something went wrong on our end. Our servers might be taking a
      coffee <span aria-hidden='true'>☕</span> break—or maybe we hit
      our rate limit for good vibes. Try again in a bit!
    </StatusCard>
  );
}
