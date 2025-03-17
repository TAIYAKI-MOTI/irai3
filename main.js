var question = [
    "よく目が合う?",
    "お互いの好みを知っている?",
    "冗談を言い合える仲?",
    "一緒にいる時の距離感が近いと思う?",
    "相手は恋愛経験が少なそう?",
    "信頼し合えていると思う?",
    "相手から連絡が来ることが多い?",
    "考え方が似ていると思う?",
    "気づいたら一緒にいることが多い?",
    "周りからカップルと勘違いされることがある?",
];

//let quespagediv = document.querySelector('div#ques');
let quespagediv = document.body;

function header(){
    let a = document.createElement('div')
    a.dataset.role = 'header';
    let b = document.createElement('h1');
    b.innerText = '恋愛診断';
    a.appendChild(b);
    return a
}

function header2(){
    let a = document.createElement('span')
    a.classList.add('title')
    a.innerText='両思い診断'
    return a
}

var html_data;
var html_data_title;
var html_data_main1;
var html_data_main2;
var html_data_main3;
var html_data_main_button_1;
var html_data_main_button_div_1;
var html_data_main_button_2;
var html_data_main_button_div_2;

for(let i in question){
    // page
    console.log(`${i} : ${question[i]}`)
    html_data = document.createElement('div');
    html_data.dataset.role='page';
    html_data.id=`page${i}`;
    // title
    html_data_title = document.createElement('h2');
    html_data_title.innerText = question[i];
    // content
    html_data_main1=document.createElement('div');
    html_data_main1.classList.add('ui-content');
    html_data_main1.role='main';
    // buttondiv
    html_data_main2=document.createElement('div');
    html_data_main2.classList.add('buttondiv');
    // ui-grid
    html_data_main3=document.createElement('div');
    html_data_main3.classList.add('ui-grid-a');
    //buttondiva
    html_data_main_button_div_1=document.createElement('div');
    html_data_main_button_div_1.classList.add('ui-block-a');
    //buttona
    html_data_main_button_1=document.createElement('a');
    html_data_main_button_1.href=`#page${parseInt(i)+1}`;
    html_data_main_button_1.innerHTML='はい';
    html_data_main_button_1.dataset.role='button';
    html_data_main_button_1.dataset.transition='flow'
    //buttondivb
    html_data_main_button_div_2=document.createElement('div');
    html_data_main_button_div_2.classList.add('ui-block-b');
    //buttonb
    html_data_main_button_2=document.createElement('a');
    html_data_main_button_2.href=`#page${parseInt(i)+1}`;
    html_data_main_button_2.innerHTML='いいえ';
    html_data_main_button_2.dataset.role='button';
    html_data_main_button_2.dataset.transition='flow'

    html_data_main_button_div_1.appendChild(html_data_main_button_1);
    html_data_main_button_div_2.appendChild(html_data_main_button_2);

    html_data_main3.appendChild(html_data_main_button_div_1);
    html_data_main3.appendChild(html_data_main_button_div_2);

    html_data_main2.appendChild(html_data_title);
    html_data_main2.appendChild(html_data_main3);
    
    html_data_main1.appendChild(header2());
    html_data_main1.appendChild(html_data_main2);

    html_data.appendChild(header());
    html_data.appendChild(html_data_main1);
    
    console.log(html_data)
    
    quespagediv.appendChild(html_data);

    
}
/*
document.querySelector('nameb').addEventListener('click',()=>{
    if(!document.querySelector('input#yourname').value || !document.querySelector('input#myname')){
        alert('値を入力してください')
    }
    else{
        location.href="#end1"
        async function fetchData(){
            try{
                const response = await fetch(
                    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLqXfLBsukpGGdLEjQfyVe2fLF9AV-83QfGtbJeXqG7JC1Ng/formResponse",
                    {
                        method:"POST",
                        redirect:"follow",
                        mode:"no-cors",
                        headers:{
                            "Content-Type":"application/x-www-form-urlencoded",
                        },
                        body:`myname=${document.querySelector('input#myname').value}&yourname=${'input#yourname'}`
                    }
                );
                const data = await response.json();
                console.log(data)
                if( data == "success" ){
                    location.href="#end"
                }
            }
            catch (error){
                console.error(error)
            }
        }
        fetchData()
        
    }
});
*/

function sleep(msec){
    return new Promise(function(resolve){
        setTimeout(function(){resolve()}, msec)
    })
}

function getRandom( min, max ){
    return Math.floor( Math.random() * (max + 1 - min) ) + min;
}

const form = document.querySelector('form#form');
document.querySelector('button#nameb').addEventListener('click', async evt => {
    if(!document.querySelector('input#yourname').value || !document.querySelector('input#myname').value){
        alert('値を入力してください')
    }
    else{
        const data = document.querySelector('input#data');
        const str = `myname=${document.querySelector('input#myname').value},yourname=${document.querySelector('input#yourname').value}`;
        data.value = btoa(encodeURIComponent(str))
        form.submit();
        from[0].reset();
        location.href='#end';
        await sleep(50000);
        location.href='#end2';
        let result = getRandom(90,100) + getRandom(0,9) / 10;
        await sleep(2000);
        document.querySelector('h2#result').innerHTML=result+"%<br>でした！"
        return false
    }
})