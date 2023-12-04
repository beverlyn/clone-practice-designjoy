<template>
    <div class="
    relative
    h-[120px]
    flex flex-col justify-center items-center">
        <slot name="upperHalf"></slot>
        <slot name="lowerHalf"></slot>
        <slot name="left"></slot>
        <slot name="right"></slot>
        <div class="absolute">
            <slot name="middle"></slot>
        </div>
        

    </div>
</template>
