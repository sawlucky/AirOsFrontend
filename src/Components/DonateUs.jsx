
import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import axios from "axios";

const Footer = React.lazy(() => import("./Footer"));
const FrequentlyAsked = React.lazy(() => import("./FrequentlyAsked"));

const DonateUs = () => {
  const userData = useSelector((store) => store?.user?.loggedInUser) || {};
  const { _id, username, email } = userData;
  const navigate = useNavigate();

  if (!_id) {
    navigate("/");
  }

  const donateMoney = [5, 10, 15, 40];
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");

  const validateAmount = (amount) => {
    const amountInCents = Math.round(amount * 100);
    if (amountInCents < 50) {
      setError("Minimum donation amount is $0.50");
      return false;
    }
    setError("");
    return true;
  };

  const HandleMoneyClick = (val) => {
    setInputVal(val);
    validateAmount(val);
  };

  const HandleSendMoney = async () => {
    if (!inputVal) return;
    if (!validateAmount(inputVal)) return;

    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );

      const responseData = await axios.post(
        "http://localhost:8080/payment/create-checkout-session",
        {
          amount: inputVal,
          userEmail: email || "Default",
          userName: username || "Anonymous",
          userId: _id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const session = responseData;
      const result = await stripe.redirectToCheckout({
        sessionId: session.data.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log("message: " + error);
    }
  };

  return (
    <div className="bg-[#122] w-full min-h-screen overflow-hidden">
      <Navbar />
       {/* Upper section Heading */}
       <div className="relative px-8 py-12">
         <div className="max-w-5xl mx-auto text-center">
           <h1 className="text-4xl md:text-7xl font-extrabold text-white font-sans leading-tight mb-8 font-['Nunito Sans'] leading-[89.19px]">
             Great things begin with small acts of help
           </h1>
           <p className="text-center max-w-5xl justify-center items-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
             Support Our Radio – Keep the Music Alive!
           </p>
           <p className="text-center max-w-5xl justify-center items-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
             🎵 Your donation helps us bring 24/7 live music, podcasts, and
             engaging content to listeners worldwide.
           </p>
         </div>
       </div>
      

      {/* Middle Section */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row mx-auto max-w-6xl rounded-xl overflow-hidden gap-4 sm:gap-6">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[400px] lg:h-[500px] relative">
            <img
              className="absolute w-full h-full object-cover"
              src="./images/DonateImg.png"
              alt="Donate"
            />
          </div>

          {/* Right Section - Form Box */}
          <div className="w-full md:w-1/2 flex items-start">
            <div className="w-full bg-[#122] border border-gray-600 rounded-xl p-4 sm:p-6 flex flex-col justify-between lg:h-[500px]">
              {/* Top Section */}
              <div className="space-y-4">
                <div className="text-white text-sm sm:text-base font-sans font-normal font-['Nunito_Sans']">
                  Send a Gift 🎉
                </div>
                <div className="text-white text-sm sm:text-base font-sans font-normal font-['Nunito_Sans']">
                  Enter the amount
                </div>

                <input
                  type="number"
                  placeholder="Enter Price Manually"
                  min="0.50"
                  step="0.01"
                  className="w-full px-3 sm:px-4 py-2 bg-neutral-800 text-white border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FECC30]"
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    validateAmount(e.target.value);
                  }}
                  required
                />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-xs sm:text-sm text-red-600 dark:text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">{error}</p>
                      {error === "Minimum donation amount is $0.50" && (
                        <p className="mt-1 text-red-500 dark:text-red-300">
                          Please enter at least $0.50 to proceed with payment.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Grid of Donation Amounts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full">
                  {donateMoney.map((money, index) => (
                    <div
                      key={index}
                      className="h-10 sm:h-11 px-2 sm:px-3 py-2 bg-neutral-800 rounded-lg border border-neutral-600 flex justify-center items-center cursor-pointer hover:bg-neutral-700 transition"
                      onClick={() => HandleMoneyClick(money)}
                    >
                      <div className="text-neutral-100 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
                        ${money}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-4 mt-4 sm:mt-6">
                <button onClick={HandleSendMoney}>
                  <div>
                    <div className="w-full sm:w-64 h-9 sm:h-10 px-2 sm:px-4 py-2 bg-[#FECC30] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#e6b82c] transition">
                      <div className="text-black text-sm sm:text-base font-bold font-['Nunito_Sans']">
                        Continue
                      </div>
                    </div>
                  </div>
                </button>

                {/* Note Section */}
                <div className="w-full bg-emerald-200 rounded-md px-3 py-2">
                  <p className="text-black text-xs sm:text-sm font-bold font-['Nunito_Sans']">
                    Note:
                    <span className="ml-1 font-normal font-sans">
                      Your support helps us bring uninterrupted live music, podcasts, and cultural programs to our global audience.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-base sm:text-lg md:text-xl text-white font-sans font-normal font-['Nunito_Sans'] leading-relaxed px-4">
        🎧 Your Support Keeps Us Streaming!
      </div>
      <div className="text-center text-base sm:text-lg md:text-xl text-white font-sans font-normal font-['Nunito_Sans'] leading-relaxed px-4 mt-2">
        🙏 Donate Today & Be Part of Our Radio Family!
      </div>

      {/* Decorative Section */}
      <div className="relative w-full bg-[#122] py-8 sm:py-12 px-4 flex justify-center overflow-hidden">
        <div className="relative w-64 sm:w-80 md:w-96 h-16 sm:h-20 bg-yellow-400 rounded-[38.91px] ml-8 sm:ml-10 md:ml-12" />
        <div className="absolute w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 left-[calc(50%-100px)] sm:left-[calc(50%-120px)] md:left-[calc(50%-140px)] bottom-12 sm:bottom-16 md:bottom-20 rotate-[25deg] bg-yellow-400 rounded-xl" />
        <div className="absolute w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full border-4 sm:border-5 border-white left-[calc(50%-80px)] sm:left-[calc(50%-100px)] md:left-[calc(50%-120px)] bottom-8 sm:bottom-10 md:bottom-12 bg-[#FE7A15]" />
        <div className="absolute w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 left-[calc(50%-40px)] sm:left-[calc(50%-60px)] md:left-[calc(50%-80px)] bottom-12 sm:bottom-16 md:bottom-20 rotate-[25deg] bg-sky-400 rounded-xl border-4 sm:border-5 border-white" />
        <div className="absolute w-32 sm:w-36 md:w-40 text-black text-base sm:text-lg md:text-xl font-sans font-bold font-['Nunito_Sans'] left-[calc(50%+20px)] sm:left-[calc(50%+40px)] md:left-[calc(50%+60px)] bottom-10 sm:bottom-12 md:bottom-14">
          We Build the Future of Radio
        </div>
        
      </div>

      {/* Why Donate Section */}
      <div className="text-center my-4 sm:my-6 text-2xl sm:text-3xl md:text-4xl text-white font-sans font-['Nunito_Sans'] leading-tight px-4">
        Why Donate with AirOS? 🎙️🎶
      </div>
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-[#122]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Left: Text Section */}
          <div className="text-white max-w-full md:max-w-xl space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-sans font-bold font-['Nunito_Sans'] leading-relaxed">
              Your support keeps AirOS thriving as a community-driven, multicultural radio station that connects people worldwide through music, podcasts, and engaging content. Here’s why your donation matters.
            </p>
            <div className="text-base sm:text-lg md:text-xl font-sans font-normal font-['Nunito_Sans'] leading-loose space-y-2">
              <p>💛 Support Independent Radio – Listener-powered, ad-free streaming.</p>
              <p>🎵 Keep the Music Alive – 24/7 live shows, podcasts & diverse music.</p>
              <p>📡 Improve Streaming & Content – Better quality, more exclusive content.</p>
              <p>🎤 Empower Voices & Talent – Support hosts, podcasters & artists.</p>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-sans font-normal font-['Nunito_Sans'] leading-loose">
              Every donation makes a difference! 🔗 Donate Today & Keep AirOS Alive! 💙
            </p>
          </div>
          {/* Right: Image Section */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-4 md:mb-0">
            <img
              src="./images/DonateImg3.png"
              alt="Radio"
              className="w-full h-64 sm:h-80 md:h-[400px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fund Others Section */}
      <div className="relative px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="relative mx-auto w-full max-w-5xl h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <img
            src="./images/DonateImg2.png"
            alt="Help"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-wrap items-end gap-2 sm:gap-4">
            <div className="text-white font-sans font-['Nunito_Sans'] text-[clamp(32px,10vw,120px)] sm:text-[clamp(40px,12vw,140px)] md:text-[clamp(48px,12vw,160px)] leading-none">
              Fund
            </div>
            <div className="flex flex-col justify-center leading-none">
              <div className="text-white font-sans font-['Nunito_Sans'] text-[clamp(20px,5vw,36px)] sm:text-[clamp(24px,5vw,40px)] md:text-[clamp(24px,5vw,48px)]">
                Help
              </div>
              <div className="text-white font-sans font-['Nunito_Sans'] text-[clamp(20px,5vw,36px)] sm:text-[clamp(24px,5vw,40px)] md:text-[clamp(24px,5vw,48px)]">
                Others
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fundraisers Section */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-[#122]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          {/* First Row: Image - Focus Number - Image */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="./images/DonateImg4.png"
                alt="Radio Top"
                className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto object-contain rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-base sm:text-lg md:text-xl font-sans font-normal font-['Nunito_Sans'] mb-2">
                Be The Part Of FundRaisers With Over
              </p>
              <h1 className="text-white text-[clamp(48px,10vw,100px)] sm:text-[clamp(60px,12vw,140px)] md:text-[clamp(80px,12vw,160px)] font-sans font-['Space_Grotesk'] leading-tight">
                10,000+
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl font-sans font-normal font-['Nunito_Sans'] mt-2">
                People from around the world Joined
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="./images/DonateImg5.png"
                alt="Radio Bottom"
                className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
          {/* Diagonal Images */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
            <img
              src="./images/DonateImg6.png"
              alt="Radio Diagonal 1"
              className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rotate-[-10deg] rounded-lg shadow-lg"
            />
            <img
              src="./images/DonateImg7.png"
              alt="Radio Diagonal 2"
              className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto rotate-[10deg] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FrequentlyAsked />
        <Footer />
      </Suspense>
    </div>
  );
};

export default DonateUs;