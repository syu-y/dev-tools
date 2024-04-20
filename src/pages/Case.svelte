<script lang="ts">
  import Label from '../components/form/Label.svelte';
  import TextInput from '../components/form/TextInput.svelte';
  import { strToCamelCase, strToSnakeCase } from '../utils/caseConvert';

  let inCamelCase: string = '';
  let outCamelCase: string = '';

  const toCamelCase = (event: { currentTarget: HTMLInputElement }) => {
    outCamelCase = strToCamelCase(event.currentTarget.value);
  };

  let inSnakeCase: string = '';
  let outSnakeCase: string = '';
  const toSnakeCase = (event: { currentTarget: HTMLInputElement }) => {
    outSnakeCase = strToSnakeCase(event.currentTarget.value);
  };
</script>

<h1 class="text-blue-600 text-2xl">Case Convert</h1>
<div class="py-1">
  <h2>Convert Target</h2>
  <ul class="list-disc list-inside text-xm px-3">
    <li>camelCase</li>
    <li>PascalCase</li>
    <li>snake_case</li>
    <li>kebab-case</li>
  </ul>
</div>

<div class="py-1">
  <div class="py-1">
    <h2>Camel Case</h2>
    <Label labeltext="From" name="inCamelCase"></Label>
    <TextInput
      type="text"
      name="inCamelCase"
      change={toCamelCase}
      bind:value={inCamelCase}
    />

    <Label labeltext="To" name="outCamelCase"></Label>
    <TextInput
      type="text"
      name="outCamelCase"
      readonly={true}
      bind:value={outCamelCase}
    />
  </div>

  <div class="py-1">
    <h2>Snake Case</h2>
    <Label labeltext="From" name="inSnakeCase"></Label>
    <TextInput
      type="text"
      name="inSnakeCase"
      change={toSnakeCase}
      bind:value={inSnakeCase}
    />

    <Label labeltext="To" name="outSnakeCase"></Label>
    <TextInput
      type="text"
      name="outSnakeCase"
      readonly={true}
      bind:value={outSnakeCase}
    />
  </div>
</div>

<div></div>

<div class="py-1">
  <h2>Reference</h2>
  <ul class="list-disc list-inside text-xm px-3">
    <li>
      <a
        href="https://typescript-jp.gitbook.io/deep-dive/styleguide"
        target="_blank">TypeScriptスタイルガイド夜</a
      >
    </li>
  </ul>
  <ul class="list-disc list-inside text-xm px-3">
    <li>
      <a
        href="https://typescript-jp.gitbook.io/deep-dive/styleguide"
        target="_blank">TypeScriptスタイルガイド夜</a
      >
    </li>
  </ul>
</div>

<style></style>
