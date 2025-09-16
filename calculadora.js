<script>
function openCalculator(){
document.body.innerHTML+=`<div id=c style="position:fixed;inset:0;background:#0008;display:flex;justify-content:center;align-items:center"><div style="background:#fff;padding:10px;border-radius:10px;width:200px;text-align:center"><input id=d readonly style="width:100%;text-align:right"><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px">${["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(b=>`<button onclick="${b=='='?'try{d.value=eval(d.value)}catch{d.value=`+"'Err'"+`}":`d.value+='${b}'`}">${b=="*"? "×":b=="/"?"÷":b}</button>`).join``}</div><button onclick="d.value=''" style="width:48%">C</button><button onclick="c.remove()" style="width:48%">X</button></div></div>`;
}
</script>
