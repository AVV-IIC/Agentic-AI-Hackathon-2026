let all=[];
const tbody=document.querySelector('#teamTable tbody');
document.getElementById('jsonFile').addEventListener('change',e=>{
const f=e.target.files[0]; if(!f)return;
const r=new FileReader();
r.onload=x=>{all=JSON.parse(x.target.result);render(all);};
r.readAsText(f);
});
document.getElementById('search').addEventListener('input',e=>{
const q=e.target.value.toLowerCase();
render(all.filter(t=>t.team.toLowerCase().includes(q)));
});
function render(data){
tbody.innerHTML='';
let d=0,p=0;
data.forEach((t,i)=>{
if((t.status||'').toLowerCase().includes('fully'))d++;else p++;
const tr=document.createElement('tr');
tr.innerHTML=`<td>${i+1}</td><td>${t.team}</td><td class="${(t.status||'').toLowerCase().includes('fully')?'done':'pending'}">${t.status}</td>`;
tbody.appendChild(tr);
});
total.textContent=data.length;done.textContent=d;pending.textContent=p;
}
