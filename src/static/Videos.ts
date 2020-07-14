type VideoData = {
  title: string,
  source: string,
  mdDelay: number,
  smDelay: number
}

export const FieldVideos: VideoData[] = [
  {
    title: "Scan and Piece Out Process",
    source: `https://www.youtube.com/embed/${"OLOat8g9h6Q"}?rel=0`,
    mdDelay: 0,
    smDelay: 100
  },
  {
    title: "Complete Process in the Field",
    source: `https://www.youtube.com/embed/${"WENGcUzHkR8"}?rel=0`,
    mdDelay: 200,
    smDelay: 100
  },
  {
    title: "Face Scan Clock In Demo",
    source: `https://www.youtube.com/embed/${"NSDl5QBbg24"}?rel=0`,
    mdDelay: 400,
    smDelay: 100
  },
]

export const LandingVideo: VideoData = {
  title: "PET Tiger Intro",
  source: `https://www.youtube.com/embed/${"kOOKIl9RbD4"}?rel=0`,
  mdDelay: 0,
  smDelay: 0
}