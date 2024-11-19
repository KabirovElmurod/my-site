let misol = ["1+1", '2+2', '3+3', '4+4', '5+5', 
    '6+6', '7+7', '8+8', '9+9', "10+10", "11+11", "12+12", "13+13", "14+14", "15+15"]
let javob = [
    '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24',
    '26', '28', '30'
]

let model = document.getElementById('model')
let all_window = document.getElementById('all_window')



let m_id, j_id, m1, j1, before_m, btn_1_9, btn_much;
let k=0;
let True = 0;
let False = 0;
let btn1 = document.getElementById("buttonid1")
let btn2
let left = document.getElementById("left")
let right = document.getElementById("right")
let number_j = Array.from({ length: javob.length }, (_, i) => i + 1); 










number_j.sort(() => Math.random() - 0.5);    
for (let i = 1; i<javob.length+1; i++){
        let button = document.createElement("button")
        button.id = "buttonmuch_id"+i
        button.innerText= javob[number_j[i-1]-1]
        button.onclick = javob_m
        right.appendChild(button)
    }
    let numbers = Array.from({ length: misol.length }, (_, i) => i + 1);
     
    // Random tartibda raqamlarni aralashtiramiz
        numbers.sort(() => Math.random() - 0.5);
for (let i = 1; i<10; i++){
     
        a=numbers[i]-1
        let button = document.createElement("button")
        button.innerText= misol[a]
        button.className='buttons'
        button.id='buttonid'+i;
        button.onclick=misol_j
        
        left.appendChild(button)
    }
function sawwswf(){

}
function check_a(){
        if (m1==j1){
                True++
                btn_1_9.classList.remove("rang1_1_9")
                btn_1_9.classList.toggle("rang_1_9")
                btn_much.classList.remove("rang_much1")
                btn_much.classList.toggle("rang_1_9")
                btn2=document.getElementById("buttonmuch_id"+j1+1)
                btn1=document.getElementById("buttonid"+m_id)
                
                // left_panel = document.getElementById("left")
                // left_class = left_panel.className
                m1=978
                j1=894
                // btn1.innerText='salomss'
                k=0
                if (True+False==1){
                    model.innerHTML=`<h1>To'g'ri - > ${True} ta</h1><h1>Xato - > ${False} ta</h1><button class="ok" id="ok">Ok</button>`
                    model.classList.add("show")
                    all_window.classList.add('show')
                    let ok = document.getElementById("ok")
                    ok.addEventListener('click', function(){
                        
                        all_window.classList.remove('show')
                        model.classList.remove('show')
                        })
                    all_window.addEventListener('click', function(){
                        all_window.classList.remove('show')
                        model.classList.remove('show')
                    })
                }
                btn1.onclick = sawwswf
                btn2.onclick = sawwswf
        }
        else if(m1!=j1 && m1!=978 && k==16) {
            False++
            k=0
            m1=978
            btn1=document.getElementById('buttonid1')
            btn_1_9.classList.remove("rang1_1_9")
                btn_1_9.classList.toggle("rang_1_9_false")
                btn_much.classList.remove("rang_much1")
                btn_much.classList.toggle("rang_much_false")

                if (True+False==1){
                    model.innerHTML=`<h1>To'g'ri - > ${True} ta</h1><h1>Xato - > ${False} ta</h1><button class="ok" id="ok">Ok</button>`
                    model.classList.add("show")
                    all_window.classList.add('show')
                    let ok = document.getElementById("ok")
                    ok.addEventListener('click', function(){
                        
                        all_window.classList.remove('show')
                        model.classList.remove('show')
                        })
                    all_window.addEventListener('click', function(){
                        all_window.classList.remove('show')
                        model.classList.remove('show')
                    })
                }
                
                
                // btn1.innerText='salomss'
        }
        // document.getElementById("buttonid"+1).innerText=`m1:${m1} j1:${j1}`
    }


function misol_j(){
    for (let i = 1; i<10; i++){
         document.getElementById("buttonid"+i).classList.remove('rang1_1_9')
    }
    for (let i = 1 ; i<10; i++){
        
        if (this.id=="buttonid"+i){
            btn_1_9 = this
            // this.classList.remove("rang_much_false")
            this.classList.toggle("rang1_1_9")


            for (let p = 0; p<misol.length; p++){
                if(this.innerText==misol[p])
                    m1=p
                    k++;
                m_id=i
            }
        }
        
    }
    
    check_a()
    // for (let i = 0; i<javob.length; i++){
    //     if (this)
    // }
    // b.innerText=this.id
}

function javob_m(){
    for (let i = 1; i<javob.length+1; i++){
        document.getElementById("buttonmuch_id"+i).classList.remove("rang_much1")
    }
    for (let i = 0; i<javob.length; i++){
        if (this.innerText==javob[i]){
            btn_much=this 
            this.classList.toggle("rang_much1")
            j1 = i
            k++;
            // document.getElementById('buttonid2').innerText=k
            j_id=i
        }
    }
    
    
    check_a()
}



