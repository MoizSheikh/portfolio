// import Button from "@/app/(components)/Button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a User Manual for People?",
      answer:
        "It’s a personalized document that outlines your preferences, communication style, and boundaries, helping others understand how to best interact with you.",
    },
    {
      question: "How long does it take to create a manual?",
      answer:
        "Typically, it takes just a few minutes to complete our survey and generate your manual, depending on how detailed you'd like it to be.",
    },
    {
      question: "Can I update my manual later?",
      answer:
        "Yes, you can easily update your manual at any time to reflect new preferences or changes in your communication style.",
    },
    {
      question: "How do I customize my manual?",
      answer:
        "After completing the survey, you’ll have the option to select a tone, style, and format that best matches your personal preferences.",
    },
    {
      question: "Is my information secure?",
      answer:
        "We use industry-standard encryption to ensure that your data remains private and secure. Your manual is accessible only by you unless you choose to share it.",
    },
    {
      question: "What if I need help during the process?",
      answer:
        "Our support team is available to assist you with any questions or issues you might have while creating or updating your manual.",
    },
  ];

  return (
    <section className="home-container py-4 lg:py-12 flex flex-col lg:flex-row text-center lg:text-left">
      <div className="w-full lg:w-5/12 mb-8">
        <h2 className="text-4xl font-bold">
          Questions?
          <br />
          We’ve got answers.
        </h2>
        <p className="mt-6 text-gray-600 text-sm">
          Have other questions or need assistance?
        </p>
        {/* <Button
          className="bg-primary text-white mt-6 border-none px-12 py-2 rounded-full font-semibold min-h-10 h-10 hover:bg-black"
          redirectsTo={"/contact-us"}
        >
          Contact Us
        </Button> */}
      </div>

      <div className="mx-auto space-y-2 lg:space-y-3 text-left w-full lg:w-7/12 bg-white">
        {faqs.map((faq, index) => (
          <div className="collapse collapse-plus bg-white shadow-lighter rounded-md px-4" key={index}>
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title homeCollapse text-xl font-semibold justify-between flex p-3 py-4 text-primary">
              <span className=" w-11/12 lg:w-full">{faq.question}</span>
            </div>
            <div className="collapse-content font-light text-sm text-grey-600">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
