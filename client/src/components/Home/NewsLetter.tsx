import { MailIcon } from "lucide-react";

function NewsLetter() {
  return (
    <section
      className="max-w-7xl
    mt-[128.01px] mb-[127.5px]
     flex items-center justify-center bg-white py-18 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05) "
    >
      <div className="flex flex-col gap-4 items-center w-full md:w-2xl">
        <div className="p-4 bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] rounded-xl ">
          <MailIcon className="size-8 text-app-green" strokeWidth={1.5} />
        </div>
        <h2 className="text-center text-app-green font-semibold text-3xl mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center  max-w-md font-normal leading-6 text-[#6B7280] mb-8">
          Get weekly updates on fresh produce, seasonal offers, and exclusive
          discounts right to your inbox.
        </p>
        <form className="text-center flex flex-col md:flex-row gap-3 max-w-md">
          <input
            className="
            w-75.25
            px-5 py-4 rounded-xl border
             border-gray-200 focus:border-app-green-light transition-all"
            type="email"
            name="newsletter"
            placeholder="Enter your email address"
            required
          />
          <button
            className="py-3.5 px-8 bg-app-green text-white font-semibold 
          rounded-xl shadow-sm whitespace-nowrap hover:bg-app-green-light transition-all "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
