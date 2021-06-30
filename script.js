const arr=[
	   "Web designers are expected to have an awareness of usability and if their role involves creating mark  up then they are also expected to be up to date with web accessibility guidelines. ",
	    "The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",
	    "A well-organized paragraph supports or develops a single controlling idea, which is expressed in a sentence called the topic sentence. A topic sentence has several important functions: it substantiates or supports an essay’s thesis statement; it unifies the content of a paragraph and directs the order of the sentences",
	    "It advises the reader of the subject to be discussed and how the paragraph will discuss it. Readers generally look to the first few sentences in a paragraph to determine the subject and perspective of the paragraph. That’s why it’s often best to put the topic sentence at the very beginning of the paragraph. In some cases, however, it’s more effective to place another sentence before the topic sentence—for example, a sentence linking the current paragraph to the previous one, or one providing background information.",
	    "Efficient, well-written paragraphs are a staple of good flash fiction and short fiction writing, as short stories need to stay more focused on a central idea. As long as your sentences form cohesive ideas and connect to one another, you can write a good paragraph."];

	    const msg=document.getElementById('msg');
	    const myWords=document.getElementById('myWords');
	    const btn=document.getElementById('btn');

	    let startTime,endTime,totalTime;

	    const playgame=()=>{
	    	let randomNumber=Math.floor(Math.random()*arr.length);
	    	msg.innerText=arr[randomNumber];
	    	let date=new Date();
	    	startTime=date.getTime();
	    	
	    	btn.innerText="Done";

	    }

	    const endgame=()=>{
	    	let date=new Date();
	    	endTime=date.getTime();
	    	console.log(endTime);
	    	totalTime=((endTime-startTime)/1000);
	    	console.log(totalTime);
	    	

	    	let totalStr=myWords.value;

	    	let wordCount=wordCounter(totalStr);

	    	let speed=Math.round((wordCount/totalTime)*60);
	    	let finalmsg="you typed " +speed+ " words per minute. ";
	    	finalmsg +=compareWords(msg.innerText, totalStr);

            msg.innerText=finalmsg;


	    }

	    

	     const compareWords=(str1,str2)=>{
	     	let words1=str1.split(" ");
	     	let words2=str2.split(" ");
	     	let cnt=0;


	     	words1.forEach(function(item,index){
	     		if(item==words2[index]){
	     			cnt++;
	     		}
	     	})


          let errorWords=(words1.length - cnt);
          return(cnt +" correct out of " + words1.length + " words and the total number of error are"+ errorWords +".");
	     }

	     const wordCounter=(str)=>{
	    	let response=str.split(" ").length;
	    	return response;
	    }

	    

	    btn.addEventListener('click', function(){
   
	    	if(this.innerText=='Start'){

	    		myWords.disabled=false;
	    		playgame();
	    	}else if(this.innerText=='Done'){
	    		myWords.disabled=true;
	    		btn.innerText='Start';
	    		endgame();
	    	}


	    })

