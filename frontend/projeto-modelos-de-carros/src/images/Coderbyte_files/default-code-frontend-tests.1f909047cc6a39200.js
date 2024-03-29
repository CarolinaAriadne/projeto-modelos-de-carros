window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS=function(){return `
    // the delay function for when setting state, we wait before interacting with UI
    function __delay(ms) {
      return new Promise((res) => {
        return setTimeout(res, ms);
      });
    }

    // modifying DOM directly
    function setNativeValue(element, value) {
      const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {}
      const prototype = Object.getPrototypeOf(element)
      const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, 'value') || {}
      if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value)
      } else if (valueSetter) {
        valueSetter.call(element, value)
      } else {
        console.log('The given element does not have a value setter, so tests cannot run.');
      }
    }
  `};window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP=function(info){return `
    // data to post
    var postData = {
      username: '${info.username}',
      challenge: '${info.challenge}',
      tests: [],
    };
  `};window.__DEFAULT_CODE_FRONTEND_TESTS_POST=function(){return `
    var bodyNode = document.getElementsByTagName('body')[0];
    function createNode(content) {
      var node = document.createElement('P');
      var textNode = document.createTextNode(content);
      node.appendChild(textNode);
      return node;
    }
    for (var i = 0; i < postData.tests.length; i++) {
      var showTestNode = createNode('test: ' + postData.tests[i].status);
      bodyNode.appendChild(showTestNode);
    }
    var postPromise = new Promise(function(resolve, reject) {
      console.log('posting...', postData);
      fetch('https://coderbyte.com/backend/requests/editor/submit_frontend_challenge_complete.php?u=' + postData.username + '&c=' + postData.challenge, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        var showErrNode = createNode('error: ' + error);
        bodyNode.appendChild(showErrNode);
        console.error("Error:", error);
      });
    });
    var result = await postPromise;
    var showFinalNode = createNode('final: ' + JSON.stringify(result));
    bodyNode.appendChild(showFinalNode);
    console.log('CB POST RESULT', result);
  `};window.__DEFAULT_CODE_FRONTEND_TESTS={'HTML Anchor Link':function(info){return `
      <script>
        /* RUNNING TESTS */
        var ___tests = async function() {

          ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

          // app entry and elements
          var anchor = document.querySelector('a');
          
          // test 1
          if (anchor) {
            if (anchor.href.indexOf('https://coderbyte.com') !== -1 && anchor.innerHTML.toLowerCase().indexOf('click here to go to coderbyte') !== -1) {
              postData.tests.push({status: 'pass'});
            } else {
              postData.tests.push({status: 'fail'});
            }
          } else {
            postData.tests.push({status: 'fail'});
          }

          // post to coderbyte
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

        };setTimeout(___tests, 2000);
      </script>
    `},'HTML Basic Table':function(info){return `
      <script>
        /* RUNNING TESTS */
        var ___tests = async function() {

          ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

          // app entry and elements
          var tableTr = document.querySelectorAll('table tr');
          var tableTh = document.querySelectorAll('table th');
          var tableTd = document.querySelectorAll('table td');
          
          // test 1
          if (tableTr.length === 3 && tableTh.length === 3 && tableTd.length === 6) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }

          // post to coderbyte
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

        };setTimeout(___tests, 2000);
      </script>
    `},'Bootstrap Simple Buttons':function(info){return `
      <script>
        /* RUNNING TESTS */
        var ___tests = async function() {

          ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

          // app entry and elements
          var button1 = document.querySelectorAll('.btn-success');
          var button2 = document.querySelectorAll('.btn-danger');
          
          // test 1
          if (button1 && button2 && Array.from(button1).length > 0 && Array.from(button2).length > 0) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }

          // post to coderbyte
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

        };setTimeout(___tests, 2000);
      </script>
    `},'JavaScript Button Toggle':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('button');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase().trim() : '';
          button.click();
          var stateClicked = button.innerHTML.toLowerCase().trim();
          if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'JavaScript Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('#mainButton');
        var area = root.querySelector('#mainArea');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.querySelector('span').innerHTML);
          button.click();
          var counterNext = parseInt(area.querySelector('span').innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Button Toggle':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('button');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase().trim() : '';
          button.click();
          await __delay(1000);
          var stateClicked = button.innerHTML.toLowerCase().trim();
          if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Context API':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var button = document.getElementById('changeFavorite');
        var favoriteLanguage = document.getElementById('favoriteLanguage');
        var userCodeMatchesPatterns = [
          ${info.code.indexOf('createContext') !== -1},
          ${info.code.indexOf('.Provider') !== -1}
        ];
        
        // test 1
        if (!button || !userCodeMatchesPatterns[0] || !userCodeMatchesPatterns[1]) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = favoriteLanguage.innerHTML ? favoriteLanguage.innerHTML.toLowerCase().trim() : '';
          button.click();
          await __delay(1000);
          var stateClicked = favoriteLanguage.innerHTML.toLowerCase().trim();
          if (stateInit.indexOf('javascript') !== -1 && stateClicked.indexOf('python') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('#mainButton');
        var area = root.querySelector('#mainArea');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.querySelector('span').innerHTML);
          button.click();
          await __delay(1000);
          var counterNext = parseInt(area.querySelector('span').innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React List':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var htmlContents = root.outerHTML;

        // test 1
        if (htmlContents && 
          htmlContents.indexOf('Daniel') !== -1 && 
          htmlContents.indexOf('John') !== -1 && 
          htmlContents.indexOf('Jen') !== -1) {
          postData.tests.push({status: 'pass'});
        } else {
          postData.tests.push({status: 'fail'});
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Phone Book':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var firstName = root.querySelector('.userFirstname');
        var lastName = root.querySelector('.userLastname');
        var phone = root.querySelector('.userPhone');
        var submitButton = root.querySelector('.submitButton');
        var informationTable = root.querySelector('.informationTable');
        var infoContents = null;

        // submit first pre-filled data
        submitButton.click();
        await __delay(1000);

        // test 1
        infoContents = informationTable.outerHTML;
        if (infoContents && 
          infoContents.indexOf('Coder') !== -1 && 
          infoContents.indexOf('Byte') !== -1 && 
          infoContents.indexOf('8885559999') !== -1) {
          postData.tests.push({status: 'pass'});
          // try auto-ordering in ABC order
          setNativeValue(lastName, 'AAA');
          lastName.dispatchEvent(new Event('input', { bubbles: true }));
          setNativeValue(firstName, 'AAA');
          firstName.dispatchEvent(new Event('input', { bubbles: true }));
          setNativeValue(phone, '8885551111');
          phone.dispatchEvent(new Event('input', { bubbles: true }));
          // see if in correct spot
          submitButton.click();
          await __delay(1000);
          infoContents = informationTable.outerHTML;
          if (infoContents && infoContents.indexOf('AAA') !== -1 && infoContents.indexOf('AAA') < infoContents.indexOf('Byte')) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        } else {
          // if fails this one, then try submitting new field
          postData.tests.push({status: 'fail'});

          // simulate values
          setNativeValue(firstName, 'John');
          firstName.dispatchEvent(new Event('input', { bubbles: true }));

          setNativeValue(lastName, 'Smith');
          lastName.dispatchEvent(new Event('input', { bubbles: true }));

          setNativeValue(phone, '8885550000');
          phone.dispatchEvent(new Event('input', { bubbles: true }));

          // click submit button
          submitButton.click();
          await __delay(1000);

          // test 2
          infoContents = informationTable.outerHTML;
          if (infoContents && 
            infoContents.indexOf('John') !== -1 && 
            infoContents.indexOf('Smith') !== -1 && 
            infoContents.indexOf('8885550000') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Tic Tac Toe':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var squares = root.getElementsByClassName('square');

        // test 1
        if (squares && squares.length === 9) {
          // click all squares, do not use for loop because it does not work properly
          squares[0].click(); await __delay(10);
          squares[1].click(); await __delay(10);
          squares[2].click(); await __delay(10);
          squares[3].click(); await __delay(10);
          squares[4].click(); await __delay(10);
          squares[5].click(); await __delay(10);
          squares[6].click(); await __delay(10);
          await __delay(1000);
          // get square values
          var s1 = squares[0].innerHTML.toLowerCase().trim();
          var s2 = squares[1].innerHTML.toLowerCase().trim();
          var s7 = squares[6].innerHTML.toLowerCase().trim();
          if (s1 !== s2 && (s1.indexOf('x') !== -1 || s1.indexOf('o') !== -1) && (s2.indexOf('x') !== -1 || s2.indexOf('o') !== -1) && (s7.indexOf('x') !== -1 || s7.indexOf('o') !== -1)) {
            postData.tests.push({status: 'pass'});
            // test 2
            squares[0].click();
            await __delay(1000);
            var s1_again = squares[0].innerHTML.toLowerCase().trim();
            if ((s1.indexOf('x') !== -1 || s1.indexOf('o') !== -1) && (s1 === s1_again)) {
              postData.tests.push({status: 'pass'});
              // only if both tests passed do we check if "checkWinner" function will work
              var winnerArea = document.getElementById('winnerArea');
              var winnerContents = winnerArea ? winnerArea.outerHTML : '';
              if (winnerContents.toLowerCase().indexOf('x') !== -1) {
                postData.tests.push({status: 'pass'});
              } else {
                postData.tests.push({status: 'fail'});
              }
            } else {
              postData.tests.push({status: 'fail'});
            }
          } else {
            postData.tests.push({status: 'fail'});
          }
        } else {
          postData.tests.push({status: 'fail'});
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React TypeScript Button Toggle':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('button');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase().trim() : '';
          button.click();
          await __delay(1000);
          var stateClicked = button.innerHTML.toLowerCase().trim();
          if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Native Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('#mainButton');
        var area = root.querySelector('#actualCount');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.innerHTML);
          button.click();
          await __delay(1000);
          var counterNext = parseInt(area.innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'React Todo App Project':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var itemInputField = root.querySelector('.itemInput');
        var addItemButton = root.querySelector('.addItemButton');
        var removeItemButton = null;
        var todoItemsContent = null;

        // add item 1
        if (itemInputField) {
          setNativeValue(itemInputField, 'TESTING ADDED A');
          itemInputField.dispatchEvent(new Event('input', { bubbles: true }));
          addItemButton.click();
        } 

        // add item 2
        if (itemInputField) {
          setNativeValue(itemInputField, 'TESTING ADDED B');
          itemInputField.dispatchEvent(new Event('input', { bubbles: true }));
          addItemButton.click();
        }

        await __delay(1000);
        var todoItemsList = root.querySelector('.todo-list');

        // test 1
        todoItemsContent = todoItemsList ? todoItemsList.outerHTML : '';
        if (todoItemsContent.indexOf('TESTING ADDED A') !== -1 && todoItemsContent.indexOf('TESTING ADDED B') !== -1) {
          postData.tests.push({status: 'pass'});
        } else {
          postData.tests.push({status: 'fail'});
        }

        // test 2
        removeItemButton = root.querySelector('.removeTodoItem');
        if (removeItemButton) {
          removeItemButton.click();
          await __delay(1000);
          todoItemsContent = todoItemsList ? todoItemsList.outerHTML : '';
          if (todoItemsContent.indexOf('TESTING ADDED A') === -1 && todoItemsContent.indexOf('TESTING ADDED B') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        } else {
          postData.tests.push({status: 'fail'});
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'AngularJS Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('root');
        var button = root.querySelector('#clickButtonCounter');
        var counter = root.querySelector('#getButtonCounter');

        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(counter.innerHTML);
          button.click();
          var counterNext = parseInt(counter.innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var button: HTMLElement = root.querySelector('#mainButton') as HTMLElement;
        var area = root.querySelector('#mainArea');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.querySelector('span').innerHTML);
          button.click();
          var counterNext = parseInt(area.querySelector('span').innerHTML);
          if (counterNext === (counterInit + 1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Button Toggle':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var button: HTMLElement = root.querySelector('button') as HTMLElement;

        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase().trim() : '';
          button.click();
          var stateClicked = button.innerHTML.toLowerCase().trim();
          if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Reactive Form':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var firstField = root.querySelector('input');
       
        // simulate change
        if (firstField) {
          var event1 = new Event('change', { bubbles: true });
          var event2 = new Event('input', { bubbles: true });
          firstField.value = 'CoderbyteTestInput';
          firstField.setAttribute('value', 'CoderbyteTestInput');
          firstField.dispatchEvent(event1);
          firstField.dispatchEvent(event2);
        } else {
          postData.tests.push({status: 'fail'});
        }

        // get pre area
        var preArea = root.querySelector('pre');

        // test 1
        if (!preArea) {
          postData.tests.push({status: 'fail'});
        } else {
          if (preArea.innerHTML.indexOf('CoderbyteTestInput') === -1) {
            postData.tests.push({status: 'fail'});
          } else {
            postData.tests.push({status: 'pass'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Generate Username':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var button: HTMLElement = root.querySelector('button') as HTMLElement;
        var output = null;
        var firstname = root.querySelector('#firstname');
        var lastname = root.querySelector('#lastname');

        // submit first pre-filled data
        button.click();

        // test 1
        output = root.querySelector('#output').innerHTML;
        if (output && 
          output.indexOf('coder_') !== -1 && 
          output.indexOf('byte_') !== -1) {
          postData.tests.push({status: 'pass'});
        } else {
          // if fails this one, then try submitting new field
          postData.tests.push({status: 'fail'});

          // simulate values
          if (firstname) {
            setNativeValue(firstname, 'Coder');
            firstname.dispatchEvent(new Event('input', { bubbles: true }));
          }

          if (lastname) {
            setNativeValue(lastname, 'Byte');
            lastname.dispatchEvent(new Event('input', { bubbles: true }));
          }

          // click submit button
          button.click();

          // test 2
          output = root.querySelector('#output').innerHTML;
          if (output && 
            output.indexOf('coder_') !== -1 && 
            output.indexOf('byte_') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Phone Book':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_MODIFY_NATIVE_INPUTS()}
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var firstName = root.querySelector('.userFirstname');
        var lastName = root.querySelector('.userLastname');
        var phone = root.querySelector('.userPhone');
        var submitButton: HTMLElement = root.querySelector('.submitButton') as HTMLElement;
        var informationTable = root.querySelector('.informationTable');
        var infoContents = null;

        // submit first pre-filled data
        submitButton.click();

        // test 1
        infoContents = informationTable ? informationTable.outerHTML : '';
        if (infoContents && 
          infoContents.indexOf('Coder') !== -1 && 
          infoContents.indexOf('Byte') !== -1 && 
          infoContents.indexOf('8885559999') !== -1) {
          postData.tests.push({status: 'pass'});
          // try auto-ordering in ABC order
          setNativeValue(lastName, 'AAA');
          lastName.dispatchEvent(new Event('input', { bubbles: true }));
          setNativeValue(firstName, 'AAA');
          firstName.dispatchEvent(new Event('input', { bubbles: true }));
          setNativeValue(phone, '8885551111');
          phone.dispatchEvent(new Event('input', { bubbles: true }));
          // see if in correct spot
          submitButton.click();
          informationTable = root.querySelector('.informationTable');
          infoContents = informationTable ? informationTable.outerHTML : '';
          if (infoContents && infoContents.indexOf('AAA') !== -1 && infoContents.indexOf('AAA') < infoContents.indexOf('Byte')) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        } else {
          // if fails this one, then try submitting new field
          postData.tests.push({status: 'fail'});

          // simulate values
          setNativeValue(firstName, 'John');
          firstName.dispatchEvent(new Event('input', { bubbles: true }));

          setNativeValue(lastName, 'Smith');
          lastName.dispatchEvent(new Event('input', { bubbles: true }));

          setNativeValue(phone, '8885550000');
          phone.dispatchEvent(new Event('input', { bubbles: true }));

          // click submit button
          submitButton.click();

          // test 2
          informationTable = root.querySelector('.informationTable');
          infoContents = informationTable ? informationTable.outerHTML : '';
          if (infoContents && 
            infoContents.indexOf('John') !== -1 && 
            infoContents.indexOf('Smith') !== -1 && 
            infoContents.indexOf('8885550000') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Angular Tic Tac Toe':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementsByTagName('app-area')[0];
        var squares = root.getElementsByClassName('square');

        // test 1
        if (squares && squares.length === 9) {
          // click all squares
          // @ts-ignore
          squares[0].click(); squares[1].click(); squares[2].click(); squares[3].click(); squares[4].click(); squares[5].click(); squares[6].click();
          // get square values
          var s1 = squares[0].innerHTML.toLowerCase().trim();
          var s2 = squares[1].innerHTML.toLowerCase().trim();
          if (s1 !== s2 && (s1.indexOf('x') !== -1 || s1.indexOf('o') !== -1) && (s2.indexOf('x') !== -1 || s2.indexOf('o') !== -1)) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
          // @ts-ignore
          squares[0].click();
          var s1_again = squares[0].innerHTML.toLowerCase().trim();
          if ((s1.indexOf('x') !== -1 || s1.indexOf('o') !== -1) && (s1 === s1_again)) {
            postData.tests.push({status: 'pass'});
            // only if both tests passed do we check if "checkWinner" function will work
            var winnerArea = document.getElementById('winnerArea');
            var winnerContents = winnerArea ? winnerArea.outerHTML : '';
            if (winnerContents.toLowerCase().indexOf('x') !== -1) {
              postData.tests.push({status: 'pass'});
            } else {
              postData.tests.push({status: 'fail'});
            }
          } else {
            postData.tests.push({status: 'fail'});
          }
        } else {
          postData.tests.push({status: 'fail'});
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000);
    `},'Vue Button Toggle':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var button = root.querySelector('button');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var stateInit = button.innerHTML ? button.innerHTML.toLowerCase().trim() : '';
          button.click();
          setTimeout(async function() {
            var stateClicked = button.innerHTML.toLowerCase().trim();
            if ((stateClicked === 'on' || stateClicked === 'off') && stateClicked !== stateInit) {
              postData.tests.push({status: 'pass'});
            } else {
              postData.tests.push({status: 'fail'});
            }
            // post to coderbyte
            ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
          }, 1000);
        }

      };setTimeout(___tests, 2000); </script>
    `},'Vue Simple Counter':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var button = root.querySelector('#mainButton');
        var area = root.querySelector('#mainArea');
        
        // test 1
        if (!button) {
          postData.tests.push({status: 'fail'});
        } else {
          var counterInit = parseInt(area.querySelector('span').innerHTML);
          button.click();
          setTimeout(async function() {
            var counterNext = parseInt(area.querySelector('span').innerHTML);
            if (counterNext === (counterInit + 1)) {
              postData.tests.push({status: 'pass'});
            } else {
              postData.tests.push({status: 'fail'});
            }
            // post to coderbyte
            ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
          }, 1000);
        }

      };setTimeout(___tests, 2000); </script>
    `},'Vue List Rendering':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var htmlContents = root.outerHTML;

        // test 1
        if (htmlContents && 
          htmlContents.indexOf('Daniel') !== -1 && 
          htmlContents.indexOf('John') !== -1 && 
          htmlContents.indexOf('Jen') !== -1) {
          postData.tests.push({status: 'pass'});
        } else {
          postData.tests.push({status: 'fail'});
        }

        // post to coderbyte
        ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}

      };setTimeout(___tests, 2000); </script>
    `},'Vue Generate Username':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var button = root.querySelector('button');
        var output = null;
        var firstname = root.querySelector('#firstname');
        var lastname = root.querySelector('#lastname');

        // submit first pre-filled data
        button.click();

        setTimeout(async function() {
          // test 1
          output = root.querySelector('#output').innerHTML;
          if (output && 
            output.indexOf('coder_') !== -1 && 
            output.indexOf('byte_') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
          // post to coderbyte
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
        }, 1000);

      };setTimeout(___tests, 2000); </script>
    `},'Vue Phone Book':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var firstName = root.querySelector('.userFirstname');
        var lastName = root.querySelector('.userLastname');
        var phone = root.querySelector('.userPhone');
        var submitButton = root.querySelector('.submitButton');
        var informationTable = root.querySelector('.informationTable');
        var infoContents = null;

        // submit first pre-filled data
        submitButton.click();

        setTimeout(async function() {
          // test 1
          infoContents = informationTable.outerHTML;
          if (infoContents && 
            infoContents.indexOf('Coder') !== -1 && 
            infoContents.indexOf('Byte') !== -1 && 
            infoContents.indexOf('8885559999') !== -1) {
            postData.tests.push({status: 'pass'});
          } else {
            postData.tests.push({status: 'fail'});
          }
          // post to coderbyte
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
        }, 1000);

      };setTimeout(___tests, 2000); </script>
    `},'Vue Tic Tac Toe':function(info){return `
      /* RUNNING TESTS */
      var ___tests = async function() {

        ${window.__DEFAULT_CODE_FRONTEND_TESTS_SETUP(info)}

        // app entry and elements
        var root = document.getElementById('app');
        var squares = root.getElementsByClassName('square');

        // test 1
        if (squares && squares.length === 9) {
          // click all squares, do not use for loop because it does not work properly
          squares[0].click();
          squares[1].click();
          squares[2].click();
          squares[3].click();
          squares[4].click();
          squares[5].click();
          squares[6].click();
          setTimeout(async function() {
            // get square values
            var s1 = squares[0].innerHTML.toLowerCase().trim();
            var s2 = squares[1].innerHTML.toLowerCase().trim();
            if (s1 !== s2 && (s1.indexOf('x') !== -1 || s1.indexOf('o') !== -1) && (s2.indexOf('x') !== -1 || s2.indexOf('o') !== -1)) {
              postData.tests.push({status: 'pass'});
            } else {
              postData.tests.push({status: 'fail'});
            }
            // post to coderbyte
            ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
          }, 1000);
        } else {
          postData.tests.push({status: 'fail'});
          ${window.__DEFAULT_CODE_FRONTEND_TESTS_POST()}
        }

      };setTimeout(___tests, 2000); </script>
    `},}