window.__DEFAULT_CODE_LANG_SPECIFIC={'Node.js Print Files':function(chalInfo){return `
const fs = require('fs');
const exec = require('child_process').exec; 

// create file called newfile.txt
// code goes here...

// then print contents of directory according to instructions above
// code goes here...

console.log(null);
    `},'Node.js REST GET Simple':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js JSON Cleaning':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js Age Counting':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js Write Stream':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js Math Parse':function(chalInfo){return `
function queryParseMath(routeString) {
  return routeString;
}

console.log(queryParseMath('/math?a=45&b=7'));
    `},'Ruby REST GET Simple':function(chalInfo){return `
require 'net/http'
require 'uri'
require 'json'

uri = URI('https://coderbyte.com/api/challenges/json/rest-get-simple')
response = Net::HTTP.get(uri)
puts response
    `},'Ruby JSON Cleaning':function(chalInfo){return `
require 'net/http'
require 'uri'
require 'json'

uri = URI('https://coderbyte.com/api/challenges/json/json-cleaning')
response = Net::HTTP.get(uri)
puts response
    `},'Ruby Age Counting':function(chalInfo){return `
require 'net/http'
require 'uri'
require 'json'

uri = URI('https://coderbyte.com/api/challenges/json/age-counting')
response = Net::HTTP.get(uri)
puts response
    `},'PHP JSON Cleaning':function(chalInfo){return `
<?php 

  $ch = curl_init('https://coderbyte.com/api/challenges/json/json-cleaning');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $data = curl_exec($ch);
  curl_close($ch);

  print_r(json_decode($data, true));

?>`},'PHP Age Counting':function(chalInfo){return `
<?php 

  $ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $data = curl_exec($ch);
  curl_close($ch);

  print_r(json_decode($data, true));

?>`},'Java Print Files':function(chalInfo){return `
import java.util.*; 
import java.io.*;

class Main {  
  public static void main (String[] args) { 
    System.out.println("hello world");
  }   
}
    `},'Java REST GET Simple':function(chalInfo){return `
import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/rest-get-simple");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        System.out.println(inputStream);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }   
}
    `},'Java Age Counting':function(chalInfo){return `
import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/age-counting");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        System.out.println(inputStream);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }   
}
    `},'Android Filter Movies':function(chalInfo){return `
fun LogDumpGetUnique(): String {

  var log_dump : String = "name=John Trust, username=john3, email=john3@gmail.com, id=434453; name=Hannah Smith, username=hsmith, email=hsm@test.com, id=23312; name=Hannah Smith, username=hsmith, id=3223423, email=hsm@test.com; name=Robert M, username=rm44, id=222342, email=rm@me.com; name=Robert M, username=rm4411, id=5535, email=rm@me.com; name=Susan Vee, username=sv55, id=443432, email=susanv123@me.com; name=Robert Nick, username=rnick33, id=23432, email=rnick@gmail.com; name=Robert Nick II, username=rnickTemp34, id=23432, email=rnick@gmail.com; name=Susan Vee, username=sv55, id=443432, email=susanv123@me.com;"

  // code goes here
  return log_dump;

}

fun main() {
  println(LogDumpGetUnique())
}
    `},'Android Local Cache':function(chalInfo){return `
// create a cache class/interfact here that allows the functions below to run
// todo

fun main() {

  // modifying the cache (keep this here)
  cache.add("article-123", "https://coderbyte.com/article-123")
  cache.add("article-456", "https://coderbyte.com/article-456")
  cache.add("how-to-code-444", "https://coderbyte.com/how-to-code-444")
  cache.get("first-article")
  cache.get("second-article")
  cache.get("article-456")
  cache.add("article-123", "https://coderbyte.com/article-123")
  cache.size()

}
    `},'iOS Filter Movies':function(chalInfo){return `
import Foundation

func LogDumpGetUnique() -> String {

  let log_dump = "name=John Trust, username=john3, email=john3@gmail.com, id=434453; name=Hannah Smith, username=hsmith, email=hsm@test.com, id=23312; name=Hannah Smith, username=hsmith, id=3223423, email=hsm@test.com; name=Robert M, username=rm44, id=222342, email=rm@me.com; name=Robert M, username=rm4411, id=5535, email=rm@me.com; name=Susan Vee, username=sv55, id=443432, email=susanv123@me.com; name=Robert Nick, username=rnick33, id=23432, email=rnick@gmail.com; name=Robert Nick II, username=rnickTemp34, id=23432, email=rnick@gmail.com; name=Susan Vee, username=sv55, id=443432, email=susanv123@me.com;"

  // code goes here
  return log_dump

}

print(LogDumpGetUnique())
    `},'iOS Local Cache':function(chalInfo){return `
import Foundation

// create a cache class/interfact here that allows the functions below to run
// todo

// modifying the cache (keep this here)
cache.add("article-123", "https://coderbyte.com/article-123")
cache.add("article-456", "https://coderbyte.com/article-456")
cache.add("how-to-code-444", "https://coderbyte.com/how-to-code-444")
cache.get("first-article")
cache.get("second-article")
cache.get("article-456")
cache.add("article-123", "https://coderbyte.com/article-123")
cache.size()
    `},'Csharp JSON Cleaning':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 
using System.Collections.Generic;
using Newtonsoft.Json;

class MainClass {
  
  static void Main() {  
    
    WebClient client = new WebClient();
    string s = client.DownloadString("https://coderbyte.com/api/challenges/json/json-cleaning");
    Console.WriteLine(s);
    
  } 
   
}
    `},'Csharp Age Counting':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 
using System.Collections.Generic;
using Newtonsoft.Json;

class MainClass {
  
  static void Main() {  

    WebClient client = new WebClient();
    string s = client.DownloadString("https://coderbyte.com/api/challenges/json/age-counting");
    Console.WriteLine(s);
    
  } 
   
}
    `},'Csharp Remove Ones':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 
using System.Collections.Generic;
using Newtonsoft.Json;

class MainClass {
  
  static void Main() {  
    
    WebClient client = new WebClient();
    string s = client.DownloadString("https://coderbyte.com/api/challenges/json/age-counting");
    Console.WriteLine(s);
    
  } 
   
}
    `},'Csharp Logs Parse':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 
using System.Collections.Generic;
using Newtonsoft.Json;

class MainClass {
  
  static void Main() {

    WebClient client = new WebClient();
    string s = client.DownloadString("https://coderbyte.com/api/challenges/logs/web-logs-raw");
    Console.WriteLine(s);
    
  } 
    
}
    `},'Python Age Counting':function(chalInfo){return `
import requests
import numpy as np
import pandas as pd

r = requests.get('https://coderbyte.com/api/challenges/json/age-counting')
print(len(r.json()['data']))
    `},'Python Standard Deviations':function(chalInfo){return `
import requests
import numpy as np
import pandas as pd

r = requests.get('https://coderbyte.com/api/challenges/json/list-numbers')
print(r.json()['data'])
    `},'Python S3 Get File':function(chalInfo){return `
import requests
import boto3

s3 = boto3.client('s3')
print(s3)
    `},'Python S3 Get Contents':function(chalInfo){return `
import requests
import boto3

s3 = boto3.client('s3')
print(s3)
    `},'Django JSON Cleaning':function(chalInfo){return `
import requests
import json

def clean_data():
  r = requests.get('https://coderbyte.com/api/challenges/json/json-cleaning')
  return r.json()

print(clean_data())
    `},'Bash Simple File Size':function(chalInfo){return `
#!/bin/bash
echo "Hello world"
    `},'Bash Print Memory':function(chalInfo){return `
#!/bin/bash
echo "Hello world"
    `},'Bash Parse Logs':function(chalInfo){return `
#!/bin/bash
curl -s https://coderbyte.com/api/challenges/logs/web-logs-raw -O > /dev/null
cat web-logs-raw
    `},'Bash Directory List':function(chalInfo){return `#!/bin/bash

dirsToCreate=('Dir1', 'Dir2', 'Dir3', 'Dir4', 'Dir4')

# write your code here`},'Docker Install Python':function(chalInfo){return `
#!/bin/bash
echo "Hello world"
    `},'Docker Install Node.js':function(chalInfo){return `
#!/bin/bash
cat > Dockerfile
    `},'Kubernetes Config Context':function(chalInfo){return `
#!/bin/bash
kubectl version
    `},'Kubernetes Install minikube':function(chalInfo){return `
#!/bin/bash
curl
    `},'Ansible Check Apache':function(chalInfo){return `
#!/bin/bash
echo "Hello world"
    `},'Ansible Modify Tasks':function(chalInfo){return `
#!/bin/bash

cat > verify.yml
echo "- hosts: all" >> verify.yml
echo "  tasks:" >> verify.yml
echo "    - name: install lldpad package" >> verify.yml
echo "      yum:" >> verify.yml
echo "        name: lldpad" >> verify.yml
echo "        state: latest" >> verify.yml
    `},'Python Kafka Consumer':function(chalInfo){return `
#!/bin/bash

cat > producer_test.py
echo "producer code goes here..." >> producer_test.py

cat producer_test.py
    `},'Selenium Simple URL Python':function(chalInfo){return `
#!/bin/bash
echo "Hello world"
    `},'Cypress Page Navigation Test':function(chalInfo){return `
#!/bin/bash
cat > 'cypressTest.js' <<- EOM
  # todo
EOM

cat 'cypressTest.js'
    `},'Cypress Component Testing':function(chalInfo){return `
#!/bin/bash
cat > 'reactComponentTest.js' <<- EOM
  it('Button can be toggled and removed', () => {
    # todo
  })
EOM

cat 'reactComponentTest.js'
    `},'Git Simple Status':function(chalInfo){return `#!/bin/bash
git`},'Git Stashing':function(chalInfo){return `#!/bin/bash
git`},'Git Simple Stash':function(chalInfo){return `#!/bin/bash
git`},'Git Amend Commit':function(chalInfo){return `#!/bin/bash
git`},'Git Commit Correct File':function(chalInfo){return `#!/bin/bash
git`},'Swift JSON Simple':function(chalInfo){return `
import Foundation

struct Article: Decodable { 
  // todo
}

let JSON = """
{
    "title": "How to start coding in Swift",
    "url": "#",
    "category": "swift",
    "views": 0
}
"""

let jsonData = JSON.data(using: .utf8)!
let article: Article = try! JSONDecoder().decode(Article.self, from: jsonData)
print(article.title)`},'Swift Age Counting':function(chalInfo){return `
import Foundation

struct DataObject: Decodable {
    let data: String
}

let JSON = """
{"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=AMxZr, age=64, key=ee03Q, age=4, key=9fGea, age=41, key=3TE9U, age=74, key=FoSMR, age=13, key=4To0X, age=57, key=5CZY3, age=33, key=qFvKG, age=79, key=W7bUh, age=2, key=htab7, age=15, key=KRyu2, age=77, key=GLkk7, age=80, key=jnXf6, age=51, key=YBTJ9, age=43, key=auL0J, age=30, key=ZHmmd, age=4, key=01iNV, age=7, key=7ldyh, age=55, key=TjXbT, age=88, key=ochyW, age=3, key=lsGXW, age=1, key=5o7Bd, age=45, key=APWEf, age=79, key=LRmKc, age=81, key=uZIoQ, age=12, key=Zf79H, age=42, key=NrpEI, age=6, key=XzYKx, age=22, key=kk0sU, age=62, key=p5uue, age=74, key=WscQQ, age=75, key=tRogh, age=19, key=ur4rW, age=60, key=IkCeS, age=19, key=vtGK4, age=11, key=C87cQ, age=38, key=0qXDb, age=39, key=KtBjN, age=46, key=f2h36, age=3, key=tGzgU, age=38, key=hIrPv, age=0, key=Tq7IX, age=25, key=F4k9K, age=46, key=9duxK, age=17, key=jTHDj, age=68, key=6GHpE, age=1, key=ye9us, age=9, key=eOfZO, age=72, key=I25vO, age=88, key=nqtBH, age=38, key=Dwn6b, age=70, key=4Qkdc, age=37, key=xvOa3, age=77, key=dg4rX, age=30, key=S9YbW, age=73, key=WhQqH, age=22, key=fexMF, age=88, key=Gzr0n, age=16, key=yFfjA, age=73, key=EfAKS, age=88, key=5Enyf, age=12, key=DK3HU, age=25, key=iGEBf, age=13, key=7r5UR, age=27, key=TQx1J, age=33, key=VlFwT, age=26, key=gnEgG, age=10, key=6P8gz, age=3, key=JnQLt, age=14, key=D3WJv, age=58, key=EXPMD, age=66, key=RzIDx, age=17, key=m6oYq, age=46, key=XTKAk, age=78, key=ZPLrJ, age=33, key=pDktp, age=10, key=TE9BG, age=18, key=7IS0l, age=35, key=yMY5X, age=58, key=jniwe, age=29, key=eb7lG, age=6, key=uzaoH, age=2, key=pUQoE, age=64, key=JZcuo, age=20, key=XwKBi, age=73, key=Zv4q9, age=31, key=HMD5T, age=76, key=rA4bI, age=75, key=PAMR7, age=86, key=tb8mz, age=2, key=vPcXk, age=18, key=c0Ixk, age=5, key=nkRrD, age=63, key=ISzFh, age=7, key=kcC1y, age=71, key=6J0WQ, age=27, key=FgiVY, age=72, key=Z8M30, age=50, key=Ep2Br, age=48, key=w9MRR, age=1, key=GI7oe, age=49, key=3ehsB, age=67, key=UW3dX, age=87, key=094dk, age=64, key=6tW4g, age=83, key=dT9IK, age=39, key=AofBp, age=27, key=7flGb, age=71, key=IBDqH, age=18, key=K2qn9, age=60, key=Qe7YJ, age=13, key=jqCHl, age=1, key=3R2IN, age=1, key=oVzfV, age=22, key=3yGCN, age=47, key=DOMm4, age=89, key=7EFRj, age=33, key=t1qsV, age=39, key=CBal1, age=14, key=BC0vr, age=68, key=0yY6L, age=47, key=Z8kX8, age=62, key=5oH1d, age=66, key=w0r3A, age=6, key=Bu8uK, age=55, key=vyqhK, age=35, key=7Zgz6, age=58, key=T573t, age=18, key=Rr4WR, age=48, key=kxnBU, age=39, key=XI3Jo, age=45, key=IAE95, age=43, key=rfSBT, age=59, key=znDPW, age=57, key=mBDDN, age=4, key=2hL0t, age=35, key=MbHM6, age=33, key=bS5oR, age=88, key=Rav2A, age=24, key=aLQO7, age=74, key=QCTUi, age=81, key=0HZlb, age=39, key=zshkO, age=5, key=q5EUd, age=75, key=WwgjN, age=20, key=LzTMa, age=3, key=uumoL, age=32, key=m3LJI, age=80, key=rU10P, age=39, key=gVTQz, age=79, key=wZjna, age=47, key=3d1E0, age=77, key=Ra74M, age=89, key=FJXHG, age=11, key=MckmR, age=37, key=tSqfN, age=2, key=HHkpI, age=40, key=S7rIA, age=34, key=vnpjJ, age=2, key=t8WSa, age=84, key=38fyp, age=11, key=Znot2, age=72, key=OGqoG, age=65, key=7VKiL, age=58, key=UdlEG, age=79, key=BXxIS, age=47, key=eW6F8, age=10, key=GASTN, age=86, key=SP0yy, age=53, key=ysN9w, age=17, key=KVGGz, age=76, key=yhEVk, age=47, key=vvlgV, age=67, key=aIMuS, age=21, key=KcHZk, age=41, key=6n8pa, age=35, key=ADTut, age=3, key=WNJXO, age=37, key=qta1A, age=67, key=cJOTp, age=67, key=1Bgd3, age=71, key=sHepZ, age=67, key=JoMvH, age=65, key=h1gF0, age=53, key=we7hP, age=41, key=Ztl8x, age=8, key=7pkQj, age=43, key=fkBah, age=21, key=FWETS, age=55, key=Gb4IY, age=26, key=U88H6, age=57, key=iExWE, age=8, key=7sl6v, age=8, key=iwI1x, age=9, key=cdKUG, age=60, key=xb127, age=57, key=dqYi8, age=15, key=opO2h, age=80, key=RNux0, age=37, key=cooLT, age=7, key=qhzQn, age=18, key=uowal, age=10, key=YR8Oy, age=17, key=GwEwr, age=15, key=WIXKE, age=53, key=aeem8, age=88, key=UPYoP, age=85, key=IF1pO, age=11, key=R6pUy, age=37, key=vYADh, age=0, key=TIq4k, age=35, key=dCekr, age=56, key=HBbXO, age=84, key=Lo9h5, age=36, key=fqBW3, age=87, key=OQWCL, age=52, key=nlYrf, age=6, key=cUS5f, age=32, key=A5gR0, age=32, key=HpUXl, age=84, key=nOuUT, age=18, key=mfvjr, age=12, key=24FH4, age=13, key=2rQei, age=51, key=EGAAV, age=8, key=Q5ifr, age=50, key=AVpil, age=87, key=vRcjt, age=51, key=G53C3, age=53, key=bsZAz, age=66, key=a8rVi, age=28, key=qPs5m, age=48, key=hF1kt, age=78, key=GIDFA, age=32, key=d2Mg4, age=12, key=EoYwt, age=30, key=DL7zx, age=14, key=lsA6c, age=17, key=ExutD, age=82, key=YOSNP, age=53, key=PEfma, age=49, key=EA8Go, age=18, key=fGTSM, age=60, key=lRf1j, age=13, key=0iJGV, age=50, key=cFCfU, age=5, key=J8an1, age=48, key=dkSlj, age=5"}
"""

let jsonData = JSON.data(using: .utf8)!
let dataObject: DataObject = try! JSONDecoder().decode(DataObject.self, from: jsonData)
print(dataObject.data)`},'GraphQL Query Books':function(chalInfo){return `
query {
  book {
    title
  }
}`},'GraphQL Simple Mutation':function(chalInfo){return `
mutation CreateReviewForBook {
  createBookReview() {

  }
}`},'R Simple Frame':function(chalInfo){return `
myString <- "Hello, World!"
print ( myString)
`},'R Matrix Value Sum':function(chalInfo){return `
my_matrix = matrix(1:1, 1, 1)
my_sum <- 0
my_sum
`},'Node.js Debugging JSON Data':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let content = '';

  // push data character by character to "content" variable
  resp.on('data', (c) => content += c);

  // when finished reading all data, parse it for what we need now
  resp.on('end', () => {

    let jsonContent = JSON.parse(content);
    let jsonContentArray = jsonContent.data.split(',');
    let keyArray = [];

    for (let i = 0; i < jsonContentArray.length; i++) {
      let keySplit = jsonContentArray[i].trim().split('=');
      keyArray.push(keySplit[1]);
    }

    console.log(keyArray.toString());

  });

});
    `},};window.__DEFAULT_TEMPLATE_FOR_MOBILE_UI={'Android Filter Movies':function(userContent){var finalOutput='';if(userContent&&userContent.indexOf('error:')!==-1){finalOutput=`<li style="color: #c53b3b; line-height: 21px; font-size: 14px;">${userContent}</li>`}else if(userContent){var splitItems=userContent.split(';');for(var i=0;i<splitItems.length-1;i++){var item=splitItems[i].trim();item=item.replace('name=','').replace('username=','').replace('email=','').replace('id=','');itemSplit=item.split(',');itemNewLines=itemSplit.join('<br>');finalOutput+=`<li style="margin-bottom: 10px; border-bottom: 1px solid #d9d9d9; padding-bottom: 10px; line-height: 21px;">${itemNewLines}</li>`}}
return `
      <div>
        <aside style="background: #3b50bb; padding: 15px 15px; font-family: 'Roboto'; color: white;">Log Items</aside>
        <ul style="padding: 15px 15px; background: #efefef; font-family: 'Roboto';color: #323232;">
          ${finalOutput}
        </ul>
      </div>
    `},'Android Local Cache':function(userContent){var finalOutput='';if(userContent&&userContent.indexOf('error:')!==-1){finalOutput=`<li style="color: #c53b3b; line-height: 21px; font-size: 14px;">${userContent}</li>`}else if(userContent){var splitItems=userContent.split(' ');for(var i=0;i<splitItems.length;i++){var item=splitItems[i].trim();finalOutput+=`<li style="margin-bottom: 10px; border-bottom: 1px solid #d9d9d9; padding-bottom: 10px; line-height: 21px;">${item}</li>`}}
return `
      <div>
        <aside style="background: #3b50bb; padding: 15px 15px; font-family: 'Roboto'; color: white;">Cache Logs</aside>
        <ul style="padding: 15px 15px; background: #efefef; font-family: 'Roboto';color: #323232;">
          ${finalOutput}
        </ul>
      </div>
    `},'iOS Filter Movies':function(userContent){var finalOutput='';if(userContent&&userContent.indexOf('error:')!==-1){finalOutput=`<li style="color: #c53b3b; line-height: 21px; font-size: 14px;">${userContent}</li>`}else if(userContent){var splitItems=userContent.split(';');for(var i=0;i<splitItems.length-1;i++){var item=splitItems[i].trim();item=item.replace('name=','').replace('username=','').replace('email=','').replace('id=','');itemSplit=item.split(',');itemNewLines=itemSplit.join('<br>');finalOutput+=`<li style="margin-bottom: 10px; border-bottom: 1px solid #d9d9d9; padding-bottom: 10px; line-height: 21px;">${itemNewLines}</li>`}}
return `
      <div>
        <aside style="background: #3b50bb; padding: 15px 15px; font-family: 'Roboto'; color: white;">Log Items</aside>
        <ul style="padding: 15px 15px; background: #efefef; font-family: 'Roboto';color: #323232;">
          ${finalOutput}
        </ul>
      </div>
    `},'iOS Local Cache':function(userContent){var finalOutput='';if(userContent&&userContent.indexOf('error:')!==-1){finalOutput=`<li style="color: #c53b3b; line-height: 21px; font-size: 14px;">${userContent}</li>`}else if(userContent){var splitItems=userContent.split(' ');for(var i=0;i<splitItems.length;i++){var item=splitItems[i].trim();finalOutput+=`<li style="margin-bottom: 10px; border-bottom: 1px solid #d9d9d9; padding-bottom: 10px; line-height: 21px;">${item}</li>`}}
return `
      <div>
        <aside style="background: #3b50bb; padding: 15px 15px; font-family: 'Roboto'; color: white;">Cache Logs</aside>
        <ul style="padding: 15px 15px; background: #efefef; font-family: 'Roboto';color: #323232;">
          ${finalOutput}
        </ul>
      </div>
    `},}