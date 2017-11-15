var food = [
	{
		"restaurant":1,
		"name":"SMOKED ITALIAN PORCHETTA",
		"protein":30,
		"calories":690,
		"price":5
	},
	{
		"restaurant":1,
		"name":"Mount Italy",
		"protein":52,
		"calories":950,
		"price":5
	},
	{
		"restaurant":1,
		"name":"Loaded Italian",
		"protein":32,
		"calories":680,
		"price":5
	},
	{
		"restaurant":1,
		"name":"Chicken Cordon Bleu",
		"protein":41,
		"calories":690,
		"price":5
	},
	{
		"restaurant":1,
		"name":"Half Pound Roast Beef",
		"protein":48,
		"calories":610,
		"price":5
	},
	{
		"restaurant":1,
		"name":"TRIPLE THICK BROWN SUGAR BACON HALF POUND CLUB",
		"protein":58,
		"calories":830,
		"price":5
	},
	{
		"restaurant":1,
		"name":"TRIPLE THICK BROWN SUGAR BACON TURKEY",
		"protein":34,
		"calories":690,
		"price":5
	},
	{
		"restaurant":1,
		"name":"Pizza Slider",
		"protein":13,
		"calories":300,
		"price":1.3
	},
	{
		"restaurant":1,
		"name":"turkey cheese slider",
		"protein":14,
		"calories":200,
		"price":1.3
	},
	{
		"restaurant":1,
		"name":"roast beef n cheese slider",
		"protein":14,
		"calories":240,
		"price":1.3
	},
	{
		"restaurant":1,
		"name":"DEEP FRIED TURKEY GOBBLER",
		"calories":780,
		"protein":54,
		"price":1.3
	},
	{
		"restaurant":1,
		"name":"CAJUN DEEP FRIED TURKEY",
		"calories":430,
		"protein":25,
		"price":1.3
	},
	{
		"restaurant":1,
		"name":"DEEP FRIED TURKEY CLUB",
		"calories":540,
		"protein":34,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Dressed Egg Taco - Bacon",
		"calories":470,
		"protein":20,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Dressed Egg Taco - Sausage",
		"calories":460,
		"protein":17,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Naked Egg Taco - Bacon",
		"calories":310,
		"protein":14,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Naked Egg Taco - Sausage",
		"calories":300,
		"protein":12,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"XXL Grilled Stuft Burrito - Chicken",
		"calories":830,
		"protein":38,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"XXL Grilled Stuft Burrito - Steak",
		"calories":840,
		"protein":37,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Smothered Burrito - Steak",
		"calories":660,
		"protein":33,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Naked Chicken Chips (12 Pieces)",
		"calories":780,
		"protein":28,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Crispy Chicken Quesadilla",
		"calories":650,
		"protein":26,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Power Menu Bowl - Chicken",
		"calories":500,
		"protein":28,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Quesadilla - Chicken",
		"calories":510,
		"protein":27,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Soft Taco - Beef",
		"calories":180,
		"protein":9,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Soft Taco - Chicken",
		"calories":170,
		"protein":10,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Breakfast Quesadilla - Steak",
		"calories":500,
		"protein":29,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Breakfast Crunchwrap - Sausage",
		"calories":700,
		"protein":21,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Grande Scrambler Burrito - Sausage",
		"calories":640,
		"protein":19,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Sausage Flatbread Quesadilla",
		"calories":330,
		"protein":14,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":2,
		"name":"Beefy 5-Layer Burrito",
		"calories":500,
		"protein":19,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Fiesta Taco Salad - Chicken",
		"calories":720,
		"protein":32,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Cheesy Gordita Crunch",
		"calories":500,
		"protein":20,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Gordita Supreme - Chicken",
		"calories":260,
		"protein":16,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Shredded Chicken Mini Quesadilla",
		"calories":200,
		"protein":10,
		"price":1.3
	},
	{
		"restaurant":2,
		"name":"Nacho Cheese Doritos Locos Taco",
		"calories":170,
		"protein":8,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"CARBmaster Greek Yogurt",
		"calories":80,
		"protein":14,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"Kirkland Canned Chicken Breast",
		"calories":210,
		"protein":45.5,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"Kirkland Protein Bar",
		"calories":190,
		"protein":21,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"Zone Perfect Bar",
		"calories":210,
		"protein":14,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"Chocolate Fairlife",
		"calories":140,
		"protein":13,
		"price":1.3
	},
	{
		"restaurant":3,
		"name":"CARBmaster Vanilla Milk",
		"calories":60,
		"protein":11,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"Chick-fil-A Chicken Sandwich",
		"calories":440,
		"protein":28,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"8 Chick-fil-A Nuggets",
		"calories":260,
		"protein":28,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"3 Chick-n-Strips",
		"calories":350,
		"protein":28,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"8 Grilled Nuggets",
		"calories":140,
		"protein":25,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"Grilled Chicken Sandwich",
		"calories":310,
		"protein":29,
		"price":1.3
	},
	{
		"restaurant":4,
		"name":"Chick-fil-A Chicken Biscuit",
		"calories":450,
		"protein":17,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Egg White Grill",
		"calories":300,
		"protein":25,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Chicken, Egg, & Cheese Bagel",
		"calories":480,
		"protein":27,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Greek Yogurt Parfait - Cookie Crumbles",
		"calories":210,
		"protein":11,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Greek Yogurt Parfait - Granola",
		"calories":230,
		"protein":12,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Hash Brown Scramble Bowl",
		"calories":450,
		"protein":30,
		"price":1.3,
		"breakfast":true
	},
	{
		"restaurant":4,
		"name":"Hash Brown Scramble Burrito",
		"calories":680,
		"protein":35,
		"price":1.3,
		"breakfast":true
	},
];

var restaurants = {
	1:"Arby's",
	2:"Taco Bell",
	3:"Grocery",
	4:"Chick-fil-A"
};
 var colors = {
 	0:"coral",
 	1:"#d71921",
 	2:"#8328b2",
 	3:"grey",
 	4:"#dd0031"
 };