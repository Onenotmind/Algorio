/**
 * 树的算法主要涉及下面几方面：
 * 《1》树的构造
 * 《2》树的遍历
 * 		二叉树的遍历《先序遍历》《中序遍历》《后序遍历》《层次遍历》
 */

/**
 * 《1》树的构造
 * 		一颗树的构造主要分为两部分：
 * 		第一部分是树节点的结构构造
 * 		第二部分是通过递归或者非递归的方式将节点组合起来
 */

// 节点构造

var node = function (data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

// 将节点以层次的方式组合成一颗二叉树 --还未写出来

function tree_grad (arr) { // arr为数组，储存着树节点依次数值
	let levelArr = []
	let tempArr = []
	let level = Math.floor(Math.log(arr.length)/Math.log(2)) + 1
	if(level < 2) return;
	let root = new node(arr[0])
	levelArr.push(root)
	for(let i=0; i<level; i++) {
		if(levelArr.length !== 0) {
			let m = Math.pow(2,level - 1)
			let l = Math.pow(2,level)
			console.log(m)
			tempArr = []
			for(let j=0; j<levelArr.length; j++) {
				if(m < l) {
					let leftNode = new node(arr[m])
					levelArr[j].left = leftNode
					tempArr.push(leftNode)
					console.log(leftNode)
				}
				if(m+1 < l) {
					let rightNode = new node(arr[m + 1])
					levelArr[j].right = rightNode
					tempArr.push(rightNode)
					console.log(rightNode)
				}
				m++				
			}
		}
		levelArr = []
		for(let i=0; i<tempArr.length; i++) {
			levelArr.push(tempArr[i])
		}
	}
}


// 给定数组生成一颗二叉排序树

function tree_binary(arr) {

}

/**
 * 《2》树的遍历
 * 《先序遍历》
 * 《中序遍历》
 * 《后序遍历》
 * 《层次遍历》
 */

// 先序遍历

function preOrder(tree) {

}

// 中序遍历

function order(tree) {

}

// 后序遍历
function lastOrder(tree) {

}

// 层次遍历
function level(tree) {

}