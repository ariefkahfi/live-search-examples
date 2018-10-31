var initialData = [
  {
    id: 1,
    name: "asdji"
  },
  {
    id: 2,
    name: "kjiwuh"
  },
  {
    id: 3,
    name: "Hello"
  },
  {
    id: 4,
    name: "world"
  },
  {
    id: 5,
    name: "wolasd"
  },
  {
    id: 6,
    name: "kjawe"
  },
  {
    id: 7,
    name: "asakj"
  },
  {
    id: 8,
    name: "asaweqp"
  },
  {
    id: 9,
    name: "aa1"
  },
  {
    id: 10,
    name: "aa2"
  },
  {
    id: 11,
    name: "ari"
  },
  {
    id: 12,
    name: "arief"
  },
  {
    id: 13,
    name: "ariefkahfi"
  }
];

var myInputEl = document.getElementById("myInput");
var dataContainerEl = document.getElementById("dataContainer");

function initData(data) {
  dataContainerEl.innerHTML = "";
  data.forEach(v => {
    var idDiv = document.createElement("div");
    var nameDiv = document.createElement("div");

    idDiv.innerHTML = v.id;
    nameDiv.innerHTML = v.name;

    var li = document.createElement("li");
    li.append(idDiv);
    li.append(nameDiv);

    dataContainerEl.append(li);
  });
}

initData(initialData);

myInputEl.oninput = function(ev) {
  var inputValue = ev.target.value;
  doProcess(inputValue);
};

function doProcess(inputValue) {
  var filteredResult = initialData.filter(function(v) {
    const { name } = v;
    return name.includes(inputValue);
  });
  initData(filteredResult);
}
