// let car={
//     model:'Nissan',
//     ban:'Sedan'
// }

// function geneRate(key,value,object){
//     object[key]=value;
//     return object;
// }
// geneRate('year','2013',car)
// console.log(car);



// function getSpread(object,key,value){
// return{...object,[key]:value}
// }

// let newObject=getSpread(car,'color','gray');
// console.log(newObject);




// isciler ve saatlar

// let worker=+prompt('nece saat isliyirsen')

// function checkedWorker(element,money,time,overMoney){
//     if(element<=time){
//       return element=element*money
        
//     } else if(element>time){
//         return element= overMoney*(element-time)+(time*money)

//     }

// }
// console.log(checkedWorker(worker,20,8,25));



// hizli ve ofkeli

// let speed=+prompt('suretinizi yazin')
// function checkedSpeed(element,limit,maxLimit,minPenalty,maxPenalty){

// if(element<=limit){
//     alert('tehlukesiz surucu')
// }else if(element>limit&&element<=maxLimit){
//     element=(element-limit)*minPenalty
    
//     alert(`siz suret heddini asdiniz ${element} azn`);
//  } else{
//     alert(`tehlukeli surucu siz ${maxPenalty}azn cerime edildiniz `)
//  }  

 

// }
// checkedSpeed(speed,70,100,10,200);


// aylar ve fesiller

// let mount=prompt('ayi daxil edin').toLocaleLowerCase()
// function checkedSeason(element){
 
//     if(element==='dekabr'||element==='yanvar'||element==='fevral'){
//         alert('siz qis feslindesiniz');
//     }else if(element==='mart'||element==='aprel'||element==='may'){
//       alert('siz yaz feslindesiniz');
//     }else if(element==='iyun'||element==='iyul'||element==='avqust'){
//         alert('siz yay feslindesiniz');
//     }else if(element==='sentyabr'||element==='oktyabr'||element==='noyabr'){
//       alert('siz payiz feslindesiniz')
//     }

// }

// checkedSeason(mount);


// aylar ve fesiller2
// let mount=prompt('ayi daxil edin').toLocaleLowerCase()
// let key='yaz'
//  let seasons={
//     yaz:['mart','aprel','may'],
//     payiz:['sentyabr','oktyabr','noyabr'],
//     qis:['dekabr','yanvar','fevral'],
//     yay:['iyun','iyul','avqust']
//  }

// function checkedMount(arr,element){
//     for(let getmount of arr){
        
//         if(getmount.includes(element)){
//             console.log(getmount);
            
//         }
//     }
// }
// checkedMount(seasons,mount);





let arr1=[1,2,3,4,5,6]
let arr3=[...arr1,7,8,9,10]
let [bir,iki,...rests]=arr1
console.log(arr3);
console.log(rests);

// let second=iki
// console.log(iki);
// console.log(second,'lolo');

let obj={
    model:'hyundai',
    ban:'sedan',
    years:2015
}

let {years,...rest}=obj

console.log(years);
console.log(rest);

function first(a){
    return function second(b){
        console.log(a);
        console.log(b);
        }
}    
        

let test=first(5)
let ells=test(9)





