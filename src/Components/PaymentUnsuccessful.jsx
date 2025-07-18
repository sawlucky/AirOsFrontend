import { XCircle, RotateCw, Mail } from 'lucide-react';

export default function PaymentUnsuccessful() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Payment Unsuccessful
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We couldn't process your payment. Please try again or contact support.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    Your payment of <span className="font-bold">$49.99</span> was declined. 
                    This could be due to insufficient funds or incorrect card details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    We've sent a detailed email to <span className="font-medium">user@example.com</span> with 
                    instructions to complete your payment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <RotateCw className="h-5 w-5 mr-2" />
                Try Payment Again
              </button>

              <button
                type="button"
                className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Use a Different Payment Method
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              Need help?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Contact our support team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Return to{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              dashboard
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}