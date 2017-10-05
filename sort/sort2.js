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

function quickSort (arr, first, end) {	
	if(first < end) {
		let privior = partition(arr, first, end)
		quickSort(arr, first, privior)
		quickSort(arr, privior+1, end)
	}

}

function partition (arr, first, end) {
	let i = first
	let j = end
	while(i < j) {
		while(i<j && arr[i] <= arr[j]) j--; // 右侧扫描
		if(i<j) { //当arr[i] > arr[j],进行交换
			let temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
			j--
		}
		while(i<j && arr[i] <= arr[j]) i++; // 左侧扫描
		if(i<j) { //当arr[i] > arr[j],进行交换
			let temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
			i++
		}
	}
	return i
}

/**
 * 归并排序：
 * 
 */