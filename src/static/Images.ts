import pick1 from "../assets/images/pick1.jpg";
import pick2 from "../assets/images/pick2.jpg";
import iphone2 from "../assets/images/iphone2.jpg";
import thumbsUp from "../assets/images/thumbsUp.png";

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
    source: `${iphone2}`,
    delay: 400
  },
];

export const ContactImage: ImageData = {
    title: "PET Tiger",
    source: `${thumbsUp}`,
    delay: 0
};