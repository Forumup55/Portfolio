<template>
  <div class="bg-white rounded-md drop-shadow-sm relative flex">
    <div
      class="-translate-y-1/2 w-[200px] h-fit flex items-center justify-center"
    >
      <img
        src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/465117674_8629079990541259_7411991248611538623_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WMehvapluKQQ7kNvgFLTbto&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=Ah5W3XV7XYYSGa0zcqoW3HZ&oh=00_AYA7rpjbZQp-bHogIz26JkwPnw18wu-jlnyaZT43UHoW5w&oe=6763C946"
        alt="profile"
        class="size-[150px] object-cover overflow-hidden rounded-lg border border-desc border-opacity-50"
      />
    </div>

    <div class="py-5 flex-1">
      <h2 class="text-2xl font-medium">Mohamed Elsayed Mohamed Sabry</h2>

      <p class="mb-2">
        Frontend developer
        <span class="text-[#3ea376] font-medium">
          (Vue.<span class="text-[#3a4f63]">js</span>)
        </span>
      </p>

      <div class="mb-3">
        <a target="_blank" href="/mycv.pdf" class="underline text-blue-600"
          >MyCV</a
        >
      </div>

      <div class="flex items-center gap-3">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-el-sayed-frontend/"
        >
          <svg-icon name="linkedIn" class="text-[#0a66c2]" />
        </a>

        <a target="_blank" href="https://wa.me/+201226074394">
          <svg-icon name="whatsapp" class="text-[#18c34b]" />
        </a>
      </div>
    </div>

    <div class="border my-5"></div>

    <div class="p-5 flex-1">
      <div class="grid md:grid-cols-2 col-span-1 gap-5">
        <div>
          <p class="text-desc">Email</p>
          <a
            href="mailto:for.mohamedelsayed00@gmail.com"
            target="_blank"
            class="hover:text-primary transition-all"
          >
            for.mohamedelsayed00@gmail.com
          </a>
        </div>

        <div>
          <p class="text-desc">Birthday</p>
          <p class="hover:text-primary transition-all">
            1<sup>st</sup> April 2000
          </p>
        </div>

        <div>
          <p class="text-desc">Phone</p>
          <a
            href="tel:+201226074394"
            target="_blank"
            class="hover:text-primary transition-all"
          >
            +20 122 607 4394
          </a>
        </div>

        <div>
          <p class="text-desc">Location</p>
          <p class="hover:text-primary transition-all">Zagazig, Egypt</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
