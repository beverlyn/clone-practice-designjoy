<template>
    <div class="backgroundImg 
    pt-15 pb-[100px]
    bg-beige
    overflow-clip">
        <div class="container">
            <img 
            src="../assets/latestprojects/designjoy_latestprojects.svg" 
            class="
            badge
            z-[6]
            absolute top-[-56px] left-0
            w-[130px] 
            ml-[5%]"
            >
        </div>
        <div class="showcase flex min-w-[110%] justify-between m-auto">
            <img src="../assets/latestprojects/designjoy_latestprojs_1.jpg" class="latestprojs">
            <img src="../assets/latestprojects/designjoy_latestprojs_2.jpg" class="latestprojs">
            <img src="../assets/latestprojects/designjoy_latestprojs_3.jpg" class="latestprojs">
            <img src="../assets/latestprojects/designjoy_latestprojs_4.jpg" class="latestprojs">
            <img src="../assets/latestprojects/designjoy_latestprojs_5.jpg" class="latestprojs">
        </div>
    </div>
</template>

<style>
.latestprojs {
    width: auto;
    max-width: none;
    min-height: 400px;
    min-width: 400px;
    margin-right: 20px;
    transition: all .4s;
}

.latestprojs:hover {
    transform: scale(1.1);
    box-shadow: 0 30px 40px #a88f83;
}

.badge {
  animation: rotateImage auto linear;
  animation-timeline: --my-page-scroll;
}

@keyframes rotateImage {
  from { transform: rotate(0deg); }
  to { transform: rotate(460deg); }
}

.showcase {
    animation: slide-progress auto linear;
	animation-timeline: --my-page-scroll;
}

@keyframes slide-progress {
	from { transform: translateX(-5%); }
	to { transform: translateX(-100%); }
}

html {
  scroll-timeline: --my-page-scroll y;
}

</style>