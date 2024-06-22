import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Airtime?',
      answer: 'Airtime refers to the prepaid credit you use to make phone calls or send SMS messages. It allows you to stay connected by ensuring you have sufficient credit on your phone. Airtime can be purchased through various methods, including online platforms, mobile banking apps, and physical recharge cards. Our service provides an easy and convenient way to purchase airtime, allowing you to top up your phone from the comfort of your home or office. This ensures you are always reachable and can make calls or send messages whenever you need.',
    },
    {
      question: 'How do I buy DATA?',
      answer: 'You can buy DATA through our platform by selecting your preferred data plan and carrier. Simply choose the amount of data you need, and complete the purchase using our secure payment options. Data allows you to access the internet, browse websites, use social media, stream videos, and more. By purchasing data through our platform, you can ensure you stay online and connected to the digital world. Our platform offers various data plans to suit different needs, whether you require a small data package for occasional use or a larger plan for heavy internet usage.',
    },
    {
      question: 'How do I subscribe to cable services (DSTV, GOTV, Startime)?',
      answer: 'You can subscribe to DSTV, GOTV, and Startime through our platform by choosing your preferred package and making a payment. Cable services offer a wide range of television channels, including news, entertainment, sports, and movies. Subscribing to these services ensures you have access to quality television content. Our platform simplifies the subscription process, allowing you to select and pay for your chosen package online. This saves you the hassle of visiting physical stores or dealing with manual payments, providing a convenient and efficient way to enjoy your favorite TV channels.',
    },
    {
      question: 'What is a Virtual Number?',
      answer: 'A Virtual Number is a phone number that isn’t tied to a specific phone. It can be used to forward calls to any device, making it ideal for business use. Virtual numbers provide flexibility and convenience, allowing you to manage calls efficiently. They can be used for various purposes, such as customer service lines, marketing campaigns, or personal use. By using a virtual number, you can ensure you never miss important calls, as they can be forwarded to your mobile phone, landline, or even a VoIP service. This makes virtual numbers a versatile solution for both personal and professional communication needs.',
    },
    {
      question: 'How can I get support?',
      answer: 'You can get support by contacting our customer service through the contact information provided on our website. We offer multiple channels for support, including phone, email, and live chat. Our customer service team is dedicated to assisting you with any issues or inquiries you may have. Whether you need help with a product, service, or have questions about your account, our team is here to help. We strive to provide prompt and effective support to ensure your experience with our service is positive and hassle-free. Don’t hesitate to reach out to us for any assistance you need.',
    },
  ];

  return (
    <div className=" bg-gray-100">
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-5 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-3">FAQs</h1>
          <p className="text-center text-sm md:text-lg text-gray-700 mb-12">
            Find answers to the most frequently asked questions below.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" border-b border-blue-500 py-2"
              >
                <h2
                  className="text-sm md:text-lg font-bold cursor-pointer mb-1 flex justify-between items-center text-blue-500"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
