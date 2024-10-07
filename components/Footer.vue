<script lang="ts" setup>
  import { SocialItems } from '~/data/models/generic';
  const socials = ref(SocialItems);
</script>

<template>
  <footer class="footer bg-base-200 text-base-content p-10">
    <aside>
      <NuxtLink :to="'/'" class="d-inline-block">
        <nuxt-img
          alt="Classic Mini DIY Logo"
          src="https://classicminidiy.s3.amazonaws.com/misc/small-logo.png"
          class="w-50"
        />
      </NuxtLink>
      <p>
        Classic Mini DIY LLC.
        <br />
        {{ new Date().getFullYear() }} — <strong>Copyright</strong>
      </p>
      <div class="pt-3">
        <a v-for="(social, i) in socials" :key="i" :href="social.href" target="_blank" class="pr-3">
          <span><i :class="social.icon" class="text-xl"></i></span>
        </a>
      </div>
    </aside>
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 class="footer-title">Company</h6>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
</template>
