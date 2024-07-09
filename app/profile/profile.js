import Image from "next/image";

export default function Profile() {
  const listings = [
    {
      id: 1,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 250,
    },
    {
      id: 2,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Beachfront Villa",
      location: "Maui, Hawaii",
      price: 500,
    },
    {
      id: 3,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Modern Loft",
      location: "Seattle, Washington",
      price: 150,
    },
    {
      id: 4,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Rustic Farmhouse",
      location: "Napa, California",
      price: 300,
    },
    {
      id: 5,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Treehouse Retreat",
      location: "Asheville, North Carolina",
      price: 225,
    },
    {
      id: 7,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 250,
    },
    {
      id: 8,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Beachfront Villa",
      location: "Maui, Hawaii",
      price: 500,
    },
    {
      id: 9,
      image:
        "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
      title: "Modern Loft",
      location: "Seattle, Washington",
      price: 150,
    },
  ];
  return (
    <div className="mt-40">
      <div className="flex">
        <div className="p-6 w-1/2">
          <h1 className="text-4xl font-bold justify-center">Profile</h1>
          <img
            src="https://i.pinimg.com/736x/ee/0a/94/ee0a94bfe59c1a18593fee908be4df99.jpg"
            alt="alter "
            className="w-1/2"
          />
          <p className="text-4xl font-bold mt-5">Jashan sran</p>
          <div className="border-2 rounded-lg shadow-2xl">
            <p>
              <b>Email</b>
            </p>
            <p>Jashansran14785@gmail.com</p>
            <p>
              <b>Phone</b>
            </p>
            <p>1234567890</p>
            <p>
              <b>Address</b>
            </p>
            <p>12 Jashansran calgary, T3J 3T0, alberta</p>
          </div>
          <h1 className="text-4xl font-bold mt-5">Bio</h1>
          <p>
            I am a lifelong gvdge farmer with a deep passion for sustainable
            agriculture. I have been managing my family's farmland for over 20
            years, and I am excited to share my expertise with others who are
            interested in leasing land for their own farming ventures. I am also
            interested in working with respect
          </p>
        </div>
        <div className="w-1/2 p-6 text-center">
          <h1 className="text-4xl font-bold text-center justify-center">
            Listings
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="w-[calc(50%-20px)] bg-white shadow-lg rounded-lg overflow-hidden mb-4"
          >
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <img
                src={listing.image}
                alt={listing.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{listing.title}</h3>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-gray-900 font-semibold">${listing.price}/night</p>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="w-full max-w-[900px] mx-auto py-12 md:py-16 lg:py-20">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div className="space-y-4">
//         <h2 className="text-2xl font-bold">Profile</h2>
//         <div className="flex items-center gap-4">
//           <div className="relative w-16 h-16 rounded-full overflow-hidden">
//             <Image src="/placeholder.svg" alt="Profile Picture" layout="fill" objectFit="cover" />
//             <span className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-700">
//               JP
//             </span>
//           </div>
//           <button className="px-4 py-2 border rounded-md text-gray-700">Update Profile</button>
//         </div>
//         <div className="space-y-2">
//           <div className="text-sm font-medium">Name</div>
//           <p className="text-sm text-gray-500">John Doe</p>
//         </div>
//         <div className="space-y-2">
//           <div className="text-sm font-medium">Email</div>
//           <p className="text-sm text-gray-500">johndoe@example.com</p>
//         </div>
//         <div className="space-y-2">
//           <div className="text-sm font-medium">Phone</div>
//           <p className="text-sm text-gray-500">+1 (555) 555-5555</p>
//         </div>
//         <div className="space-y-2">
//           <div className="text-sm font-medium">Address</div>
//           <p className="text-sm text-gray-500">123 Main St, Anytown USA 12345</p>
//         </div>
//       </div>
//       <div className="mt-8 space-y-4">
//         <h2 className="text-2xl font-bold">Listings Available for Lease</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <Card title="Farmland A" description="10 acres of fertile farmland" status="Available" />
//           <Card title="Farmland B" description="15 acres of rolling hills" status="Unavailable" />
//           <Card title="Farmland C" description="20 acres of lush pasture" status="Available" />
//         </div>
//       </div>
//       <div className="mt-8 space-y-4">
//         <h2 className="text-2xl font-bold">Bio</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <div className="text-sm font-medium">Short Biography</div>
//             <p className="text-sm text-gray-500">
//               I am a lifelong farmer with a deep passion for sustainable agriculture. I have been managing my family's
//               farmland for over 20 years, and I am excited to share my expertise with others who are interested in
//               leasing land for their own farming ventures.
//             </p>
//           </div>
//           <div>
//             <div className="text-sm font-medium">Farming Background</div>
//             <p className="text-sm text-gray-500">
//               I grew up on a small family farm in the Midwest, where I learned the ins and outs of crop cultivation,
//               livestock management, and sustainable land stewardship. After completing my degree in Agricultural
//               Sciences, I returned to the farm and have been working to expand our operations while maintaining a
//               focus on environmental conservation.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// function Card({ title, description, status }) {
//   const statusColor = status === "Available" ? "text-green-500" : "text-red-500";

//   return (
//     <div className="border rounded-lg shadow-md p-4">
//       <div className="mb-2">
//         <h3 className="text-lg font-bold">{title}</h3>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//       <div className="flex items-center justify-between">
//         <div>
//           <div className="text-sm font-medium">Status</div>
//           <div className={`text-sm ${statusColor}`}>{status}</div>
//         </div>
//         <button className="px-2 py-1 border rounded-md text-sm">View</button>
//       </div>
//     </div>
//   );
// }
