import Image from 'next/image';

export default function Profile() {
  return (
    <div className="w-full max-w-[900px] mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Profile</h2>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/placeholder.svg" alt="Profile Picture" layout="fill" objectFit="cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-700">
                JP
              </span>
            </div>
            <button className="px-4 py-2 border rounded-md text-gray-700">Update Profile</button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Name</div>
            <p className="text-sm text-gray-500">John Doe</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Email</div>
            <p className="text-sm text-gray-500">johndoe@example.com</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Phone</div>
            <p className="text-sm text-gray-500">+1 (555) 555-5555</p>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Address</div>
            <p className="text-sm text-gray-500">123 Main St, Anytown USA 12345</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Listings Available for Lease</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Farmland A" description="10 acres of fertile farmland" status="Available" />
            <Card title="Farmland B" description="15 acres of rolling hills" status="Unavailable" />
            <Card title="Farmland C" description="20 acres of lush pasture" status="Available" />
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Bio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-medium">Short Biography</div>
              <p className="text-sm text-gray-500">
                I am a lifelong farmer with a deep passion for sustainable agriculture. I have been managing my family's
                farmland for over 20 years, and I am excited to share my expertise with others who are interested in
                leasing land for their own farming ventures.
              </p>
            </div>
            <div>
              <div className="text-sm font-medium">Farming Background</div>
              <p className="text-sm text-gray-500">
                I grew up on a small family farm in the Midwest, where I learned the ins and outs of crop cultivation,
                livestock management, and sustainable land stewardship. After completing my degree in Agricultural
                Sciences, I returned to the farm and have been working to expand our operations while maintaining a
                focus on environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, status }) {
  const statusColor = status === "Available" ? "text-green-500" : "text-red-500";

  return (
    <div className="border rounded-lg shadow-md p-4">
      <div className="mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">Status</div>
          <div className={`text-sm ${statusColor}`}>{status}</div>
        </div>
        <button className="px-2 py-1 border rounded-md text-sm">View</button>
      </div>
    </div>
  );
}