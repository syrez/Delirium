var globalData;
var ourRequest = new XMLHttpRequest();
var getEvent = document.querySelector(".eventContainer");


ourRequest.open('get', 'event.json', true);
ourRequest.send();
ourRequest.onload = function() {
  globalData = JSON.parse(ourRequest.responseText);

  function dispatch() {


    for(i=0;i<globalData.length;i++){
      var newDiv = document.createElement("div");
      var p1 = document.createElement("p");
      var h3 = document.createElement("h3");
      var p2 = document.createElement("p");
      var button=document.createElement("button");
      newDiv.classList.add("event");
      p1.classList.add("dateTime");
      h3.classList.add("eventTitle");
      p2.classList.add("eventInfo");
      button.classList.add("eventButton");
      p1.appendChild(document.createTextNode(globalData[i].date));
      p2.appendChild(document.createTextNode(globalData[i].info));
      h3.appendChild(document.createTextNode(globalData[i].title));
      button.appendChild(document.createTextNode("more info"));

      newDiv.appendChild(p1);
      newDiv.appendChild(h3);
      newDiv.appendChild(p2);
      newDiv.appendChild(button);
      getEvent.appendChild(newDiv)
    }

    // p1.appendChild(document.createTextNode(globalData.map(event=> event.date)));
    // h3.appendChild(document.createTextNode(globalData.map(event=> event.title)));
    // p1.appendChild(document.createTextNode(globalData.map(event=> event.info)));
    //



  }

  dispatch();








};

// (globalData.map(event=> event.title))
