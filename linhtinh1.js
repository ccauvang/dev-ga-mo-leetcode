/*function maxNum(num) {
      a = String(num).split("").map(n => Number(n)).sort().reverse().join("")
     return Number(a)
}
console.log(maxNum(678));*/


/*const a = {
b { 
	c { 
		x: 6,
		bbb: 999,
        }   
    }
};*/
/*const b = {
	     z: {
             abc: { 
		     a: {  h: "hjjjjjj" 989778,
}
             }
	}
 }
console.log(b.z.abc.a.h)*/

/*let a = 2;
let b = 900;
let c = 1;

let factorsAll = {};

function factorize(n) {
    let factors = {};
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            n /= i;
        }
    }
    for (let i in factors) {
        if (factorsAll[i] < factors[i] || !factorsAll[i]) {
            factorsAll[i] = factors[i];
        }
    }
}

factorize(a);
factorize(b);
factorize(c);

let result = 1;

for (let i in factorsAll) {
    result *= Math.pow(
        i,
        factorsAll[i] % 2 == 0 ? factorsAll[i] / 2 : (factorsAll[i] + 1) / 2,
    );
}

console.log(result);*/

//console.log(z)
//console.log(b)
//console.time("for"); 
/*console.time("func");
function tizz(str) {
 let obj = {}
 //for (let x = 0; x < str.length; x++) {
 for (const x of str) {
   //console.log(x)
     if (obj[str[x]]) {
       //console.log(1)
        obj[str[x]] += 1;
     } else {
       //console.log('a25')
       obj[str[x]] = 1;
     }
 }
 return Object.entries(obj).reverse().toString()
};

console.log(tizz("abcabca"))
console.timeEnd("func")
let c = tizz("abcabca")
let z = []
let x = []
for (const v of c) {
  if (v != ",") {
    z.push(v)
  } 
};

z.forEach(ele => {
    x.unshift(ele)
})
console.log(x)
/*for (let i = 0; i < a.length; i++) {

}*/
/*b.forEach(ele => 
  console.log(ele, "---")
);*/
/*for (const ele of a ){
}
console.timeEnd("for")*/

function tizz(str) {
  //create obj
  console.time('loop')
  let obj = {}
  //loop 
  for (let x = 0; x < str.length; x++) {
    //check if elements alive thì elements plus more 1
    if (obj[str[x]]) {
      obj[str[x]] += 1;
    } else {
      //if elements is new thì create character with value = 1
      obj[str[x]] = 1;
    };
  };
console.log(obj)
  //set A_keysobj = keys của object
  const A_keysobj = Object.keys(obj);
  //set A_valuesobj = values của object 
  const A_valuesobj = Object.values(obj);
  //creat S_reslut = empty string
  let S_result = "";
  //create N_sum
  let N_sum = 0;
  //loop and set S_reslut 
  /*A_valuesobj.forEach(ele => {
     S_result += ele;
     S_result += A_keysobj[N_sum];
     N_sum++;
   });*/
  //other loop
  for (let ele = 0; ele < A_keysobj.length; ele++) {
    S_result += A_valuesobj[ele];
    S_result += A_keysobj[ele]
  };
  console.timeEnd('loop');
  //rerurn
  return S_result
};
//random word
console.time("func")
let wood = ["q", "w", "e", 'r', 't', 'y', 'u', 'i', 'o', 'p', "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let jol = "";
//loop and add characters to jol 
for (let k = 0; k < 1000000; k++) {
  jol += wood[Math.floor(Math.random() * wood.length)];
}

//console.log(tizz("abhxhxuxixhcfncjjjjjjjjjjkkkkkjjjjjjjjjjjjjjjcifcabca"));
//set jacob = tizz(jol)
let jacob = tizz(jol)
//call tizz(jol)
console.log(jacob)
console.timeEnd("func")

/*function abc(xxx) {
   let obj = {}
   for (let i = 0; i < xxx.length; i+=2) {
   if (obj[xxx[i+1]]) {
   	obj[xxx[i+1]] += Number(xxx[i])
   } else {
   	obj[xxx[i+1]] = Number(xxx[i])
     }
   }
   return Math.max(...Object.entries(obj).map(v => v[1]));
} 
 
console.log(abc("3a5b6v7v9a"))*/




//return use object entries and reveres that and convert to string

/*let S_relust = String(Object.entries(obj).reverse());
console.log(String(Object.entries(obj)));
console.log(String(Object.entries(obj).reverse())); 
//create new array ang new srring empty
let A_slic3 = [];
let A_return = [];
//loop if character in S_relust != "," thì phus to array A_elic3
//for (const char of c) {
for (let char = 0; char < S_relust.length; char++) {
//console.log(c[char])
  if (S_relust[char] != ",") {
    A_slic3.push(S_relust[char]);
  };
};
console.log(A_slic3);
//reverse A_slic3 one time and use foreach lần lượt các elements add in S_return
A_slic3.forEach(ele => {
    A_return.unshift(ele);
});
//return
 return A_return;*/