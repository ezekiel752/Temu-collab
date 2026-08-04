const AnnouncementBar = () => {
  return (
    <div className="bg-black px-70.25 h-13 flex items-center justify-between ">
      <div className="text-[#9cffa2] flex items-center gap-4">
        <span
          className="material-symbols-outlined filled"
          style={{ fontSize: "40px" }}
        >
          delivery_truck_bolt
        </span>
        <div>
          <div>
            <span className="flex items-center">
              Free shipping on all orders
              <span className="material-symbols-outlined">chevron_right</span>
            </span>
          </div>
          <div>
            <p>Limited-time offer</p>
          </div>
        </div>
      </div>
      <div className="mx-4 h-5 w-px bg-white/80"></div>
      <div className="h-13 overflow-hidden ">
        <div className="inline-flex animate-slide-rotate flex-col">
          <div className="h-13 text-[#fff7a7] flex items-center gap-4">
            <span
              className="material-symbols-outlined filled"
              style={{ fontSize: "40px" }}
            >
              delivery_truck_speed
            </span>
            <div>
              <div>
                <span className="flex items-center">Delivery guarantee</span>
              </div>
              <div>
                <p>Refund for any issues</p>
              </div>
            </div>
          </div>
          <div className="h-13 text-[#fff7a7] flex items-center gap-4">
            <span
              className="material-symbols-outlined filled"
              style={{ fontSize: "40px" }}
            >
              inventory_2
            </span>
            <div>
              <div>
                <span className="flex items-center">Return within 90d</span>
              </div>
              <div>
                <p>From purchase date</p>
              </div>
            </div>
          </div>
          <div className="h-13 text-[#fff7a7] flex items-center gap-4">
            <span
              className="material-symbols-outlined filled"
              style={{ fontSize: "40px" }}
            >
              currency_exchange
            </span>
            <div>
              <div>
                <span className="flex items-center">Price Adjustment</span>
              </div>
              <div>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
          <div className="h-13 text-[#fff7a7] flex items-center gap-4">
            <span
              className="material-symbols-outlined filled"
              style={{ fontSize: "40px" }}
            >
              delivery_truck_speed
            </span>
            <div>
              <div>
                <span className="flex items-center">Delivery guarantee</span>
              </div>
              <div>
                <p>Refund for any issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 h-5 w-px bg-white/80"></div>
      <div>
        <div className="h-13 text-[#fff7a7] flex items-center gap-4">
          <span
            className="material-symbols-outlined filled"
            style={{ fontSize: "40px" }}
          >
            mobile
          </span>
          <div>
            <div>
              <span className="flex items-center font-bold">
                Get the Temu App
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
