h函数渲染NButton按钮

```js
import { NButton } from "naive-ui";
h(NButton, { type: "info", onClick: () => {} }, { default: '按钮' })
```

h函数使用popconfirm

```js
import { NButton, NPopconfirm } from 'naive-ui'

h(NPopconfirm, { onNegativeClick: (e) => {}, onPositiveClick: (e) => {} }, {
    trigger: () => h(NButton, { type: "error", quaternary: true }, { default: "删除" })
    default: '弹窗的文案'
})
```

h函数使用vue指令

```js
import { withDirectives, resolveDirective } from "vue";
const permission = resolveDirective("permission");

withDirectives(
    h(NButton, { quaternary: true, type: "info", onClick: () => {}}, { default: "编辑" }),
    [[permission, '指令传参']]
),
```

