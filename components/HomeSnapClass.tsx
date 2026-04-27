"use client";

import { useEffect } from "react";

export default function HomeSnapClass() {
  useEffect(() => {
    document.body.classList.add("home-snap");
    return () => document.body.classList.remove("home-snap");
  }, []);

  return null;
}
