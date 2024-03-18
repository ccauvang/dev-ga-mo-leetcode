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

/*function tizz(str) {
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
/* for (let ele = 0; ele <= A_keysobj.length; ele++) {
    S_result += A_valuesobj[ele];
    S_result += A_keysobj[ele]
  };
  console.timeEnd('loop');
  //rerurn
  return S_result
};
//random word
//console.time("func")
let wood = ["q", "w", "e", 'r', 't', 'y', 'u', 'i', 'o', 'p', "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let jol = "";
//loop and add characters to jol 
for (let k = 0; k < 20; k++) {
  jol += wood[Math.floor(Math.random() * wood.length)];
}

//console.log(tizz("abhxhxuxixhcfncjjjjjjjjjjkkkkkjjjjjjjjjjjjjjjcifcabca"));
//set jacob = tizz(jol)
console.time('func')
let jacob = tizz(jol)
//call tizz(jol)
const strj = 'https://youtube.com/playlist?list=PLhz0MSCyYbgIAeIspl5q_gsP2yLwA7_Fl';
let ggh = strj.split('').reverse();
let hhh = [];
for(index of ggh) {
  if (index != '=') {
    hhh.unshift(index)
  } else {
    break;
  }
  
};
let jgv = strj.slice(-34);
console.log(`https://youtube.com/playlist?list=${jgv}`)
console.timeEnd("func")*/

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
/*let s1 = 'they are roundx';
let s2 = 'fold two timesx';


s1 = s1.split(' ');
s2 = s2.split(' ');
//console.log(s1)
function abvv(s1, s2) {
if (s1.length != s2.length) {
  return 'not the same amount of words in both strings'
}
let lool = true
for (let i = 0; i < s1.length; i++) {
  if (s1[i].length != s2[i].length) {
    return 'vãi lồ';
    //break;
  } else {
    for (let x = 0; x < s1[i].length; x++) {
      //console.log('foo', s1[i][x], s2[i][x] );
      if (s2[i].includes(x)) {
        return 'foo';
        break;
      } else {
        console.log('boo');
      }
    }
  }
}
}*/
/*let lol = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
  y: 'y'
}
let s = prompt("input");
let s2 = '';
for (i of s) {
  if (i.toUpperCase() == i) {
    if (lol[i.toLowerCase()]) {
      s2 += 'V'
    } else if (i == ' ') {
      s2 += ' ';
    } else {
      s2 += 'C'
    }
  } else {
    if (lol[i]) {
      s2 += 'v'
    } else {
      s2 += 'c'
    }
  }
}
console.log(s2);
//done
*/
/*let ob = {
  count: 8,
  1: '1 1 1',
  2: '1 1 1',
  3: '1 1 1',
  4: '1 1 1',
  5: '1 1 1',
  6: '1 1 1',
  7: '1 1 1',
  8: '1 1 1'


};

let sum = 0;
//vocolo viei xong khong hieu minh viet qq gi :))
for (let i = 1, x = 0, y = 0; i < ob.count + 1; i++) {
  const boo = ob[i].split(' ').map(m => Number(m))
  const boo2 = boo.slice().sort((a, b) => a - b);

  if (x == 0) {
    if (y == 0) {
      sum += boo2[0];
      y = boo.indexOf(boo2[0]);
      console.log(boo2[0],1)
    } else {
      if (y == boo.indexOf(boo2[0])) {
        sum += boo2[1];
        y = boo.indexOf(boo2[1]);
        console.log(boo2[1],2)
      } else {
        sum += boo2[0];
        y = boo.indexOf(boo2[0]);
        console.log(boo2[0],3)
      }
    }
    x++
  } else {
    if (y == boo.indexOf(boo2[0])) {
      sum += boo2[1];
      y = boo.indexOf(boo2[1]);
      console.log(boo2[1],4)
    } else {
      sum += boo2[0];
      y = boo.indexOf(boo2[0]);
      console.log(boo2[0],5)
    }
    x--
  }

}
console.log(sum);
//done
*/

/*let a = 'https://youtu.be/284XKh1lFHM?si=lX902TMEk8JAhaSi';

console.log(a.slice(17, -20), -48 + a.indexOf('?si='));*/

/**/
/**/
/**/ /**/ /**/ /**/ /**/
/**/
/**/
/**/ //console.log(...(   /**/ 
/**/ //$$=$=>(~-~-$&&$$   /**/ 
/**/ //(~-$),(_$=$_=>$%   /**/ 
/**/ //(_[~~$_]??=$)?_$   /**/ 
/**/ //(-~$_):_)()))((_   /**/ 
/**/ //=[])+~_+-_+-_));   /**/ 
/**/
/**/
/**/
/**/
/**/ /**/ /**/ /**/ /**/

/*let a = 1234
a = `${a}`.split('')
let b = 1;
console.log(b)*/
/*console.time('lol');
const n = 1000//prompt('n')
let a = 0, b = 1, c = 0;
for(let i = 1; i <= n; i++){
  //console.log(a,b,c)
  c = a + b;
  a = b
  b = c
};
console.log(b);
console.timeEnd('lol');*/
/*console.time('sic')
function fig(n){
  if (n < 2) return 1;
  return fig(n -1) + fig(n -2);
};

console.log(fig(40))
cơnsole.timeEnd('sic')*/
//alert('chấp nhận đi');
//let o = prompt('stfu');
// Cai nay hay vcl :)))))))
//window.location.href =  `${o}`

/*setTimeout(function abc() {

fetch('https://api.cauvang.tk/').then(res => res.json()).then(body => {
  console.log(body.suffix)
  //document.body.innerHTML += data;
}).catch(err => console.log(err))}, 1000);*/

/*function perfect_num(num) {
  let sum = 0, bool = false;
  for (let i = 0; i<num; i++) {
    if (num % i == 0) sum += i
  };
  if (sum == num) bool = true;
  return bool
    
}

function friend_num(numl,numr) {
  let suma = 0,sumb = 0;
  if(perfect_num(numl)) return 'choi 1 minh';
  for(let x = 0; x<numl; x++) {
    if(numl % x == 0){
      suma += x
    }
  }
  for(let y = 0; y<numr; y++) {
    if(numr % y == 0){
      sumb += y
    }
  }
  if(suma === numr && sumb === numl) {
    return 'friends';
  } else {
    return 'not friends';
  }
}

console.log(friend_num(5,3))

console.time('l')

//console.log(Math.trunc(Math.random() * 100));
let sumx = 0, sumy = 0, sumz = 0; 
for(let i =0; i < 1000000; i++) {
  const a = Math.trunc(Math.random() * 284) + 1;
  const b = Math.trunc(Math.random() * 284) + 1;
  //console.log(friend_num(a,b),':',a,b);
  switch (friend_num(a,b)) {
   case 'choi 1 minh':
     sumx++
     //console.log(friend_num(a,b),':',a,b);
   break;
   
   case 'friends':
     sumy++
     console.log(friend_num(a,b),':',a,b);
   break;
   
   case 'not friends':
     sumz++
   break;
   
   default:
     console.log('hai vai');
   break;
  }
  
}
console.timeEnd('l')
console.log(sumx,sumy,sumz);*/



