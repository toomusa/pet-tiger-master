import pick1 from "../assets/images/pick1.jpg";
import pick2 from "../assets/images/pick2.jpg";
import pick3 from "../assets/images/pick3.png";
import thumbsUp from "../assets/images/thumbsUp2.png";


type ImageData = {
  title: string,
  source: string,
  delay: number
}

export const GridImages: ImageData[] = [
  {
    title: "Track Employee Activities",
    source: `${pick1}`,
    delay: 0
  },
  {
    title: "Collect Harvest Data",
    source: `${pick2}`,
    delay: 200
  },
  {
    title: "Monitor Progress in Real-Time",
    source: `${pick3}`,
    delay: 400
  },
];

export const ContactImage: ImageData = {
    title: "PET Tiger",
    source: `${thumbsUp}`,
    delay: 0
};