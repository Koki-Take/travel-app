"use client";
import { useEffect, useRef } from "react";

export default function Map() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { Loader } = await import("@googlemaps/js-api-loader");
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
      });

      const google = await loader.load();
      const map = new google.maps.Map(ref.current as HTMLDivElement, {
        center: { lat: 35.681236, lng: 139.767125 }, // 東京駅
        zoom: 12,
      });

      new google.maps.Marker({
        position: { lat: 35.681236, lng: 139.767125 },
        map,
        title: "東京駅",
      });
    };
    init();
  }, []);

  return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}
