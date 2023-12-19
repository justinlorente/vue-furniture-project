<template>
    <header class="Navbar-header-container">
        <nav class="Navbar-header-wrapper">
            <img class="Navbar-header-logo" src="../../../assets/images/furniro_logo.png" alt="logo" />
            <div :class="['Navbar-header-user-interaction', openNavMenu()]" >
                <ul class="Navbar-header-navigation-menu">
                    <li class="Navbar-header-menu-item">
                        <a href="#">Home</a>
                    </li>
                    <li class="Navbar-header-menu-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="Navbar-header-menu-item">
                        <a href="#">About</a>
                    </li>
                    <li class="Navbar-header-menu-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul class="Navbar-header-utility-menu">
                    <li>
                        <span class="Navbar-header-utility-icon user">
                        </span>
                    </li>
                    <li>
                        <span class="Navbar-header-utility-icon search">
                        </span>
                    </li>
                    <li>
                        <span class="Navbar-header-utility-icon favorite">
                        </span>
                    </li>
                    <li>
                        <span class="Navbar-header-utility-icon shop-cart">
                        </span>
                    </li>
                </ul>
            </div>
            <div  :class="['Navbar-header-menu-bars', changeButtonClass()]" @click="handleToggleMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isOpen: false
        };

    },
    methods: {
        handleToggleMenu() {
            this.isOpen = !this.isOpen;
        },
        openNavMenu() {
            return {
                'show': this.isOpen,
                'hide': !this.isOpen
            };
        },
        changeButtonClass() {
            return {
                'change': this.isOpen,
                '': !this.isOpen,
            };
        }
    },

};
</script>
