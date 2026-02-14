"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface Barber {
  _id: string;
  shopName: string;
  avatar: { url: string };
  avgRating: number;
  address: { city: string };
  distance: number | null;
}

function Barbershops() {
  const { data, isLoading, isError } = useQuery<Barber[]>({
    queryKey: ["barbers"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/berbers-web`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (!json.success) {
        throw new Error(json.message || "Failed to fetch barbers");
      }

      return json.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const barbers = data ?? [];

  const SkeletonCard = () => (
    <Card className="bg-[#2a2a2a] border-none overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-64 md:h-80 bg-gray-700 animate-pulse" />
        <div className="p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-7 w-44 bg-gray-600 rounded animate-pulse" />
            <div className="h-6 w-14 bg-gray-600 rounded animate-pulse" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-16 bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-[#1C1C1E] min-h-screen py-12 md:py-20 px-2">
      <div className="container mx-auto ">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight">
          Barbar Shops
        </h1>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-400 py-12">
            Failed to load barbershops. Please try again later.
          </div>
        ) : barbers.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No barbershops found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbers.map((shop) => (
              <Card
                key={shop._id}
                className="bg-[#2a2a2a] border-none overflow-hidden group cursor-pointer transition-all hover:ring-1 hover:ring-purple-500/50"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      fill
                      src={shop.avatar?.url || "/images/placeholder-barber.jpg"}
                      alt={shop.shopName}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-transparent to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-white truncate pr-2">
                        {shop.shopName}
                      </h3>
                      <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md">
                        <span className="text-white text-xs md:text-sm font-bold">
                          {Number(shop.avgRating ?? 0).toFixed(1)}
                        </span>
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm font-medium">
                      <span>{shop.address?.city || "Unknown"}</span>
                      <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] md:text-xs">
                        {shop.distance ? `${shop.distance.toFixed(1)} km` : "Nearby"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Barbershops;
