<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: '',
    },
    showImage: {
      type: Boolean,
      default: true,
    },
    blog: {
      type: Boolean,
      default: false,
    },
    ecuMap: {
      type: Boolean,
      default: false,
    },
    landing: {
      type: Boolean,
      default: false,
    },
    subtitle: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    special: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: '/technical',
    },
    centered: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <section
    class="hero flex md:h-144 sm:h-96"
    :class="size"
    :style="[
      ecuMap
        ? {
            backgroundImage: `url(/img/macbook.jpg)`,
          }
        : blog
          ? {
              backgroundImage: `url(/img/typewriter.jpg)`,
            }
          : landing
            ? {
                backgroundImage: `url(https://classicminidiy.s3.amazonaws.com/misc${background}.webp)`,
                backgroundSize: 'contain',
                backgroundPosition: 'right',
              }
            : {
                backgroundImage: `url(https://classicminidiy.s3.amazonaws.com/misc${background}.webp)`,
              },
      !showImage ? { backgroundImage: 'none' } : {},
    ]"
  >
    <div class="hero-content flex-col" :style="[blog ? { paddingTop: '4rem', paddingBottom: '4rem' } : {}]">
      <div :class="{ 'text-centered': centered, 'text-left': !centered }" class="pl-20">
        <p class="subtitle is-6 text-white" :class="{ 'text-centered': blog }">
          {{ subtitle }}
        </p>
        <h1
          v-if="title"
          class="title fancy-font-bold text-white"
          :class="{ 'special-title': special, 'text-centered': blog }"
          v-html="title"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .hero {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #242424;

    .special-title {
      font-size: 100px;
    }

    @media screen and (max-width: 1023px) {
      .special-title {
        font-size: 2rem;
      }
    }
  }
</style>
