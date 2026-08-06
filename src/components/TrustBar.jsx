const TrustBar = () => {
  return (
    <div className="flex flex-col items-center pt-4 sm:pt-10 px-2 sm:px-4">
      {/* Top Green Banner */}
      <div className="bg-[#0a8800] hover:bg-[#097d00] w-[90%] lg:w-[70%] m-auto min-h-10 rounded-t-[10px] flex flex-wrap sm:flex-nowrap items-center justify-between p-2.5 sm:p-3 text-white text-xs sm:text-sm gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined filled text-white text-xl sm:text-2xl">
            verified_user
          </span>
          <span className="font-bold text-sm sm:text-base">Why choose Temu?</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto text-xs">
          <div className="flex items-center gap-1 shrink-0">
            <span className="material-symbols-outlined text-base sm:text-lg">lock</span>
            <p className="whitespace-nowrap">Secure Privacy</p>
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/80 shrink-0"></div>

          <div className="flex items-center gap-1 shrink-0">
            <span className="material-symbols-outlined text-base sm:text-lg">credit_card</span>
            <p className="whitespace-nowrap">Safe payments</p>
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/80 shrink-0"></div>

          <div className="hidden xs:flex items-center gap-1 shrink-0">
            <span className="material-symbols-outlined text-base sm:text-lg">delivery_truck_bolt</span>
            <p className="whitespace-nowrap">Delivery guarantee</p>
          </div>

          <span className="material-symbols-outlined text-lg shrink-0">chevron_right</span>
        </div>
      </div>

      {/* Bottom Bordered Security Reminder */}
      <div className="border-[#0a8800] bg-white hover:bg-[#EBEBEB] text-[#0a8800] w-[90%] lg:w-[70%] m-auto min-h-10 border rounded-b-[10px] flex items-center justify-between p-2.5 sm:p-3 gap-2 text-xs sm:text-sm transition-colors">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined filled text-[#0a8800] text-lg sm:text-xl shrink-0">
            notifications
          </span>
          <p className="font-medium text-xs sm:text-sm leading-tight">
            <span className="font-bold">Security reminder:</span> Please be wary of scam messages and links. Temu won't ask for extra fees via SMS or email.
          </p>
        </div>
        <div className="flex items-center shrink-0 font-semibold cursor-pointer">
          <p>View</p>
          <span className="material-symbols-outlined text-base sm:text-lg">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
