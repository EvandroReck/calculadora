
function openCalculator() {
  const calc = document.createElement("div");
  calc.id = "calc-container";
  calc.innerHTML = `
    <div id="calc-box">
      <h2>Calculadora</h2>
      <input type="text" id="calc-display" readonly>
      <div id="calc-buttons">
        <button onclick="press('7')">7</button>
        <button onclick="press('8')">8</button>
        <button onclick="press('9')">9</button>
        <button onclick="press('/')">÷</button>
        
        <button onclick="press('4')">4</button>
        <button onclick="press('5')">5</button>
        <button onclick="press('6')">6</button>
        <button onclick="press('*')">×</button>
        
        <button onclick="press('1')">1</button>
        <button onclick="press('2')">2</button>
        <button onclick="press('3')">3</button>
        <button onclick="press('-')">-</button>
        
        <button onclick="press('0')">0</button>
        <button onclick="press('.')">.</button>
        <button onclick="calculate()">=</button>
        <button onclick="press('+')">+</button>
      </div>
      <button id="clear" onclick="clearCalc()">Limpar</button>
      <button id="close" onclick="closeCalculator()">Fechar</button>
    </div>
  `;
  document.body.appendChild(calc);

  // Estilos rápidos dentro do JS para a calculadora
  const style = document.createElement("style");
  style.innerHTML = `
    #calc-container {
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex; justify-content: center; align-items: center;
    }
    #calc-box {
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      text-align: center;
      width: 260px;
    }
    #calc-display {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 1.2rem;
      text-align: right;
    }
    #calc-buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }
    #calc-buttons button, #clear, #close {
      padding: 10px;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background: #007bff;
      color: #fff;
      transition: 0.3s;
    }
    #calc-buttons button:hover, #clear:hover, #close:hover {
      background: #0056b3;
    }
    #clear, #close {
      margin-top: 10px;
      width: 48%;
    }
  `;
  document.head.appendChild(style);
}

function press(num) {
  document.getElementById("calc-display").value += num;
}

function calculate() {
  try {
    document.getElementById("calc-display").value = eval(document.getElementById("calc-display").value);
  } catch {
    document.getElementById("calc-display").value = "Erro";
  }
}

function clearCalc() {
  document.getElementById("calc-display").value = "";
}

function closeCalculator() {
  document.getElementById("calc-container").remove();
}
