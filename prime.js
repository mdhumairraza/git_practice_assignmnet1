num =13
flag=True
count=0
	for(i=2;i<=num**0.5;i++){
	
		if( num%i === 0){
			flag=False
		}
	}
console.log(flag)
