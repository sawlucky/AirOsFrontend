import {
  CheckCircle2,
  ShieldCheck,
  Download,
  ArrowRight,
  Home,
} from "lucide-react";

const PaymentSuccess = () => {
  // Sample order data - replace with your actual data
  const orderDetails = {
    orderId: "#123456",
    amount: "$49.99",
    date: new Date().toLocaleDateString(),
    paymentMethod: "Visa ending in 4242",
    items: [{ name: "Premium Plan", quantity: 1, price: "$49.99" }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-emerald-600 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
          <div className="flex justify-center">
            <div className="bg-white/20 p-3 rounded-full">
              <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2} />
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-white">
            Payment Successful!
          </h1>
          <p className="mt-2 text-white/90">Thank you for your purchase</p>
        </div>

        {/* Order Summary */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>
              <p className="text-sm text-gray-500">
                Order {orderDetails.orderId}
              </p>
            </div>
            <div className="flex items-center space-x-1 bg-emerald-100 px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-600">
                Verified
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-medium">{orderDetails.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span>{orderDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method</span>
              <span>{orderDetails.paymentMethod}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-800 mb-3">Items Purchased</h3>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="text-gray-600">
                  {item.name} × {item.quantity}
                </span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Receipt Button */}
        <div className="px-6 pb-6">
          <button className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors">
            <Download className="h-5 w-5" />
            <span>Download Receipt</span>
          </button>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 p-4 flex justify-between">
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </a>
          <a
            href="/dashboard"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>Go to Dashboard</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Additional Thank You Message */}
      <div className="mt-8 text-center max-w-md">
        <p className="text-gray-600">
          Your order is being processed. We've sent a confirmation email with
          your receipt.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Need help?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
