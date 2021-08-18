console.log('hello world');
const btn = document.getElementById('cta')

btn.addEventListener('click', function(){
    document.querySelector('.name').innerHTML = 'Hello My Name Is (Jonathan John) see my Resume'
    // document.write('Hello My Name Is Jonathan John')
})