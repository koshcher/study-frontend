document.getElementById("header").innerText+=`${localStorage.length})`;var e=document.forms.add;e.addEventListener("submit",(()=>{""==e.elements.text.value?alert("Task can not be empty"):localStorage.setItem(e.elements.text.value,JSON.stringify({date:e.elements.date.value,completed:!1}))}));let t=document.getElementById("taskList"),n=Object.keys(localStorage);for(let l=0;l<n.length;l++){let e=JSON.parse(window.localStorage.getItem(n[l]));0==e.completed&&(t.innerHTML+=`<form class="list-group-item d-flex justify-content-between align-items-center"><div><h5 class="mb-0">${n[l]}</h5>${""!=e.date?`<small class="text-muted">${e.date}</small>`:""}</div><div><button class="btn btn-success me-2" onclick="localStorage.setItem('${n[l]}', JSON.stringify({date:'${e.date}',completed:true}));"><i class="bi bi-check"></i></button><button class="btn btn-danger" disabled><i class="bi bi-trash"></i></button></div></form>`)}for(let l=0;l<n.length;l++){let e=JSON.parse(window.localStorage.getItem(n[l]));1==e.completed&&(t.innerHTML+=`<form class="list-group-item d-flex justify-content-between align-items-center"><div><h5 class="mb-0 text-decoration-line-through">${n[l]}</h5>${""!=e.date?`<small class="text-muted">${e.date}</small>`:""}</div><div><button class="btn btn-success me-2" disabled><i class="bi bi-check"></i></button><button class="btn btn-danger" onclick="localStorage.removeItem('${n[l]}')"><i class="bi bi-trash"></i></button></div></form>`)}