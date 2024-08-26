<template>
  <register-page-template
    title="Вход"
    buttonText="Войти"
    :botomComponent="bottomComponent"
  >
    <app-input v-model="input" type="email" placeholder="E-mail" />
    <app-input v-model="input" type="password" placeholder="Пароль" />
    <p class="text">Вы — новый пользователь?<a class="link">Зарегистрироваться</a></p>
    <p class="text">Забыли пароль?<a class="link">Восстановить пароль</a></p>
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
