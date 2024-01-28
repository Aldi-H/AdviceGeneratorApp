<template>
  <div
    class="bg-neutralDarkBlue h-screen flex flex-col items-center justify-center"
  >
    <div
      class="bg-neutralDarkGrayishBlue md:w-[525px] h-fit rounded-xl flex flex-col py-10 items-center mobile:w-[350px]"
    >
      <div>
        <div>
          <h4
            class="text-primaryNeonGreen font-manrope text-[14px] text-center tracking-[0.25em] font-bold mb-6"
          >
            ADVICE #{{ data?.slip?.id }}
          </h4>
        </div>

        <!-- <AdviceCard
          advice="“It is easy to sit up and take notice, what's difficult is getting up and
      taking action”"
        /> -->

        <AdviceCard @if="data" :advice="data?.slip?.advice" />

        <div class="flex justify-center pt-10">
          <img src="assets/pattern-divider-desktop.svg" alt="divider" />
        </div>
      </div>
      <button
        @click="GenerateAdvice"
        class="bg-primaryNeonGreen p-3.5 rounded-full hover:shadow-[rgba(0,_0,_0,_0.4)_0px_0px_40px] hover:shadow-primaryNeonGreen -mb-16 mt-6"
      >
        <!-- class="bg-primaryNeonGreen p-3.5 rounded-full hover:shadow-2xl hover:drop-shadow-2xl hover:shadow-primaryNeonGreen -mb-16 mt-6" -->
        <img src="assets/icon-dice.svg" alt="dice" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAdvice } from "~/composables/useAdvice";
import AdviceCard from "~/components/AdviceCard.vue";

const runtimeConfig = useRuntimeConfig();

const { data } = await useAdvice(runtimeConfig.public.BASE_URL);

const GenerateAdvice = async () => {
  await useAdvice(runtimeConfig.public.BASE_URL).refresh();
};
</script>
