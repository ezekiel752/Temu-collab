const TrustBar = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <div className="bg-[#0a8800] hover:bg-[#097d00] w-[70%] h-10 rounded-t-[10px] flex items-center justify-between p-3">
        <div className="flex items-center">
          <span className="material-symbols-outlined filled text-white w-10">
            verified_user
          </span>
          <span className="text-white font-bold">Why choose Temu?</span>
        </div>
        <div className="text-white">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 p-4">
              <span className="material-symbols-outlined">lock</span>
              <p>Secure Privacy</p>
            </div>
            <div className="mx-4 h-5 w-px bg-white/80"></div>
            <div className="flex items-center p-4 gap-1.5">
              <span className="material-symbols-outlined">credit_card</span>
              <p>Safe payments</p>
            </div>
            <div className="mx-4 h-5 w-px bg-white/80"></div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined"></span>
              delivery_truck_bolt
              <p>Delivery guarantee</p>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </div>
      <div className="border-[#0a8800] hover:bg-[#EBEBEB] text-[#0a8800] w-[70%] h-10 border rounded-b-[10px] flex items-center justify-between p-3">
        <div className="flex items-center">
          <span className="material-symbols-outlined filled text-[#0a8800] w-10">
            notifications
          </span>
          <p className="font-bold">
            Security reminder: Please be wary of scam messages and links. Temu
            won't ask for extra fees via SMS or email.
          </p>
        </div>
        <div className="flex items-center">
          <p>View</p>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
