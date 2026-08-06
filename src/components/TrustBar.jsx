const TrustBar = () => {
  return (
    <div className="w-[90%] lg:w-[70%] m-auto pt-4 sm:pt-6">
      {/* Top Green Banner */}
      <div className="bg-[#0a8800] hover:bg-[#097d00] rounded-t-[10px] flex items-center justify-between p-3 text-white text-xs sm:text-sm gap-2 transition-colors">
        <div className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined filled text-white text-xl sm:text-2xl">
            verified_user
          </span>
          <span className="font-bold text-sm sm:text-base whitespace-nowrap">Why choose Temu?</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-xs whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-lg sm:text-xl">lock</span>
            <p>Secure Privacy</p>
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/60 shrink-0"></div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-lg sm:text-xl">credit_card</span>
            <p>Safe payments</p>
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/60 shrink-0"></div>

          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-lg sm:text-xl">local_shipping</span>
            <p>Delivery guarantee</p>
          </div>

          <span className="material-symbols-outlined text-lg shrink-0">chevron_right</span>
        </div>
      </div>

      {/* Bottom Bordered Security Reminder */}
      <div className="border-[#0a8800] bg-white hover:bg-[#EBEBEB] text-[#0a8800] rounded-b-[10px] border border-t-0 flex items-center justify-between p-2.5 sm:p-3 gap-2 text-xs sm:text-sm transition-colors">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined filled text-[#0a8800] text-lg sm:text-xl shrink-0">
            notifications
          </span>
          <p className="font-medium text-xs sm:text-sm leading-tight truncate sm:whitespace-normal">
            <span className="font-bold">Security reminder:</span> Please be wary of scam messages and links. Temu won't ask for extra fees via SMS or email.
          </p>
        </div>
        <div className="flex items-center shrink-0 font-semibold cursor-pointer gap-0.5">
          <p>View</p>
          <span className="material-symbols-outlined text-base sm:text-lg">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
