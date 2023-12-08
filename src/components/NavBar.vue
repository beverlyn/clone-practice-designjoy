<template>
	<div
		class="
    font-[Grifter]
    fixed z-[100]
    p-[29px]
    bottom-0
    inset-x-0
    max-w-[1240px]
    m-auto"
	>
		<div
			class="
        flex justify-center"
		>
			<div
				class="
            bg-black
            rounded-full
            border-[1px] border-[#ffffff2b]
            flex items-stretch
            p-[6px]
            text-[14px] leading-[20px]"
			>
				<a
					href="#top"
					class="nav-menu arrowTop sideItems
                bg-[#2c2c2c]
                hover:bg-[#424242]
                rounded-[90px]"
				/>
				<a
					href="#benefits"
					class="nav-menu sectionID"
				>Benefits</a>
				<a
					href="#recentWork"
					class="nav-menu sectionID"
				>Recent work</a>
				<a
					href="#scope"
					class="nav-menu sectionID"
				>Scope of Work</a>
				<a
					href="#pricing"
					class="nav-menu sectionID"
				>Pricing</a>
				<a
					href="#faqs"
					class="nav-menu sectionID"
				>FAQs</a>
				<a
					class="nav-menu
                bg-[#2c2c2c]
                rounded-[70px]
                hover:bg-[#424242]
                "
				>Login</a>
			</div>
		</div>
	</div>
</template>

<style>
.nav-menu {
    color: white;
    padding-bottom: 16px;
    padding: 20px;
}

.arrowTop {
    background-image: url("../assets/designjoy_home_arrow.svg");
    background-position: 50%;
    background-size: auto 22px;
    background-repeat: no-repeat;
    padding-left: 38px;
    padding-right: 38px;
}

.sectionID:hover{
    background-color: white;
    color: black;
    border-radius: 60px;
}

html {
  scroll-behavior: smooth;
}

</style>
