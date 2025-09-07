<template>
  <div class="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8">
    <!-- Hero Section -->
    <div class="text-center lg:text-left lg:w-1/3">
      <div class="mb-8">
        <img 
          class="pro-pic mx-auto lg:mx-0 mb-6" 
          alt="David Larsen - Customer Support Leader" 
          src="/images/pro.png"
          width="175"
          height="175"
        >
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-primary">
          Hey there! I'm David.
        </h1>
        <p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
          Technical Success Manager @ <img src="/images/socket.png" alt="Socket" class="inline-block h-6 w-auto mx-1 align-text-bottom" />, helping customers build securely and scale with confidence. Outside of work, you'll usually find me exploring Baltimore's food scene or traveling with friends and family.
        </p>
      </div>

      <!-- Social Links -->
      <div class="flex justify-center lg:justify-start space-x-4 mb-8">
        <a 
          href="https://www.linkedin.com/in/david-larsen-404622143/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-link fab fa-linkedin fa-2x" 
          aria-label="LinkedIn Profile"
          title="Connect on LinkedIn"
        ></a>
        <a 
          href="https://github.com/dc-larsen" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-link fab fa-github fa-2x"
          aria-label="GitHub Profile"
          title="View GitHub Projects"
        ></a>
        <a 
          href="https://www.flickr.com/photos/203372618@N08/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-link fab fa-flickr fa-2x"
          aria-label="Flickr Photos"
          title="Photography on Flickr"
        ></a>
        <a 
          href="https://open.spotify.com/user/dc2larsen" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-link fab fa-spotify fa-2x"
          aria-label="Spotify Profile"
          title="Music on Spotify"
        ></a>
        <a 
          href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-link wow-icon fa-2x"
          aria-label="World of Warcraft Character"
          title="WoW Character Profile"
        ></a>
      </div>
    </div>

    <!-- Terminal Window (Desktop Only) -->
    <div class="desktop-only lg:block hidden lg:w-2/3 w-full">
      <TerminalWindow />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Home'
})
</script>

<style scoped>
.pro-pic {
  border-radius: 50%;
  border: #315C2B solid 3px;
  max-width: 175px;
}

.wow-icon {
  background-image: url('/images/wow-icon-2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 1.35em;
  height: 1.35em;
  vertical-align: baseline;
  transform: translateY(-5px) !important;
  margin-right: 8px;
}

.wow-icon:hover {
  background-image: none;
  background-color: #138A36;
  -webkit-mask: url('/images/wow-icon-2.png') no-repeat center;
  mask: url('/images/wow-icon-2.png') no-repeat center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

</style>