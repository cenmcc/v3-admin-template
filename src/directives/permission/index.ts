import type { Directive } from "vue"
/** 权限指令 */
const roles = ['create', 'edit', 'update', 'delete']
export const permission: Directive = {
  mounted(el, binding) {
    const { value } = binding
    console.log(el, value)
    // const roles = useUserStoreHook().roles
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value
      const hasPermission = roles.some((role) => {
        return permissionRoles.includes(role)
      })
      if (!hasPermission) {
        el.style.display = "none"
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}