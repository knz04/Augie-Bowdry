import augie from "./assets/augie-bowdry.jpeg";

interface Team {
  id: string;
  profile: string;
  name: string;
  email: string;
  phone: string;
  calendly: string;
  idecide: string;
  mnr: string;
}

export const team: Team[] = [
  {
    id: "augie-bowdry",
    profile: augie,
    name: "Agustin Bowdry",
    email: "agustinbowdry@gmail.com",
    phone: "415-794-2790",
    calendly: "https://calendly.com/andre-scroggie",
    idecide: "https://umustsee.net/JMH7TR",
    mnr: "https://andre-scroggie.mynewretirement.com/",
  },
];
