<template>
  <ul className="calculator">
    <li className="operations">{{ calc.total }}{{ calc.operation }}{{ calc.next }}</li>
    <li @click="handleClick('AC')">AC</li>
    <li @click="handleClick('+/-')">+/-</li>
    <li @click="handleClick('%')">%</li>
    <li @click="handleClick('÷')" className="operator">÷</li>
    <li @click="handleClick('7')">7</li>
    <li @click="handleClick('8')">8</li>
    <li @click="handleClick('9')">9</li>
    <li @click="handleClick('x')" className="operator">x</li>
    <li @click="handleClick('4')">4</li>
    <li @click="handleClick('5')">5</li>
    <li @click="handleClick('6')">6</li>
    <li @click="handleClick('-')" className="operator">-</li>
    <li @click="handleClick('1')">1</li>
    <li @click="handleClick('2')">2</li>
    <li @click="handleClick('3')">3</li>
    <li @click="handleClick('+')" className="operator">+</li>
    <li @click="handleClick('0')" className="zero">0</li>
    <li @click="handleClick('.')">.</li>
    <li @click="handleClick('=')" className="operator">=</li>
  </ul>
</template>


<script>
import calculate from '../logic/calculate'

export default {
  data() {
    return {
      calc: {
        total: null,
        next: null,
        operation: null
      }
    }
  },
  methods: {
    handleClick(buttonName) {
      this.calc = calculate(this.calc, buttonName);
    }
  }
}
</script>

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