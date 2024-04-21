<script lang="ts">
  import TextArea from '@/components/form/TextArea.svelte';
  import TextInput from '@/components/form/TextInput.svelte';
  import Label from '@components/form/Label.svelte';

  let input: string = '';
  let length: string = '0';
  let bytes: string = '0';

  const count = (event: { currentTarget: HTMLTextAreaElement }) => {
    countLength(event);
    countBytets(event);
  };
  const countLength = (event: { currentTarget: HTMLTextAreaElement }) => {
    length = event.currentTarget.value.length.toString();
  };
  const countBytets = (event: { currentTarget: HTMLTextAreaElement }) => {
    bytes = new Blob([event.currentTarget.value]).size.toString();
  };
</script>

<h1 class="text-2xl text-blue-600">Count various textsize</h1>

<div class="py-1">
  <h2>Count Tool</h2>
  <div class="px-5 py-1">
    <p>
      <Label width="w-16" labeltext="Input" name="input" />
      <TextArea
        id="input"
        name="input"
        input={count}
        bind:value={input}
        resize={false}
        width="w-full"
        height="h-20"
      />
    </p>
  </div>
  <div class="px-5 py-1">
    <p class="py-1">
      <Label width="w-32" labeltext="Word Count" name="length" />
      <TextInput
        id="length"
        name="length"
        readonly={true}
        bind:value={length}
      />
    </p>
    <p class="py-1">
      <Label width="w-32" labeltext="Bytes" name="bytes" />
      <TextInput id="bytes" name="bytes" readonly={true} bind:value={bytes} />
    </p>
  </div>
</div>

<style></style>
