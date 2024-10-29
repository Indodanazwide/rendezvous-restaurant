<template>
    <header>
        <!-- logo -->
        <img src="/logo.png" alt="Rendezvous">

        <!-- nav -->
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/menu">Menu</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>

            <ul>
                <li><router-link to="/profile">Profile</router-link></li>
                <li><router-link to="/cart">Cart</router-link></li>
                <li><router-link to="/takeaways">Takeaways</router-link></li>
                <li><router-link to="/reservations">Reservations</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import '../assets/sass/header.scss'
</style>