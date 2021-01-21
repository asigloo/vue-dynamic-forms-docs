## Form Composition

The dynamic form component `<dynamic-form />` is pretty straight-forward. 😁

You will only need to add it to your template like this:

```html
<template>
  <dynamic-form :form="form" />
</template>
```

And pass trough the `DynamicForm` object as a prop:

```typescript
setup() {
  const form = ref({
    id: 'my-awesome-form,
    fields: {
      name: TextField({
        label: 'Name',
      }),
      email: EmailField({
        label: 'Email',
      }),
      password: PasswordField({
        label: 'Password',
        autocomplete: 'current-password',
        validations: [passwordValidator],
      }),
    }
  });

  return { form }
}
```

If you're using [VueI18n](https://kazupon.github.io/vue-i18n/) or any property of your form fields for example: `customClass`, `options` needs to be reactive you can also declare the form as a `computed` property like this:

```typescript
import { useI18n } from "./i18nPlugin";

setup() {
  const i18n = useI18n();
  let consoleOptions = ref([]);

  const form = computed(() => ({
    id: 'my-awesome-form,
    fields: {
      name: TextField({
        label: i18n.t('name'),
      }),
      email: EmailField({
        label: i18n.t('email'),
      }),
      console: SelectField({
        label: 'Console (Async Options)',
        optionValue: 'console',
        options: consoleOptions.value,
      }),
    }
  }));

  onMounted(async () => {
    try {
      consoleOptions.value = await yourApiCall();
    } catch (e) {
      console.error(e);
    }
  });

  return { form }
}
```

## Submitting the form

This is the recommended way to use the `dynamic-forms` with all the features. (Built-in Validations included).

```html
<template>
  <div>
    <dynamic-form
      :form="form"
      @submitted="formSubmitted"
      @error="processErrrors"
    />
    <button submit="true" :form="form.id">
      Submit
    </button>
  </div>
</template>
```

## Values Changed

The library provides you the possibility of submitting the form (check the previous section) or listen to the values change directly, using the `change` event.

```html
<template>
  <dynamic-form :form="form" @change="updateValues" />
</template>
```

```js
methods: {
  updateValues(values) {
    // Apply your own validation
    // Do what you need with the data
  }
}
```

::: warning
By using `change` event, you are giving up to the built-in validation, which is only available if the form is submitted. You will need to apply the validation yourself or use the `error` event.
:::
