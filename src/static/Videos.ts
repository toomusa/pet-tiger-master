type VideoData = {
  title: string,
  source: string,
  mdDelay: number,
  smDelay: number
}

export const FieldVideos: VideoData[] = [
  {
    title: "Scan and Piece Out Process",
    source: `https://www.youtube.com/embed/${"OLOat8g9h6Q"}`,
    mdDelay: 0,
    smDelay: 100
  },
  {
    title: "Complete Process in the Field",
    source: `https://www.youtube.com/embed/${"WENGcUzHkR8"}`,
    mdDelay: 200,
    smDelay: 100
  },
  {
    title: "Face Scan Clock In Demo",
    source: `https://www.youtube.com/embed/${"NSDl5QBbg24"}`,
    mdDelay: 400,
    smDelay: 100
  },
]

export const LandingVideo: VideoData = {
  title: "PET Tiger Intro",
  source: `https://www.youtube.com/embed/${"kOOKIl9RbD4"}`,
  mdDelay: 0,
  smDelay: 0
}