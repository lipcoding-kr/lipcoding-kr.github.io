
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Button } from "./ui/button";

const events = [
  {
    id: 1,
    title: "Design Workshop",
    date: "June 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Creative Hub, New York",
    description: "Join us for an interactive workshop exploring the latest trends in design thinking and creative problem-solving."
  },
  {
    id: 2,
    title: "Technology Conference",
    date: "July 8, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Center, San Francisco",
    description: "A full-day immersion into emerging technologies with keynotes from industry leaders and hands-on demonstrations."
  },
  {
    id: 3,
    title: "Innovation Summit",
    date: "August 22, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Grand Hall, Chicago",
    description: "Discover breakthrough innovations and connect with pioneers shaping the future of design and technology."
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-none bg-secondary">
            Don't Miss Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6 uppercase">
            Upcoming Events
          </h2>
          <p className="text-lg text-secondary-dark/80 max-w-2xl mx-auto">
            Mark your calendar for these inspiring gatherings that bring together the brightest minds in design and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-primary p-6 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-secondary-dark mb-3 uppercase">
                {event.title}
              </h3>
              <div className="flex items-center mb-2 text-secondary-dark/70">
                <Calendar size={18} className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center mb-4 text-secondary-dark/70">
                <Clock size={18} className="mr-2" />
                <span>{event.time}</span>
              </div>
              <p className="text-secondary-dark/80 mb-4 flex-grow">
                {event.description}
              </p>
              <div className="mt-3">
                <p className="text-secondary-dark/90 font-medium mb-4">
                  {event.location}
                </p>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                  Register Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
