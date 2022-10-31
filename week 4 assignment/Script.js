var names =new Array();
names[0]="Jordan"
names[1]="Jey"
names[2]="Jacob"
names[3]="American Wolf"
names[4]="Kryptonite"
names[5]="Abram"
names[6]="Dojo"
names[8]="Afgans"
names[9]="Sokovia"

for (var i = 0 ; i < names.length; i++){
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
