<template>
  <register-page-template
    title="Восстановление пароля"
    buttonText="Сохранить"
  >
    <app-input v-model="input" type="password" placeholder="Введите новый пароль" />
    <app-input v-model="input" type="text" placeholder="Введите новый пароль" />
    <p class="text">Вспомнили пароль?<a class="link">Войти</a></p>
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
