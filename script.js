function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let res="";
	let values = Object.keys(ob j).map(Number).sort((a, b) => b - a); // Sort keys in descending order
    
    for (let val of values) {
        while (num >= val) {
            res += obj[val];
            num -= val;
        }
    }
    
return res;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 // console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
