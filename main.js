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


for(let i in question){
    console.log(`${i} : ${question[i]}`)
    html_data = document.createElement('div');
    html_data.dataset.role='page';
    html_data.id=`page${i}`;
    
    html_data_title = document.createElement('h2');
    html_data_title.innerText = question[i];

    html_data_main1=document.createElement('div');
    html_data_main1.classList.add('ui-content');
    html_data_main1.role='main';

    html_data_main2=document.createElement('div');
    html_data_main2.classList.add('buttondiv')

    html_data_main2.appendChild(html_data_title);
    
    html_data_main1.appendChild(header2());
    html_data_main1.appendChild(html_data_main2);

    html_data.appendChild(header());
    html_data.appendChild(html_data_main1);
    
    console.log(html_data)
    
    quespagediv.appendChild(html_data);

    
}

