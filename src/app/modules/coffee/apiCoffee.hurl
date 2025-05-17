GET  http://localhost:5000/api/v1/coffees


GET  http://localhost:5000/api/v1/users/68219895b0fbd52bffcfac81



DELETE http://localhost:5000/api/v1/users/6823d21c4fdf6d7a34c1f1ea


PUT  http://localhost:5000/api/v1/users/dynamicId
Content-Type: application/json
{
    "name": "testingg"
}



POST http://localhost:5000/api/v1/coffees
Content-Type: application/json
[
  {
    "name": "Espresso",
    "description": "A strong, black coffee made by forcing steam through ground coffee beans.",
    "price": 3.50,
    "size": "Single",
    "ingredients": ["Espresso Beans", "Water"],
    "available": true,
    "image": "https://example.com/images/espresso.jpg"
  },
  {
    "name": "Cappuccino",
    "description": "A coffee-based drink made with espresso, hot milk, and steamed milk foam.",
    "price": 4.00,
    "size": "Medium",
    "ingredients": ["Espresso Beans", "Steamed Milk", "Milk Foam"],
    "available": true,
    "image": "https://example.com/images/cappuccino.jpg"
  },
  {
    "name": "Latte",
    "description": "A coffee drink made with espresso and steamed milk, often with a little foam.",
    "price": 4.50,
    "size": "Large",
    "ingredients": ["Espresso Beans", "Steamed Milk", "Foam"],
    "available": true,
    "image": "https://example.com/images/latte.jpg"
  },
  {
    "name": "Americano",
    "description": "A type of coffee made by diluting espresso with hot water.",
    "price": 3.00,
    "size": "Medium",
    "ingredients": ["Espresso Beans", "Hot Water"],
    "available": true,
    "image": "https://example.com/images/americano.jpg"
  },
  {
    "name": "Mocha",
    "description": "A coffee drink made with espresso, steamed milk, and chocolate syrup.",
    "price": 5.00,
    "size": "Large",
    "ingredients": ["Espresso Beans", "Steamed Milk", "Chocolate Syrup", "Whipped Cream"],
    "available": false,
    "image": "https://example.com/images/mocha.jpg"
  }
]


