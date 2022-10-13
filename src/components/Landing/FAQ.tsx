const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
          <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              {[faqs[0],faqs[0],faqs[0],faqs[0],faqs[0],faqs[0],faqs[0],faqs[0]].map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  