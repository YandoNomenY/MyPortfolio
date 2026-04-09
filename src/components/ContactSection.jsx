import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm(
        "service_xjf58sg",   // 👉 Remplace par ton Service ID
        "template_megtzfk",  // 👉 Remplace par ton Template ID
        form.current,
        "8akNlDkrz9MmNEOCt"  // 👉 Remplace par ta clé publique API
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Une erreur est survenue : " + error.text);
        }
      );
    }
    return (
        <section id="contact" className="py-24  relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className="text-left" >
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:exemple@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        exemple@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+2616690231" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        +261 66 902 31
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">Location</h4>
                                    <a  
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        Antsirabe 110, Madagascar
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg  shadow-x5 w-[80vw] sm:w-[90vw] lg:w-[30vw] md:w-[40vw]">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        <form ref={form} className="space-y-6" onSubmit={sendEmail} >
                            <div>
                                <label htmlFor="name" className="block text-sm text-left font-medium mb-2"> Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Yando Nomeny ..."
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-left font-medium mb-2"> Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                required
                                name="email"
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="andonomeny1@gmail.com "
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm text-left font-medium mb-2"> Your Name</label>
                                <textarea 
                                type="message" 
                                id="message" 
                                required
                                name="name"
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" 
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}> 
                                Send Message
                                <Send  size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}