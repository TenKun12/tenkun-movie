"use client";
import { useRouter } from "next/navigation";

export default function DiscoveryDropdown() {
  const router = useRouter();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(selectedValue); // Navigate to the selected route
    }
  };

  return (
    <div className="w-48">
      <select
        onChange={handleChange}
        defaultValue={""}
        id="simple-select"
        className="mt-1 outline-none border border-white/20 hover:drop-shadow-md hover:shadow-white/50 block w-full rounded-md  bg-black py-2 px-3 shadow-sm focus:border-amber-500 focus:ring-amber-900 sm:text-sm"
      >
        <option value="?">Popular</option>
        <option value="?discovery=top_rated">Top Rated</option>
        <option value="?discovery=now_playing">Now Playing</option>
        <option value="?discovery=upcoming">Upcoming</option>
      </select>
    </div>
  );
}
