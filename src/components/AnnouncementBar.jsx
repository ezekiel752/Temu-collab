const AnnouncementBar = () => {
  return (
    <div className="bg-black min-h-13 py-1 lg:py-0 overflow-hidden">
      <div className="w-[90%] lg:w-[70%] m-auto flex items-center justify-between gap-2 text-xs sm:text-sm">
        <div className="text-[#9cffa2] flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
            delivery_truck_bolt
          </span>
          <div>
            <div>
              <span className="flex items-center font-medium">
                Free shipping on all orders
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </span>
            </div>
            <div>
              <p className="text-[11px] sm:text-xs opacity-90">Limited-time offer</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block mx-2 sm:mx-4 h-5 w-px bg-white/80 shrink-0"></div>

        <div className="h-13 overflow-hidden shrink-0">
          <div className="inline-flex animate-slide-rotate flex-col">
            <div className="h-13 text-[#fff7a7] flex items-center gap-2 sm:gap-4">
              <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
                delivery_truck_speed
              </span>
              <div>
                <div>
                  <span className="flex items-center font-medium">Delivery guarantee</span>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs opacity-90">Refund for any issues</p>
                </div>
              </div>
            </div>
            <div className="h-13 text-[#fff7a7] flex items-center gap-2 sm:gap-4">
              <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
                inventory_2
              </span>
              <div>
                <div>
                  <span className="flex items-center font-medium">Return within 90d</span>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs opacity-90">From purchase date</p>
                </div>
              </div>
            </div>
            <div className="h-13 text-[#fff7a7] flex items-center gap-2 sm:gap-4">
              <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
                currency_exchange
              </span>
              <div>
                <div>
                  <span className="flex items-center font-medium">Price Adjustment</span>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs opacity-90">Within 30 days</p>
                </div>
              </div>
            </div>
            <div className="h-13 text-[#fff7a7] flex items-center gap-2 sm:gap-4">
              <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
                delivery_truck_speed
              </span>
              <div>
                <div>
                  <span className="flex items-center font-medium">Delivery guarantee</span>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs opacity-90">Refund for any issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block mx-2 sm:mx-4 h-5 w-px bg-white/80 shrink-0"></div>

        <div className="hidden sm:block shrink-0">
          <div className="h-13 text-[#fff7a7] flex items-center gap-2 sm:gap-4">
            <span className="material-symbols-outlined filled text-2xl sm:text-4xl">
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
    </div>
  );
};

export default AnnouncementBar;
