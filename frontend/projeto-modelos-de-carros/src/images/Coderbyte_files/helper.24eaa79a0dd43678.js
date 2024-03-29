function prettyifyJsonStringOutput(jsonString,tabs=2){var newJsonString=jsonString;try{var tabs=tabs;if(window.__nopretty)tabs=0;newJsonString=JSON.parse(newJsonString);newJsonString=JSON.stringify(newJsonString,undefined,tabs)}catch(e){}
return newJsonString}
function convertDateTimeToLocalTimezone(dateTime){var dateTime=dateTime.replace('am',' AM EDT').replace('pm',' PM EDT');dateTime=dateTime.replace(/\-/g,'/');var date=new Date(dateTime);date=new Date(date.toISOString());return date}
function readableDateString(dateTime,excludeYear){var dateLocal=convertDateTimeToLocalTimezone(dateTime).toString();var dateLocalSplit=dateLocal.split(' ');var dateStrFinal=dateLocalSplit[1]+' '+dateLocalSplit[2]+' '+dateLocalSplit[3];if(excludeYear){dateStrFinal=dateStrFinal.substr(0,dateStrFinal.lastIndexOf(' '))}
return dateStrFinal}
function readableTimeStringInLocal(dateTime){var dateLocal=convertDateTimeToLocalTimezone(dateTime);var hours=dateLocal.getHours();var minutes=dateLocal.getMinutes();var part='am';if(hours>=12){hours=hours-12;part='pm'}
if(hours===0){hours=12}
if(minutes<10){minutes='0'+minutes}
return hours+':'+minutes+part}
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);}}
function throttle(fn,threshhold,scope){threshhold||(threshhold=250);var last,deferTimer;return function(){var context=scope||this;var now=+new Date,args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function isValidUrl(string){try{new URL(string);return!0}catch(err){return!1}}
function shuffleArray(array){var array=array.slice(0);for(var i=array.length-1;i>0;i--){var j=Math.floor(Math.random()*array.length);var temp=array[i];array[i]=array[j];array[j]=temp}
return array}
function removeFormattingFromQuillEditor(quillElement){if(!quillElement.clipboard)return;quillElement.clipboard.addMatcher(Node.ELEMENT_NODE,(node,delta)=>{let ops=[]
delta.ops.forEach(op=>{if(op.insert&&typeof op.insert==='string'){ops.push({insert:op.insert})}});delta.ops=ops;return delta})}
function highlightCodeSnippetsOnPage(classes,onArticle){if(!hljs){console.log('ERROR highlighting code snippets on page',hljs);return}
if(onArticle){$.each($('code'),function(index,el){$(el).replaceWith('<pre>'+$(el).html()+'</pre>')});$.each($('pre'),function(index,el){$(el).addClass('ques_code_style_margins');$(el).html('<code>'+$(el).html()+'</code>')});hljs.highlightAll();hljs.initHighlighting.called=!1;hljs.highlightAll()}
if(classes){for(var i=0;i<classes.length;i++){var thisClass=classes[i];$.each($(thisClass),function(index,el){var content=$(el).html();if(content.indexOf('```')!==-1){content=content.replace('```\n','```');content=content.replace('```','<pre class="pre_code"><code>');content=content.replace('```','</pre></code>');content=content.trim();$(el).html(content);var codeBlock=$(el).find('pre code')[0];hljs.highlightBlock(codeBlock)}
var newerCodeBlock=$(el).find('pre.ql-syntax')[0];if(newerCodeBlock){content=content.replace(/<pre class="ql-syntax" spellcheck="false">/g,'<pre class="ql-syntax" spellcheck="false"><code>');content=content.replace(/<\/pre>/g,'</code></pre>');content=content.trim();$(el).html(content);newerCodeBlock=$(el).find('pre.ql-syntax code');for(var k=0;k<newerCodeBlock.length;k++){hljs.highlightBlock(newerCodeBlock[k])}}})}}
console.log('all code snippets highlighted')}