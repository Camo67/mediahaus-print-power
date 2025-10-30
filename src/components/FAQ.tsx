import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
const FAQ = () => {
  const faqs = [
    {
      question: "Which media is best for outdoor signage?",
      answer:
        "We recommend a high quality brand name vinyl with matching laminate for long lasting application. This combination provides excellent UV resistance and weather protection for outdoor use.",
    },
    {
      question: "Do you offer samples?",
      answer:
        "Yes — we provide cut samples for most products. Request samples via our contact form and we'll send you material samples to test before placing a full order.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Most orders are dispatched within 1-2 business days. We offer fast national distribution across South Africa through our logistics partners.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Absolutely! With 25+ years in the graphics industry, our team provides expert product guidance to help you choose the right media for your specific application.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to frequently asked questions about our products and services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
