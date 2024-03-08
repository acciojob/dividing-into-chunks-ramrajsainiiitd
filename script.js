const n = prompt("Enter n: ");
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let n=5;
alert(JSON.stringify(divide(arr, n)));
const divide = (arr, n) => {
  // Write your code here
	let MaxSumArr = [];
	let SumArr = [];
	let sum = 0;
	for (let i = 0; i < arr.length;) {
	 let j=i;
		while (sum<=n) {
		sum+=arr[j];
		SumArr.push(arr[j]);
		//console.log("ghj",SumArr,"bjhbjhb", i,j,"rtyui",sum,);	
		j++
		i++
	 }
	SumArr.pop();
	MaxSumArr.push(SumArr);
	//console.log("maxsumarr:",MaxSumArr);
	sum=0;
	SumArr=[];
	i=i-1;
	j=j-1;	
	}
	return MaxSumArr;
};
console.log(divide(arr,n));
