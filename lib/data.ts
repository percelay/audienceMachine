import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Grocery Store Prank",
    client: "Sony Pictures",
    category: "Experiential",
    color: "#7C2D12",
    thumbnail: "https://img.youtube.com/vi/UxgavJP0QoA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/UxgavJP0QoA?autoplay=1",
    videoType: "youtube",
    stats: [
      { label: "Total Views", value: "30 Million+" },
      { label: "Media Coverage", value: "Entertainment Tonight, CNN, Variety, HuffPost, BBC/Tom Brook, YahooMovies, Billboard, Hollywood Reporter, DigitalMotion, theGuardian…" }
    ],
    description: "Animatronic talking produce shocked supermarket shoppers to promote Seth Rogen's animated comedy, \"Sausage Party\". Hilarious reactions were 100% real.",
    press: ["Variety: 'Hilarious and terrifying'"]
  },
  {
    id: 2,
    title: "Bubba's Jetpack",
    client: "Oakley",
    category: "Viral Stunt",
    color: "#4A5568",
    thumbnail: "https://img.youtube.com/vi/z5u_2bGPdUY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/z5u_2bGPdUY?autoplay=1",
    videoType: "youtube",
    stats: [
      { label: "Total Views", value: "18 Million+ Global" },
      { label: "Media Coverage", value: "CBS Station Group, CNBC, Today Show, Jay Leno's Garage, SI.com, YahooSports, Boston Globe, GolfMagic, Robb Report, Entrepreneur, WSJ.com, DuPont Registry, Wired, Newsweek…" }
    ],
    description: "World's first actual flying golf cart. Featuring Masters champion, Bubba Watson. The high flying video boosted Oakley Golf's online sales 30%.",
    press: []
  },
  {
    id: 3,
    title: "Spider-Man: Homecoming",
    client: "Sony Pictures",
    category: "Live Stunt",
    color: "#991B1B",
    thumbnail: "https://img.youtube.com/vi/E0yoonHWoXw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/E0yoonHWoXw?autoplay=1",
    videoType: "youtube",
    stats: [
      { label: "Total Views", value: "5.4 Million+ Global" },
      { label: "Media Coverage", value: "Entertainment Tonight, CBS O&O stations, Fox News, HuffPost, CBS.com, E! Online, Gizmodo, CNN, Screen Rant, Previews World, TheVerge, Hollywood Reporter…" }
    ],
    description: "Customers at a Brooklyn Starbucks were in for a surprise when Spider-Man (Tom Holland's stunt double) dropped down from the ceiling on his web to grab his coffee order. Among the real customer reactions was Spider-Man creator, Stan Lee. A cross-promotion between Sony and Starbucks arranged by James Percelay.",
    press: []
  },
  {
    id: 4,
    title: "Karate Prank NYC",
    client: "YouTube",
    category: "Hidden Camera",
    color: "#2D3748",
    thumbnail: "https://img.youtube.com/vi/U7zb7qnZBvs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/U7zb7qnZBvs?autoplay=1",
    videoType: "youtube",
    stats: [
      { label: "Total Views", value: "68 Million+ Global" },
      { label: "Media Coverage", value: "Fox News, ET, CBS O&Os, CNN, YahooMovies, HollywoodReporter, DailyMotion, UniLad, TheVerge…" }
    ],
    description: "Unsuspecting New Yorkers witness a wild karate prank, with a street lamp, motorcycle, and water hydrant getting destroyed. Promotion for Cobra Kai. Cameo by Ralph Macchio.",
    press: []
  },
  {
    id: 5,
    title: "HUM Rider",
    client: "Verizon",
    category: "Engineering / Automotive",
    color: "#1E3A8A",
    thumbnail: "https://img.youtube.com/vi/faU7-6u58zM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/faU7-6u58zM?autoplay=1",
    videoType: "youtube",
    stats: [
      { label: "Total Views", value: "440 Million+ Global" },
      { label: "Media Coverage", value: "Today Show, Fox News, CNN, CNBC, Jay Leno's Garage, Yahoo, Popular Science, WSJ, Time, Newsweek, Wired, NHK Japan…" }
    ],
    description: "Custom hydraulic-powered Jeep Grand Cherokee promotes Hum connected car device that \"elevates\" car functionality. The vehicle rises and widens its wheelbase to drive over cars in bumper-to-bumper traffic. Downward facing cameras enabled driver safety. Currently, a hydraulics exhibit at the Liberty Science Center in Jersey City, NJ.",
    press: []
  }
];
