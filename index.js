//Array methods #1



const myArray = [1,2,3,4,5];

//pop / push / shift /umnshift - te metody mutują tablice

myArray.pop();
myArray.push('last');

myArray.shift();
myArray.unshift('first')

//console.log(myArray)


const app =  document.querySelector('#app');
const div = document.createElement('div')


const tags = ['jazz', 'rock', 'pop'];

tags.push('metal')

const newTags = ['rnb', 'havymetal'];

const allTags = [].concat(tags, newTags)

div.innerHTML= 'hello roman'
div.innerHTML = allTags.join(' > ')

app.appendChild(div)







//Array methods #2

//slice(start = 0, length = array.length) - slice zwraca tablicę ale nie modyfikuje

//splice(start = 0 , n, replacement) - metoda  mutuje pierwotnąt tablicę tablice,
                    //gdy podamy jeden argument - wyszystko od start zostanie usunięte
                    // gdy podamy dwa argumenty - zostanie usunięte n elementów od start
                    // gdy podamy trzy agrumenty - trzeci argument zostanie wstawiony w miejsce wyiętych


//forEach(function(current, index)) - wykonuje pewną zynnośc po każdym elemencie tablicy

const sliceArray = allTags.slice(0,3)
console.log(allTags, sliceArray)

allTags.splice(1,2, ['r', 'e', 'p', 'l', 'a', 'c', 'e', 'm', 'e', 'n', 't'])
console.log(allTags)

allTags.splice(1,2, ...['r', 'e', 'p', 'l', 'a', 'c', 'e', 'm', 'e', 'n', 't'])
console.log(allTags)



const names = ['anna', 'roman' , 'wojtek', 'julka'];
const list = document.querySelector('#anOrderList')
names.forEach(function(el,i){
 let item = document.createElement('li');
 item.innerHTML = `${i+1} ${el}`;
 list.appendChild(item)

})

const listElement = document.querySelectorAll('li');

listElement.forEach(el=>{

    el.addEventListener('click', e =>{

        listElement.forEach(( element) =>{
            element.classList.remove('active')
        });

        e.target.classList.add('active')
    })
})





//Array methods #3

//filter( function clallback(current, index, src)) - zwraca przefiltrowaną tablicę wg reguł callback;
                                                    //(wyrzuca te elementy do tablicy)
                                                    // filter nie modyfikuje wyjściowej tablicy

//find(function clallback(current, index, src)) - podobnie jak filter przechodzi przez elementy tablicy,
                                                    // ale zwraca tylko pierwszy odnaleziony element spełniająy warunki

//map(function clallback(currentValue, index, array)) -  zwraca nową tablicę zawierającą elementy zmodyfikowane przez callback

//reduce(function callback(accumulator, current, index, scr)) - akumulator (pierwszy parametr) jest elementem zwracanym po każdej iteracji tablicy,
                                                                // pamięta wynik po każdej iteracji

const myNumbers = [1,2,3,4,5,6,8]

const oddNumbers = myNumbers.filter(curr=> curr % 2 === 0);
const firstOddNumber = myNumbers.find(curr=> curr % 2 === 0);
const mapArray = myNumbers.map((element, i)=>{return element/2})

const myName = ['k', 'a', 'r', 'o', 'l', 'i', 'n', 'a']
const karolina = myName.reduce((acc, curr) => {return acc + curr } );
