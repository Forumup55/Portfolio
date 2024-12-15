<template>
  <div>
    <MetaTags :metaTags="metaTags" />

    <NuxtLoadingIndicator :color="'#12A2D9'" :height="5" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const metaTags = {
  title: "Mohamed Elsayed - Frontend Developer Portfolio", // Hidden H1 tag
  meta: {
    title: "Mohamed Elsayed - Frontend Developer | Vue.js, Nuxt.js",
    description:
      "Welcome to the portfolio of Mohamed Elsayed, a skilled Frontend Developer creating responsive and engaging web experiences using modern technologies like Vue.js, Nuxt.js, and more.",
    image:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/465117674_8629079990541259_7411991248611538623_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WMehvapluKQQ7kNvgFLTbto&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=Ah5W3XV7XYYSGa0zcqoW3HZ&oh=00_AYA7rpjbZQp-bHogIz26JkwPnw18wu-jlnyaZT43UHoW5w&oe=6763C946", // Path to the portfolio's main preview image
    canonical: "https://www.mohamedElsayeddev.com/",
    url: "https://www.mohamedElsayeddev.com/",
    type: "website", // Type for Open Graph metadata
    domain: "mohamedElsayeddev.com", // Domain for Twitter card metadata
    keyword:
      "frontend developer, React developer, Vue.js developer, web development portfolio, UI/UX design, responsive web design, 01226074394, dodo frontend developer, web development portfolio, UI/UX design, responsive web design, portfolio figma",
  },
};
</script>

<style lang="scss" scoped></style>
