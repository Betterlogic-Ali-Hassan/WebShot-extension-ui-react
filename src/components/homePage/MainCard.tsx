"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";

export default function MainCard() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [rateIconHide, setRateIconHide] = useState(false);
  return (
    <Card className='overflow-hidden w-[388px] relative high-shadow border-none max-h-[610px] overflow-y-auto scrollbar'>
      <CardHeader
        onRatingToggle={() => setRatingOpen(!ratingOpen)}
        ratingOpen={ratingOpen}
        rateIconHide={rateIconHide}
      />
      <CardContent
        ratingOpen={ratingOpen}
        setRateIconHide={setRateIconHide}
        setRatingOpen={setRatingOpen}
      />
    </Card>
  );
}
