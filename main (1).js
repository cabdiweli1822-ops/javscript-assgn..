// ===== HEADER =====
const header = document.createElement("header");
header.style.background = "blue";
header.style.color = "white";
header.style.padding = "15px";
header.style.position = "relative";
header.style.fontSize = "22px";
header.style.textAlign = "center";
header.textContent = "My JavaScript Website";
document.body.appendChild(header);

// ===== HAMBURGER =====
const menuBtn = document.createElement("div");
menuBtn.textContent = "☰";
menuBtn.style.position = "absolute";
menuBtn.style.left = "15px";
menuBtn.style.top = "15px";
menuBtn.style.fontSize = "26px";
menuBtn.style.cursor = "pointer";
menuBtn.style.color = "white";
header.appendChild(menuBtn);


// ===== DESKTOP NAV =====
const desktopNav = document.createElement("nav");
desktopNav.style.display = "flex";
desktopNav.style.justifyContent = "center";
desktopNav.style.gap = "30px";
desktopNav.style.margin = "15px 0";
desktopNav.style.fontWeight = "bold";
document.body.appendChild(desktopNav);

// ===== SIDE NAV (BLACK & WIDE) =====
const sideNav = document.createElement("div");
sideNav.style.position = "fixed";
sideNav.style.top = "0";
sideNav.style.left = "-220px";
sideNav.style.width = "220px";
sideNav.style.height = "100vh";
sideNav.style.background = "black";
sideNav.style.boxShadow = "2px 0 8px rgba(0,0,0,0.5)";
sideNav.style.display = "flex";
sideNav.style.flexDirection = "column";
sideNav.style.paddingTop = "70px";
sideNav.style.transition = "0.3s";
sideNav.style.zIndex = "1000";
document.body.appendChild(sideNav);

// ===== MAIN =====
const main = document.createElement("main");
main.style.padding = "20px";
document.body.appendChild(main);



// ===== PAGES =====
function showHome() {
  main.innerHTML = `
    <h2 style="text-align:center">Welcome to My JavaScript Portal</h2>

    <div style="
      max-width:600px;
      margin:20px auto;
      padding:30px;
      border:2px solid blue;
      border-radius:12px;
      background:#f0f8ff;
      font-family:Arial, sans-serif;
      line-height: 1.6;
    ">
      <p style="text-align:center; font-size:18px; margin-bottom:20px;">
        Kusoo dhawaada <b>JavaScript Portal</b>.website-kan waxa uku talo kale in uu ka hadlo 3 qeyb oo kala ah shaqoyinkeygi iku danbeye,xog ii gaar ah anka iyo inu ila soo xiriiri karo
      </p>

      <ul style="list-style:none; padding:0;">
        <li style="margin-bottom:15px;">
          <span style="color:blue; font-weight:bold; font-size:18px;"> SERVICES:</span>
          <br>
          <span style="color:#555;">qeybtani waxa uku talo kale oo aan soo geliye laba qeybood oo kala ah chapters(chap 7,8,iyo 9)iyo assignments ooo ah codad aad hore u qaade</span>
        </li>

        <li style="margin-bottom:15px;">
          <span style="color:#008b8b; font-weight:bold; font-size:18px;"> ABOUT ME:</span>
          <br>
          <span style="color:#555;">qeybtani waxa ka hele xogteyda qaaska ah,xirfadahayga iyo taariikhdeyda waxbarasho</span>
        </li>

        <li style="margin-bottom:15px;">
          <span style="color:#d2691e; font-weight:bold; font-size:18px;"> CONTACT US:</span>
          <br>
          <span style="color:#555;">Haddii aad qabto su'aal, talo, ama tusaale, waxaad isticmaali kartaa foomka xiriirka si aad fariin toos ah noogu soo dirto.</span>
        </li>
      </ul>
    </div>
  `;
}



window.student = {};


function showService() {
  main.innerHTML = `
    <h2 style="text-align:center">Our Services</h2>
    <p style="text-align:center">
      Choose a section below
    </p>

    <div style="
      display:flex;
      gap:30px;
      justify-content:center;
      margin-top:30px;
      flex-wrap:wrap;
    ">

      <!-- ===== CHAPTERS BOX ===== -->
      <div class="serviceBox" style="
        border:2px solid blue;
        padding:25px;
        width:200px;
        background:#f9f9f9;
        border-radius:12px;
        text-align:center;
        font-family:Arial;
        cursor: pointer;
      ">
        <h3 style="color:blue">  Chapters</h3>
        <p style="font-size:14px;color:gray">Click to view chapters</p>
      </div>

      <!-- ===== ASSIGNMENT BOX ===== -->
      <div class="serviceBox" style="
        border:2px solid green;
        padding:25px;
        width:200px;
        background:#f9f9f9;
        border-radius:12px;
        text-align:center;
        font-family:Arial;
        cursor: pointer;
      ">
        <h3 style="color:green">  Assignments</h3>
      </div>

    </div>

    <div id="chapterContent" style="margin-top:30px"></div>
  `;

  const serviceBoxes = main.querySelectorAll(".serviceBox");
  const chaptersBox = serviceBoxes[0];
  const assignmentsBox = serviceBoxes[1];

  chaptersBox.onclick = showChaptersList;
  assignmentsBox.onclick = showAssignments;

  // Default message
  const content = document.getElementById("chapterContent");
  content.innerText = "Chapter dooro";
  content.style.textAlign = "center";
  content.style.color = "gray";
  content.style.fontWeight = "bold";
}

function showChaptersList() {
  const container = document.getElementById("chapterContent");

  // Clear container and show 3 buttons
  container.innerHTML = `
    <h3 style="text-align:center; color:blue">Select a Chapter</h3>
    <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap">
      <div id="btnCh7" class="chapterBtn">Chapter 7</div>
      <div id="btnCh8" class="chapterBtn">Chapter 8</div>
      <div id="btnCh9" class="chapterBtn">Chapter 9</div>
    </div>
  `;

  // Style buttons
  const buttons = container.querySelectorAll(".chapterBtn");
  buttons.forEach(btn => {
    btn.style.padding = "15px 30px";
    btn.style.border = "2px solid blue";
    btn.style.borderRadius = "8px";
    btn.style.background = "white";
    btn.style.cursor = "pointer";
    btn.style.fontWeight = "bold";
    btn.style.transition = "0.3s";

    btn.onmouseover = () => { btn.style.background = "#e6f0ff"; };
    btn.onmouseout = () => { btn.style.background = "white"; };
  });

  // Add click events
  document.getElementById("btnCh7").onclick = showChapter7;
  document.getElementById("btnCh8").onclick = showChapter8;
  document.getElementById("btnCh9").onclick = showChapter9;
}


function codeBox(title, code, id) {

  if (!window.originalCode) window.originalCode = {};
  if (!window.originalCode[id]) {
    window.originalCode[id] = code.trim();
  }

  return `
    <div style="
      border:2px solid blue;
      padding:15px;
      margin-bottom:20px;
      background:#f9f9f9
    ">
      <h3>${title}</h3>
      <textarea
        id="${id}"
        style="
          width:100%;
          height:120px;
          background:#000;
          color:#0f0;
          padding:10px;
          font-family:monospace;
        "
      >${code.trim()}</textarea>
      <div id="controls_${id}" style="margin-top:5px">
        <button onclick="runCode('${id}')">Run</button>
        <button onclick="resetCode('${id}')">Reset</button>
        <div
          id="out_${id}"
          style="
            margin-top:10px;
            padding:10px;
            background:#eee;
            min-height:30px;
            font-family:monospace;
            white-space: pre-wrap;
            border-left: 5px solid blue;
          "
        ></div>
      </div>
    </div>
  `;
}

function runCode(id) {
  const output = document.getElementById("out_" + id);
  output.textContent = "";

  // Reset DOM playground for Ch8/9 functionality before run
  // But wait! If we wipe it every time, we lose previous state?
  // User asked for "Run" to work. Usually running one snippet modifies the shared DOM.
  // Re-running resetDOMPlayground() clears previous modifications which is good for independent tests.
  resetDOMPlayground();

  const oldLog = console.log;
  console.log = function (...args) {
    const formattedArgs = args.map(arg => {
      if (typeof arg === "object" && arg !== null) {
        return JSON.stringify(arg, null, 2);
      }
      return String(arg);
    });
    output.textContent += formattedArgs.join(" ") + "\n";
    oldLog.apply(console, args);
  };

  try {
    const result = eval(document.getElementById(id).value);

    // If undefined/null but code ran, it's fine.
    // If result is a DOM node (provided Ch9 code returns elements eg 'btn;'), append to output.
    // If result is a DOM node (provided Ch9 code returns elements eg 'btn;'), append to output with a wrapper.
    if (result instanceof HTMLElement) {
      const wrapper = document.createElement("div");
      wrapper.style.marginTop = "10px";
      wrapper.style.padding = "10px";
      wrapper.style.borderTop = "1px solid #ccc";
      wrapper.innerHTML = "<strong>Interactive Element:</strong><br>";
      wrapper.appendChild(result);
      output.appendChild(wrapper);
    }


  } catch (e) {
    output.textContent += "Error: " + e.message + "\n";
  }

  console.log = oldLog;
}

function resetCode(id) {
  document.getElementById(id).value = window.originalCode[id];
  document.getElementById("out_" + id).innerHTML = "";
  resetDOMPlayground();
}

// ===== CHAPTER DATA ======
const chapter7 = [
  { title: "1: Object Literal", code: `const student = { name: "Ali", age: 20, grade: "A" }; \nconsole.log("Student Details:\\nName: " + student.name + "\\nAge: " + student.age + "\\nGrade: " + student.grade);` },
  { title: "2: Adding & Modifying Properties", code: `const student = { name: "Ali", age: 20, grade: "A" }; \nstudent.phone = "0612345678"; \nstudent["nationality"] = "Somali"; \nstudent.age = 21; \nconsole.log("Updated Student:\\nName: " + student.name + "\\nAge: " + student.age + "\\nPhone: " + student.phone + "\\nNationality: " + student.nationality);` },
  { title: "3: Method inside Object", code: `const car = { brand: "Toyota", year: 2022, info: function () { return this.brand + " (" + this.year + ")"; } }; \nconsole.log("Car Info: " + car.info());` },
  { title: "4: Constructor Function", code: `function Student(name, age) { this.name = name; this.age = age; } \nconst s1 = new Student("Amina", 19); \nconst s2 = new Student("Hodan", 21); \nconsole.log("Created Students:\\n1. " + s1.name + " (" + s1.age + ")\\n2. " + s2.name + " (" + s2.age + ")");` },
  { title: "5: ES6 Class", code: `class Car { constructor(brand, year) { this.brand = brand; this.year = year; } } \nconst car1 = new Car("BMW", 2023); \nconsole.log("New Car Instance:\\nBrand: " + car1.brand + "\\nYear: " + car1.year);` },
  { title: "6: Accessing Object Properties", code: `const obj = { name: "Test Project", value: 100 }; \nconsole.log("Accessing Properties:\\nProperty 'name': " + obj.name + "\\nProperty 'value': " + obj["value"]);` },
  { title: "7: Object Methods", code: `const person = { firstName: "Ahmed", lastName: "Hassan", fullName: function() { return this.firstName + " " + this.lastName; } }; \nconsole.log("Full Name Generated: " + person.fullName());` },
  { title: "8: Object with Array", code: `const student = { name: "Fatima", grades: [85, 90, 78, 92], average: function() { let sum = this.grades.reduce((a,b) => a+b, 0); return sum / this.grades.length; } }; \nconsole.log("Student Performance:\\nName: " + student.name + "\\nGrades: " + student.grades.join(", ") + "\\nAverage: " + student.average());` },
  { title: "9: Nested Objects", code: `const person = { name: "Omar", address: { city: "Mogadishu", country: "Somalia" }, contact: { phone: "0612345678", email: "omar@example.com" } }; \nconsole.log("User Profile:\\nName: " + person.name + "\\nCity: " + person.address.city + "\\nEmail: " + person.contact.email);` },
  { title: "10: Object Destructuring", code: `const student = { name: "Khadija", age: 22, major: "CS" }; \nconst { name, age } = student; \nconsole.log("Destructured Data:\\nName variable: " + name + "\\nAge variable: " + age);` }
];

const chapter8 = [
  { title: "1: Get Element By ID", code: `// Using existing elements in playground\nconst title = document.getElementById("title");\nif(title) {\n  title.style.color = "white";\n  title.style.backgroundColor = "blue";\n  console.log("Action: Selected #title and changed styles.");\n} else console.log("Error: #title not found.");` },
  { title: "2: Get Elements By Class Name", code: `// Using existing #box in playground\nconst box = document.getElementById("box");\nif(box) {\n  box.className = "box"; // Ensure class\n  const boxes = document.getElementsByClassName("box");\n  console.log("Action: Found " + boxes.length + " element(s) with class 'box'.");\n  for(let i=0; i<boxes.length; i++) { boxes[i].style.border = "2px solid red"; }\n  console.log("Result: Added red border to class 'box'.");\n}` },
  { title: "3: Get Elements By Tag Name", code: `// Using existing <p> tags\nconst paragraphs = document.getElementsByTagName("p");\nconsole.log("Action: Found " + paragraphs.length + " <p> tags.");\nfor (let i = 0; i < paragraphs.length; i++) { paragraphs[i].style.fontSize = "18px"; }\nconsole.log("Result: Changed font size to 18px for all.");` },
  { title: "4: Query Selector", code: `const firstBox = document.querySelector("#box");\nif(firstBox) {\n  firstBox.style.backgroundColor = "yellow";\n  console.log("Action: Selected #box via querySelector.");\n  console.log("Result: Changed background to yellow.");\n}` },
  { title: "5: Query Selector All", code: `const items = document.querySelectorAll(".item");\nconsole.log("Action: Found " + items.length + " items via querySelectorAll('.item').");\nitems.forEach(item => { item.style.fontWeight = "bold"; });\nconsole.log("Result: Made all items bold.");` },
  { title: "6: Modify Text Content", code: `const message = document.getElementById("message");\nif(message) {\n  const old = message.textContent;\n  message.textContent = "JavaScript DOM waa fudud!";\n  console.log("Action: Changed text of #message.");\n  console.log("Old: " + old + " -> New: " + message.textContent);\n}` },
  { title: "7: Modify Inner HTML", code: `const content = document.getElementById("content");\nif(content) {\n  content.innerHTML = "<strong>HTML cusub ayaa la geliyey</strong>";\n  console.log("Action: Changed innerHTML of #content.");\n  console.log("Result: Content is now bold.");\n}` },
  { title: "8: Set Attribute", code: `const link = document.getElementById("myLink");\nif(link) {\n  link.setAttribute("href", "https://google.com");\n  link.setAttribute("target", "_blank");\n  console.log("Action: Updated href and target of #myLink.");\n  console.log("Result: Link now goes to Google (new tab).");\n}` },
  { title: "9: Create & Append Element", code: `const newPara = document.createElement("p");\nnewPara.textContent = "Paragraph cusub (Appended via code)";\n// Append to output or playground, not body to avoid mess\nconst container = document.getElementById("domPlayground") || document.body;\ncontainer.appendChild(newPara);\nconsole.log("Action: Created and appended new <p>.");` },
  { title: "10: Remove Element", code: `const removeMe = document.getElementById("removeBox");\nif(removeMe) {\n  removeMe.remove();\n  console.log("Action: Selected and removed #removeBox.");\n} else {\n  console.log("Element #removeBox already removed.");\n}` }
];

const chapter9 = [
  { title: "1: Click Event", code: `const btn = document.createElement("button"); btn.textContent = "Click me"; btn.id = "btn1"; \nbtn.onclick = function() { console.log("Event: Button was Clicked!"); alert("Button clicked"); }; \nconsole.log("Instruction: Click the button above to trigger the event."); \nbtn;` },
  { title: "2: Double Click Event", code: `const text = document.createElement("p"); text.textContent = "Double click me (Text)"; text.id = "text1"; \ntext.ondblclick = function() { this.style.color = "red"; console.log("Event: Text Double-Clicked! Color changed to red."); }; \nconsole.log("Instruction: Double-click the text above."); \ntext;` },
  { title: "3: Mouseover Event", code: `const box = document.createElement("div"); box.textContent = "Hover over me"; box.id = "box1"; box.style.padding = "20px"; box.style.border = "1px solid #ccc"; \nbox.onmouseover = function() { this.style.background = "yellow"; console.log("Event: Mouse entered the box (Yellow)."); }; \nconsole.log("Instruction: Move mouse over the box."); \nbox;` },
  { title: "4: Mouseout Event", code: `const box2 = document.createElement("div"); box2.textContent = "Hover then Leave"; box2.id = "box2"; box2.style.padding = "20px"; box2.style.border = "1px solid #ccc"; \nbox2.onmouseout = function() { this.style.background = "lightblue"; console.log("Event: Mouse left the box (Lightblue)."); }; \nconsole.log("Instruction: Move mouse out of the box."); \nbox2;` },
  { title: "5: Keydown Event", code: `const input1 = document.createElement("input"); input1.type = "text"; input1.id = "input1"; input1.placeholder = "Type here"; \ninput1.onkeydown = function(e) { console.log("Event: Key Pressed -> " + e.key); }; \nconsole.log("Instruction: Type inside the input box."); \ninput1;` },
  { title: "6: Focus Event", code: `const input2 = document.createElement("input"); input2.type = "text"; input2.id = "input2"; input2.placeholder = "Click to focus"; \ninput2.onfocus = function() { this.style.border = "2px solid green"; console.log("Event: Input Focused (Green Border)."); }; \nconsole.log("Instruction: Click inside the input box."); \ninput2;` },
  { title: "7: Blur Event", code: `const input3 = document.createElement("input"); input3.type = "text"; input3.id = "input3"; input3.placeholder = "Click then click away"; \ninput3.onblur = function() { this.style.border = "2px solid red"; console.log("Event: Input Lost Focus (Red Border)."); }; \nconsole.log("Instruction: Click inside, then click outside."); \ninput3;` },
  { title: "8: Change Event", code: `const select = document.createElement("select"); select.id = "select1"; \nconst opt1 = document.createElement("option"); opt1.textContent = "Select Option A"; opt1.value = "A"; \nconst opt2 = document.createElement("option"); opt2.textContent = "Select Option B"; opt2.value = "B"; \nselect.appendChild(opt1); select.appendChild(opt2); \nselect.onchange = function() { console.log("Event: Selection Changed to -> " + this.value); alert("You selected: " + this.value); }; \nconsole.log("Instruction: Choose an option from the dropdown."); \nselect;` },
  { title: "9: Submit Event", code: `const form = document.createElement("form"); form.id = "form1"; \nconst input = document.createElement("input"); input.type = "text"; input.placeholder = "Enter text"; \nconst btn = document.createElement("button"); btn.textContent = "Submit"; \nform.appendChild(input); form.appendChild(btn); \nform.onsubmit = function(e) { e.preventDefault(); console.log("Event: Form Submitted with data: " + input.value); alert("Form submitted!"); }; \nconsole.log("Instruction: Type and click Submit."); \nform;` },
  { title: "10: Event Delegation", code: `const ul = document.createElement("ul"); ul.id = "list1"; \nconst li1 = document.createElement("li"); li1.textContent = "Item One"; li1.style.cursor="pointer"; \nconst li2 = document.createElement("li"); li2.textContent = "Item Two"; li2.style.cursor="pointer"; \nul.appendChild(li1); ul.appendChild(li2); \nul.onclick = function(e) { if (e.target.tagName === "LI") { console.log("Event: List Item Clicked -> " + e.target.textContent); alert(e.target.textContent); } }; \nconsole.log("Instruction: Click on the list items."); \nul;` }
];

function showGenericChapter(title, data, idPrefix) {
  const container = document.getElementById("chapterContent");

  let html = "<h2>" + title + "</h2>";

  // Playground injection
  if (idPrefix === "c8" || idPrefix === "c9") {
    html += `<div id="domPlayground" style="display:none; border:1px dashed #ccc; padding:10px; margin-bottom:20px;"></div>`;
  }

  data.forEach((item, index) => {
    html += codeBox(item.title, item.code, idPrefix + "_" + (index + 1));
  });

  html += `
    <button onclick="showChaptersList()" style="
      display:block;
      width:100%;
      padding:15px;
      margin-top:20px;
      background:blue;
      color:white;
      font-size:18px;
      font-weight:bold;
      border:none;
      border-radius:8px;
      cursor:pointer;
    ">⬅ Back to Chapters</button>
  `;
  container.innerHTML = html;
}

function showChapter7() { showGenericChapter("Chapter 7 – JavaScript Objects", chapter7, "c7"); }
function showChapter8() {
  showGenericChapter("Chapter 8 – Document Object Model (DOM)", chapter8, "c8");
  setTimeout(resetDOMPlayground, 100);
}
function showChapter9() {
  showGenericChapter("Chapter 9 – JavaScript Events & Validation", chapter9, "c9");
  setTimeout(resetDOMPlayground, 100);
}

function resetDOMPlayground() {
  const box = document.getElementById("domPlayground");
  if (!box) return;

  // This hidden structure provides the elements referenced by Ch8/9 code
  box.innerHTML = `
    <div id="hiddenControls">
      <h3 id="title">Original Title</h3>
      <div id="box" class="box" style="border:1px solid black; padding:10px; margin:5px 0;">Hover Me (#box)</div>
      <div id="container" style="border:1px dashed gray; min-height:20px; padding:5px; margin:5px 0;">#container</div>
      
      <div id="removeBox" style="background:#fcc; padding:5px;">I will be removed</div>
      
      <img id="img" src="" alt="placeholder" style="display:none">
      <a id="myLink" href="#">My Link</a>
      <div id="message">Original Message</div>
      <div id="content">Original Content</div>

      <p class="item">Item 1</p>
      <p class="item">Item 2</p>

      <button id="btn">Click/DblClick Me</button>
      <input id="input" placeholder="Type here">
      <input id="input1" placeholder="Type here (keydown)">
      <input id="input2" placeholder="Click to focus">
      <input id="input3" placeholder="Click then leave">
      
      <select id="select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
      
      <form id="form">
        <button>Submit</button>
      </form>
      
      <ul id="list1"></ul>
    </div>
  `;
}


function showAssignments() {
  const container = document.getElementById("chapterContent");

  container.innerHTML = `
    <h2>Assignments – JavaScript Objects</h2>

    ${codeBox("Assignment 1 – Objects Basics", `
let student1 = new Object();
student1.name = "abdiweli";
student1.age = 18;
student1.major = "IT";

console.log("Student 1 Created:\\nName: " + student1.name + "\\nAge: " + student1.age + "\\nMajor: " + student1.major);

let student2 = {
  name: "hodan",
  age: 23,
  major: "Computer Science"
};

console.log("Student 2 Created:\\nName: " + student2.name + "\\nAge: " + student2.age + "\\nMajor: " + student2.major);

function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
}

let students = [];
for (let i = 1; i <= 3; i++) {
  students.push(new Student("Student" + i, 18 + i, "Major" + i));
}

console.log("Generated Students List:");
students.forEach(s => console.log("- " + s.name + " (" + s.age + " years old)"));

console.log("Accessing Student 2:\\nName property: " + student2.name + "\\nAge property: " + student2["age"]);
`, "a1")}

    ${codeBox("Assignment 2 – Object Methods & JSON", `
let car = {
  brand: "Toyota",
  model: "surf",
  year: 2008,
  color: "black"
};

console.log("Initial Car: " + car.brand + " " + car.model + " (" + car.year + ")");

car.brand = "toyota";
car["year"] = 2018;
console.log("Modified Car: " + car.brand + " " + car.model + " (" + car.year + ")");

car.speed = "130km/h";
car["fuelType"] = "fullPetrol";
console.log("Added Specs: Speed=" + car.speed + ", Fuel=" + car.fuelType);

let Car = {
  brand: "surf",
  information: function () {
    console.log("Method Output: hello, where is my new car car " + this.brand);
  }
};
Car.information();

console.log("Looping through Car properties:");
for (let key in car) {
  console.log(" -> " + key + ": " + car[key]);
}

let jsonString = JSON.stringify(car);
console.log("JSON String Format:\\n" + jsonString);

let obj = JSON.parse(jsonString);
console.log("Parsed back to Object (Brand): " + obj.brand);
`, "a2")}

     ${codeBox("Assignment 3 – Object.keys()", `
let user = { name: "abdiweli", age: 24, city: "Mogadishu city" };
console.log("Keys available in User object: " + Object.keys(user).join(", "));
`, "a3")}

    ${codeBox("Assignment 4 – Object.values()", `
let user = { name: "aweys", age: 20, city: "Mogadishu" };
console.log("Values in User object: " + Object.values(user).join(", "));
`, "a4")}

    ${codeBox("Assignment 5 – Object.entries()", `
let user = { name: "Ali", age: 20 };
console.log("Key-Value Pairs:");
Object.entries(user).forEach(([k, v]) => {
  console.log(k + " = " + v);
});
`, "a5")}

    ${codeBox("Assignment 6 – Delete Property", `
let car = { brand: "BMW", year: 2010 };
console.log("Before Delete: Year is " + car.year);
delete car.year;
console.log("After Delete: Year is " + car.year);
`, "a6")}

    ${codeBox("Assignment 7 – Check Property", `
let phone = { brand: "iphone", price: 650 };
let hasBrand = "brand" in phone;
console.log("Does phone have 'brand' property? " + hasBrand);
`, "a7")}

    ${codeBox("Assignment 8 – Nested Object", `
let school = {
  name: "JUST",
  student: {
    name: "abdiweli",
    age: 18
  }
};
console.log("School Name: " + school.name);
console.log("Nested Student Name: " + school.student.name);
`, "a8")}

    ${codeBox("Assignment 9 – Object Method this", `
let person = {
  name: "hodan",
  greet() {
    console.log("Greeting Method: Hello " + this.name);
  }
};
person.greet();
`, "a9")}

    ${codeBox("Assignment 10 – for...in Loop", `
let book = { title: "JS Guide", pages: 150};
console.log("Book Details Loop:");
for (let key in book) {
  console.log(key + ": " + book[key]);
}
`, "a10")}

    ${codeBox("Assignment 11 – Constructor Function", `
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
let c1 = new Car("surf", 2012);
console.log("New Car Constructed: " + c1.brand + " (" + c1.year + ")");
`, "a11")}

    ${codeBox("Assignment 12 – Array of Objects", `
let users = [
  { name: "abdiweli", age: 18},
  { name: "hodan", age: 24 }
];
console.log("User List from Array:");
users.forEach(u => console.log("- " + u.name));
`, "a12")}

    ${codeBox("Assignment 13 – Filter Objects", `
let users = [
  { name: "abdiweli", age: 20 },
  { name: "hodan", age: 25 },
  { name: "Hassan", age: 22 }
];
let adults = users.filter(u => u.age >= 21);
console.log("Filtered Adults (21+):");
adults.forEach(u => console.log(u.name + " is " + u.age));
`, "a13")}

    ${codeBox("Assignment 14 – Map Objects", `
let users = [
  { name: "Ali", age: 20 },
  { name: "Hodan", age: 19 }
];
let names = users.map(u => u.name);
console.log("Mapped Names Array: " + names.join(", "));
`, "a14")}

    ${codeBox("Assignment 15 – Object Spread", `
let a = { x: 1 };
let b = { y: 2 };
let c = { ...a, ...b };
console.log("Merged Object (Spread): x=" + c.x + ", y=" + c.y);
`, "a15")}

    ${codeBox("Assignment 16 – JSON.parse()", `
let data = '{"name":"Abdiweli","age":20}';
let obj = JSON.parse(data);
console.log("Parsed JSON: " + obj.name + " is " + obj.age);
`, "a16")}

    ${codeBox("Assignment 17 – JSON.stringify()", `
let obj = { name: "Ali", age: 20 };
console.log("Stringified JSON: " + JSON.stringify(obj));
`, "a17")}

    ${codeBox("Assignment 18 – Object.freeze()", `
let obj = { name: "abdiweli" };
Object.freeze(obj);
obj.name = "Ahmed";  
console.log("Freezed Object Name (should allow no change): " + obj.name);
`, "a18")}

    ${codeBox("Assignment 19 – Object.seal()", `
let obj = { age: 20 };
Object.seal(obj);
obj.age = 25;   
obj.newProp = "Test";  
console.log("Sealed Object Age (changed): " + obj.age);
console.log("Sealed Object newProp (should be undefined): " + obj.newProp);
`, "a19")}

    ${codeBox("Assignment 20 – hasOwnProperty()", `
let obj = { name: "Abdiweli" };
console.log("Does object have 'name'? " + obj.hasOwnProperty("name"));
`, "a20")}

    ${codeBox("Assignment 21 – Student Management", `
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

let students = [];
students.push(new Student("abdiweli", 18, "A"));
students.push(new Student("hodan", 19, "B"));
students.push(new Student("abdikarin", 20, "A"));

console.log("All Students:");
students.forEach(s => {
  console.log("- " + s.name + " [" + s.grade + "]");
});

let gradeA = students.filter(s => s.grade === "A");
console.log("\\nStudents with Grade A:");
gradeA.forEach(s => console.log(s.name));
`, "a21")}
  `;
}



function showAboutMe() {
  main.innerHTML = `
    <h2 style="text-align:center;margin-bottom:20px">About Me</h2>

    <div style="
      max-width:480px;
      margin:0 auto;
      border:2px solid #1e90ff;
      padding:25px;
      border-radius:15px;
      background:#ffffff;
      text-align:center;
      box-shadow:0 8px 20px rgba(0,0,0,0.15);
      font-family:Arial, sans-serif
    ">
      <!-- IMAGE -->
      <img 
        src="WhatsApp Image 2025-12-22 at 09.16.01.jpeg"
        alt="My Photo"
        style="
          width:140px;
          height:140px;
          border-radius:50%;
          object-fit:cover;
          border:4px solid #1e90ff;
          margin-bottom:15px
        "
      >

      <!-- NAME -->
      <h3 style="margin:10px 0;color:#1e90ff">
        Abdiweli Abdikhadir Abdi Ahmed
      </h3>

      <!-- INFO -->
      <p><b>subject:</b> javscript</p>
      <p><b>University:</b> JUST</p>
      <p><b>Class:</b> CNS242</p>
      <p><b>ID:</b> C6240184</p>
      <p><b>Email:</b> cabdiweli.1822@gmail.com</p>
      <p><b>Phone:</b> 612521822</p>
      <p><b>Teacher:</b> Jamilla Hassan Mohamett</p>
      <p><b>Skills:</b> Graphic Design video editing</p>

      <!-- LINKS (NORMAL VIEW) -->
       <p><b>links:</b>
      <div style="margin-top:15px;font-size:14px">
        <a href=" https://www.booking.com" target="_blank">
           https://www.booking.com
        </a>
        <br>
        <a href="https://www.expedia.com" target="_blank">
          https://www.expedia.com
        </a>
      </div>
    </div>
  `;
}



function showContact() {
  main.innerHTML = `
    <h2 style="text-align:center">Contact Us</h2>

    <form id="contactForm"
      style="width:300px;margin:20px auto;display:flex;flex-direction:column;gap:10px">
      
      <input id="name" placeholder="Full Name">
      <input id="email" placeholder="Email">
      <textarea id="message" placeholder="Your Message"></textarea>

      <span id="error" style="color:red;font-size:14px"></span>
      <button type="submit">Submit</button>
    </form>
  `;

  const form = document.getElementById("contactForm");
  const error = document.getElementById("error");

  form.onsubmit = e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      error.textContent = "Fadlan dhammaan meelaha buuxi.";
      return;
    }

    if (!email.includes("@")) {
      error.textContent = "Email sax ah geli.";
      return;
    }

    error.style.color = "green";
    error.textContent = "Fariinta waa la diray ✔";
    form.reset();
  };
}

// ===== NAV ITEMS =====
const navItems = [
  { name: "HOME", action: showHome },
  { name: "SERVICE", action: showService },
  { name: "ABOUT ME", action: showAboutMe },
  { name: "CONTACT US", action: showContact }
];

// ===== DESKTOP LINKS =====
navItems.forEach(item => {
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = "#";
  link.style.textDecoration = "none";
  link.style.color = "black";

  link.onclick = e => {
    e.preventDefault();
    item.action();
  };

  desktopNav.appendChild(link);
});

// ===== SIDE NAV LINKS =====
navItems.forEach(item => {
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = "#";
  link.style.padding = "15px";
  link.style.fontSize = "15px";
  link.style.textDecoration = "none";
  link.style.color = "white";
  link.style.borderBottom = "1px solid #333";

  link.onmouseenter = () => {
    link.style.background = "#222";
  };
  link.onmouseleave = () => {
    link.style.background = "black";
  };

  link.onclick = e => {
    e.preventDefault();
    item.action();
    sideNav.style.left = "-220px";
  };

  sideNav.appendChild(link);
});

// ===== TOGGLE =====
menuBtn.onclick = () => {
  sideNav.style.left =
    sideNav.style.left === "0px" ? "-220px" : "0px";
};

// ================= FOOTER =================
const footer = document.createElement("footer");

// style
footer.style.width = "100%";
footer.style.background = "blue";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px 10px";
footer.style.fontSize = "14px";
footer.style.fontWeight = "bold";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.left = "0";
footer.style.zIndex = "999";

// content
footer.innerHTML = `
  <div>home of education</div>
`;

// si uusan footer u daboolin content-ka
document.body.style.paddingBottom = "70px";

document.body.appendChild(footer);
// =========================================

// ===== DEFAULT PAGE =====
showHome();