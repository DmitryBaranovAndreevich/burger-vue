<template>
  <register-page-template title="Регистрация" buttonText="Зарегистрироваться">
    <app-input v-model="input" type="text" placeholder="Имя" />
    <app-input v-model="input" type="email" placeholder="E-mail" />
    <app-input v-model="input" type="password" placeholder="Пароль" />
    <p class="text">Уже зарегистрированы?<a class="link">Войти</a></p>
  </register-page-template>
</template>
<style>
.text {
  display: flex;
  gap: 10px;
  margin: 0;
  color: #8585ad;
  font-size: 16px;
  order: 100;
}

.link {
  color: #4c4cff;
  font-size: 16px;
}

.link:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
