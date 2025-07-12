import { Data } from './contactData.js';

  
  let totalContact = Data.length; // Total contect count
  let contectCountContainer = document.getElementById("totalContactValue");
  
  
  let contentContainer = document.getElementById("content");
  

  contectCountContainer.textContent = totalContact;
  
  let Clutter = "";
  
  Data.forEach(contactData =>{
    Clutter += ` <div id="contect">
    <div style="cursor: pointer; user-select: none;" id="contectLogo">
    <img src="${contactData.Image}" />
    </div>
    <div style="cursor: pointer;" id="contectName">${contactData.Name}</div>
    <div style="cursor: pointer;" id="contectCC">${contactData.ContactCC}</div>
    <div style="cursor: pointer;" id="contectNo">${contactData.ContactNo}</div>
    
    <div id="bottomLine"></div>
    </div>`
  })
  
  contentContainer.innerHTML = Clutter;
  



// Data.forEach(contact => {
//   const firstLetter = contact.Name.charAt(0).toUpperCase();
//   console.log(firstLetter);
// });


