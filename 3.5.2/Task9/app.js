const weekDays = {
	"Luni": "Mo",
	"Marti": "Tu",
	"Miercuri": "We",
	"Joi": "Th",
	"Vineri": "Fr",
	"Simbata": "Sa",
	"Duminica": "Su"
};

function reverseObject(weekDays){
	return Object.fromEntries(
		Object.entries(weekDays).map(([key, value]) => [value, key] )
	)
}
console.log(reverseObject(weekDays));
