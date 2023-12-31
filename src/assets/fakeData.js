const foodMenu = [
    {
      foodCode: '1201',
      foodCountry: 'usa',
      foodName: 'burger',
      foodPrice: '500',
      restaurantName: 'burgerology',
      restaurantAddress: '20 street avenue, dhaka, bangladesh',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/wKhFFsd/burger-1.webp'
    },
    {
      foodCode: '1202',
      foodCountry: 'usa',
      foodName: 'pizza',
      foodPrice: '800',
      restaurantName: 'pizzaland',
      restaurantAddress: '15 main road, new york, usa',
      reservationAvailability: 'no', 
      foodImage: 'https://i.ibb.co/zPSdfKB/pizza-1.webp'
    },
    {
      foodCode: '1203',
      foodCountry: 'usa',
      foodName: 'sandwich',
      foodPrice: '350',
      restaurantName: 'sandwichSpot',
      restaurantAddress: '5 downtown street, chicago, usa',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/Fs1rMrB/sand-1.webp'
    },
    {
      foodCode: '1204',
      foodCountry: 'usa',
      foodName: 'chicken',
      foodPrice: '600',
      restaurantName: 'chickenDelight',
      restaurantAddress: '10 avenue road, los angeles, usa',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/8BxhTLg/chicken-1.webp'
    },
    {
      foodCode: '1205',
      foodCountry: 'italy',
      foodName: 'pizza',
      foodPrice: '700',
      restaurantName: 'pastaPalace',
      restaurantAddress: '5 pasta lane, rome, italy',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/JtPPwxj/sand-combo.webp'
    },
    {
      foodCode: '1206',
      foodCountry: 'italy',
      foodName: 'sandwich',
      foodPrice: '400',
      restaurantName: 'paniniPlace',
      restaurantAddress: '8 cheese street, milan, italy',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/zPSdfKB/pizza-2.webp'
    },
    {
      foodCode: '1207',
      foodCountry: 'italy',
      foodName: 'burger',
      foodPrice: '550',
      restaurantName: 'mammaBurger',
      restaurantAddress: '12 pasta road, venice, italy',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/HtJbcJV/burger-2.webp'
    },
    {
      foodCode: '1208',
      foodCountry: 'italy',
      foodName: 'chicken',
      foodPrice: '650',
      restaurantName: 'polloFresco',
      restaurantAddress: '20 olive lane, florence, italy',
      reservationAvailability: 'no', 
      foodImage: 'https://i.ibb.co/ZY5TD5p/chicken-3.webp'
    },
    {
      foodCode: '1209',
      foodCountry: 'japan',
      foodName: 'sushi',
      foodPrice: '900',
      restaurantName: 'sushiSensation',
      restaurantAddress: '6 fisherman street, tokyo, japan',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/qF68WFv/pizza-3.webp'
    },
    {
      foodCode: '1210',
      foodCountry: 'japan',
      foodName: 'ramen',
      foodPrice: '750',
      restaurantName: 'ramenHouse',
      restaurantAddress: '9 noodle road, osaka, japan',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/GksF69W/pizza-4.webp'
    },
    {
      foodCode: '1211',
      foodCountry: 'japan',
      foodName: 'tempura',
      foodPrice: '550',
      restaurantName: 'tempuraHeaven',
      restaurantAddress: '15 crunchy avenue, kyoto, japan',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/G59BMX6/pizza-slice.webp'
    },
    {
      foodCode: '1212',
      foodCountry: 'japan',
      foodName: 'bento',
      foodPrice: '600',
      restaurantName: 'bentoBox',
      restaurantAddress: '12 sushi street, hiroshima, japan',
      reservationAvailability: 'no', 
      foodImage: 'https://i.ibb.co/wKhFFsd/burger-1.webp'
    },
    {
      foodCode: '1213',
      foodCountry: 'mexico',
      foodName: 'taco',
      foodPrice: '450',
      restaurantName: 'tacoTime',
      restaurantAddress: '7 spicy road, mexico city, mexico',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/HtJbcJV/burger-2.webp'
    },
    {
      foodCode: '1214',
      foodCountry: 'mexico',
      foodName: 'enchilada',
      foodPrice: '550',
      restaurantName: 'enchiladaExpress',
      restaurantAddress: '18 salsa street, guadalajara, mexico',
      reservationAvailability: 'no', 
      foodImage: 'https://i.ibb.co/JcgxFgg/burger-3.webp'
    },
    {
      foodCode: '1215',
      foodCountry: 'mexico',
      foodName: 'burrito',
      foodPrice: '600',
      restaurantName: 'burritoBonanza',
      restaurantAddress: '10 beans avenue, cancun, mexico',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/3zrBgtn/burger-4.webp'
    },
    {
      foodCode: '1216',
      foodCountry: 'mexico',
      foodName: 'quesadilla',
      foodPrice: '400',
      restaurantName: 'quesadillaCorner',
      restaurantAddress: '8 cheese lane, tijuana, mexico',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/31bRH2L/burger-combo.webp'
    },
    {
      foodCode: '1217',
      foodCountry: 'india',
      foodName: 'biryani',
      foodPrice: '600',
      restaurantName: 'biryaniBliss',
      restaurantAddress: '12 spice road, mumbai, india',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/8BxhTLg/chicken-1.webp'
    },
    {
      foodCode: '1218',
      foodCountry: 'india',
      foodName: 'naan',
      foodPrice: '250',
      restaurantName: 'naanNook',
      restaurantAddress: '9 tandoor lane, delhi, india',
      reservationAvailability: 'no', 
      foodImage: 'https://i.ibb.co/yFMSdRP/chicken-2.webp'
    },
    {
      foodCode: '1219',
      foodCountry: 'india',
      foodName: 'samosa',
      foodPrice: '150',
      restaurantName: 'samosaSquare',
      restaurantAddress: '7 street snacks avenue, kolkata, india',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/ZY5TD5p/chicken-3.webp'
    },
    {
      foodCode: '1220',
      foodCountry: 'india',
      foodName: 'dosa',
      foodPrice: '350',
      restaurantName: 'dosaDelight',
      restaurantAddress: '15 dosa street, chennai, india',
      reservationAvailability: 'yes', 
      foodImage: 'https://i.ibb.co/FHxH6YH/chicken-4.webp'
    }
]

console.log(foodMenu);