<template>
  <ul className="calculator">
    <li className="operations">0</li>
    <li>AC</li>
    <li>+/-</li>
    <li>%</li>
    <li className="operator">÷</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li className="operator">x</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li className="operator">-</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li className="operator">+</li>
    <li className="zero">0</li>
    <li>.</li>
    <li className="operator">=</li>
  </ul>
</template>

<style>
ul.calculator {
  display: flex;
  width: 375px;
  flex-wrap: wrap;
}

ul.calculator li {
  flex: 1 0 25%;
  text-align: center;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d8c9bc;
  box-sizing: border-box;
  cursor: pointer;
}

ul.calculator li.operations {
  flex: 1 1 100%;
  background-color: #858693;
  align-items: flex-end;
  color: #e5e5e8;
  font-size: 1.5em;
  padding: 0 3px;
  cursor: text;
}

ul.calculator li.zero {
  flex: 1 1 50%;
}

ul.calculator li.operator {
  background-color: #f5913e;
}
</style>