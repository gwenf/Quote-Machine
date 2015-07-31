$(document).ready(function() {

quoteArray = [ {quote: "Always do your best. What you plant now, you will harvest later.",
							 author: "Og Mandino"},
							{quote: "Things do not happen. Things are made to happen.",
							author: "John F. Kennedy"},
							{quote: "If you can dream it, you can do it.",
							author: "Walt Disney"},
							{quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
							author: "Thomas A. Edison"},
							{quote: "Things work out best for those who make the best of how things work out.",
							 author: "John Wooden"}
];


$("#button").on("click", function() {

  
  var randomNumber = Math.floor(Math.random() * quoteArray.length);
//	alert(randomNumber);
	
//	$("#quote").text(quoteArray[randomNumber]["quote"]);
//	$("#author").text(quoteArray[randomNumber]["author"]);
	
  document.getElementById("quote").innerHTML = quoteArray[randomNumber]["quote"];
  document.getElementById("author").innerHTML = quoteArray[randomNumber]["author"];



});//ends button on click
	
});//ends document.ready