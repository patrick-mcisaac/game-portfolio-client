import ContactCard from "@/components/contact/ContactCard"
import {
    faGithub,
    faLinkedin,
    faUnity
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return (
        <div className="m-h-screen flex w-full flex-col items-center justify-start gap-40 self-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                Follow or Reach Out
            </h1>
            <section className="flex w-full items-center justify-center gap-10 md:gap-20 lg:gap-30 xl:gap-40">
                <ContactCard icon={faGithub} className="" name="github" />
                <ContactCard icon={faUnity} className="" name="unity" />
                <ContactCard icon={faLinkedin} className="" name="linkedin" />
                <ContactCard icon={faEnvelope} className="" name="email" />
            </section>
        </div>
    )
}
