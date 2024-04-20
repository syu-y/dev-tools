<script lang="ts">
  import TextInput from '@/components/form/TextInput.svelte';
  import Label from '@components/form/Label.svelte';
  import { strToCamelCase, strToSnakeCase } from '@utils/caseConvert';

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

  // TODO: ケバブケース
  // TODO: パスカルケースへの変換
  // TODO: CSVファイルでまとめて変換
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
  <h2>Convert Tool</h2>
  <div class="p-2">
    <h3>Convert to Camel Case</h3>
    <div class="px-5">
      <p>
        <Label
          labeltext="From(PascalCase/snake-case/kebab-case)"
          name="inCamelCase"
        />
      </p>
      <p class="px-5 py-1">
        <TextInput
          type="text"
          id="inCamelCase"
          name="inCamelCase"
          change={toCamelCase}
          bind:value={inCamelCase}
        />
      </p>

      <p>
        <Label labeltext="To(CamelCase)" name="outCamelCase" />
      </p>
      <p class="px-5 py-1">
        <TextInput
          type="text"
          id="outCamelCase"
          name="outCamelCase"
          readonly={true}
          bind:value={outCamelCase}
        />
      </p>
    </div>
  </div>

  <div class="p-2">
    <h3>Convert to Snake Case</h3>
    <div class="px-5">
      <p>
        <Label
          labeltext="From(PascalCase/camelCase/kebab-case)"
          name="inSnakeCase"
        ></Label>
      </p>
      <p class="px-5 py-1">
        <TextInput
          type="text"
          id="inSnakeCase"
          name="inSnakeCase"
          change={toSnakeCase}
          bind:value={inSnakeCase}
        />
      </p>

      <p>
        <Label labeltext="To(SnakeCase)" name="outSnakeCase" />
      </p>
      <p class="px-5 py-1">
        <TextInput
          type="text"
          id="outSnakeCase"
          name="outSnakeCase"
          readonly={true}
          bind:value={outSnakeCase}
        />
      </p>
    </div>
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
</div>

<style></style>
