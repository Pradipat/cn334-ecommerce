function paymentSelect() {
  return (
        <div>
            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px] mt-[30px] mb-[30px]">
              <div className="text-black font-semibold text-2xl mb-3">Payment Method</div>
              <form className="text-black flex flex-col border border-[#b4b4b4] rounded-[5px] text-lg font-light mb-3">
                <label className="border-b border-[#b4b4b4] flex items-center py-3">
                  <input type="radio" name="paymentMethod" value="creditCard" className="w-5 h-5 mx-3"/>
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center py-3">
                  <input type="radio" name="paymentMethod" value="paypal" className="w-5 h-5 mx-3"/>
                  <span>PayPal</span>
                </label>
              </form>
              <div className="text-[#898989] font-extralight">By creating an account, you agree to <span className="text-[#595959] font-medium">Term of Service </span> 
                  and  <span className="text-[#595959] font-medium">Privacy Policy </span>
                  <div>If you have any troubles processing the payments, please check if pop-ups are allowed.</div>
              </div>
            </div>

            <div className="w-11/12 lg:w-[1120px] h-[53px] mx-auto bg-[#ED2040] rounded-[7px] mb-[60px] font-bold text-2xl flex justify-center items-center">
            Checkout
            </div>
        </div>
  )
}

export default paymentSelect