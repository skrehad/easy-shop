import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "To place an order, simply browse our product categories, select the items you wish to purchase, and add them to your shopping cart. Then, proceed to the checkout process to provide your shipping and payment details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express) and PayPal for secure and convenient payment processing.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return the item(s) in their original condition for a refund or exchange. Please refer to our Returns page for detailed instructions.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination. During the checkout process, you can select your country to see the available shipping options.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, we will provide you with a tracking number via email. You can use this tracking number to track the progress of your shipment on our website or the carrier's website.",
    },
    {
      question: "What if I have a problem with my order?",
      answer:
        "If you encounter any issues with your order or have any questions, please don't hesitate to contact our customer support team. You can reach us through the contact form on our Contact Us page or by calling our customer service hotline.",
    },
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
