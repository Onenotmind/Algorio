/**
 *  排序算法：复杂度为n^2的算法
 *  		《1》冒泡排序
 *  		《2》插入排序
 *  		《3》选择排序
 */

// 冒泡排序 -- 升序排列

// function bubbleSort (arr) {
// 	if(arr.length <= 1) return 
// 	for( let j = 0; j < arr.length - 1; j++) {
// 		for(let i = 0; i < arr.length - 1; i++) {
// 			if(arr[i] > arr[i + 1]) {
// 				let temp = arr[i + 1]
// 				arr[i + 1] = arr[i]
// 				arr[i] = temp
// 			}
// 		}	
// 	}
// 	return arr
// }




// function bubbleSort(arr){
// 	if(arr.length<=1) return
// 	for(var i=0;i<arr.length;i++){
// 		for(var j=0;j<arr.length-1-i;j++){
// 			if(arr[j]>arr[j+1]){
//         var temp=arr[j+1];
//         arr[j+1]=arr[j];
//         arr[j]=temp;
// 			}
// 		}
// 	}
// 	return arr;
// }

// // *
// //  * 冒泡排序 test
//  testArr1 = [1, 4, 2, 8, 6]
//  let res = bubbleSort(testArr1)
//  console.log(res)
 

// 插入排序


function insertSort (arr) {
if(arr.length<=1) return;
var i,j,temp;
for(i=1;i<arr.length;i++){
	j=i-1;
	while(j>=0&&arr[j]>arr[i]){
		temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
		j--;
	}
}
return arr;
}





testArr1 = [1, 4, 2, 8, 6]
let res = insertSort(testArr1)
 console.log(res);

//  // 选择排序


 // function selectionSort(arr) {
 // 	if(arr.length<=1) return;
 // 	var min,i,j,temp;
 // 	for(i=0;i<arr.length-1;i++)
 // 	{
 // 		min=i;
 // 		for(j=i+1;j<arr.length;j++){
 // 			if(arr[min]>arr[j]){
 //        min=j;
 // 			}
 // 		}
 // 		temp=arr[i];
 // 		arr[i]=arr[min];
 // 		arr[min]=temp;
 // 	}
 // 	return arr;
 // }
 // testArr1 = [1, 4, 2, 8, 6]
 // let res = selectionSort(testArr1)
 // console.log(res)