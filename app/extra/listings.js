"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

export default function Listings() {
  const [filters, setFilters] = useState({
    dates: {
      checkIn: null,
      checkOut: null,
    },
    guests: 1,
    priceRange: [0, 1000],
    propertyType: [],
  })
  const [listings, setListings] = useState([
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 250,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Beachfront Villa",
      location: "Maui, Hawaii",
      price: 500,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Modern Loft",
      location: "Seattle, Washington",
      price: 150,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Rustic Farmhouse",
      location: "Napa, California",
      price: 300,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Luxury Penthouse",
      location: "New York City, New York",
      price: 800,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Treehouse Retreat",
      location: "Asheville, North Carolina",
      price: 225,
    },
  ])

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }))
  }

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const { dates, guests, priceRange, propertyType } = filters
      const { checkIn, checkOut } = dates
      if (
        checkIn &&
        checkOut &&
        (new Date(listing.checkIn) < new Date(checkIn) || new Date(listing.checkOut) > new Date(checkOut))
      ) {
        return false
      }
      if (listing.maxGuests < guests) {
        return false
      }
      if (listing.price < priceRange[0] || listing.price > priceRange[1]) {
        return false
      }
      if (propertyType.length > 0 && !propertyType.includes(listing.propertyType)) {
        return false
      }
      return true
    })
  }, [filters, listings])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Acme Rentals</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="pl-10 pr-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="border w-10 h-10 rounded-full overflow-hidden">
              <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="grid gap-4">
              <div>
                <label htmlFor="dates" className="block font-medium mb-2">
                  Dates
                </label>
                <div className="flex gap-2">
                  <button className="flex-col items-start w-full h-auto bg-gray-200 p-2 rounded-md">
                    <span className="font-semibold uppercase text-[0.65rem]">Check in</span>
                    <span className="font-normal">
                      {filters.dates.checkIn ? new Date(filters.dates.checkIn).toLocaleDateString() : "Select date"}
                    </span>
                  </button>
                  <button className="flex-col items-start w-full h-auto bg-gray-200 p-2 rounded-md">
                    <span className="font-semibold uppercase text-[0.65rem]">Check out</span>
                    <span className="font-normal">
                      {filters.dates.checkOut ? new Date(filters.dates.checkOut).toLocaleDateString() : "Select date"}
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="guests" className="block font-medium mb-2">
                  Guests
                </label>
                <select
                  id="guests"
                  value={filters.guests}
                  onChange={(e) => handleFilterChange("guests", parseInt(e.target.value))}
                  className="w-full p-2 bg-gray-200 rounded-md"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6 guests</option>
                </select>
              </div>
              <div>
                <label htmlFor="price-range" className="block font-medium mb-2">
                  Price Range
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => handleFilterChange("priceRange", [parseInt(e.target.value), filters.priceRange[1]])}
                    className="w-1/2 p-2 bg-gray-200 rounded-md"
                    placeholder="Min price"
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                    className="w-1/2 p-2 bg-gray-200 rounded-md"
                    placeholder="Max price"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="property-type" className="block font-medium mb-2">
                  Property Type
                </label>
                <div className="grid gap-2">
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes("house")}
                      onChange={(e) => handleFilterChange("propertyType", e.target.checked ? ["house"] : [])}
                    />
                    House
                  </label>
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes("apartment")}
                      onChange={(e) => handleFilterChange("propertyType", e.target.checked ? ["apartment"] : [])}
                    />
                    Apartment
                  </label>
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes("cabin")}
                      onChange={(e) => handleFilterChange("propertyType", e.target.checked ? ["cabin"] : [])}
                    />
                    Cabin
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden">
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={listing.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{listing.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{listing.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${listing.price}/night</span>
                      <button className="bg-blue-500 text-white py-1 px-2 rounded-md">Book Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
