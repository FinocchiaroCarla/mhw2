/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const boxes=document.querySelectorAll('.choice-grid div');
for(const box of boxes){
box.addEventListener('click',choose);
}

let maxval;

const num={
    one:'',
    two:'',
    three:''
}

const map={
    blep:0,
    happy:0,
    sleeping:0,
    dopey:0,
    burger:0,
    cart:0,
    nerd:0,
    shy:0,
    sleepy:0 
}


function choose(event){
    const choose = event.currentTarget;
    const notchoose = document.querySelectorAll('.choice-grid div');
    const idq=choose.dataset.questionId;
    const idc=choose.dataset.choiceId;

        for(const overlay of notchoose){
            if(overlay!=choose && overlay.dataset.questionId==idq){
            overlay.classList.add('overlay');
            const uncheck = overlay.querySelector('img.checkbox');            
            uncheck.src='images/unchecked.png';
            }
        }

        choose.classList.remove('overlay');
        choose.classList.add('checked');
        const check=choose.querySelector('img.checkbox');
        check.src='images/checked.png';
    
        num[idq]=idc;
        verify();
    }

function verify(){
    let i=0;
    let max=0;

    for(let key in num){
        if(num[key] !== ''){
            i ++;
        }
    }
    if(i===3){
        for(const box of boxes){
            box.removeEventListener('click',choose);
        }
        for(let key in num){
        map[num[key]]=map[num[key]]+1;
        }
        console.log(map);

        for(let key1 in map){
            if(map[key1]>max){
                max=map[key1];
                valmax=key1;
            }
        }
        if(valmax===1){
            valmax=num[one];
        }
        console.log(max);
        console.log(valmax);

        result();
    }

    }

function result(){

    const h1=document.createElement('h1');
    h1.classList.add('result');
    h1.textContent=RESULTS_MAP[valmax].title;

    const description=document.createElement('div');
    description.classList.add('description');
    description.textContent=RESULTS_MAP[valmax].contents;

    const b=document.createElement('div');
    b.classList.add('button');
    b.textContent="Ricomincia il quiz";

    const result=document.querySelector('#result-map');
    result.appendChild(h1);
    result.appendChild(description);
    result.appendChild(b);

    const button=document.querySelector('.button');
    button.addEventListener('click',refresh);

}

function refresh(){
    for(let key in num){
        num[key]='';
    }

    for(let key1 in map){
        map[key1]=0;
    }

    const resultremove=document.querySelector('#result-map');
    resultremove.innerHTML='';

    for(const box of boxes){
        box.addEventListener('click',choose);
        box.classList.remove('checked');
        box.classList.remove('overlay');
        const img = box.querySelector('img.checkbox');            
        img.src='images/unchecked.png';
        }

    
}

