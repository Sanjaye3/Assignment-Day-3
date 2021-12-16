let json=[
{
"make":"audi",
"model":"a4",
"registration":"1366"
},
{
"make":"bmw",
"model":"3",
"registration":"2366"
},
{
"make":"mercedes",
"model":"c220",
"registration":"3366"
}
];

// for
for(i=0;i<json.length;i++){
console.log(json[i]);
}


// Output:
// { make: 'audi', model: 'a4', registration: '1366' }
// { make: 'bmw', model: '3', registration: '2366' }
// { make: 'mercedes', model: 'c220', registration: '3366' }

// for in
for (value in json){
    console.log(value);
}

// Output:
// 0
// 1
// 2

// for of
for (value of json){
    console.log(value);
}

// Output:
// { make: 'audi', model: 'a4', registration: '1366' }
// { make: 'bmw', model: '3', registration: '2366' }
// { make: 'mercedes', model: 'c220', registration: '3366' }



// forEach

json.forEach((value)=>console.log(value))


// Output:
// { make: 'audi', model: 'a4', registration: '1366' }
// { make: 'bmw', model: '3', registration: '2366' }
// { make: 'mercedes', model: 'c220', registration: '3366' }