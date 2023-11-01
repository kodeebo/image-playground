import { button } from "@/styled-system/recipes";
import { styled } from "@/styled-system/jsx";
import { ark } from "@ark-ui/react";

export type ButtonProps = typeof Button;
export const Button = styled(ark.button, button);
