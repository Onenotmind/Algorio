/**
 *  排序算法：复杂度为n^2的算法
 *  		《1》冒泡排序
 *  		《2》插入排序
 */

// 冒泡排序 -- 升序排列

function bubbleSort (arr) {
	if(arr.length <= 1) return 
	for( let j = 0; j < arr.length - 1; j++) {
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				let temp = arr[i + 1]
				arr[i + 1] = arr[i]
				arr[i] = temp
			}
		}	
	}
	return arr
}

/**
 * 冒泡排序 test
 * testArr1 = [1, 4, 2, 8, 6]
 * let res = bubbleSort(testArr1)
 * console.log(res)
 */


// 插入排序

function insertSort (arr) {

}

