<template>
  <ul className="calculator">
    <li className="operations">{{ calc.total }}{{ calc.operation }}{{ calc.next }}</li>
    <Button :handleClick="handleClick" buttonName="AC" />
    <Button :handleClick="handleClick" buttonName="+/-" />
    <Button :handleClick="handleClick" buttonName="%" />
    <Button :handleClick="handleClick" buttonName="÷" />
    <Button :handleClick="handleClick" buttonName="7" />
    <Button :handleClick="handleClick" buttonName="8" />
    <Button :handleClick="handleClick" buttonName="9" />
    <Button :handleClick="handleClick" buttonName="x" btnClass="operator" />
    <Button :handleClick="handleClick" buttonName="4" />
    <Button :handleClick="handleClick" buttonName="5" />
    <Button :handleClick="handleClick" buttonName="6" />
    <Button :handleClick="handleClick" buttonName="-" btnClass="operator" />
    <Button :handleClick="handleClick" buttonName="1" />
    <Button :handleClick="handleClick" buttonName="2" />
    <Button :handleClick="handleClick" buttonName="3" />
    <Button :handleClick="handleClick" buttonName="+" btnClass="operator" />
    <Button :handleClick="handleClick" buttonName="0" btnClass="zero" />
    <Button :handleClick="handleClick" buttonName="." />
    <Button :handleClick="handleClick" buttonName="=" btnClass="operator" />
  </ul>
</template>


<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import calculate from '../logic/calculate'
import Button from "./Button.vue";

let calc = ref({
  total: null,
  next: null,
  operation: null
});

onMounted(() => {
  calc.value.total = 0
})

onUpdated(() => {
  if (calc.value.total === null && calc.value.next === null) {
    calc.value.total = 0;
  }
})

const handleClick = (buttonName) => {
  calc.value = calculate(calc.value, buttonName);
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