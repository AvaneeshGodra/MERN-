import Product from '../models/product.js';
import productOperations from '../services/product-operations.js';

document.getElementById('clickme').addEventListener('click',()=> alert('yoyo'));

async function loadProducts(){
    const pizza = await productOperations.loadProducts();
  
    const row=document.querySelector('#loaddata');
    const len=pizza.length;

    /*<
    <div class="card border-dark text-center mb-3" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/

    for(let i=0;i<len;i++){
        
        const col=document.createElement('div');
        col.className='col-4 text-center mt-3';// ismai kyu hua ?
        
        const card=document.createElement('div');
        card.className='card text-center mt-3';     // text-centre used toh align center?
        col.appendChild(card);

        const img=document.createElement('img');
        img.src=pizza[i].url;
        img.className='card-img-top rounded shadow-lg';
        img.alt='...';
        card.appendChild(img);

        const cardbody=document.createElement('div');
        card.className='card-body';
        card.appendChild(cardbody);

        const h5=document.createElement('h5');
        h5.className='card-title text-center';
        h5.innerText=pizza[i].name;
        cardbody.appendChild(h5);

        const p=document.createElement('p');
        p.className='card-text text-center';
        p.innerText=pizza[i].desc;
        cardbody.appendChild(p);

        const bu=document.createElement('button');
        bu.className='btn btn-primary shadow-lg';//how to align button centre ? how to comment in cs
        bu.innerText='add to cart';
        cardbody.appendChild(bu);
        bu.addEventListener('click',addtocart);
        bu.setAttribute('product-id',pizza[i].id)

        
        row.appendChild(col);
      
    }
    function printcard(){
      const ul=document.getElementById('basket');
      ul.innerHTML='';
      
      const addlist=productOperations.finacart();
      console.log(addlist);
      for(let a of addlist){
        const listname=document.createElement('li');
        listname.innerText=`${a.name} ----------->${a.price}`;
      
        ul.appendChild(listname);
        
      }
      

    }
    function addtocart(){
      
      const currentbutton = this;
      const pizzaID=currentbutton.getAttribute('product-id')
      var product=productOperations.searchProducts(pizzaID);
      if(product.isaddedincard==true){
        this.style.backgroundColor='red';
        this.innerText='remove from cart'
      }
      else{
        this.style.backgroundColor='blue';
        this.innerText='add to cart';
      }
      printcard();
      sumcard();
    }
    function sumcard(){
      const addlist=productOperations.finacart();
      var sum=addlist.reduce((acc,curr)=>acc=parseFloat(curr.price)+acc,0);
      const printsum=document.getElementById('sum');
      printsum.innerText=sum;

      const printno=document.getElementById('noofpizza');
      printno.innerText=addlist.length;

      const gst=document.getElementById('gst');
      const finalgst=sum+sum*0.18;
      gst.innerText=(finalgst);
    }
}
loadProducts();
