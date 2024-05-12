import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mineth',
      email: 'mineth.ws@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    {
      //_id: '1',
      name: ' Firefly on a Lotus Leaf Painting',
      slug: ' Firefly on a Lotus Leaf Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p1.png',
      Artist: 'Kasun Wickramasinghe',
      price: 950,
      countInStock: 10,
      Size: ' 76.2 W x 101.6 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'A very unusual set of a firefly resting on a lotus leaf. The painting features a heavily detailed portrayal of a firefly and the striking greenery of a lotus leaf floating in what seems to be clear fresh water colored in emerald. The creator has also included an abstract geometrical design in the painting that curiously highlights the firefly as though it were the blueprint of the insect.In addition, skillful outlines of foliage and neighboring lotus leaves have been used to further decorate this painting.',
    },
    {
      //_id: '2',
      name: 'Coin Painting',
      slug: 'Coin Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p2.png',
      Artist: 'Sanjaya Gunarathna',
      price: 910,
      countInStock: 10,
      Size: '100.8 W x 146.8 H x 2.5 D cm',
      Shipment: 'Ships in a Tube',
      About:
        "There is an inseparable relationship between nature and humans. The reason is that humans are a part of the natural ecosystem.But looking at today's world, man who was a part of this nature is challenging it and building their cultural world. As a result, the world is now plagued with natural disasters and calamities, and a difficult place to live.The main objective of my solo exhibition of paintings, “Life without Green”, is to bring the inappropriate results of the contest between this environment and humans into a language of art",
    },
    {
      //_id: '3',
      name: 'Peaceful Respect Painting',
      slug: 'Peaceful Respect Painting',
      category: 'Oil on Canvas',
      image: '/images/p3.png',
      Artist: 'Nilantha Vidanarachchi',
      price: 1780,
      countInStock: 10,
      Size: ' 91.4 W x 121.9 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'Perfect peace of mind and the essence of tranquility is captured in color and sketch in this portrait a Buddhist Monk in deep meditation. The dark, deep colored background of what appears to be the heavy foliage of a hidden section of the forest is exquisitely applied against detailed features of the subject.',
    },
    {
      //_id: '4',
      name: 'The Governor Painting',
      slug: 'The Governor Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p4.png',
      Artist: 'Hemantha Warakapitiya',
      price: 2600,
      countInStock: 0,
      Size: '101.6 W x 152.4 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'The commanding presence of an unlikely ruler in the commercial streets of a colonial past. An elephant takes a walk escorted by his mahout amidst the concrete jungle as if he was the governor of the city. This portrayal is beautifully painted, capturing the statue of this ruling figure against an exquisite backdrop of regal building starching outward triangularly.',
    },
    {
      //_id: '5',
      name: 'The Hive Painting',
      slug: 'The Hive Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p5.png',
      Artist: 'Kasun Wickramasinghe',
      price: 1230,
      countInStock: 10,
      Size: '76.2 W x 101.6 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'The golden interior of a beehive is beautifully portrayed in this blend of abstract and reality. The feature or centerpiece of the painting being an elegant bee who could easily be the queen of the hive is surrounded by the black and gold splendor of the nest. Mystic designs included above and below the queen bee add more mystery to this exquisite painting.',
    },
    {
      //_id: '6',
      name: 'The Cellist Painting',
      slug: 'The Cellist Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p6.png',
      Artist: 'Hemantha Warakapitiya',
      price: 1600,
      countInStock: 10,
      Size: '91.4 W x 121.9 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'A young boy concentrates intently as he engages his body and soul in creating music through a wooden stringed accomplice. This portrait of man and music is a perfect depiction of the relationship between the musician and instrument, both lost in each other’s embrace with the sole purpose of delivering a beautiful melody.',
    },
    {
      //_id: '7',
      name: 'Basking in the Light Painting',
      slug: 'Basking in the Light Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p7.png',
      Artist: 'Kasun Wickramasinghe',
      price: 950,
      countInStock: 10,
      Size: '76.2 W x 101.6 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'The Creator has offered a masterful ode to Buddhism. Being that the Lotus flower is a symbol of Buddhism. The geometry of this masterpiece only draws emphasis to the celestial atmosphere that is highly prominent in this magnificent piece.',
    },
    {
      //_id: '8',
      name: 'A Journey for Two Painting',
      slug: 'A Journey for Two Painting',
      category: 'Acrylic on Canvas',
      image: '/images/p8.png',
      Artist: 'Kasun Wickramasinghe',
      price: 1270,
      countInStock: 1,
      Size: ' 91.4 W x 121.9 H x 2.5 D cm',
      Shipment: 'Ships in a Crate',
      About:
        'Narrating a journey for two in translucent waters the artist has captured an amicable journey of two carps. Their streamline swim is unhindered, and the silky sway of their delicate tails only exemplifies the ease of their seamless journey. The lone water lotus reflects the pigments of the red and silvery-white scales of the two koi carps allowing nature to take both forms of fauna and flora in the artist’s depiction of the painting.',
    },
  ],
};
export default data;
