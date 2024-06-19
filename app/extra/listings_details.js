export default function Listings_details() {
    return (
      <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Location</h2>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p>123 Main St, Anytown USA 12345</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Coordinates</h3>
                  <p>Latitude: 40.730610, Longitude: -73.935242</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <p>Located 2 miles from Highway 101, 5 minutes from the nearest bus stop.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Land Descriptions</h2>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-lg font-medium">Soil Type</h3>
                  <p>Loamy soil with a pH of 6.5, high in organic matter and nutrients.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Topography</h3>
                  <p>Gently sloping land with an average elevation of 500 feet and good drainage.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Climate</h3>
                  <p>Temperate climate with an average annual temperature of 60°F and 40 inches of rainfall.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Crop Type</h2>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-lg font-medium">Suitable Crops</h3>
                  <p>Corn, soybeans, wheat, and alfalfa are well-suited for this land.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Growing Seasons</h3>
                  <p>
                    Corn and soybeans can be grown from April to October, while wheat and alfalfa can be grown year-round.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Historical Yields</h3>
                  <p>
                    Average corn yields of 150 bushels per acre, soybeans at 45 bushels per acre, and wheat at 60 bushels
                    per acre.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Land History</h2>
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-lg font-medium">Previous Crops</h3>
                  <p>The land has been used for corn, soybeans, and wheat production for the past 20 years.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Agricultural Practices</h3>
                  <p>Conventional tillage and crop rotation have been the primary farming practices on this land.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Land Use</h3>
                  <p>The land has been actively cultivated, with no fallow periods in the past decade.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Pictures</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Land Image 1"
                  className="rounded-lg object-cover"
                />
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Land Image 2"
                  className="rounded-lg object-cover"
                />
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Land Image 3"
                  className="rounded-lg object-cover"
                />
                <img
                  src="/placeholder.svg"
                  width="300"
                  height="200"
                  alt="Land Image 4"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }