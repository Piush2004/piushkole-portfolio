import { profile } from "@/data/profile";

const timelineEvents = [
  ...profile.experience.map(exp => ({
    title: exp.title,
    organization: exp.company,
    period: exp.duration,
    description: exp.description,
    type: "Experience"
  })),
  ...profile.education.map(edu => ({
    title: edu.degree,
    organization: edu.university,
    period: edu.duration,
    description: edu.coursework && edu.coursework.length > 0 ? `Coursework: ${edu.coursework.join(', ')}` : '',
    type: "Education"
  }))
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Timeline
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Timeline Line */}
          <div className="absolute left-4 md:left-[20%] top-0 bottom-0 w-[1px] bg-border rounded-full" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[20%] w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-[5px] mt-2 z-10" />

              {/* Period & Company (Left side on desktop) */}
              <div className="w-full md:w-[20%] pl-10 md:pl-0 md:pr-12 pt-1 mb-4 md:mb-0">
                <span className="block text-sm font-semibold text-muted-foreground mb-1">{event.period}</span>
                <span className="block text-sm font-medium text-foreground/70">{event.type}</span>
              </div>

              {/* Content (Right side on desktop) */}
              <div className="w-full md:w-[80%] pl-10 md:pl-8">
                <h3 className="text-2xl font-semibold text-foreground mb-1">{event.title}</h3>
                <h4 className="text-lg font-medium text-primary mb-4">{event.organization}</h4>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
