import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactTile } from "@/components/ui/ContactTile";
import { CALENDLY_URL, WHATSAPP_URL, EMAIL } from "@/lib/content";

export function ContactSection() {
  return (
    <Section
      band="gradient"
      align="center"
      kicker="Free consultation"
      title="Ready to start your"
      accent="training?"
      intro="Pick a time that suits you, or send a message first if you would rather ask a few questions."
    >
      <div id="contact" style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
        <Button size="lg" variant="primary" iconRight="arrow-right" href={CALENDLY_URL} target="_blank" rel="noopener">
          Choose a time
        </Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
        <ContactTile icon="message-circle" label="WhatsApp" value="+61 458 975 420" detail="Fastest reply, any time zone" href={WHATSAPP_URL} />
        <ContactTile icon="mail" label="Email" value={EMAIL} detail="For longer questions" href={`mailto:${EMAIL}?subject=Free%20consult%20enquiry%20-%20Core%20Iron%20Coaching`} />
        <ContactTile icon="map-pin" label="In person" value="Genesis Fitness Mickleham" detail="Mickleham, Melbourne VIC" />
        <ContactTile icon="video" label="Online" value="Coaching worldwide" detail="Message and video check-ins" />
      </div>
    </Section>
  );
}
