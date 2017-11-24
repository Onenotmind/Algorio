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

function tree_contruct (arr) { // arr为数组，储存着树节点依次数值
  if (arr.length < 1) return
  if (arr.length === 1) {
    let rootNode = new node(arr[0])
    return
  } else {
    let level = Math.floor(Math.log(arr.length)/Math.log(2)) + 1
    let rootNode = new node(arr[0])
    let nodeArr = []
    let tmpArr = []
    nodeArr.push(rootNode)
    for (let i = 1; i < level; i++) {
      let nodeIndex = 0
      let m = Math.pow(2,i - 1)
      let l = Math.pow(2,i)
      if (i === level -1) {
        l = arr.length
      }
      while (nodeIndex <= nodeArr.length) {
        if (arr[m]) {
          nodeArr[nodeIndex].left = new node(arr[m])
          tmpArr.push(nodeArr[nodeIndex].left)
          m++
          if (m > l) break
        }else { break}
        if (arr[m]) {
          nodeArr[nodeIndex].right = new node(arr[m])
          tmpArr.push(nodeArr[nodeIndex].right)
          m++
          if (m > l) break
        }else { break}
        nodeIndex++
      }
      nodeArr = tmpArr
      tmpArr = []
    }
    console.log(JSON.stringify(rootNode))
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
tree_contruct(arr)

/** c++ 实现树的层次遍历
void PrintNodeByLevel(Node* root) {
     vector<Node*> vec; // 这里我们使用STL 中的vector来代替数组，可利用到其动态扩展的属性
     vec.push_back(root);
     int cur = 0;
     int last = 1;
     while(cur < vec.size()) {
          Last = vec.size(); // 新的一行访问开始，重新定位last于当前行最后一个节点的下一个位置
          while(cur < last) {
               cout << vec[cur] -> data << " "; // 访问节点
               if(vec[cur] -> lChild) // 当前访问节点的左节点不为空则压入
                   vec.push_back(vec[cur] -> lChild);
               if(vec[cur] -> rChild) // 当前访问节点的右节点不为空则压入，注意左右节点的访问顺序不能颠倒
                   vec.push_back(vec[cur] -> rChild);
               cur++;
          }
          cout << endl; // 当cur == last时,说明该层访问结束，输出换行符
     }
}

**/

// 给定数组生成一颗二叉排序树




/**
 * 《2》树的遍历
 * 《先序遍历》
 * 《中序遍历》
 * 《后序遍历》
 * 《层次遍历》
 */

// 先序遍历

function preOrder1(tree) {
	var preListRec = []; //定义保存先序遍历结果的数组
    var preOrderRec = function(node) {
    if (node) {//判断二叉树是否为空
      preListRec.push(node.value); //将结点的值存入数组中
      preOrderRec(node.left); //递归遍历左子树
      preOrderRec(node.right); //递归遍历右子树
    }
}
preOrderRec(tree);
console.log(preListRec);
}



function preOrder2(tree) {

}
// 中序遍历

function inOrder1(tree) {

}



function inOrder2(tree) {

}
// 后序遍历
function lastOrder1(tree) {

}



function lastOrder2(tree) {

}
// 层次遍历
function level(tree) {

}



// var obj = {}

// let rootNode = new node(0)
// let baseNode = rootNode
// baseNode.left = new node(1)
// let nodeArr = []
// nodeArr.push(rootNode.left)
// createChildNode(nodeArr[0])

// console.log(rootNode)

// function createChildNode (childNode) {
//   childNode.left = new node(6)
// }







// fiona

// var root = {
// val: 1,
// left: {

// val: 2,
// left: {
//   val: 4,
// },
// right:{
//   val:5
// }
// },
// right: {

// val: 3,
// left: {
//   val: 6
// },
// right: {
//   val: 7
// }
// }
// }

//1是递归，23是非递归

function DLR1(root){
if(root!=null){
    console.log(root.val);
    DLR1(root.left);
    DLR1(root.right);
}
}
// DLR1(root)//1,2,4,5,3,6,7

 
function DLR2(root){
       if(!root) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(root)
  while(stack.length !== 0) {
    root = stack.pop()
    console.log(root.val)    
    if(root.right) stack.push(root.right)
    if(root.left) stack.push(root.left)
  }
}
// DLR2(root)


function LDR1(root){
	if(root!=null){
		LDR1(root.left);
        console.log(root.val);
	    LDR1(root.right);
	}
}
// LDR1(root)//4251637


function LDR2(root){
	if(!root) {
    throw new Error('Empty Tree')
  }  
  var stack = []
  while(stack.length !== 0 || root) {
    if(root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      console.log(root.val)
      root = root.right
    }
  }
}
// LDR2(root)


function LRD1(root){
	if(root!=null){
		LRD1(root.left);
		LRD1(root.right);
		console.log(root.val)
	}
}
// LRD1(root)//4526731


function LRD2(root){//(使用一个栈)
	  if(!root) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(root)
  var tmp = null
  while(stack.length !== 0) {
    tmp = stack[stack.length - 1]
    if(tmp.left && root !== tmp.left && root !== tmp.right) {
      stack.push(tmp.left)
    } else if(tmp.right && root !== tmp.right) {
      stack.push(tmp.right)
    } else {
      console.log(stack.pop().val)
      root = tmp
    }
  }
}
// LRD2(root);


function LRD3 (root) {//(使用两个栈),s1有点像一个临时变量
  if(root) {
    var s1 = []
    var s2 = []
    s1.push(root)
    while(s1.length !== 0) {
      root = s1.pop()
      s2.push(root)
      if(root.left) {
        s1.push(root.left)
      }
      if(root.right) {
        s1.push(root.right)
      }
    }
    while(s2.length !== 0) {
      console.log(s2.pop().val);
    }
  }
}
// LRD3(root)


function level2(root) {
  if(!root) {
    throw new Error('Empty Tree')
  }
  var que = []
  que.push(root)
  while(que.length !== 0) {
    root = que.shift()
    console.log(root.val)
    if(root.left) que.push(root.left)
    if(root.right) que.push(root.right)
  }
}
// level2(root)//1234567

