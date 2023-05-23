import React from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const data = {
    rows: [
      {
        title: "How can I place an order?",
        content:
          "To place an order, simply browse our product categories, select the items you wish to purchase, and add them to your shopping cart. Then, proceed to the checkout process to provide your shipping and payment details.",
      },
      {
        title: "What payment methods do you accept?",
        content:
          "We accept major credit cards (Visa, Mastercard, American Express) and PayPal for secure and convenient payment processing.",
      },
      {
        title: "What is your return policy?",
        content:
          "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return the item(s) in their original condition for a refund or exchange. Please refer to our Returns page for detailed instructions.",
      },
      {
        title: "Do you provide international shipping?",
        content:
          "Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination. During the checkout process, you can select your country to see the available shipping options.",
      },
      {
        title: "How can I track my order?",
        content:
          "Once your order has been shipped, we will provide you with a tracking number via email. You can use this tracking number to track the progress of your shipment on our website or the carrier's website.",
      },
      {
        title: "What if I have a problem with my order?",
        content:
          "If you encounter any issues with your order or have any questions, please don't hesitate to contact our customer support team. You can reach us through the contact form on our Contact Us page or by calling our customer service hotline.",
      },
    ],
  };

  return (
    <div className="">
      <div className="text-3xl font-mono font-bold text-[#ff3633] mt-12">
        Frequently Asked Questions
      </div>
      <div className="faq mx-auto lg:w-[600px] font-mono mt-8">
        <Faq
          data={data}
          styles={{
            bgColor: "none",
            rowTitleColor: "black",
            rowContentColor: "#ff3633",
            transitionDuration: "0.4s",
            timingFunc: "linear",
          }}
        />
      </div>
      <div className="mt-8">
        <Link to="/contact">
          <button className="btn mb-5 text-xl text-white  hover:border-purple-900 bg-[#ff0336] hover:text-black font-mono btn-outline">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;
