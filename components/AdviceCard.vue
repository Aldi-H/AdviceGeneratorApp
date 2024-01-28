<template>
  <div>
    <p
      class="text-primaryLightCyan text-center text-[28px] font-bold font-manrope px-10"
    >
      <!-- “It is easy to sit up and take notice, what's difficult is getting up and
      taking action” -->
      “{{ advice }}”
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  advice: String,
});
</script>
