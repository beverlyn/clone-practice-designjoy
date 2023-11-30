<template>
    <div class="footer
    pt-[150px] px-[5%] pb-[100px] relative">
        <div class="container text-white ">
            <div class="max-w-[800px] mx-auto">
                <h2>
                    See if Designjoy is right for you. (It totally is.)
                </h2>
                <h3>
                    Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.
                </h3>
                <button class="footerButton
                w-full
                text-white text-[28px]
                border border-white rounded-[20px]
                flex justify-center
                mt-[60px] p-[60px]"
                >
                    Get started
                </button>
            </div>
            <div class="
            flex flex-wrap justify-between items-center
            mt-[60px] py-[40px]"
            >
                <img src="../assets/marquee/memberstack.svg" 
                class="footerLogo">
                <img src="../assets/marquee/flowbase.svg" 
                class="footerLogo">
                <img src="../assets/marquee/nectar.svg" 
                class="footerLogo">
                <img src="../assets/marquee/xfinity.svg" 
                class="footerLogo">
                <img src="../assets/marquee/astro.svg" 
                class="footerLogo">
                <img src="../assets/marquee/cometchat.svg" 
                class="footerLogo">
            </div>
            <div class="
            flex justify-between items-start
            mt-[100px]
            ">
                <div class="
                max-w-[480px]
                text-left leading-[19px]
                flex items-center"
                >
                    <img src="../assets/designjoy_white_logo.svg"
                    class="
                    w-[150px] mr-[30px]"
                    >
                    <div class="flex items-center">
                        <img src="../assets/designjoy_location.svg"
                        class="max-w-[40px] mr-[10px]">
                        <p class="max-w-[240px]">
                            Designjoy is headquartered in Phoenix, Arizona.
                        </p>
                    </div>
                </div>
                <div class="
                text-left
                flex justify-between items-start">
                    <div class="mr-[60px]">
                        <a class="footerLink">
                            Latest projects
                        </a>
                        <a class="footerLink">
                            Pricing
                        </a>
                        <a class="footerLink">
                            Contact
                        </a>
                    </div>
                    <div>
                        <a class="footerLink">
                            Client login
                        </a>
                        <a class="footerLink">
                            Get started
                        </a>
                        <a class="footerLink">
                            Terms & conditions
                        </a>
                        <a class="footerLink">
                            Privacy policy
                        </a>
                    </div>
                </div>
                <img src="../assets/designjoy_footer_image.svg"
                class="
                absolute bottom-[0%] left-[0%]">
            </div>
        </div>

    </div>
</template>

<style>
.footer {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #000;
}

.footerButton {
    font-family: "Grifter", sans-serif;
}

.footerLogo {
    height: 24px;
    margin-right: 2vw;
}

.footerLink {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    display: block;
    margin-bottom: 16px;
}
</style>