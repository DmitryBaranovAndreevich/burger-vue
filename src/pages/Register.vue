<template>
  <register-page-template
    title="Регистрация"
    link="./login"
    buttonText="Зарегистрироваться"
  >
    <app-input v-model="input" type="text" placeholder="Имя" />
    <app-input v-model="input" type="email" placeholder="E-mail" />
    <app-input v-model="input" type="password" placeholder="Пароль" />
  </register-page-template>
</template>
<script></script>
