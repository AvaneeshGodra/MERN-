//https / http call
//import URL from '.../utils/constant.js'
async function makenetworkcall(){
    const promise = await fetch('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
    const data=await promise.json();
    console.log('data is ',data);
}
makenetworkcall();
