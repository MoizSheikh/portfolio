import Button from "@/app/_components/Buttons/HomepageBtn";
import { CardLinksvg } from "@/app/_lib/assets/HomepageSVG";

interface PricingPlansProps {
  hideBtn?: boolean;
}
const PricingPlans = async ({ hideBtn = false }: PricingPlansProps) => {
  return (
    <section
      className={`home-container flex flex-col ${
        !hideBtn ? "lg:flex-row md:py-20 lg:py-28 md:text-left" : ""
      }  align-center text-center  w-full justify-between items-center py-12 `}
    >
      <div
        className={`w-full text-center ${
          !hideBtn ? " lg:w-3/12 lg:text-left" : ""
        }`}
      >
        <h2 className="text-4xl font-semibold text-black">
          Flexible Pricing Plans
        </h2>
        <p
          className={`text-gray-500 my-6 text-sm w-full text-center 
          ${!hideBtn ? "lg:w-10/12 lg:text-left" : ""}`}
        >
          Choose the plan that's right for you, whether you're an individual, a
          couple, or a company.
        </p>

        <Button
          isPill={true}
          className="text-white border-none font-semibold mt-2 px-12 min-h-10 h-10"
          defaultColor={true}
        >
          See All Plans
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row align-center justify-around lg:justify-end w-full lg:w-[85%] gap-4 mt-4">
        <div className="card w-full lg:w-80 bg-white shadow-lighter p-6 rounded flex flex-col justify-around align-center ">
          <h3 className="text-3xl font-semibold text-primary">Personal</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Create a personalized manual to share with your significant other,
            friends, or family, helping them understand your needs and
            preferences.
          </p>
          <a href="/examples" className="text-primary text-xs mt-3 font-medium">
            View Example
          </a>
          <div className="flex flex-row items-end justify-between mt-6">
            <p className="text-2xl lg:text-3xl font-bold text-black">$50</p>
            <div>
              <CardLinksvg color="black" />
            </div>
          </div>
        </div>
        <div className="card w-full lg:w-80 bg-white shadow-lighter p-6 rounded flex flex-col justify-around align-center ">
          <h3 className="text-2xl font-semibold text-primary">Professional</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Perfect for professionals looking to enhance workplace
            communication. Create a manual that reflects your unique style and
            preferences.
          </p>
          <a href="/examples" className="text-primary text-xs mt-3 font-medium">
            View Example
          </a>
          <div className="flex flex-row items-end justify-between mt-6">
            <p className="text-2xl lg:text-2xl font-semibold text-black">
              Coming soon
            </p>
            <button disabled={true}>
              <CardLinksvg />
            </button>
          </div>
        </div>
        <div className="card w-full lg:w-80 bg-white shadow-lighter p-6 rounded flex flex-col justify-around align-center ">
          <h3 className="text-2xl font-semibold text-primary">Couples</h3>
          <p className="mt-2 text-gray-500 text-sm">
            This package is designed to strengthen your relationship by
            fostering better understanding and communication.
          </p>
          <a href="/examples" className="text-primary text-xs mt-3 font-medium">
            View Example
          </a>
          <div className="flex flex-row items-end justify-between mt-6">
            <p className="text-2xl lg:text-2xl font-semibold text-black">
              Coming soon
            </p>
            <button disabled={true}>
              <CardLinksvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
