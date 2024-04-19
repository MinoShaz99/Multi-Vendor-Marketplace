import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mineth',
      email: 'mineth.ws@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'blue magpie bird in geomatric composition Painting',
      slug: 'blue magpie bird in geomatric composition Painting',
      category: ' Acrylic on Canvas',
      image: '/images/p1.png',
      Artist: 'Kasun Wickramasinghe',
      price: 940,
      countInStock: 10,
      Size: '45.7 W x 61 H x 1.3 D cm',
      Shipment: 'Ships in a Tube',
      About:
        "I try to signify my painting using the nature, but without expressing the environment 'as is' but making it an abstract artistic surface. There, showing the match as a mismatch, distorted perspective, disregard of the scale, are used as techniques to show the nature of the artistic surface in a different way, I construct the surface of the event image with various types of matching.",
    },
    {
      //_id: '2',
      name: 'Face expressionism Painting',
      slug: 'Face expressionism Painting',
      category: ' Acrylic on Canvas',
      image: '/images/p2.png',
      Artist: 'Nilanga Ranasinghe',
      price: 345,
      countInStock: 0,
      Size: '67.8 W x 87.6 H x 0.1 D cm',
      Shipment: 'Ships in a Tube',
      About: 'abstract face expression,aim to present different side of a face',
    },
    {
      //_id: '3',
      name: 'virility Painting',
      slug: 'virility Painting',
      category: ' Abstract Art ',
      image: '/images/p3.png',
      Artist: 'Kasun Jayasinghe',
      price: 4270,
      countInStock: 20,
      Size: '152.4 W x 243.8 H x 5.1 D cm',
      Shipment: 'Ships in a Plane',
      About:
        'man searching his virility and who am I.butterfly means his feelings and other how react to',
    },
    {
      //_id: '4',
      name: 'To the Heavens Painting',
      slug: 'To the Heavens Painting',
      category: ' Abstract Art ',
      image: '/images/p4.png',
      Artist: 'Hemantha Warakapitiya',
      price: 1600,
      countInStock: 3,
      Size: '91.4 W x 121.9 H x 2.5 D cm',
      Shipment: 'Ships in a Airline',
      About:
        'Motivation and inspiration for the creative expression comes only from above. This thoughtful painting of a cultural dancer is a perfect portrayal of preparation before the performance. His pose sketched exquisitely from an unusual angle capturing the emotion and body language of the stance.',
    },
  ],
};
export default data;
