function pageLoad() {

	let myObject = {
		key1: "This is a text",
		key2: 2,
		key3: false,
		key4: ["alma", "cseresznye", "citrom"],
		key5: function () {
			return "This is a function";
		},
		key6: {
			key6obj1: "This is another text",
			key6obj2: 3
		},
		key7: function () {
			/*	return 7;*/
			console.log(7);
		},
		key8: function (param1, param2) {
			
			console.log(param1);

			for (let index = 0; index < param2.length; index++) {
				console.log(param2[index]);
			}
		},
		key9: function (name) {
			return `
			 <h1>Greetings my beloved ${name}!</h1>
			`
			/*A paraméter nevét TILOS változóként is felhasználni a függvényen belül!!! A függvény paraméter csak függvényen belül létezik, a többi függvény nem látja.*/
		}

	};
	console.log(myObject.key5());
	myObject.key7();
	myObject.key8("Show this text.", [1, 5, 7, 10]); /*Ebben a zárójelbe (argumentum) küldök a függvénybe befelé adatot, ami a függvény paramétere. Lehet több paraméter és a paraméter típusa is lehet strung, number....*/
	document.getElementById("root").insertAdjacentHTML('beforeend', myObject.key9("Andrea"));
}

window.addEventListener('load', pageLoad);