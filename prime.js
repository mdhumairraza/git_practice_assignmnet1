

num =13

count=0
	for(i=1;i<=num;i++){
	
		if( num%i === 0){
			count++
		}
	}
if(  count ===2 ){
	console.log(true);
}	else{
	console.log(false)
	}