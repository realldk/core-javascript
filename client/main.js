import { insertLast, xhrData, xhrPromise } from './lib/index.js'

/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
}) */


/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result)
    insertLast('body',JSON.stringify(result));
  },
  (error)=>{
    console.log(error)
    insertLast('body',error);
  }
) */