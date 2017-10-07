/**
 * 冒泡排序：复杂度为nlg(n)的算法
 * 		1，快速排序
 * 		2，归并排序
 */


/**
 * quickSort -- 快排算法
 * 	testArr1 = [1, 4, 2, 8, 6]
 * 	bubbleSort(testArr1, 0, testArr1.length-1)
 * 	console.log(testArr1)
 */

// function quickSort (arr, first, end) {	
// 	if(first < end) {
// 		let privior = partition(arr, first, end)
// 		quickSort(arr, first, privior)
// 		quickSort(arr, privior+1, end)
// 	}

// }

// function partition (arr, first, end) {
// 	let i = first
// 	let j = end
// 	while(i < j) {
// 		while(i<j && arr[i] <= arr[j]) j--; // 右侧扫描
// 		if(i<j) { //当arr[i] > arr[j],进行交换
// 			let temp = arr[j]
// 			arr[j] = arr[i]
// 			arr[i] = temp
// 			j--
// 		}
// 		while(i<j && arr[i] <= arr[j]) i++; // 左侧扫描
// 		if(i<j) { //当arr[i] > arr[j],进行交换
// 			let temp = arr[j]
// 			arr[j] = arr[i]
// 			arr[i] = temp
// 			i++
// 		}
// 	}
// 	return i
// }


// function quickSort (arr, first, end) {
// 	if(first>=end)
// 		return;
// 	var p=arr[first];
// 	var i=first;
// 	var j=end;
// 	while(i<j){
// 		while(i<j&&arr[j]>=p){
// 			j--;
// 		}
// 		while(i<j&&arr[i]<=p){
// 			i++;
// 		}
// 		if(i<j){
// 			var temp=arr[i];
// 			arr[i]=arr[j];
// 			arr[j]=temp;
// 		}
// 		arr[first]=arr[i];
// 		arr[i]=p;
// 		quickSort(arr,first,i-1);
// 		quickSort(arr,i+1,end);
// 	}
// }

// testArr1 = [1, 4, 2, 8, 6]
// quickSort(testArr1, 0, testArr1.length-1)
// console.log(testArr1)


 /**
  * 归并排序
  */
 


//  function mergeSort(arr) {  //采用自上而下的递归方法
//     if (arr.length<2)
//     	return;
   
//     var mid=arr.length/2;
//      left = arr.slice(0, middle),
//      right = arr.slice(middle);
//      return merge(mergeSort(left),mergeSort(right));
// }
// function merge(left,right){
// 	var result=[];
// 	while(left.length==1&&right.length==1){
// 		if(left(0)<=right(0)){

// 		}
// 	}
// }



// testArr1 = [1, 4, 2, 8, 6]
// mergeSort(testArr1)
// console.log(testArr1)



    

    function merge(arr,l,m,r){  
    	// var m=(l+r)/2;
     //  var left_size= m-l;
     //  var right_size=r-m+1;
     //  var left=[];
     //  var right=[];
     //  var i,j,k;
     //  //合并两个有顺序的数组
     //  for(i=l;i<m;i++){
     //  	left.push(arr[i]);
     //  }
     //  for(i=m;i<=r;i++){
     //  	right[i-m]=arr[i];
     //  }
     //  console.log(left)
     //  console.log(right)
     //  arr[l,m]
     //  arr[m+1,r]
      var i = l;
      var j = m+1;
      console.log(i);
	      console.log(j);
      //while((i!==m) || (j!==r)) {
      	while((arr[i] <= arr[j]) && (i<=m)) i++;
      	if(arr[i] > arr[j]) {
	      	var temp = arr[j];
	      	arr[j] = arr[i];
	      	arr[i] = arr[j];
	      }


        
	      console.log(arr);
      	while((arr[j] >= arr[i]) && (j<=r)) j++;
				if(arr[j] < arr[i]) {
	      	var temp = arr[j];
	      	arr[j] = arr[i];
	      	arr[i] = arr[j];
	      }
	      
     // }





      // i=0;
      // j=0;
      // k=l;
      // while(i<left_size&&j<right_size){
      // 	if(left[i]<right[j]){
      // 		arr[k]=left[i];
      // 		i++;
      // 		k++;
      // 	}else{
      // 		arr[k]=right[j];
      // 		j++;
      // 		k++;
      // 	}
      // }
      // while(i<left_size){
      // 	arr[k]=left[i];
      // 		i++;
      // 		k++;
      // }
      // while(j<right_size){
      // 	arr[k]=left[j];
      // 		j++;
      // 		k++;
      // }
    }
      function mergeSort(arr,l,r){  
      	if(l==r){
      		return;
      	}else{
      var m=Math.floor((l+r)/2);
      mergeSort(arr,l,m);
      mergeSort(arr,m+1,r);
      merge(arr,l,m,r);
      	}
    }  
  

 testArr1 = [1,6, 4]
 mergeSort(testArr1,0, testArr1.length-1)
 console.log(testArr1)