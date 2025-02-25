
const CalendarEmbed = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Let's Connect</h2>
        <p className="text-primary-muted mb-8 max-w-2xl mx-auto">
          Schedule a call with me to discuss your project, share ideas, or just have a friendly chat about design and technology.
        </p>
        <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://calendly.com/your-calendar/30min"
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule a call"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CalendarEmbed;
