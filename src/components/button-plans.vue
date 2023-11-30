<template>
    <button class="
    mt-[40px] 
    inline-block py-[24px] 
    bg-black 
    text-white text-center text-[17px] tracking-[0.5px]
    rounded-[8px] shadow-[6px]"
    >
        <slot name="buttonName"></slot>
    </button>
</template>

<style>
button {
    font-family: "Grifter", sans-serif;
    box-shadow: 6px 6px rgba(0,0,0,.2);
}
</style>