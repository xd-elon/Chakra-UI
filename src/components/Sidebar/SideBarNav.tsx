import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return(
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
            <NavLink href="/dashboard" icon={RiDashboardLine}>Dahboard</NavLink>
            <NavLink href="/users" icon={RiContactsLine}>Usuarios</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
            <NavLink href="/forms" icon={RiInputMethodLine}>Formularios</NavLink>
            <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    );
}