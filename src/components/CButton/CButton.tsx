import { defineComponent } from "vue";
import type { PropType } from "vue";
import { NButton, NPopconfirm } from "naive-ui";

type Type =
  | "default"
  | "tertiary"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "error";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: "info",
    },
    text: String,
    confirm: Boolean,
    content: String,
    vPermission: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };
    const render = () => {
      return (
        <>
          {props.confirm ? (
            <span v-permission={props.vPermission}>
              <NPopconfirm onPositiveClick={handleClick}>
                {{
                  default: () => props.content,
                  trigger: () => (
                    <NButton type={props.type} quaternary size="small">
                      {props.text}
                    </NButton>
                  ),
                }}
              </NPopconfirm>
            </span>
          ) : (
            <NButton
              onClick={handleClick}
              type={props.type}
              quaternary
              v-permission={props.vPermission}
              size="small"
            >
              {{ default: () => props.text }}
            </NButton>
          )}
        </>
      );
    };
    return render;
  },
});
