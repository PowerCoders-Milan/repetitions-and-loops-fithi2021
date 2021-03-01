// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen

/*  for(var i = 0; i <= 20; i++){
      if(i % 2==0){  
        console.log( i +" is even");
     }else{
       if(i % 2!=0) console.log(i +" is odd");
  }
}
*/
/*
var i = 0;
while(i <= 20){
  if(i%2==0)
    console.log(i+" is even");
  else if(i % 2 != 0) console.log(i +" is odd" );
  i++;
}
*/
var i = 0;
do{
  if(i%2==0) console.log( i+" is even");
  else console.log(i+ " is odd");
  i++;
}while(i <= 20);
