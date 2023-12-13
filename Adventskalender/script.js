loadCalendar()

function loadCalendar(){
    
    fetch(`./api/calendar/`)
        .then((response) => response.json())
        .then((data) =>{

            let body = document.getElementById("content")
            if(data.code == 200) {
                for(let i = 0; i < 24; i++){
                    body.innerHTML +=`<div id="box" onclick="getPuzzle(${i})"><h2>${data.result[i].day}</h2></div>`
                }
            } else {
                document.querySelector('#content').innerHTML = "<h2>Fehler beim Laden</h2>";
            }
           
        })
        .catch((error)=>{
            console.log(error);
        })
}


function getPuzzle(id){
    fetch(`./api/calendar/${id}`)
        .then((response) => response.json())
        .then((data) =>{

            let counter

            let body = document.getElementById("content")
            if(data.code == 200) {
               
                if(data.result[id].day % 2 == 0){
                   
                    body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div`
                    
                    document.getElementById("answer").onclick = function(){
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                    }

                    document.getElementById("a").onclick = function(){
                       
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                       
                        document.getElementById("b").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                            counter++
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                        }
                         
                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                        counter++
                    }
                    
                  
                    document.getElementById("b").onclick = function(){
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                        counter++
                        document.getElementById("a").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                             
                            counter++
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                        }
                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                        
                    }

                   
                
                }else if(data.result[id].day % 3 == 0){
                 
                    body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div>`
                    
                    document.getElementById("answer").onclick = function(){
                        
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                       
                    }

                    document.getElementById("a").onclick = function(){
                       
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                       
                        document.getElementById("b").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                            counter++
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                        }
                         
                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                        counter++
                    }
                    
                  
                    document.getElementById("b").onclick = function(){
                        
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                        counter++
                       
                        document.getElementById("a").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                            counter++
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                        }

                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div><div id="a">${data.result[id].a}</div></div>< id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                        
                    }

                }else{
                     body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div> `
                
                     document.getElementById("answer").onclick = function(){
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        
                    }

                    document.getElementById("a").onclick = function(){
                       
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                       
                        document.getElementById("b").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                            counter++
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                        }
                         
                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                        counter++
                    }
                    
                  
                    document.getElementById("b").onclick = function(){
                        body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                        counter++
                        document.getElementById("a").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Leider Falsch. Versuche es Nochmal!</div></div`
                            document.getElementById("answer").onclick = function(){
                                body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                            }
                            counter++
                        }
                        
                        document.getElementById("answer").onclick = function(){
                            body.innerHTML =`<div class="box2"><h2>${data.result[id].puzzle}</h2><div id="answerBox"><div id="a">${data.result[id].a}</div><div id="b">${data.result[id].b}</div><div id="answer">${data.result[id].answer}</div></div><div id="wrongAnswer">Richtig. Du bist echt gut!</div></div`
                        }
                    }

                }
            

            } else {
                document.querySelector('#content').innerHTML = "<h2>Fehler beim Laden</h2>";
            }

            
        })
        .catch((error)=>{
            console.log(error);
        })
}


function getBack(){
 document.getElementById("content").innerHTML =""
    loadCalendar()
}

