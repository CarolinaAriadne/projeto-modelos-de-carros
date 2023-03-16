window.__DEFAULT_COLLAB_CODE={'SQL':'-- To use your own tables, you can upload a .sql file\n-- in your dashboard under `Customization` in the navigation\n\nSELECT * FROM cb_interviewsample LIMIT 3','SQLSERVER':'-- To use your own tables, you can upload a .sql file\n-- in your dashboard under `Customization` in the navigation\n\nSELECT * FROM cb_interviewsample_sql_server','Bash':'echo "Hello World!"','Plaintext':'Hello world, this is plaintext.','JavaScript':'function foo(param) {\n  return param;\n}\n\nconsole.log(foo(2+2));','Python':'def foo(param):\n  return param\n\nprint foo(2+2)','Python3':'def foo(param):\n  return param\n\nprint(foo(2+2))','Ruby':'def foo(param)\n  return param\nend\n\nputs foo(2+2)','PHP':'<'+'?php\n\nfunction foo($param) {\n  return $param;\n}\n\necho foo(2+2);\n\n?>','Java':'import java.util.*;\nimport java.io.*;\n\nclass Main {\n\n  public static String Foo(String param) {\n    return param;\n  }\n\n  public static void main (String[] args) {\n    System.out.print(Foo("hello"));\n  }\n\n}','Swift':'func foo(_ param: String) -> String {\n  return param\n}\n\nprint(foo("hello"));','Go':'package main\nimport "fmt"\n\nfunc foo(param int) int {\n  return param\n}\n\nfunc main() {\n  fmt.Println(foo(2+2))\n}','Cpp':'#include <iostream>\nusing namespace std;\n\nint foo(int param) {\n  return param;\n}\n\nint main() {\n  cout << foo(2+2);\n  return 0;\n}','Csharp':'using System;\n\nclass MainClass {\n\n  public static int foo(int param) {\n    return param;\n  }\n\n  static void Main() {\n    Console.WriteLine(foo(2+2));\n  }\n\n}','C':'#include <stdio.h>\n\nvoid foo(int num) {\n  printf("%d", num);\n}\n\nint main(void) {\n  foo(2+2);\n  return 0;\n}','Clojure':'(println "Hello World!")','Kotlin':'fun main() {\n  println("Hello World!")\n}','Elixir':'IO.puts 2 + 2','Dart':'void main() {\n  print(2 + 2);\n}','TypeScript':'function foo(param) {\n  return param;\n}\n\nconsole.log(foo(2+2));','Scala':'object Main {\n\n  def main(args: Array[String]) {\n\n    println("Hello world!");\n\n  }\n\n}','R':'print("Hello World!")','Rust':'fn main() {\n  println!("Hello World!");\n}','HTML':`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Editor code</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>

<script>
  $(document).ready(function () {
    $('h1').text('My title here!');
  });
</script>`,'React':`import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <button>Click me!</button>
  ); 
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`,'Angular':`// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '<button>ON</button>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here
  ngOnInit() { 
    
  }
}`,'Vue.js':`<template>
  <div id="app">
    <button>ON</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
};
</script>`,'Flutter':`import 'package:flutter/material.dart';

void main() {
   runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const MyHomePage(title: 'Flutter App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Button was pressed this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}`,'Django':`#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()`,'Express':`const express = require('express');
const app = require('./src/app.js');

const server = express();
const port = process.env.PORT || 80;
const basePath = process.env.BASE_PATH || '/';

server.use(basePath, app);

/* 
  How to start application
  run \`node index.js\` in the terminal on the right once it loads
*/
server.listen(port, () => {
  console.log('Server listening on port ' + port);
})`,'MongoDB/Node':`const express = require('express')
const app = require('./src/app.js');

const server = express();
const port = process.env.PORT || 80;
const basePath = process.env.BASE_PATH || '/';

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost/TestDB';
MongoClient.connect(mongoUrl, (err, db) => {
  console.log(err, db);
});

server.use(basePath, app);

server.listen(port, () => {
  console.log('Server listening on port ' + port);
})
`,'RoR':`# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

map ENV["BASE_PATH"] do
  run Rails.application
end

run Rails.application
Rails.application.load_server
`,'Spring':`plugins {
  id 'java'
  id 'org.springframework.boot' version '3.0.1'
  id 'io.spring.dependency-management' version '1.1.0'
}

group = 'com.coderbyte'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '17'

repositories {
  mavenCentral()
}

dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-web'
  developmentOnly 'org.springframework.boot:spring-boot-devtools'
  testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
  useJUnitPlatform()
}
`,'Jupyter':`# Jupyter Notebook is starting...`,'MochaSample-JavaScript':`var calculator = {
  add: function(a, b) {
    return a + b;
  }
};

module.exports = calculator;
  `,'pytestSample-Python3':`def add(a, b):
  return a + b

def test_answer():
  assert add(3, 2) == 5
`,'NotebookGrading-Jupyter':`# Jupyter Notebook is starting...`,'NotebookGrading-internal-file':`# This is an internal file that will be hidden from candidates but is required
# to auto-grade solutions provided for custom Jupyter Notebook challenges
# Note: do not rename this file
import pickle
import sys

# read and parse data here
def read_data(expected_output_file, submitted_output_file):
  return ["data", "data"]

# your custom scoring function
def scoring(expected_data, submitted_data):
  if (expected_data == submitted_data):
    return 10
  else:
    return 0

# parse data either from URL or local file
expected_data, submitted_data = read_data(None, None)

# output must be in this exact format in final_score.txt: FINAL_SCORE = <0-10>
final_output = "FINAL_SCORE = " + str(scoring(expected_data, submitted_data))

# write output to file
f = open("final_score.txt", "w")
f.write(final_output)
f.close()
`,'ReactJestTests-React':`import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
`,'PHPUnit-PHP':`<?php

declare(strict_types=1);

use PHPUnit\\Framework\\TestCase;

final class MainTest extends TestCase {
  public function testExpectFooActualFoo(): void {
    $this->expectOutputString('foo');
    print 'foo';
  }
  public function testExpectBarActualBaz(): void {
    $this->expectOutputString('hello');
    print 'world';
  }
}

?>
`,};window.__DEFAULT_COLLAB_FILETREE={'React':[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'src',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.html',__initContent:`<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
    <meta charset="UTF-8" />
    <link type="text/css" rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.js',selected:'true',__initContent:`
          import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <button>Click me!</button>
  ); 
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`,}]},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'build',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'style.css',__initContent:`/* todo */`,}]}],'Vue.js':[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'public',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.html',__initContent:`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link type="text/css" rel="stylesheet" href="style.css" />
      <title>Vue App</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>`},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'style.css',__initContent:`/* todo */`}]},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'src',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'App.vue',selected:'true',__initContent:`<template>
  <div id="app">
    <button>ON</button>
  </div>
</template>

<script>
  export default {
  name: "App",
  data() {
    return {
      items: null
    };
  }
  };
</script>`,},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main.js',__initContent:`import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')`,}]}],'Angular':[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'src',main:'true',contents:[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'app',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'app-area.component.ts',selected:'true',__initContent:`// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: '<button>ON</button>',
  styles: []
})

export class MainAppComponent implements OnInit {
  // code goes here
  ngOnInit() { 
    
  }
}`,},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'app.module.ts',__initContent:`// @ts-nocheck
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainAppComponent } from './app-area.component';

@Component({
  selector: 'app-root',
  template: '' + '<app-area></app-area>',
  styles: []
})
class AppComponent {}

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,}]},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'style.css',__initContent:`/* You can add global styles to this file, and also import other style files */`,}]},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.html',__initContent:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Angular App</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="style.css" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>`,},],'HTML':[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.html',main:'true',selected:'true',__initContent:`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <title>Editor code</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>

<script>
  $(document).ready(function () {
    $('h1').text('My title here!');
  });
</script>`},],'Flutter':[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'lib',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main.dart',main:'true',selected:'true',__initContent:`import 'package:flutter/material.dart';

void main() {
    runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const MyHomePage(title: 'Flutter App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Button was pressed this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}`,},]},],'MochaSample-JavaScript':[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main.js',__initContent:`var Mocha = require('mocha');
var mocha = new Mocha({});

// a 'coderbyte-tests' folder is required for unit tests to properly run on our platform
mocha.addFile('coderbyte-tests/test.js');

mocha.run()
  .on('test', function(test) {
    console.log('Test started: ' + test.title);
  })
  .on('test end', function(test) {
    console.log('Test complete: ' + test.title);
  })
  .on('pass', function(test) {
    console.log('Test passed');
  })
  .on('fail', function(test, err) {
    console.log('Test fail');
  })
  .on('end', function() {
    console.log('All done');
  });`},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'calculator.js',selected:'true',__initContent:`var calculator = {
  add: function(a, b) {
    return a + b;
  }
};

module.exports = calculator;`},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'coderbyte-tests',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'test.js',__initContent:`const chai = require('chai');
const expect = chai.expect;

const calculator = require('../calculator');

describe('Calculator', () => {
  describe('Addition', () => {
    it('should sum two numbers', () => {
      expect(calculator.add(2, 2)).to.equal(4)
      expect(calculator.add(50, 30)).to.equal(80)
    })
  })
  describe('Subtraction', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(2, 2)).to.equal(0)
      expect(calculator.subtract(50, 1)).to.equal(49)
    })
  })
});`,}]},],'pytestSample-Python3':[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main.py',__initContent:`import pytest

# do not modify this function call
retcode = pytest.main(['-v'])`},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'coderbyte-tests',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main_test.py',selected:'true',__initContent:`def add(a, b):
  return a + b

def test_answer():
  assert add(3, 2) == 5`,}]},],'NotebookGrading-Jupyter':[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'jupyter_start.py',__initContent:`# Jupyter Notebook is starting...`},],'ReactJestTests-React':[{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'__tests__',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'App.test.js',__initContent:`import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './../src/App';

it('Renders hello', () => {
  render(<App />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});`,},]},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'src',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.html',__initContent:`<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
    <meta charset="UTF-8" />
    <link type="text/css" rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'index.js',selected:'true',__initContent:`import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`,},{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'App.js',__initContent:`import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="mainArea">
        Hello
      </div>
    );
  }
}`,}]},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'build',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'style.css',__initContent:`/* todo */`,}]}],'PHPUnit-PHP':[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'main.php',main:'true',__initContent:`<?php

// do not modify this
$output = shell_exec('phpunit coderbyte-tests');
echo $output;

?>`,},{type:'dir',id:'d_'+Math.random().toString().substr(2,5),name:'coderbyte-tests',main:'true',contents:[{type:'file',id:'f_'+Math.random().toString().substr(2,5),name:'MainTest.php',selected:'true',__initContent:`<?php

declare(strict_types=1);

use PHPUnit\\Framework\\TestCase;

final class MainTest extends TestCase {
  public function testExpectFooActualFoo(): void {
    $this->expectOutputString('foo');
    print 'foo';
  }
  public function testExpectBarActualBaz(): void {
    $this->expectOutputString('hello');
    print 'world';
  }
}

?>`,},]},],}