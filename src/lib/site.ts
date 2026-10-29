export const site = {
  name: "GoldAcres Learning Center",
  shortName: "GoldAcres",
  tagline: "Uncovering the hidden treasures within every individual.",
  motto: ["Discover", "Develop", "Thrive", "Make a Difference"],
  founded: 2024,
  email: "goldacres24@gmail.com",
  phone: "+234 806 851 7911",
  phoneHref: "tel:+2348068517911",
  address: ["Ladura Du, Jos South", "Plateau State, Nigeria"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ladura+Du+Jos+South+Plateau+Nigeria",
  socials: {
    facebook: "https://facebook.com/goldacres",
    instagram: "https://instagram.com/goldacres",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const pillars = [
  {
    key: "vision",
    title: "Our Vision",
    body: "Empowering every individual to learn in their unique way, fostering inclusive and accessible education for all.",
  },
  {
    key: "mission",
    title: "Our Mission",
    body: "Transforming the lives of children and adults by making learning fun, interactive, and accessible, resulting in improved academic achievement and lifelong enthusiasm for education.",
  },
  {
    key: "values",
    title: "Our Values",
    body: "Nurturing holistic growth, empowering learners to excel in academics, moral character, essential life skills, and spiritual well-being.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "My grandson Mafeng has shown great improvement in his interest for reading. He reads now with confidence and uses more words. He is always excited about going to these after-school classes.",
    name: "Mrs Deborah Dung",
    role: "Grandparent of Mafeng",
  },
  {
    quote:
      "GoldAcres gave my kids the confidence to face the challenge of reading. They made learning to read feel fun rather than a chore, and they teach difficult things in the most understandable way. Their patience and passion are second to none. Thank you!",
    name: "Parent of Micah & Asher",
    role: "Parent",
  },
];

type Photo = { src: string; alt: string; portrait?: boolean };

export const photos: Photo[] = [
  { src: "/IMG-17.jpg", alt: "Children reading picture books together" },
  { src: "/IMG-3.jpg", alt: "Students working in their books during class", portrait: true },
  { src: "/IMG-14.jpg", alt: "A tutor reading with two young learners on the floor" },
  { src: "/IMG-40.jpg", alt: "Smiling students in the classroom doorway" },
  { src: "/IMG-32.jpg", alt: "A word-building game with letter tiles" },
  { src: "/IMG-11.jpg", alt: "A tutor leading the class", portrait: true },
  { src: "/IMG-1.jpg", alt: "An outdoor reading session under the trees" },
  { src: "/IMG-25.jpg", alt: "Small-group learning around the table" },
  { src: "/IMG-7.jpg", alt: "One-on-one help with classwork", portrait: true },
  { src: "/IMG-16.jpg", alt: "Learners sharing storybooks" },
  { src: "/IMG-45.jpg", alt: "Students laughing together" },
  { src: "/IMG-9.jpg", alt: "Hands joined with star stickers", portrait: true },
  { src: "/IMG-26.jpg", alt: "Group activity time" },
  { src: "/IMG-30.jpg", alt: "Sentence-building with wooden word blocks" },
  { src: "/IMG-27.jpg", alt: "A tutor reviewing work with a student", portrait: true },
  { src: "/IMG-10.jpg", alt: "The class listening to a lesson" },
  { src: "/IMG-2.jpg", alt: "Parents and learners gathered outdoors" },
  { src: "/IMG-24.jpg", alt: "Children practising writing" },
  { src: "/IMG-33.jpg", alt: "The Build-a-Word activity board", portrait: true },
  { src: "/IMG-18.jpg", alt: "The reading circle" },
  { src: "/IMG-15.jpg", alt: "Story time on the classroom floor" },
  { src: "/IMG-4.jpg", alt: "Students focused on an activity", portrait: true },
  { src: "/IMG-22.jpg", alt: "The full classroom in session" },
];
