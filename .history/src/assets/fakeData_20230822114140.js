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
        foodImage: 'https://i.ibb.co/JjJ17TN/pizza-1.webp'
    },
    {
        foodCode: '1203',
        foodCountry: 'usa',
        foodName: 'sandwich',
        foodPrice: '350',
        restaurantName: 'sandwichSpot',
        restaurantAddress: '5 downtown street, chicago, usa',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/zhVjTCN/sandwich-1.webp'
    },
    {
        foodCode: '1204',
        foodCountry: 'usa',
        foodName: 'chicken',
        foodPrice: '600',
        restaurantName: 'chickenDelight',
        restaurantAddress: '10 avenue road, los angeles, usa',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/CKvCfXn/chicken-1.webp'
    },
    {
        foodCode: '1205',
        foodCountry: 'italy',
        foodName: 'pasta',
        foodPrice: '700',
        restaurantName: 'pastaPalace',
        restaurantAddress: '5 pasta lane, rome, italy',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/9v4JR6c/pasta-1.webp'
    },
    {
        foodCode: '1206',
        foodCountry: 'italy',
        foodName: 'pizza',
        foodPrice: '750',
        restaurantName: 'italianBites',
        restaurantAddress: '8 trattoria street, milan, italy',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/JjJ17TN/pizza-1.webp'
    },
    {
        foodCode: '1207',
        foodCountry: 'italy',
        foodName: 'gelato',
        foodPrice: '300',
        restaurantName: 'gelatoGarden',
        restaurantAddress: '3 via dolce, florence, italy',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/d7sJ52K/gelato-1.webp'
    },
    {
        foodCode: '1208',
        foodCountry: 'italy',
        foodName: 'risotto',
        foodPrice: '600',
        restaurantName: 'risottoRistorante',
        restaurantAddress: '12 risotto lane, venice, italy',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/rQzkzLd/risotto-1.webp'
    },
    {
        foodCode: '1209',
        foodCountry: 'mexico',
        foodName: 'taco',
        foodPrice: '400',
        restaurantName: 'tacoTown',
        restaurantAddress: '7 taco avenue, mexico city, mexico',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/HDxncB1/taco-1.webp'
    },
    {
        foodCode: '1210',
        foodCountry: 'mexico',
        foodName: 'burrito',
        foodPrice: '550',
        restaurantName: 'burritoBarn',
        restaurantAddress: '10 burrito street, guadalajara, mexico',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/HzBf7dP/burrito-1.webp'
    },
    {
        foodCode: '1211',
        foodCountry: 'mexico',
        foodName: 'quesadilla',
        foodPrice: '350',
        restaurantName: 'quesadillaCorner',
        restaurantAddress: '5 quesadilla lane, monterrey, mexico',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/2KxT3fH/quesadilla-1.webp'
    },
    {
        foodCode: '1212',
        foodCountry: 'mexico',
        foodName: 'salsa',
        foodPrice: '150',
        restaurantName: 'salsaStation',
        restaurantAddress: '3 salsa square, tijuana, mexico',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/NtVXnqV/salsa-1.webp'
    },
    {
        foodCode: '1213',
        foodCountry: 'japan',
        foodName: 'sushi',
        foodPrice: '1000',
        restaurantName: 'sushiSakura',
        restaurantAddress: '15 sushi lane, tokyo, japan',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/S6y02vd/sushi-1.webp'
    },
    {
        foodCode: '1214',
        foodCountry: 'japan',
        foodName: 'ramen',
        foodPrice: '600',
        restaurantName: 'ramenHouse',
        restaurantAddress: '10 ramen street, osaka, japan',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/JRhq6TK/ramen-1.webp'
    },
    {
        foodCode: '1215',
        foodCountry: 'japan',
        foodName: 'tempura',
        foodPrice: '450',
        restaurantName: 'tempuraDelight',
        restaurantAddress: '7 tempura road, kyoto, japan',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/8M5GnFp/tempura-1.webp'
    },
    {
        foodCode: '1216',
        foodCountry: 'japan',
        foodName: 'matcha',
        foodPrice: '300',
        restaurantName: 'matchaCafe',
        restaurantAddress: '5 matcha square, nara, japan',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/1XxPh2s/matcha-1.webp'
    },
    {
        foodCode: '1217',
        foodCountry: 'china',
        foodName: 'dim sum',
        foodPrice: '400',
        restaurantName: 'dimSumPalace',
        restaurantAddress: '15 dim sum lane, beijing, china',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/RQD5cLp/dimsum-1.webp'
    },
    {
        foodCode: '1218',
        foodCountry: 'china',
        foodName: 'noodles',
        foodPrice: '350',
        restaurantName: 'noodleNest',
        restaurantAddress: '8 noodle street, shanghai, china',
        reservationAvailability: 'no', 
        foodImage: 'https://i.ibb.co/MRw7w1G/noodles-1.webp'
    },
    {
        foodCode: '1219',
        foodCountry: 'china',
        foodName: 'fried rice',
        foodPrice: '300',
        restaurantName: 'wokStar',
        restaurantAddress: '10 wok avenue, hong kong, china',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/SVBpJGZ/friedrice-1.webp'
    },
    {
        foodCode: '1220',
        foodCountry: 'uk',
        foodName: 'fish and chips',
        foodPrice: '450',
        restaurantName: 'britishBites',
        restaurantAddress: '20 fish street, london, uk',
        reservationAvailability: 'yes', 
        foodImage: 'https://i.ibb.co/J2H3jDy/fish-chips-1.webp'
    }
];

console.log(foodMenu);